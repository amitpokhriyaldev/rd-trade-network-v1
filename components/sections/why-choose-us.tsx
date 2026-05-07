"use client";

import {
  Shield,
  Clock,
  Headphones,
  Globe,
  Wallet,
  Settings,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./animated-section";

const reasons = [
  {
    icon: Shield,
    title: "Reliability Guaranteed",
    description:
      "99.8% on-time delivery success rate with comprehensive insurance coverage for all shipments.",
  },
  {
    icon: Clock,
    title: "Same-Day Services",
    description:
      "Same-day pickup available with next-flight-out options for critical and time-sensitive cargo.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "One-point customer service executive assigned to handle all queries and provide daily NDR reports.",
  },
  {
    icon: Globe,
    title: "Pan-India Network",
    description:
      "Extensive coverage across 21,000+ pin codes with 27 city counters operating 24/7.",
  },
  {
    icon: Wallet,
    title: "Value for Money",
    description:
      "Competitive pricing without compromising on service quality. Customized solutions for every budget.",
  },
  {
    icon: Settings,
    title: "Customized Solutions",
    description:
      "Flexible operations tailored to your specific requirements — from event loads to bulk document deliveries.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
            </span>
            <span className="text-sm text-orange-300 font-medium uppercase tracking-wider">
              Why RD Network
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mt-2">
            The RD Trade Network{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              Advantage
            </span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            What sets us apart in the competitive logistics landscape
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ── LEFT — Hero Feature Card ── */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/20 to-blue-500/10 rounded-3xl blur-xl pointer-events-none" />

              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex p-3.5 bg-orange-500/15 rounded-2xl mb-6">
                    <Shield className="h-10 w-10 text-orange-400" />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 leading-snug">
                    Trusted by <span className="text-orange-400">50,000+</span>{" "}
                    Businesses
                  </h3>

                  <p className="text-white/60 leading-relaxed mb-8 text-sm lg:text-base">
                    From small enterprises to large corporations, businesses
                    across India rely on RD Trade Network for their logistics
                    needs. Our commitment to excellence, transparent operations,
                    and customer-first approach has made us a preferred
                    logistics partner.
                  </p>

                  {/* Mini stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    {[
                      { value: "16+", label: "Years" },
                      { value: "99.8%", label: "Success" },
                      { value: "24/7", label: "Support" },
                    ].map((s) => (
                      <div key={s.label} className="text-center">
                        <p className="text-2xl lg:text-3xl font-extrabold text-orange-400">
                          {s.value}
                        </p>
                        <p className="text-xs text-white/40 mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── RIGHT — Reasons Grid ── */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <StaggerItem key={reason.title}>
                <div className="group relative h-full bg-white/5 hover:bg-white/8 backdrop-blur-md border border-white/10 hover:border-orange-500/30 rounded-2xl p-5 transition-all duration-300 flex flex-col overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/0 to-orange-400/0 group-hover:from-orange-500/10 group-hover:to-orange-400/5 rounded-2xl blur transition-all duration-500 pointer-events-none" />

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full transition-all duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="inline-flex p-2.5 bg-orange-500/15 group-hover:bg-orange-500/25 rounded-xl mb-4 w-fit transition-colors duration-300">
                      <reason.icon className="h-5 w-5 text-orange-400" />
                    </div>

                    <h4 className="font-bold text-white text-sm mb-2">
                      {reason.title}
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed flex-1">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
