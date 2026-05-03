"use client"

import { AnimatedSection, Counter } from "./animated-section"
import { Calendar, MapPin, Building2, Users, Package, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

const stats = [
  { icon: Calendar, value: 16, suffix: "+", label: "Years Experience", desc: "In logistics industry" },
  { icon: MapPin, value: 21000, suffix: "+", label: "Pin Codes Served", desc: "Across India" },
  { icon: Building2, value: 27, suffix: "+", label: "Cities Covered", desc: "With 24/7 counters" },
  { icon: Users, value: 50000, suffix: "+", label: "Happy Clients", desc: "Trust our services" },
  { icon: Package, value: 10000, suffix: "+", label: "Daily Deliveries", desc: "Pan India network" },
  { icon: TrendingUp, value: 99.8, suffix: "%", label: "Success Rate", desc: "On-time delivery" },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Impact</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">
            Numbers That Speak
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Trusted by thousands of businesses across India for their logistics needs
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <Card className="p-6 text-center hover:glow transition-all duration-300 h-full">
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-primary">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-semibold text-sm mt-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
