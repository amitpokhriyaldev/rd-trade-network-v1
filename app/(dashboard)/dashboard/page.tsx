"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  TrendingUp,
  MapPin,
  ArrowRight,
  Plus,
  Search,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/sections/animated-section"
import { useDashboardStore } from "@/lib/store"
import { mockShipments } from "@/data/mock-data"

const statusColors: Record<string, string> = {
  ordered: "bg-blue-500",
  picked_up: "bg-blue-600",
  in_transit: "bg-amber-500",
  out_for_delivery: "bg-orange-500",
  delivered: "bg-green-500",
  returned: "bg-red-500",
  cancelled: "bg-gray-500",
}

const statusLabels: Record<string, string> = {
  ordered: "Ordered",
  picked_up: "Picked Up",
  in_transit: "In Transit",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
  returned: "Returned",
  cancelled: "Cancelled",
}

export default function DashboardPage() {
  const { shipments, stats, setShipments, setStats } = useDashboardStore()

  useEffect(() => {
    // Simulate fetching user shipments
    setShipments(mockShipments)
    setStats({
      total: mockShipments.length,
      inTransit: mockShipments.filter((s) => s.status === "in_transit").length,
      delivered: mockShipments.filter((s) => s.status === "delivered").length,
      pending: mockShipments.filter((s) => ["ordered", "picked_up"].includes(s.status)).length,
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <AnimatedSection className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here&apos;s your logistics overview.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/track">
                <Button variant="outline" className="gap-2">
                  <Search className="h-4 w-4" />
                  Track
                </Button>
              </Link>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Shipment
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Cards */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Shipments", value: stats.total, icon: Package, color: "text-primary", bg: "bg-primary/10" },
            { label: "In Transit", value: stats.inTransit, icon: Truck, color: "text-amber-600", bg: "bg-amber-100" },
            { label: "Delivered", value: stats.delivered, icon: CheckCircle, color: "text-green-600", bg: "bg-green-100" },
            { label: "Pending", value: stats.pending, icon: Clock, color: "text-blue-600", bg: "bg-blue-100" },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <Card className="hover:glow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-xl ${stat.bg}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Recent Shipments */}
        <AnimatedSection delay={0.3}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Shipments</CardTitle>
              <Link href="/dashboard/shipments">
                <Button variant="ghost" size="sm" className="gap-1">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {shipments.slice(0, 5).map((shipment, index) => (
                  <motion.div
                    key={shipment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-2 h-12 rounded-full ${statusColors[shipment.status]}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">{shipment.tracking_id}</p>
                        <Badge variant="outline" className="text-xs">
                          {statusLabels[shipment.status]}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {shipment.sender_address} → {shipment.receiver_address}
                      </p>
                      <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {shipment.current_location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Est: {shipment.estimated_delivery}
                        </span>
                      </div>
                    </div>
                    <Link href={`/track?id=${shipment.tracking_id}`}>
                      <Button variant="ghost" size="sm">
                        Track
                      </Button>
                    </Link>
                  </motion.div>
                ))}

                {shipments.length === 0 && (
                  <div className="text-center py-12">
                    <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-muted-foreground">No shipments yet</p>
                    <Button className="mt-4 gap-2">
                      <Plus className="h-4 w-4" />
                      Create Shipment
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Quick Actions */}
        <AnimatedSection delay={0.5} className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 hover:glow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Track Shipment</h3>
                  <p className="text-sm text-muted-foreground">Check status of any shipment</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:glow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">Pincode Check</h3>
                  <p className="text-sm text-muted-foreground">Verify service availability</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:glow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Get Quote</h3>
                  <p className="text-sm text-muted-foreground">Request pricing for bulk</p>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
