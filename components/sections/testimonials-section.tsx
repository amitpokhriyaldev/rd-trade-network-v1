"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./animated-section";
import { testimonials } from "@/data/mock-data";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

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

      {/* Ambient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Large decorative quote marks */}
      <Quote className="absolute top-12 left-8 lg:left-20 h-32 w-32 lg:h-48 lg:w-48 text-[#0a1628]/[0.04] pointer-events-none" />
      <Quote className="absolute bottom-12 right-8 lg:right-20 h-24 w-24 lg:h-36 lg:w-36 text-orange-400/[0.07] rotate-180 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0a1628]/5 border border-[#0a1628]/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-[#0a1628]/60 uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0a1628] leading-tight mt-2">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Clients
            </span>{" "}
            Say
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Trusted by businesses across India for reliable logistics solutions
          </p>
        </AnimatedSection>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              {/* Card */}
              <div className="relative bg-white border border-slate-200/80 rounded-3xl p-8 lg:p-12 shadow-[0_8px_40px_oklch(0.2_0.01_80/0.08)] overflow-hidden">
                {/* Top orange accent bar */}
                <div className="absolute top-0 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />

                {/* Subtle gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] to-transparent rounded-3xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="inline-flex p-3 bg-orange-500/10 rounded-xl mb-6">
                    <Quote className="h-6 w-6 text-orange-500" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: testimonials[current].rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-orange-400 fill-orange-400"
                        />
                      ),
                    )}
                  </div>

                  {/* Quote text */}
                  <p className="text-lg lg:text-2xl text-[#0a1628] leading-relaxed font-medium mb-8">
                    "{testimonials[current].content}"
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-slate-100 mb-6" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] flex items-center justify-center text-white font-bold text-base shrink-0 shadow-md">
                      {testimonials[current].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[#0a1628]">
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonials[current].role},{" "}
                        {testimonials[current].company}
                      </p>
                    </div>
                    {/* Company badge */}
                    <div className="ml-auto hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full">
                      <div className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="text-xs text-slate-500 font-medium">
                        Verified Client
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full border border-slate-200 hover:border-[#0a1628] hover:bg-[#0a1628] text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-orange-500"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="h-10 w-10 rounded-full border border-slate-200 hover:border-[#0a1628] hover:bg-[#0a1628] text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Counter */}
          <p className="text-center text-xs text-slate-400 mt-4 font-medium tracking-wider uppercase">
            {current + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}
