"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700" />

      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Partner with RD Trade Network for reliable, efficient, and cost-effective 
              logistics solutions. Get a customized quote for your business needs today.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/contact">
                <Button size="lg" className="gap-2 bg-secondary hover:bg-secondary-600 text-white shadow-lg shadow-secondary/30">
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+919888923612">
                <Button size="lg" variant="outline" className="gap-2 border-white/30 text-white hover:bg-white/10">
                  <Phone className="h-5 w-5" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/60 text-sm">
              <a href="tel:+919888923612" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                +91 98889 23612
              </a>
              <a href="tel:+917717529232" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                +91 77175 29232
              </a>
              <a href="mailto:rakesh@rdtradenetwork.in" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" />
                rakesh@rdtradenetwork.in
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
