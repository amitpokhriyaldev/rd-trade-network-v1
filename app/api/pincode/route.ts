import { NextRequest, NextResponse } from "next/server";

const API = process.env.CARGOWALE_API_URL ?? "https://api.cargowale.in";
// Set CARGOWALE_ORIGIN_PINCODE to your warehouse pincode in .env.local
const ORIGIN_PINCODE = Number(process.env.CARGOWALE_ORIGIN_PINCODE ?? "110001");

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

async function getCityState(pincode: string): Promise<{ city: string; state: string }> {
  try {
    const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    const json = await res.json();
    const offices = json?.[0]?.PostOffice;
    if (Array.isArray(offices) && offices.length > 0) {
      return { city: offices[0].District ?? "", state: offices[0].State ?? "" };
    }
  } catch {
    // non-critical — UI degrades gracefully without city/state
  }
  return { city: "", state: "" };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pincode = searchParams.get("pincode");

    if (!pincode || !/^\d{6}$/.test(pincode)) {
      return NextResponse.json(
        { error: "Invalid pincode format. Must be 6 digits." },
        { status: 400 }
      );
    }

    let token: string;
    try {
      token = await getToken();
    } catch {
      return NextResponse.json(
        { error: "Service unavailable. Please try again later." },
        { status: 503 }
      );
    }

    const [calcRes, location] = await Promise.all([
      fetch(`${API}/api/v1/shipment/calculate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          origin_pincode: ORIGIN_PINCODE,
          destination_pincode: Number(pincode),
          weight: 0.5,
          invoice_value: 1,
          insurance: false,
          self_drop: false,
          payment_mode: "prepaid",
          cod_value: 0,
          items: [{ quantity: 1, length: 10, width: 10, height: 10 }],
        }),
        cache: "no-store",
      }).then((r) => r.json()),
      getCityState(pincode),
    ]);

    // Each item in calcRes.data is { status: "true", data: { supplier_name, total, ... } }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawItems: any[] = Array.isArray(calcRes?.data) ? calcRes.data : [];
    const suppliers = rawItems
      .filter((item) => item?.status === "true" && item?.data)
      .map((item) => item.data);

    if (!calcRes?.success || suppliers.length === 0) {
      return NextResponse.json({
        success: true,
        service: {
          pincode,
          city: location.city,
          state: location.state,
          available: false,
          services: [],
          estimated_days: 0,
          suppliers: [],
        },
      });
    }

    return NextResponse.json({
      success: true,
      service: {
        pincode,
        city: location.city,
        state: location.state,
        available: true,
        services: suppliers.map((s) => String(s.supplier_name ?? "")),
        estimated_days: 2,
        suppliers: suppliers.map((s) => ({
          id: Number(s.supplier_id),
          name: String(s.supplier_name ?? ""),
          accountName: String(s.supplier_multi_account_name ?? ""),
          type: String(s.supplier_type ?? ""),
          total: s.total != null ? Number(s.total) : null,
          oda: Number(s.fields?.ODA ?? 0) > 0,
        })),
      },
    });
  } catch (error) {
    console.error("Pincode check error:", error);
    return NextResponse.json(
      { error: "Failed to check pincode serviceability. Please try again." },
      { status: 500 }
    );
  }
}