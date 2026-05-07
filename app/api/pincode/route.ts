import { NextRequest, NextResponse } from "next/server";
import { mockPincodes } from "@/data/mock-data";

// Provider pool — add/remove as needed
const providerPool = [
  {
    name: "Delhivery",
    type: "B2B",
    plan: "Delhivery 6-CFT",
    odaChance: 0.2,
  },
  {
    name: "Delhivery",
    type: "B2B",
    plan: "Delhivery 10-CFT",
    odaChance: 0.2,
  },
  {
    name: "Delhivery",
    type: "B2C",
    plan: "Express 0.5, 10KG, 20KG & 60KG",
    odaChance: 0.3,
  },
  {
    name: "XpressBees",
    type: "B2C",
    plan: "Standard 0.5KG – 10KG",
    odaChance: 0.4,
  },
  {
    name: "XpressBees",
    type: "B2B",
    plan: "Freight Forward 50KG+",
    odaChance: 0.5,
  },
  {
    name: "BlueDart",
    type: "B2C",
    plan: "Priority Overnight",
    odaChance: 0.15,
  },
  {
    name: "BlueDart",
    type: "B2B",
    plan: "Dart Apex (Air)",
    odaChance: 0.1,
  },
  {
    name: "DTDC",
    type: "B2C",
    plan: "Express Parcel 2KG",
    odaChance: 0.35,
  },
  {
    name: "DTDC",
    type: "B2B",
    plan: "Air Express Cargo",
    odaChance: 0.3,
  },
  {
    name: "Ekart",
    type: "B2C",
    plan: "Standard Delivery",
    odaChance: 0.45,
  },
];

// Hub centers per state
const stateCenters: Record<string, string[]> = {
  Delhi: [
    "Delhi_Okhla_L (Delhi)",
    "Delhi_Rohini_L (Delhi)",
    "Delhi_Dwarka_H (Delhi)",
  ],
  Maharashtra: [
    "Mumbai_Andheri_L (Maharashtra)",
    "Mumbai_Thane_L (Maharashtra)",
    "Pune_Hadapsar_H (Maharashtra)",
  ],
  Karnataka: [
    "Bangalore_Whitefield_L (Karnataka)",
    "Bangalore_Hebbal_H (Karnataka)",
  ],
  "Tamil Nadu": [
    "Chennai_Vadaperumbakkam_L (Tamil Nadu)",
    "Chennai_Royapettah1_C (Tamil Nadu)",
  ],
  "West Bengal": [
    "Kolkata_Howrah_L (West Bengal)",
    "Kolkata_Saltlake_H (West Bengal)",
  ],
  Telangana: [
    "Hyderabad_Gachibowli_L (Telangana)",
    "Hyderabad_Secunderabad_H (Telangana)",
  ],
  Gujarat: ["Ahmedabad_Naroda_L (Gujarat)", "Ahmedabad_Vatva_H (Gujarat)"],
  Rajasthan: [
    "Jaipur_Sitapura_L (Rajasthan)",
    "Jaipur_Mansarovar_H (Rajasthan)",
  ],
  "Uttar Pradesh": [
    "Lucknow_Amausi_L (Uttar Pradesh)",
    "Lucknow_Gomtinagar_H (Uttar Pradesh)",
  ],
};

// Seeded pseudo-random (deterministic per pincode so results don't change on refresh)
function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const cities = [
  { city: "New Delhi", state: "Delhi" },
  { city: "Mumbai", state: "Maharashtra" },
  { city: "Bangalore", state: "Karnataka" },
  { city: "Chennai", state: "Tamil Nadu" },
  { city: "Kolkata", state: "West Bengal" },
  { city: "Hyderabad", state: "Telangana" },
  { city: "Pune", state: "Maharashtra" },
  { city: "Ahmedabad", state: "Gujarat" },
  { city: "Jaipur", state: "Rajasthan" },
  { city: "Lucknow", state: "Uttar Pradesh" },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pincode = searchParams.get("pincode");

    if (!pincode) {
      return NextResponse.json(
        { error: "Pincode is required" },
        { status: 400 },
      );
    }

    if (!/^\d{6}$/.test(pincode)) {
      return NextResponse.json(
        { error: "Invalid pincode format. Must be 6 digits." },
        { status: 400 },
      );
    }

    // Check mock data first
    const mockService = mockPincodes.find((p) => p.pincode === pincode);
    if (mockService) {
      return NextResponse.json({ success: true, service: mockService });
    }

    // Deterministic city selection
    const pincodeNum = parseInt(pincode);
    const cityIndex = parseInt(pincode.slice(-2)) % cities.length;
    const selected = cities[cityIndex];

    // Deterministically pick 4–7 providers from the pool
    const providerCount = 4 + (pincodeNum % 4); // 4–7
    const centers = stateCenters[selected.state] ?? [
      `${selected.city}_Hub_L (${selected.state})`,
      `${selected.city}_Hub_H (${selected.state})`,
    ];

    const providers = providerPool.slice(0, providerCount).map((p, i) => {
      const rand1 = seededRandom(pincodeNum + i * 7);
      const rand2 = seededRandom(pincodeNum + i * 13);
      const centerIndex = Math.floor(rand1 * centers.length);

      // XpressBees gets N/A center for the last entry (like your screenshot)
      const isLastXpress = p.name === "XpressBees" && i === providerCount - 1;
      const center = isLastXpress ? "N/A" : centers[centerIndex];

      // Most providers serviceable; last 1-2 may not be (like your screenshot)
      const serviceable = i < providerCount - 1 ? true : rand1 > 0.5;
      const oda = serviceable ? rand2 < p.odaChance : false;

      return {
        name: p.name,
        type: p.type,
        plan: p.plan,
        center,
        serviceable,
        oda,
      };
    });

    // Estimated days — deterministic
    const estimatedDays = 1 + (pincodeNum % 3);

    return NextResponse.json({
      success: true,
      service: {
        pincode,
        city: selected.city,
        state: selected.state,
        available: true,
        services: ["air", "surface", "rail", "express"],
        estimated_days: estimatedDays,
        providers, // ← new field consumed by the table UI
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to check pincode serviceability" },
      { status: 500 },
    );
  }
}
