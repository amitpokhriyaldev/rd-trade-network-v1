"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Package,
  Search,
  Plane,
  Truck,
  Ship,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";

export function HeroSection() {
  const [trackingId, setTrackingId] = useState("");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orange glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Blue glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating transport icons */}
      <motion.div
        className="absolute top-16 right-[42%] opacity-10 hidden lg:block"
        animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane className="h-20 w-20 text-orange-400" />
      </motion.div>
      <motion.div
        className="absolute bottom-28 left-12 opacity-10 hidden lg:block"
        animate={{ x: [0, 20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Ship className="h-16 w-16 text-blue-300" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-[38%] opacity-5 hidden lg:block"
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Truck className="h-14 w-14 text-white" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
              </span>
              <span className="text-sm text-orange-300 font-medium">
                16+ Years of Logistics Excellence
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
            >
              Experience <span className="text-orange-400">Fast</span> Logistics
              <br />
              Solutions <span className="text-orange-400">India.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-white/60 max-w-xl mb-8 leading-relaxed"
            >
              Reliable courier, air cargo, rail & surface transport services
              across{" "}
              <span className="text-white/80 font-medium">
                21,000+ pin codes
              </span>{" "}
              in India — with real-time tracking and 24/7 support.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <Link href="/services">
                <Button
                  size="lg"
                  className="gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/25 px-6"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-white/20 text-white hover:bg-white/10 px-6"
                >
                  Get a Quote
                </Button>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-8"
            >
              {[
                { value: "21,000+", label: "Pin Codes" },
                { value: "27+", label: "Cities" },
                { value: "16+", label: "Years" },
                { value: "99.8%", label: "Success" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-orange-400">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/50 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN – Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {/* Track Shipment Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Search className="h-5 w-5 text-orange-400" />
                <h3 className="text-white font-semibold text-lg">
                  Track Your Shipment
                </h3>
              </div>
              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="Enter Tracking Number"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-orange-400 focus:ring-orange-400/20"
                />
                <Link href={trackingId ? `/track?id=${trackingId}` : "/track"}>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white gap-2 px-5 shadow-md shadow-orange-500/30">
                    <Search className="h-4 w-4" />
                    Track
                  </Button>
                </Link>
              </div>
            </div>

            {/* Secure Delivery Dashboard Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
              <h3 className="text-white font-semibold text-base mb-1">
                Secure Delivery Dashboard
              </h3>
              <p className="text-white/40 text-sm mb-5">
                Real-time tracking with secure payment options
              </p>

              {/* Step Progress */}
              <div className="flex items-center justify-between mb-3">
                {[
                  { icon: Package, label: "Pickup", active: true },
                  { icon: Truck, label: "Transit", active: true },
                  { icon: CheckCircle2, label: "Delivered", active: false },
                ].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-0">
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-11 w-11 rounded-full flex items-center justify-center shadow-md
                        ${
                          step.active
                            ? "bg-orange-500 shadow-orange-500/30"
                            : "bg-white/10 border border-white/20"
                        }`}
                      >
                        <step.icon
                          className={`h-5 w-5 ${step.active ? "text-white" : "text-white/40"}`}
                        />
                      </div>
                      <span
                        className={`text-xs mt-1.5 ${step.active ? "text-white/80" : "text-white/30"}`}
                      >
                        {step.label}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        className={`h-0.5 w-16 sm:w-20 mx-2 mb-4 rounded-full
                        ${i === 0 ? "bg-orange-400" : "bg-white/15"}`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full" />
              </div>
            </div>

            {/* Service Pills */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Plane, label: "Air Cargo", sub: "Express delivery" },
                { icon: Ship, label: "Sea Freight", sub: "Bulk shipping" },
                {
                  icon: Truck,
                  label: "Road Transport",
                  sub: "Pan India coverage",
                },
                { icon: Package, label: "Courier", sub: "21,000+ pin codes" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-colors cursor-pointer group"
                >
                  <div className="h-9 w-9 rounded-lg bg-orange-500/15 flex items-center justify-center group-hover:bg-orange-500/25 transition-colors shrink-0">
                    <service.icon className="h-4 w-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium leading-tight">
                      {service.label}
                    </p>
                    <p className="text-white/40 text-xs">{service.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          style={{ marginBottom: "-1px" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
