"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Search, Package, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import toast from "react-hot-toast"

export function TrackingWidget() {
  const [trackingId, setTrackingId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingId.trim()) {
      toast.error("Please enter a tracking ID")
      return
    }
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsLoading(false)
    router.push(`/track?id=${encodeURIComponent(trackingId.trim())}`)
  }

  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-4">
              <Package className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Quick Track</span>
            </div>
            <h3 className="text-2xl font-bold text-primary">Track Your Shipment</h3>
            <p className="text-muted-foreground mt-1">
              Enter your tracking ID to get real-time updates
            </p>
          </div>

          <form onSubmit={handleTrack} className="flex gap-3">
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
        </motion.div>
      </div>
    </section>
  )
}
