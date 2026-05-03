"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"
import { testimonials } from "@/data/mock-data"

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 lg:py-28 bg-primary-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <Quote className="absolute top-20 left-20 h-64 w-64 text-white" />
        <Quote className="absolute bottom-20 right-20 h-48 w-48 text-white rotate-180" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mt-3">
            What Our Clients Say
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
            Trusted by businesses across India for reliable logistics solutions
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 lg:p-12 bg-white/5 backdrop-blur-sm border-white/10">
                <Quote className="h-10 w-10 text-secondary mb-6" />
                <p className="text-xl lg:text-2xl text-white leading-relaxed mb-8">
                  "{testimonials[current].content}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-secondary-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[current].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonials[current].name}</p>
                      <p className="text-sm text-white/60">
                        {testimonials[current].role}, {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-secondary" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
