"use client"

import { Shield, Clock, Headphones, Globe, Wallet, Settings } from "lucide-react"
import { Card } from "@/components/ui/card"
import { AnimatedSection, StaggerContainer, StaggerItem } from "./animated-section"

const reasons = [
  {
    icon: Shield,
    title: "Reliability Guaranteed",
    description: "99.8% on-time delivery success rate with comprehensive insurance coverage for all shipments.",
  },
  {
    icon: Clock,
    title: "Same-Day Services",
    description: "Same-day pickup available with next-flight-out options for critical and time-sensitive cargo.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "One-point customer service executive assigned to handle all queries and provide daily NDR reports.",
  },
  {
    icon: Globe,
    title: "Pan-India Network",
    description: "Extensive coverage across 21,000+ pin codes with 27 city counters operating 24/7.",
  },
  {
    icon: Wallet,
    title: "Value for Money",
    description: "Competitive pricing without compromising on service quality. Customized solutions for every budget.",
  },
  {
    icon: Settings,
    title: "Customized Solutions",
    description: "Flexible operations tailored to your specific requirements — from event loads to bulk document deliveries.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Why RD Network
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mt-3">
            The RD Trade Network Advantage
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            What sets us apart in the competitive logistics landscape
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Large Feature */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <Card className="relative p-8 lg:p-10 bg-gradient-to-br from-primary-900 to-primary-800 text-white overflow-hidden">
                <div className="relative z-10">
                  <Shield className="h-12 w-12 text-secondary mb-6" />
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Trusted by 50,000+ Businesses
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    From small enterprises to large corporations, businesses across India rely on 
                    RD Trade Network for their logistics needs. Our commitment to excellence, 
                    transparent operations, and customer-first approach has made us a preferred 
                    logistics partner.
                  </p>
                  <div className="flex gap-8">
                    <div>
                      <p className="text-3xl font-bold text-secondary">16+</p>
                      <p className="text-sm text-white/60">Years</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-secondary">99.8%</p>
                      <p className="text-sm text-white/60">Success</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-secondary">24/7</p>
                      <p className="text-sm text-white/60">Support</p>
                    </div>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              </Card>
            </div>
          </AnimatedSection>

          {/* Right - Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <StaggerItem key={reason.title}>
                <Card className="p-6 h-full hover:glow transition-all duration-300">
                  <div className="inline-flex p-2.5 bg-primary/10 rounded-lg mb-4">
                    <reason.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{reason.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
