import { NextRequest, NextResponse } from "next/server"
import { mockPincodes } from "@/data/mock-data"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const pincode = searchParams.get("pincode")

    if (!pincode) {
      return NextResponse.json(
        { error: "Pincode is required" },
        { status: 400 }
      )
    }

    if (!/^\d{6}$/.test(pincode)) {
      return NextResponse.json(
        { error: "Invalid pincode format. Must be 6 digits." },
        { status: 400 }
      )
    }

    // Search in mock data
    const service = mockPincodes.find((p) => p.pincode === pincode)

    if (service) {
      return NextResponse.json({
        success: true,
        service,
      })
    }

    // For demo: generate response for any valid 6-digit pincode
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
    ]

    // Use pincode to deterministically select a city (for demo consistency)
    const index = parseInt(pincode.slice(-2)) % cities.length
    const selected = cities[index]

    return NextResponse.json({
      success: true,
      service: {
        pincode,
        city: selected.city,
        state: selected.state,
        available: true,
        services: ["air", "surface", "rail", "express"],
        estimated_days: Math.floor(Math.random() * 3) + 1,
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to check pincode serviceability" },
      { status: 500 }
    )
  }
}
