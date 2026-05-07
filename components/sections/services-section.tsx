"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Plane,
  Truck,
  Train,
  Zap,
  FileText,
  Warehouse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./animated-section";

const services = [
  {
    icon: Plane,
    title: "Air Cargo",
    description:
      "Same-day pickup with next-flight availability through commercial airlines.",
    gradient: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-600",
    accentBar: "bg-blue-500",
    href: "/services#air-cargo",
  },
  {
    icon: Truck,
    title: "Surface Transport",
    description:
      "Economical ground distribution covering 55,400+ locations across India.",
    gradient: "from-emerald-500/10 to-emerald-600/5",
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    iconColor: "text-emerald-600",
    accentBar: "bg-emerald-500",
    href: "/services#surface-transport",
  },
  {
    icon: Train,
    title: "Rail Cargo",
    description:
      "Comprehensive train cargo with RR booking and wagon leasing options.",
    gradient: "from-amber-500/10 to-amber-600/5",
    iconBg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    iconColor: "text-amber-600",
    accentBar: "bg-amber-500",
    href: "/services#rail-cargo",
  },
  {
    icon: Zap,
    title: "Express Delivery",
    description:
      "Premium day-definite delivery for time-bound commercial shipments.",
    gradient: "from-orange-500/10 to-orange-600/5",
    iconBg: "bg-orange-500/10 group-hover:bg-orange-500/20",
    iconColor: "text-orange-500",
    accentBar: "bg-orange-500",
    href: "/services#express-delivery",
  },
  {
    icon: FileText,
    title: "Document Delivery",
    description:
      "Secure document handling with confidential protocols and digital POD.",
    gradient: "from-purple-500/10 to-purple-600/5",
    iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20",
    iconColor: "text-purple-600",
    accentBar: "bg-purple-500",
    href: "/services#document-delivery",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description:
      "State-of-the-art storage with inventory management and fulfillment.",
    gradient: "from-teal-500/10 to-teal-600/5",
    iconBg: "bg-teal-500/10 group-hover:bg-teal-500/20",
    iconColor: "text-teal-600",
    accentBar: "bg-teal-500",
    href: "/services#warehousing",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle, #0a1628 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top edge soft gradient to blend with dark stats section above */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />

      {/* Ambient accent — very subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0a1628]/5 border border-[#0a1628]/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-[#0a1628]/70 uppercase tracking-wider">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0a1628] leading-tight mt-2">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Logistics
            </span>{" "}
            Services
          </h2>
          <p className="text-slate-500 mt-4 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            End-to-end solutions tailored to your business needs — from air
            cargo to warehousing.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href} className="block h-full group">
                <div className="relative h-full bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-6 lg:p-7 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_oklch(0.2_0.01_80/0.10)] flex flex-col">
                  {/* Hover gradient bg */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`}
                  />

                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-6 right-6 h-0.5 ${service.accentBar} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-3 rounded-xl ${service.iconBg} transition-colors duration-300 mb-5 w-fit`}
                    >
                      <service.icon
                        className={`h-6 w-6 ${service.iconColor}`}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#0a1628] mb-2 group-hover:text-[#0d1f3c] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-500 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Footer link */}
                    <div className="flex items-center gap-1.5 mt-5 text-sm font-semibold text-orange-500 group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.6} className="mt-12 flex justify-center">
          <Link href="/services">
            <Button
              size="lg"
              className="gap-2 bg-[#0a1628] hover:bg-[#0d1f3c] text-white px-8 shadow-md shadow-[#0a1628]/20 rounded-xl font-semibold"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
