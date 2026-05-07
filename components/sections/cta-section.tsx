"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Sparkles } from "lucide-react";
import { AnimatedSection } from "./animated-section";

export function CTASection() {
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

      {/* Animated ambient glows */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-orange-400" />
              <span className="text-sm text-orange-300 font-medium uppercase tracking-wider">
                Get Started Today
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Ready to Transform{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Your Logistics?
              </span>
            </h2>

            <p className="text-base lg:text-lg text-white/55 leading-relaxed mb-10 max-w-2xl mx-auto">
              Partner with RD Trade Network for reliable, efficient, and
              cost-effective logistics solutions. Get a customized quote for
              your business needs today.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-200 hover:shadow-orange-500/40 hover:-translate-y-0.5 text-sm">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <a href="tel:+919888923612">
                <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-semibold rounded-xl transition-all duration-200 text-sm backdrop-blur-sm">
                  <Phone className="h-4 w-4 text-orange-400" />
                  Call Us Now
                </button>
              </a>
            </div>
          </AnimatedSection>

          {/* Contact Info Row */}
          <AnimatedSection delay={0.4}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-1 sm:gap-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              <a
                href="tel:+919888923612"
                className="flex items-center gap-2.5 px-0 sm:px-5 py-2 sm:py-0 text-white/55 hover:text-orange-400 transition-colors duration-200 text-sm group"
              >
                <Phone className="h-4 w-4 text-orange-500/60 group-hover:text-orange-400 transition-colors shrink-0" />
                +91 98889 23612
              </a>
              <a
                href="tel:+917717529232"
                className="flex items-center gap-2.5 px-0 sm:px-5 py-2 sm:py-0 text-white/55 hover:text-orange-400 transition-colors duration-200 text-sm group"
              >
                <Phone className="h-4 w-4 text-orange-500/60 group-hover:text-orange-400 transition-colors shrink-0" />
                +91 77175 29232
              </a>
              <a
                href="mailto:rakesh@rdtradenetwork.in"
                className="flex items-center gap-2.5 px-0 sm:px-5 py-2 sm:py-0 text-white/55 hover:text-orange-400 transition-colors duration-200 text-sm group"
              >
                <Mail className="h-4 w-4 text-orange-500/60 group-hover:text-orange-400 transition-colors shrink-0" />
                rakesh@rdtradenetwork.in
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
