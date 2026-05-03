import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { ServicesSection } from "@/components/sections/services-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import { TrackingWidget } from "@/components/sections/tracking-widget"

export const metadata: Metadata = {
  title: "Single Window Logistics Solutions",
  description: "RD Trade Network Pvt. Ltd. - Leading logistics company in India offering courier, air cargo, rail cargo, surface transport across 21,000+ pin codes. 16+ years of experience.",
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrackingWidget />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
