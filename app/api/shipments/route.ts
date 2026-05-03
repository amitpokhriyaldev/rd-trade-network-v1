import { NextRequest, NextResponse } from "next/server"
import { mockShipments } from "@/data/mock-data"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const status = searchParams.get("status")

    let shipments = [...mockShipments]

    if (status && status !== "all") {
      shipments = shipments.filter((s) => s.status === status)
    }

    return NextResponse.json({
      success: true,
      shipments,
      total: shipments.length,
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch shipments" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newShipment = {
      id: "ship_new_" + Date.now(),
      tracking_id: "RDTN" + Math.random().toString(36).substring(2, 10).toUpperCase(),
      ...body,
      status: "ordered",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      timeline: [
        {
          status: "ordered",
          location: body.sender_address || "Origin",
          timestamp: new Date().toISOString(),
          description: "Shipment order created",
        },
      ],
    }

    return NextResponse.json({
      success: true,
      shipment: newShipment,
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create shipment" },
      { status: 500 }
    )
  }
}
