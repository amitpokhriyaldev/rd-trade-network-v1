import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  Truck,
  Train,
  Zap,
  FileText,
  Warehouse,
  Check,
  ArrowRight,
  Phone,
  Package,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/mock-data";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/sections/animated-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive logistics services - Air Cargo, Surface Transport, Rail Cargo, Express Delivery, Document Delivery, and Warehousing across 21,000+ pin codes.",
};

const iconMap: Record<string, React.ElementType> = {
  Plane,
  Truck,
  Train,
  Zap,
  FileText,
  Warehouse,
};

// Per-service accent colors for cards
const serviceColors: Record<
  string,
  {
    iconBg: string;
    iconColor: string;
    accentBar: string;
    gradient: string;
  }
> = {
  "air-cargo": {
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-600",
    accentBar: "bg-blue-500",
    gradient: "from-blue-500/10 to-blue-600/5",
  },
  "surface-transport": {
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    iconColor: "text-emerald-600",
    accentBar: "bg-emerald-500",
    gradient: "from-emerald-500/10 to-emerald-600/5",
  },
  "rail-cargo": {
    iconBg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    iconColor: "text-amber-600",
    accentBar: "bg-amber-500",
    gradient: "from-amber-500/10 to-amber-600/5",
  },
  "express-delivery": {
    iconBg: "bg-orange-500/10 group-hover:bg-orange-500/20",
    iconColor: "text-orange-500",
    accentBar: "bg-orange-500",
    gradient: "from-orange-500/10 to-orange-600/5",
  },
  "document-delivery": {
    iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20",
    iconColor: "text-purple-600",
    accentBar: "bg-purple-500",
    gradient: "from-purple-500/10 to-purple-600/5",
  },
  warehousing: {
    iconBg: "bg-teal-500/10 group-hover:bg-teal-500/20",
    iconColor: "text-teal-600",
    accentBar: "bg-teal-500",
    gradient: "from-teal-500/10 to-teal-600/5",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* ── 1. HERO — Dark Navy ── */}
      <section className="relative py-24 lg:py-36 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
              </span>
              <span className="text-sm text-orange-300 font-medium uppercase tracking-wider">
                Comprehensive Solutions
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Services
              </span>
            </h1>
            <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
              End-to-end logistics solutions designed to meet every business
              need — from express deliveries to bulk cargo transportation across
              India.
            </p>
          </AnimatedSection>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full"
            style={{ marginBottom: "-1px" }}
            preserveAspectRatio="none"
          >
            <path
              d="M0 60L60 52C120 44 240 28 360 22C480 16 600 18 720 22C840 26 960 34 1080 38C1200 42 1320 42 1380 42L1440 42V60H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ── 2. SERVICE CARDS — White ── */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #0a1628 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0a1628]/5 border border-[#0a1628]/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-[#0a1628]/60 uppercase tracking-wider">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0a1628] leading-tight mt-2">
              All{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Logistics
              </span>{" "}
              Services
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
              Six specialized services covering every aspect of your supply
              chain
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Package;
              const colors = serviceColors[service.id] ?? {
                iconBg: "bg-orange-500/10 group-hover:bg-orange-500/20",
                iconColor: "text-orange-500",
                accentBar: "bg-orange-500",
                gradient: "from-orange-500/10 to-orange-600/5",
              };
              return (
                <StaggerItem key={service.id}>
                  <div
                    id={service.id}
                    className="group relative h-full bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-6 lg:p-7 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_oklch(0.2_0.01_80/0.10)] flex flex-col"
                  >
                    {/* Hover gradient bg */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`}
                    />
                    {/* Top accent line */}
                    <div
                      className={`absolute top-0 left-6 right-6 h-0.5 ${colors.accentBar} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <div
                        className={`inline-flex p-3 rounded-xl ${colors.iconBg} transition-colors duration-300 mb-5 w-fit`}
                      >
                        <Icon className={`h-6 w-6 ${colors.iconColor}`} />
                      </div>

                      <h3 className="text-lg font-bold text-[#0a1628] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6 flex-1">
                        {service.features.slice(0, 4).map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-500"
                          >
                            <Check
                              className={`h-4 w-4 ${colors.iconColor} mt-0.5 shrink-0`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        {service.price_starting && (
                          <div>
                            <p className="text-xs text-slate-400">
                              Starting from
                            </p>
                            <p className="text-sm font-bold text-[#0a1628]">
                              {service.price_starting}
                            </p>
                          </div>
                        )}
                        <Link href="/contact" className="ml-auto">
                          <button
                            className={`inline-flex items-center gap-1.5 text-sm font-semibold ${colors.iconColor} group-hover:gap-2.5 transition-all duration-300`}
                          >
                            Get Quote
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── 3. DETAILED TABS — Dark Navy ── */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-orange-400" />
              <span className="text-sm text-orange-300 font-medium uppercase tracking-wider">
                Service Details
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mt-2">
              Explore in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Detail
              </span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Find the perfect solution for your logistics needs
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <Tabs defaultValue="air-cargo" className="max-w-4xl mx-auto">
              {/* Tab Triggers */}
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 h-auto gap-2 mb-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2">
                {services.map((service) => {
                  const Icon = iconMap[service.icon] || Package;
                  return (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className="flex flex-col items-center gap-1.5 py-3 px-2 text-xs font-medium text-white/50 rounded-xl data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-orange-500/30 transition-all duration-200"
                    >
                      <Icon className="h-4 w-4" />
                      {service.title.split(" ")[0]}
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {/* Tab Content */}
              {services.map((service) => {
                const Icon = iconMap[service.icon] || Package;
                const colors = serviceColors[service.id] ?? {
                  iconBg: "bg-orange-500/15",
                  iconColor: "text-orange-400",
                  accentBar: "bg-orange-500",
                  gradient: "",
                };
                return (
                  <TabsContent key={service.id} value={service.id}>
                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-7 lg:p-10 overflow-hidden">
                      {/* Top accent */}
                      <div className="absolute top-0 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />

                      <div className="flex items-start gap-6">
                        {/* Icon */}
                        <div
                          className={`hidden sm:inline-flex p-4 ${colors.iconBg} rounded-2xl shrink-0`}
                        >
                          <Icon className={`h-8 w-8 ${colors.iconColor}`} />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-extrabold text-white mb-3">
                            {service.title}
                          </h3>
                          <p className="text-white/55 leading-relaxed mb-6 text-sm lg:text-base">
                            {service.description}
                          </p>

                          {/* Features grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                            {service.features.map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2.5 bg-white/5 border border-white/8 rounded-xl px-4 py-3"
                              >
                                <Check
                                  className={`h-4 w-4 ${colors.iconColor} mt-0.5 shrink-0`}
                                />
                                <span className="text-sm text-white/70">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Pricing + CTAs */}
                          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white/5 border border-white/10 rounded-xl p-4">
                            {service.price_starting && (
                              <div>
                                <p className="text-xs text-white/40 uppercase tracking-wider">
                                  Starting Price
                                </p>
                                <p className="text-2xl font-extrabold text-orange-400 mt-0.5">
                                  {service.price_starting}
                                </p>
                              </div>
                            )}
                            <div className="flex gap-3 sm:ml-auto">
                              <Link href="/contact">
                                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl shadow-md shadow-orange-500/25 transition-all duration-200">
                                  <Phone className="h-4 w-4" />
                                  Request Quote
                                </button>
                              </Link>
                              <Link href="/track">
                                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white text-sm font-semibold rounded-xl transition-all duration-200">
                                  Track Shipment
                                  <ArrowRight className="h-4 w-4" />
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4. CTA — White ── */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #0a1628 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto relative bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] rounded-3xl p-8 lg:p-14 text-center overflow-hidden shadow-[0_20px_60px_oklch(0.2_0.01_80/0.20)]">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-56 h-56 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              {/* Top accent */}
              <div className="absolute top-0 left-16 right-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-5">
                  <Sparkles className="h-4 w-4 text-orange-400" />
                  <span className="text-sm text-orange-300 font-medium uppercase tracking-wider">
                    Custom Solutions
                  </span>
                </div>

                <h2 className="text-2xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
                  Need a Custom Logistics{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                    Solution?
                  </span>
                </h2>
                <p className="text-white/55 max-w-xl mx-auto mb-8 text-base leading-relaxed">
                  Our team will work with you to design a tailored logistics
                  plan that fits your business requirements and budget.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5">
                      Contact Us
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </Link>
                  <a href="tel:+919888923612">
                    <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white text-sm font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm">
                      <Phone className="h-5 w-5 text-orange-400" />
                      +91 98889 23612
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
