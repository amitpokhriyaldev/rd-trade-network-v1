import { NextRequest, NextResponse } from "next/server";
import { ShipmentStatus } from "@/types";

const API = process.env.CARGOWALE_API_URL ?? "https://api.cargowale.in";

// Token is unlimited per docs — cache for server lifetime
let cachedToken: string | null = null;

async function getToken(): Promise<string> {
  if (cachedToken) return cachedToken;
  const res = await fetch(`${API}/api/auth/v1/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-env": "dev" },
    body: JSON.stringify({
      emailOrUsername: process.env.CARGOWALE_EMAIL,
      password: process.env.CARGOWALE_PASSWORD,
    }),
    cache: "no-store",
  });
  const json = await res.json();
  if (!res.ok || !json.data?.token) {
    throw new Error(`Cargowale login failed: ${json.message ?? res.status}`);
  }
  cachedToken = json.data.token as string;
  return cachedToken;
}

function mapStatus(raw: string): ShipmentStatus {
  const s = (raw ?? "").toLowerCase();
  if (s.includes("out") && s.includes("deliver")) return "out_for_delivery";
  if (s.includes("deliver")) return "delivered";
  if (s.includes("transit")) return "in_transit";
  if (s.includes("pick")) return "picked_up";
  if (s.includes("manifest")) return "ordered";
  if (s.includes("return") || s.includes("rto")) return "returned";
  if (s.includes("cancel")) return "cancelled";
  return "ordered";
}

async function fetchWithToken(url: string, token: string) {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  return res.json();
}

function formatDate(raw: string | null | undefined): string {
  if (!raw) return "";
  return new Date(raw).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const trackingId = searchParams.get("trackingId")?.trim();

    if (!trackingId) {
      return NextResponse.json({ error: "Tracking ID is required" }, { status: 400 });
    }

    let token: string;
    try {
      token = await getToken();
    } catch {
      return NextResponse.json(
        { error: "Tracking service unavailable. Please try again later." },
        { status: 503 }
      );
    }

    const [trackData, detailsData] = await Promise.all([
      fetchWithToken(`${API}/api/v1/shipment/track/${encodeURIComponent(trackingId)}`, token),
      fetchWithToken(`${API}/api/v1/shipment/details/${encodeURIComponent(trackingId)}`, token),
    ]);

    if (!trackData.success && !detailsData.success) {
      return NextResponse.json({ error: "Shipment not found" }, { status: 404 });
    }

    // trackData.data is a flat array of scan events, newest first — reverse for chronological order
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawScans: any[] = Array.isArray(trackData.data)
      ? [...trackData.data].reverse()
      : [];

    // Deduplicate: keep first occurrence of each status+remarks combination
    const seen = new Set<string>();
    const scans = rawScans.filter((s) => {
      const key = `${s.status ?? ""}|${s.remarks ?? ""}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const details: any = detailsData.data ?? {};

    // details.current_status is the authoritative status (may be ahead of scan events)
    const status = mapStatus(
      details.current_status ??
        (scans.length > 0 ? scans[scans.length - 1].status ?? "" : "ordered")
    );

    // Build timeline from deduplicated scans
    const timeline = scans.map((s) => ({
      status: mapStatus(s.status ?? ""),
      location: s.location ?? "",
      timestamp: s.scanned_at ?? new Date().toISOString(),
      description: s.remarks ?? s.status ?? "",
    }));

    // If current status is Delivered but no delivery scan exists, add a synthetic entry
    if (status === "delivered" && !timeline.some((t) => t.status === "delivered")) {
      timeline.push({
        status: "delivered" as ShipmentStatus,
        location: scans.length > 0 ? (scans[scans.length - 1].location ?? "") : "",
        timestamp: details.last_updated_at ?? new Date().toISOString(),
        description: "Shipment delivered successfully",
      });
    }

    const edd = rawScans.find((s) => s.promised_delivery_date)?.promised_delivery_date ?? "";

    const shipment = {
      id: String(details.tracking_number ?? trackingId),
      tracking_id: trackingId,
      // Sender/receiver not returned by cargowale API
      sender_name: "",
      sender_address: "",
      sender_pincode: "",
      receiver_name: "",
      receiver_address: "",
      receiver_pincode: "",
      weight: typeof details.weight_kg === "number"
        ? Number(details.weight_kg.toFixed(2))
        : 0,
      dimensions: "",
      service_type: "surface" as const,
      status,
      current_location:
        scans.length > 0 ? (scans[scans.length - 1].location ?? "") : "",
      estimated_delivery: formatDate(edd),
      actual_delivery:
        status === "delivered"
          ? formatDate(details.last_updated_at)
          : undefined,
      created_at:
        scans.length > 0
          ? (scans[0].scanned_at ?? new Date().toISOString())
          : new Date().toISOString(),
      updated_at: details.last_updated_at ?? new Date().toISOString(),
      timeline:
        timeline.length > 0
          ? timeline
          : [
              {
                status: mapStatus(details.current_status ?? "ordered"),
                location: "",
                timestamp: details.last_updated_at ?? new Date().toISOString(),
                description: details.current_status ?? "Shipment booked",
              },
            ],
    };

    return NextResponse.json({ success: true, shipment });
  } catch (error) {
    console.error("Tracking error:", error);
    return NextResponse.json(
      { error: "Failed to track shipment. Please try again." },
      { status: 500 }
    );
  }
}
