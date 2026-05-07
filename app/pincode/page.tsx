"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  CheckCircle2,
  XCircle,
  Truck,
  Plane,
  Train,
  Zap,
  Clock,
  ArrowRight,
  Package,
  Building2,
} from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import { PincodeService } from "@/types";
import Link from "next/link";
import toast from "react-hot-toast";

// Mock provider rows that would come from your API
// Your API should return result.providers array of this shape
interface ProviderRow {
  name: string; // e.g. "Delhivery"
  type: string; // e.g. "B2B" | "B2C"
  plan: string; // e.g. "Delhivery 6-CFT"
  center: string; // e.g. "Chennai_Vadaperumbakkam_L (Tamil Nadu)"
  serviceable: boolean;
  oda: boolean;
}

const serviceIcons: Record<string, React.ElementType> = {
  air: Plane,
  surface: Truck,
  rail: Train,
  express: Zap,
};

const serviceLabels: Record<string, string> = {
  air: "Air Cargo",
  surface: "Surface",
  rail: "Rail Cargo",
  express: "Express",
};

// Provider logo fallback (text badge style)
function ProviderBadge({ name, type }: { name: string; type: string }) {
  const colors: Record<string, string> = {
    Delhivery: "text-[#e00]-",
    XpressBees: "text-yellow-600",
    BlueDart: "text-blue-700",
    DTDC: "text-red-700",
    Ekart: "text-blue-600",
  };
  return (
    <div>
      <span className="font-black text-sm tracking-tight text-[#0a1628] uppercase">
        {name}
      </span>
      <span className="ml-1 text-xs font-bold text-slate-400">{type}</span>
    </div>
  );
}

