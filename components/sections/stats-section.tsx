"use client";

import { AnimatedSection, Counter } from "./animated-section";
import {
  Calendar,
  MapPin,
  Building2,
  Users,
  Package,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 16,
    suffix: "+",
    label: "Years Experience",
    desc: "In logistics industry",
  },
  {
    icon: MapPin,
    value: 21000,
    suffix: "+",
    label: "Pin Codes Served",
    desc: "Across India",
  },
  {
    icon: Building2,
    value: 27,
    suffix: "+",
    label: "Cities Covered",
    desc: "With 24/7 counters",
  },
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Happy Clients",
    desc: "Trust our services",
  },
  {
    icon: Package,
    value: 10000,
    suffix: "+",
    label: "Daily Deliveries",
    desc: "Pan India network",
  },
  {
    icon: TrendingUp,
    value: 99.8,
    suffix: "%",
    label: "Success Rate",
    desc: "On-time delivery",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
            </span>
            <span className="text-sm text-orange-300 font-medium uppercase tracking-wider">
              Our Impact
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white mt-2 leading-tight">
            Numbers That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              Speak
            </span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            Trusted by thousands of businesses across India for their logistics
            needs
          </p>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <div className="group relative h-full">
                {/* Card glow on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/0 to-orange-400/0 group-hover:from-orange-500/20 group-hover:to-orange-400/10 rounded-2xl blur transition-all duration-500 pointer-events-none" />

                <div className="relative h-full bg-white/5 hover:bg-white/8 backdrop-blur-md border border-white/10 hover:border-orange-500/30 rounded-2xl p-6 text-center transition-all duration-300 flex flex-col items-center justify-center gap-1">
                  {/* Icon */}
                  <div className="inline-flex p-3 bg-orange-500/15 group-hover:bg-orange-500/25 rounded-xl mb-3 transition-colors duration-300">
                    <stat.icon className="h-6 w-6 text-orange-400" />
                  </div>

                  {/* Counter */}
                  <p className="text-2xl lg:text-3xl font-extrabold text-white">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </p>

                  {/* Label */}
                  <p className="font-semibold text-sm text-white/80 mt-0.5 leading-tight">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-white/40 leading-tight">
                    {stat.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full transition-all duration-500" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
