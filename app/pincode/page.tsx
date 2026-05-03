"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, MapPin, CheckCircle, XCircle, Truck, Plane, Train, Zap, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/sections/animated-section"
import { PincodeService } from "@/types"
import toast from "react-hot-toast"

export default function PincodePage() {
  const [pincode, setPincode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<PincodeService | null>(null)

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!pincode.trim() || pincode.length !== 6) {
      toast.error("Please enter a valid 6-digit PIN code")
      return
    }

    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch(`/api/pincode?pincode=${encodeURIComponent(pincode)}`)
      const data = await response.json()

      if (data.service) {
        setResult(data.service)
        if (data.service.available) {
          toast.success(`Service available in ${data.service.city}!`)
        } else {
          toast.error("Service not available in this area yet")
        }
      } else {
        toast.error("Could not check serviceability. Please try again.")
      }
    } catch (error) {
      toast.error("Failed to check pincode. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const serviceIcons: Record<string, React.ElementType> = {
    air: Plane,
    surface: Truck,
    rail: Train,
    express: Zap,
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Pincode Serviceability
            </h1>
            <p className="text-white/70">
              Check if our services are available at your location
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Card className="max-w-xl mx-auto p-6 lg:p-8 shadow-xl">
              <form onSubmit={handleCheck} className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Enter 6-digit PIN Code"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                      maxLength={6}
                      className="pl-10 h-14 text-lg text-center tracking-widest font-mono"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    isLoading={isLoading}
                    className="h-14 px-8"
                  >
                    Check
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Try demo pincodes: 110001 (Delhi), 400001 (Mumbai), 560001 (Bangalore)
                </p>
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="pb-20"
          >
            <div className="container mx-auto px-4">
              <Card className={`max-w-2xl mx-auto overflow-hidden ${
                result.available ? "border-green-200" : "border-red-200"
              }`}>
                <div className={`p-6 ${
                  result.available 
                    ? "bg-gradient-to-r from-green-50 to-emerald-50" 
                    : "bg-gradient-to-r from-red-50 to-orange-50"
                }`}>
                  <div className="flex items-center gap-4">
                    {result.available ? (
                      <CheckCircle className="h-12 w-12 text-green-500" />
                    ) : (
                      <XCircle className="h-12 w-12 text-red-500" />
                    )}
                    <div>
                      <h2 className={`text-2xl font-bold ${
                        result.available ? "text-green-700" : "text-red-700"
                      }`}>
                        {result.available ? "Service Available!" : "Service Not Available"}
                      </h2>
                      <p className="text-muted-foreground">
                        {result.city}, {result.state} — PIN: {result.pincode}
                      </p>
                    </div>
                  </div>
                </div>

                {result.available && (
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {/* Available Services */}
                      <div>
                        <h3 className="font-semibold text-primary mb-3">Available Services</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {result.services.map((service) => {
                            const Icon = serviceIcons[service] || Truck
                            const labels: Record<string, string> = {
                              air: "Air Cargo",
                              surface: "Surface",
                              rail: "Rail Cargo",
                              express: "Express",
                            }
                            return (
                              <div
                                key={service}
                                className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg"
                              >
                                <Icon className="h-5 w-5 text-primary" />
                                <span className="text-sm font-medium">{labels[service]}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* Delivery Estimate */}
                      <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg">
                        <Clock className="h-6 w-6 text-secondary" />
                        <div>
                          <p className="font-semibold text-primary">Estimated Delivery</p>
                          <p className="text-sm text-muted-foreground">
                            {result.estimated_days} business day{result.estimated_days > 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>

                      {/* Coverage Info */}
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">Note:</span> Delivery times may vary based on 
                          service type, weather conditions, and local regulations. For exact delivery estimates, 
                          please contact our customer support.
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1">Book a Shipment</Button>
                        <Button variant="outline" className="flex-1">Get Quote</Button>
                      </div>
                    </div>
                  </CardContent>
                )}

                {!result.available && (
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <p className="text-muted-foreground">
                        We currently do not serve this location. However, we are constantly expanding our network.
                      </p>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">Alternative:</span> Contact us to discuss 
                          custom logistics solutions for your area.
                        </p>
                      </div>
                      <Button>Contact Us</Button>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Coverage Map / Stats */}
      {!result && (
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-primary text-center mb-8">
                  Our Coverage Network
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { region: "North India", cities: "Delhi, Chandigarh, Jaipur, Lucknow", pincodes: "5,200+" },
                    { region: "West India", cities: "Mumbai, Pune, Ahmedabad, Surat", pincodes: "4,800+" },
                    { region: "South India", cities: "Bangalore, Chennai, Hyderabad, Kochi", pincodes: "5,500+" },
                    { region: "East India", cities: "Kolkata, Bhubaneswar, Guwahati, Patna", pincodes: "3,200+" },
                  ].map((region) => (
                    <Card key={region.region} className="p-4 hover:glow">
                      <h3 className="font-semibold text-primary mb-2">{region.region}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{region.cities}</p>
                      <Badge variant="secondary">{region.pincodes} PINs</Badge>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-xl text-center">
                  <p className="text-lg font-semibold text-primary">
                    21,000+ Pin Codes Served Across India
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We cover metro cities, tier-2 cities, and remote locations with our extensive network
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </div>
  )
}
