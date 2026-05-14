import { NextRequest, NextResponse } from "next/server";

const SHEET_ID = "1sWzXIveLRJUBnyCYcWb7m6F4J2TdMS9NOaFoTzD3Zi8";
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

interface SheetRow {
  pincode: string;
  dispatchCenter: string;
  originCenter: string;
  city: string;
  state: string;
  isODA: boolean;
}

let cachedRows: SheetRow[] | null = null;
let cacheTimestamp = 0;

// Simple CSV parser that handles quoted fields
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  const lines = text.split(/\r?\n/);
  for (const line of lines) {
    if (!line.trim()) continue;
    const cols: string[] = [];
    let inQuotes = false;
    let current = "";
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        inQuotes = !inQuotes;
      } else if (ch === "," && !inQuotes) {
        cols.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
    cols.push(current.trim());
    rows.push(cols);
  }
  return rows;
}

async function getSheetData(): Promise<SheetRow[]> {
  const now = Date.now();
  if (cachedRows && now - cacheTimestamp < CACHE_TTL_MS) {
    return cachedRows;
  }

  const response = await fetch(SHEET_CSV_URL, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Google Sheets fetch failed: ${response.status}`);
  }

  const text = await response.text();
  const rows = parseCSV(text);

  // Skip header row; columns: [0] Sr No, [1] Pincode, [2] Dispatch Center,
  // [3] Origin Center, [4] Facility City, [5] Facility State, [6] ODA
  const data: SheetRow[] = rows
    .slice(1)
    .map((cols) => ({
      pincode: String(cols[1] ?? "").trim().padStart(6, "0"),
      dispatchCenter: String(cols[2] ?? "").trim(),
      originCenter: String(cols[3] ?? "").trim(),
      city: String(cols[4] ?? "").trim(),
      state: String(cols[5] ?? "").trim(),
      // Column G: "NORMAL SERVICE" → not ODA, "ODA" → is ODA
      isODA: String(cols[6] ?? "").trim().toUpperCase() === "ODA",
    }))
    .filter((row) => /^\d{6}$/.test(row.pincode));

  cachedRows = data;
  cacheTimestamp = now;
  return data;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pincode = searchParams.get("pincode");

    if (!pincode) {
      return NextResponse.json({ error: "Pincode is required" }, { status: 400 });
    }

    if (!/^\d{6}$/.test(pincode)) {
      return NextResponse.json(
        { error: "Invalid pincode format. Must be 6 digits." },
        { status: 400 }
      );
    }

    const sheetData = await getSheetData();
    const match = sheetData.find((row) => row.pincode === pincode);

    if (!match) {
      return NextResponse.json({
        success: true,
        service: {
          pincode,
          city: "",
          state: "",
          available: false,
          services: [],
          estimated_days: 0,
        },
      });
    }

    return NextResponse.json({
      success: true,
      service: {
        pincode,
        city: match.city,
        state: match.state,
        available: true,
        services: [],
        estimated_days: 2,
        dispatchCenter: match.dispatchCenter,
        isODA: match.isODA,
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