export default function PincodePage() {
  const [pincode, setPincode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PincodeService | null>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode.trim() || pincode.length !== 6) {
      toast.error("Please enter a valid 6-digit PIN code");
      return;
    }
    setIsLoading(true);
    setResult(null);
    try {
      const response = await fetch(
        `/api/pincode?pincode=${encodeURIComponent(pincode)}`,
      );
      const data = await response.json();
      if (data.service) {
        setResult(data.service);
        if (data.service.available) {
          toast.success(`Service available in ${data.service.city}!`);
        } else {
          toast.error("Service not available in this area yet");
        }
      } else {
        toast.error("Could not check serviceability. Please try again.");
      }
    } catch {
      toast.error("Failed to check pincode. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* ── 1. HERO — Dark Navy ── */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] overflow-hidden">
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
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
              </span>
              <span className="text-sm text-orange-300 font-medium uppercase tracking-wider">
                Coverage Check
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Pincode{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Serviceability
              </span>
            </h1>
            <p className="text-white/55 text-base leading-relaxed">
              Check if our logistics services are available at your location
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

      {/* ── 2. SEARCH + RESULTS — White ── */}
      <section className="relative bg-white pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #0a1628 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 mt-14">
          {/* Search Card — floating overlap */}
          <AnimatedSection>
            <div className="max-w-2xl mx-auto -mt-10 mb-10">
              <div className="relative bg-white border border-slate-200/80 rounded-3xl p-6 lg:p-8 shadow-[0_8px_40px_oklch(0.2_0.01_80/0.10)] overflow-hidden">
                <div className="flex items-center gap-2 mb-5">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <h2 className="text-base font-bold text-[#0a1628]">
                    Enter Pincode to Check Serviceability
                  </h2>
                </div>

                <form onSubmit={handleCheck} className="flex gap-3">
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 110001"
                    value={pincode}
                    onChange={(e) =>
                      setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))
                    }
                    maxLength={6}
                    className="flex-1 h-14 px-5 rounded-xl bg-slate-50 border border-slate-200 text-[#0a1628] text-xl font-mono font-bold tracking-[0.3em] text-center placeholder:text-slate-300 placeholder:tracking-normal placeholder:text-base placeholder:font-normal focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/15 focus:bg-white transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="h-14 px-7 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-semibold rounded-xl shadow-md shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 text-sm shrink-0"
                  >
                    {isLoading ? (
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Search className="h-4 w-4" />
                        Check Serviceability
                      </>
                    )}
                  </button>
                </form>

                <p className="text-xs text-slate-400 text-center mt-4">
                  Try demo PINs:{" "}
                  {["110001", "400001", "560001"].map((pin, i) => (
                    <button
                      key={pin}
                      onClick={() => setPincode(pin)}
                      className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                    >
                      {pin}
                      {i < 2 ? ", " : ""}
                    </button>
                  ))}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Results */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="max-w-4xl mx-auto"
              >
                {result.available ? (
                  <>
                    {/* Success Banner */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-4 bg-emerald-50 border border-emerald-200 rounded-2xl px-6 py-4 mb-6"
                    >
                      <CheckCircle2 className="h-8 w-8 text-emerald-500 shrink-0" />
                      <div>
                        <p className="font-bold text-emerald-700 text-base">
                          Service Available!
                        </p>
                        <p className="text-sm text-emerald-600">
                          {result.city}, {result.state} — PIN: {result.pincode}
                        </p>
                      </div>
                    </motion.div>

                    {/* Provider Table — like the reference image */}
                    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-[0_4px_24px_oklch(0.2_0.01_80/0.07)]">
                      <div className="absolute top-0 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />

                      {/* Table Header */}
                      <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50 border-b border-slate-100">
                        <div className="col-span-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Service Provider
                          </span>
                        </div>
                        <div className="col-span-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Center
                          </span>
                        </div>
                        <div className="col-span-2 text-center">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Serviceability
                          </span>
                        </div>
                        <div className="col-span-2 text-center">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            ODA
                          </span>
                        </div>
                      </div>

                      {/* Provider Rows — generated from result.providers or fallback to services */}
                      {result.services
                        .map((s: string) => ({
                          name: "RD Trade Network",
                          type: "B2B",
                          plan: serviceLabels[s] ?? s,
                          center: `${result.city} Hub (${result.state})`,
                          serviceable: true,
                          oda: false,
                        }))
                        .map((provider: ProviderRow, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + i * 0.07 }}
                            className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50/60 transition-colors duration-150 group"
                          >
                            {/* Provider name + plan */}
                            <div className="col-span-4">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-[#0a1628]/8 flex items-center justify-center shrink-0">
                                  <Truck className="h-3.5 w-3.5 text-[#0a1628]/40" />
                                </div>
                                <div>
                                  <div className="flex items-baseline gap-1">
                                    <span className="text-sm font-black text-[#0a1628] uppercase tracking-tight">
                                      {provider.name}
                                    </span>
                                    <span className="text-xs font-bold text-slate-400">
                                      {provider.type}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-400 mt-0.5">
                                    {provider.plan}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Center */}
                            <div className="col-span-4 flex items-center">
                              <div className="flex items-start gap-1.5">
                                <Building2 className="h-3.5 w-3.5 text-slate-300 mt-0.5 shrink-0" />
                                <p className="text-sm text-slate-500 leading-snug">
                                  {provider.center}
                                </p>
                              </div>
                            </div>

                            {/* Serviceability */}
                            <div className="col-span-2 flex items-center justify-center">
                              {provider.serviceable ? (
                                <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full">
                                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                </div>
                              ) : (
                                <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                                  <XCircle className="h-5 w-5 text-red-500" />
                                </div>
                              )}
                            </div>

                            {/* ODA */}
                            <div className="col-span-2 flex items-center justify-center">
                              {provider.oda ? (
                                <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full">
                                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                </div>
                              ) : (
                                <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                                  <XCircle className="h-5 w-5 text-red-500" />
                                </div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                    </div>

                    {/* Legend + Note */}
                    <div className="flex items-start gap-6 mt-4 px-1">
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
                          </div>
                          Available
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">
                            <XCircle className="h-2.5 w-2.5 text-red-500" />
                          </div>
                          Not Available
                        </div>
                        <span className="font-semibold text-slate-500">
                          ODA
                        </span>
                        <span>= Out of Delivery Area</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3 mt-6">
                      <Link href="/contact" className="flex-1">
                        <button className="w-full h-12 flex items-center justify-center gap-2 bg-[#0a1628] hover:bg-[#0d1f3c] text-white text-sm font-semibold rounded-xl shadow-md shadow-[#0a1628]/20 transition-all duration-200">
                          Book a Shipment
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </Link>
                      <Link href="/contact" className="flex-1">
                        <button className="w-full h-12 flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-orange-300 hover:bg-orange-50/50 text-[#0a1628] text-sm font-semibold rounded-xl transition-all duration-200">
                          Get Quote
                        </button>
                      </Link>
                    </div>
                  </>
                ) : (
                  /* Not available state */
                  <div className="bg-white border border-red-200 rounded-2xl p-8 text-center shadow-[0_4px_24px_oklch(0.2_0.01_80/0.07)]">
                    <div className="inline-flex p-4 bg-red-50 rounded-2xl mb-4">
                      <XCircle className="h-10 w-10 text-red-400" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0a1628] mb-2">
                      Service Not Available
                    </h3>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto mb-2">
                      {result.city}, {result.state} — PIN: {result.pincode}
                    </p>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
                      We don't serve this location yet, but we're constantly
                      expanding our network.
                    </p>
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6 max-w-sm mx-auto text-left">
                      <p className="text-sm text-orange-700">
                        <span className="font-bold">Alternative:</span> Contact
                        us to discuss custom logistics solutions for your area.
                      </p>
                    </div>
                    <Link href="/contact">
                      <button className="inline-flex items-center gap-2 px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl shadow-md shadow-orange-500/25 transition-all duration-200">
                        Contact Us
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty state — Coverage Network */}
          {!result && !isLoading && (
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-extrabold text-[#0a1628] mb-2">
                    Our Coverage Network
                  </h2>
                  <p className="text-slate-500 text-sm">
                    21,000+ pin codes served across India
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    {
                      region: "North India",
                      cities: "Delhi, Chandigarh, Jaipur, Lucknow",
                      pins: "5,200+",
                      color: "from-blue-500/10",
                      icon: "🏔️",
                    },
                    {
                      region: "West India",
                      cities: "Mumbai, Pune, Ahmedabad, Surat",
                      pins: "4,800+",
                      color: "from-orange-500/10",
                      icon: "🌊",
                    },
                    {
                      region: "South India",
                      cities: "Bangalore, Chennai, Hyderabad, Kochi",
                      pins: "5,500+",
                      color: "from-emerald-500/10",
                      icon: "🌴",
                    },
                    {
                      region: "East India",
                      cities: "Kolkata, Bhubaneswar, Guwahati, Patna",
                      pins: "3,200+",
                      color: "from-purple-500/10",
                      icon: "🌿",
                    },
                  ].map((r, i) => (
                    <motion.div
                      key={r.region}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`group relative bg-gradient-to-br ${r.color} to-transparent border border-slate-200/80 hover:border-orange-300 rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_oklch(0.2_0.01_80/0.08)]`}
                    >
                      <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
                      <div className="text-2xl mb-3">{r.icon}</div>
                      <h3 className="font-bold text-[#0a1628] text-sm mb-1">
                        {r.region}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mb-3">
                        {r.cities}
                      </p>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/80 border border-orange-200 rounded-full">
                        <MapPin className="h-3 w-3 text-orange-500" />
                        <span className="text-xs font-bold text-orange-600">
                          {r.pins} PINs
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Total coverage banner */}
                <div className="relative bg-gradient-to-r from-[#0a1628] to-[#0d1f3c] rounded-2xl p-6 text-center overflow-hidden">
                  <div className="absolute top-0 left-16 right-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-24 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />
                  <div className="relative z-10">
                    <p className="text-3xl font-extrabold text-white mb-1">
                      21,000+{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                        Pin Codes
                      </span>
                    </p>
                    <p className="text-sm text-white/50">
                      Covering metro cities, tier-2 cities, and remote locations
                      across India
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
}
