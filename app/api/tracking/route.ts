import { NextRequest, NextResponse } from "next/server"
import { mockShipments } from "@/data/mock-data"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const trackingId = searchParams.get("trackingId")

    if (!trackingId) {
      return NextResponse.json(
        { error: "Tracking ID is required" },
        { status: 400 }
      )
    }

    // Search in mock data
    const shipment = mockShipments.find(
      (s) => s.tracking_id.toLowerCase() === trackingId.toLowerCase()
    )

    if (shipment) {
      return NextResponse.json({
        success: true,
        shipment,
      })
    }

    // If not found in mock data, generate a dynamic response for demo purposes
    const dynamicShipment = generateDynamicShipment(trackingId)

    return NextResponse.json({
      success: true,
      shipment: dynamicShipment,
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to track shipment" },
      { status: 500 }
    )
  }
}

function generateDynamicShipment(trackingId: string) {
  const statuses = ["ordered", "picked_up", "in_transit", "out_for_delivery", "delivered"] as const
  const services = ["air", "surface", "rail", "express"] as const
  const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad"]

  const status = statuses[Math.floor(Math.random() * statuses.length)]
  const service = services[Math.floor(Math.random() * services.length)]
  const fromCity = cities[Math.floor(Math.random() * cities.length)]
  let toCity = cities[Math.floor(Math.random() * cities.length)]
  while (toCity === fromCity) {
    toCity = cities[Math.floor(Math.random() * cities.length)]
  }

  const now = new Date()
  const timeline = []

  timeline.push({
    status: "ordered",
    location: fromCity,
    timestamp: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    description: "Shipment order created",
  })

  if (["picked_up", "in_transit", "out_for_delivery", "delivered"].includes(status)) {
    timeline.push({
      status: "picked_up",
      location: fromCity,
      timestamp: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      description: "Package picked up from sender",
    })
  }

  if (["in_transit", "out_for_delivery", "delivered"].includes(status)) {
    timeline.push({
      status: "in_transit",
      location: `${fromCity} Hub`,
      timestamp: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      description: "Package in transit to destination",
    })
  }

  if (["out_for_delivery", "delivered"].includes(status)) {
    timeline.push({
      status: "out_for_delivery",
      location: toCity,
      timestamp: new Date(now.getTime() - 4 * 60 * 60 * 1000).toISOString(),
      description: "Out for delivery",
    })
  }

  if (status === "delivered") {
    timeline.push({
      status: "delivered",
      location: toCity,
      timestamp: new Date(now.getTime() - 1 * 60 * 60 * 1000).toISOString(),
      description: "Package delivered successfully",
    })
  }

  return {
    id: `dyn_${trackingId}`,
    tracking_id: trackingId,
    sender_name: "Sender Name",
    sender_address: `123 Business Park, ${fromCity}`,
    sender_pincode: "000000",
    receiver_name: "Receiver Name",
    receiver_address: `456 Industrial Area, ${toCity}`,
    receiver_pincode: "000000",
    weight: Math.floor(Math.random() * 50) + 1,
    dimensions: "40x30x25 cm",
    service_type: service,
    status,
    current_location: status === "delivered" ? toCity : `${fromCity} Hub`,
    estimated_delivery: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    actual_delivery: status === "delivered" ? new Date().toISOString().split("T")[0] : undefined,
    created_at: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date().toISOString(),
    timeline,
  }
}
