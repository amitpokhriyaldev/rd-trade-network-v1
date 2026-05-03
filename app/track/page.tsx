"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Package, MapPin, Clock, CheckCircle, Truck, AlertCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AnimatedSection } from "@/components/sections/animated-section"
import { useTrackingStore } from "@/lib/store"
import { Shipment, ShipmentStatus } from "@/types"
import toast from "react-hot-toast"

const statusConfig: Record<ShipmentStatus, { label: string; color: string; icon: React.ElementType; progress: number }> = {
  ordered: { label: "Ordered", color: "bg-blue-500", icon: Package, progress: 10 },
  picked_up: { label: "Picked Up", color: "bg-blue-600", icon: Truck, progress: 25 },
  in_transit: { label: "In Transit", color: "bg-amber-500", icon: Truck, progress: 50 },
  out_for_delivery: { label: "Out for Delivery", color: "bg-orange-500", icon: MapPin, progress: 75 },
  delivered: { label: "Delivered", color: "bg-green-500", icon: CheckCircle, progress: 100 },
  returned: { label: "Returned", color: "bg-red-500", icon: AlertCircle, progress: 0 },
  cancelled: { label: "Cancelled", color: "bg-gray-500", icon: AlertCircle, progress: 0 },
}

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [shipment, setShipment] = useState<Shipment | null>(null)
  const searchParams = useSearchParams()
  const { addToHistory } = useTrackingStore()

  useEffect(() => {
    const id = searchParams.get("id")
    if (id) {
      setTrackingId(id)
      handleTrack(id)
    }
  }, [searchParams])

  const handleTrack = async (id?: string) => {
    const trackId = id || trackingId
    if (!trackId.trim()) {
      toast.error("Please enter a tracking ID")
      return
    }

    setIsLoading(true)
    setShipment(null)

    try {
      const response = await fetch(`/api/tracking?trackingId=${encodeURIComponent(trackId)}`)
      const data = await response.json()

      if (data.shipment) {
        setShipment(data.shipment)
        addToHistory(data.shipment)
        toast.success("Shipment found!")
      } else {
        toast.error("No shipment found with this tracking ID")
      }
    } catch (error) {
      toast.error("Failed to track shipment. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleTrack()
  }

  const currentStatus = shipment ? statusConfig[shipment.status] : null

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Track Your Shipment
            </h1>
            <p className="text-white/70">
              Enter your tracking ID to get real-time updates on your shipment
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Card className="max-w-2xl mx-auto p-6 lg:p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Enter Tracking ID (e.g., RDTN8X2K9P4M)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
                    className="pl-10 h-14 text-lg"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  isLoading={isLoading}
                  className="h-14 px-8 gap-2"
                >
                  Track
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Results */}
      <AnimatePresence>
        {shipment && currentStatus && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="pb-20"
          >
            <div className="container mx-auto px-4">
              {/* Status Overview */}
              <Card className="mb-8 overflow-hidden">
                <div className={`p-6 ${currentStatus.color} text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <currentStatus.icon className="h-10 w-10" />
                      <div>
                        <p className="text-sm opacity-90">Current Status</p>
                        <p className="text-2xl font-bold">{currentStatus.label}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      {shipment.tracking_id}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Progress value={currentStatus.progress} className="mb-6" />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground">From</p>
                      <p className="font-semibold">{shipment.sender_name}</p>
                      <p className="text-sm">{shipment.sender_address}</p>
                      <p className="text-sm text-muted-foreground">PIN: {shipment.sender_pincode}</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowRight className="h-8 w-8 text-primary hidden md:block" />
                      <div className="md:hidden text-center">
                        <ArrowRight className="h-6 w-6 text-primary rotate-90 mx-auto" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">To</p>
                      <p className="font-semibold">{shipment.receiver_name}</p>
                      <p className="text-sm">{shipment.receiver_address}</p>
                      <p className="text-sm text-muted-foreground">PIN: {shipment.receiver_pincode}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Service</p>
                      <p className="font-semibold capitalize">{shipment.service_type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Weight</p>
                      <p className="font-semibold">{shipment.weight} kg</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Dimensions</p>
                      <p className="font-semibold">{shipment.dimensions}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Est. Delivery</p>
                      <p className="font-semibold">{shipment.estimated_delivery}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipment Timeline</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

                    {shipment.timeline.map((event, index) => {
                      const eventStatus = statusConfig[event.status]
                      const isLast = index === shipment.timeline.length - 1

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.15 }}
                          className="relative flex gap-6 pb-8 last:pb-0"
                        >
                          <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
                            isLast ? eventStatus.color : "bg-gray-200"
                          } ${isLast ? "text-white" : "text-gray-500"}`}>
                            <eventStatus.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 pt-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant={isLast ? "default" : "outline"} className="text-xs">
                                {eventStatus.label}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {new Date(event.timestamp).toLocaleString("en-IN", {
                                  day: "numeric",
                                  month: "short",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </div>
                            <p className="text-sm font-medium">{event.location}</p>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Empty State / Info */}
      {!shipment && !isLoading && (
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-2xl mx-auto text-center">
                <Package className="h-16 w-16 text-primary/20 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Enter a Tracking ID
                </h3>
                <p className="text-muted-foreground mb-8">
                  Use your shipment tracking ID to get real-time updates. 
                  Try these demo IDs: RDTN8X2K9P4M, RDTN5Y7L3Q9R, RDTN2A4B6C8D
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: "RDTN8X2K9P4M", status: "In Transit", color: "text-amber-600" },
                    { id: "RDTN5Y7L3Q9R", status: "Delivered", color: "text-green-600" },
                    { id: "RDTN2A4B6C8D", status: "Picked Up", color: "text-blue-600" },
                  ].map((demo) => (
                    <button
                      key={demo.id}
                      onClick={() => {
                        setTrackingId(demo.id)
                        handleTrack(demo.id)
                      }}
                      className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left"
                    >
                      <p className="font-mono text-sm font-semibold text-primary">{demo.id}</p>
                      <p className={`text-xs ${demo.color} mt-1`}>{demo.status}</p>
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </div>
  )
}
