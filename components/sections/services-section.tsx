"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Plane, Truck, Train, Zap, FileText, Warehouse } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection, StaggerContainer, StaggerItem } from "./animated-section"

const services = [
  {
    icon: Plane,
    title: "Air Cargo",
    description: "Same-day pickup with next-flight availability through commercial airlines.",
    color: "from-blue-500 to-blue-600",
    href: "/services#air-cargo",
  },
  {
    icon: Truck,
    title: "Surface Transport",
    description: "Economical ground distribution covering 55,400+ locations across India.",
    color: "from-green-500 to-green-600",
    href: "/services#surface-transport",
  },
  {
    icon: Train,
    title: "Rail Cargo",
    description: "Comprehensive train cargo with RR booking and wagon leasing options.",
    color: "from-amber-500 to-amber-600",
    href: "/services#rail-cargo",
  },
  {
    icon: Zap,
    title: "Express Delivery",
    description: "Premium day-definite delivery for time-bound commercial shipments.",
    color: "from-red-500 to-red-600",
    href: "/services#express-delivery",
  },
  {
    icon: FileText,
    title: "Document Delivery",
    description: "Secure document handling with confidential protocols and digital POD.",
    color: "from-purple-500 to-purple-600",
    href: "/services#document-delivery",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "State-of-the-art storage with inventory management and fulfillment.",
    color: "from-teal-500 to-teal-600",
    href: "/services#warehousing",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mt-3">
            Comprehensive Logistics Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            End-to-end solutions tailored to your business needs — from air cargo to warehousing
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href}>
                <Card className="group h-full hover:glow cursor-pointer overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.6} className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" variant="outline" className="gap-2">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
