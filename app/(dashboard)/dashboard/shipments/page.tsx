"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Package,
  Search,
  Filter,
  ArrowUpDown,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/sections/animated-section"
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

export default function ShipmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredShipments = mockShipments.filter((shipment) => {
    const matchesSearch =
      shipment.tracking_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.sender_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.receiver_name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || shipment.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 py-8">
        <AnimatedSection className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-primary">My Shipments</h1>
              <p className="text-muted-foreground">Manage and track all your shipments</p>
            </div>
            <Button className="gap-2">
              <Package className="h-4 w-4" />
              New Shipment
            </Button>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.1}>
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by tracking ID, sender, or receiver..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="h-10 px-3 rounded-lg border border-input bg-background text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="ordered">Ordered</option>
                    <option value="picked_up">Picked Up</option>
                    <option value="in_transit">In Transit</option>
                    <option value="out_for_delivery">Out for Delivery</option>
                    <option value="delivered">Delivered</option>
                  </select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Shipments Table */}
        <AnimatedSection delay={0.2}>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Tracking ID
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Route
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Service
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase">
                        Est. Delivery
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {filteredShipments.map((shipment, index) => (
                      <motion.tr
                        key={shipment.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-8 rounded-full ${statusColors[shipment.status]}`} />
                            <div>
                              <p className="font-mono font-semibold text-sm">{shipment.tracking_id}</p>
                              <p className="text-xs text-muted-foreground">{shipment.weight} kg</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-medium">{shipment.sender_city} → {shipment.receiver_city}</p>
                          <p className="text-xs text-muted-foreground">
                            {shipment.sender_pincode} → {shipment.receiver_pincode}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <Badge className={`${statusColors[shipment.status]} text-white border-0`}>
                            {statusLabels[shipment.status]}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm capitalize">{shipment.service_type}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            {shipment.estimated_delivery}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Link href={`/track?id=${shipment.tracking_id}`}>
                            <Button variant="ghost" size="sm">
                              Track
                            </Button>
                          </Link>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredShipments.length === 0 && (
                <div className="text-center py-12">
                  <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-muted-foreground">No shipments found</p>
                </div>
              )}
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
