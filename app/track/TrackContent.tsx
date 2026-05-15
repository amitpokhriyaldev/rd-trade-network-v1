"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Package,
  MapPin,
  Clock,
  CheckCircle,
  Truck,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import { useTrackingStore } from "@/lib/store";
import { Shipment, ShipmentStatus } from "@/types";
const statusConfig: Record<
  ShipmentStatus,
  {
    label: string;
    bg: string;
    text: string;
    iconBg: string;
    bar: string;
    icon: React.ElementType;
    progress: number;
  }
> = {
  ordered: {
    label: "Ordered",
    bg: "from-blue-600 to-blue-700",
    text: "text-blue-600",
    iconBg: "bg-blue-500/15",
    bar: "bg-blue-500",
    icon: Package,
    progress: 10,
  },
  picked_up: {
    label: "Picked Up",
    bg: "from-blue-700 to-blue-800",
    text: "text-blue-700",
    iconBg: "bg-blue-600/15",
    bar: "bg-blue-600",
    icon: Truck,
    progress: 25,
  },
  in_transit: {
    label: "In Transit",
    bg: "from-amber-500 to-amber-600",
    text: "text-amber-600",
    iconBg: "bg-amber-500/15",
    bar: "bg-amber-500",
    icon: Truck,
    progress: 50,
  },
  out_for_delivery: {
    label: "Out for Delivery",
    bg: "from-orange-500 to-orange-600",
    text: "text-orange-500",
    iconBg: "bg-orange-500/15",
    bar: "bg-orange-500",
    icon: MapPin,
    progress: 75,
  },
  delivered: {
    label: "Delivered",
    bg: "from-emerald-500 to-emerald-600",
    text: "text-emerald-600",
    iconBg: "bg-emerald-500/15",
    bar: "bg-emerald-500",
    icon: CheckCircle,
    progress: 100,
  },
  returned: {
    label: "Returned",
    bg: "from-red-500 to-red-600",
    text: "text-red-500",
    iconBg: "bg-red-500/15",
    bar: "bg-red-500",
    icon: AlertCircle,
    progress: 0,
  },
  cancelled: {
    label: "Cancelled",
    bg: "from-slate-500 to-slate-600",
    text: "text-slate-500",
    iconBg: "bg-slate-500/15",
    bar: "bg-slate-400",
    icon: AlertCircle,
    progress: 0,
  },
};

// Progress step labels
const progressSteps = [
  "Ordered",
  "Picked Up",
  "In Transit",
  "Out for Delivery",
  "Delivered",
];

export default function TrackContent() {
  const [trackingId, setTrackingId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const searchParams = useSearchParams();
  const { addToHistory } = useTrackingStore();

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setTrackingId(id);
      handleTrack(id);
    }
  }, [searchParams]);

  const handleTrack = async (id?: string) => {
    const trackId = id || trackingId;
    if (!trackId.trim()) return;
    setIsLoading(true);
    setShipment(null);
    try {
      const res = await fetch(
        `/api/tracking?trackingId=${encodeURIComponent(trackId)}`,
      );
      const data = await res.json();
      if (data.shipment) {
        setShipment(data.shipment);
        addToHistory(data.shipment);
      }
    } catch {
      // silently fail — result remains null, UI shows not-found state
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleTrack();
  };
  const currentStatus = shipment ? statusConfig[shipment.status] : null;

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
                Real-time Tracking
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Track Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Shipment
              </span>
            </h1>
            <p className="text-white/55 text-base leading-relaxed">
              Enter your tracking ID to get real-time updates on your shipment
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

      {/* ── 2. SEARCH — White (overlapping hero) ── */}
      <section className="relative bg-white pb-8">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #0a1628 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto -mt-10">
              <div className="relative bg-white border border-slate-200/80 rounded-3xl p-6 lg:p-8 shadow-[0_8px_40px_oklch(0.2_0.01_80/0.10)] overflow-hidden">
                {/* Top accent */}
                <div className="absolute top-0 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />

                <form onSubmit={handleSubmit} className="flex gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter Tracking ID (e.g., RDTN8X2K9P4M)"
                      value={trackingId}
                      onChange={(e) =>
                        setTrackingId(e.target.value.toUpperCase())
                      }
                      className="w-full h-14 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-200 text-[#0a1628] text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/15 focus:bg-white transition-all duration-200"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="h-14 px-7 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-semibold rounded-xl shadow-md shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 text-sm shrink-0"
                  >
                    {isLoading ? (
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Track
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3. RESULTS — White (continued) ── */}
      <AnimatePresence>
        {shipment && currentStatus && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="pb-24 bg-white relative"
          >
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #0a1628 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />
            <div className="container mx-auto px-4 relative z-10">
              {/* Status Banner */}
              <div className="max-w-4xl mx-auto mb-6">
                <div
                  className={`relative bg-gradient-to-r ${currentStatus.bg} rounded-2xl p-6 lg:p-8 overflow-hidden shadow-lg`}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <currentStatus.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs font-medium uppercase tracking-wider">
                          Current Status
                        </p>
                        <p className="text-2xl font-extrabold text-white">
                          {currentStatus.label}
                        </p>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-white/15 border border-white/20 rounded-xl">
                      <p className="text-xs text-white/60 uppercase tracking-wider mb-0.5">
                        Tracking ID
                      </p>
                      <p className="font-mono font-bold text-white text-sm">
                        {shipment.tracking_id}
                      </p>
                    </div>
                  </div>

                  {/* Progress steps */}
                  <div className="relative z-10 mt-6">
                    <div className="flex justify-between mb-2">
                      {progressSteps.map((step, i) => {
                        const stepProgress = (i + 1) * 20;
                        const isActive = currentStatus.progress >= stepProgress;
                        return (
                          <span
                            key={step}
                            className={`text-xs font-medium hidden sm:block ${isActive ? "text-white" : "text-white/40"}`}
                          >
                            {step}
                          </span>
                        );
                      })}
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-white rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${currentStatus.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipment Info Card */}
              <div className="max-w-4xl mx-auto mb-6">
                <div className="bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_oklch(0.2_0.01_80/0.07)] overflow-hidden relative">
                  <div className="absolute top-0 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />

                  {/* From → To — only shown when sender/receiver data is available */}
                  {shipment.sender_name && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          From
                        </p>
                        <p className="font-bold text-[#0a1628]">
                          {shipment.sender_name}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          {shipment.sender_address}
                        </p>
                        {shipment.sender_pincode && (
                          <p className="text-xs text-orange-500 font-medium mt-1">
                            PIN: {shipment.sender_pincode}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="flex items-center gap-2">
                          <div className="h-px w-8 bg-slate-300 hidden md:block" />
                          <div className="p-2.5 bg-orange-500/10 rounded-full">
                            <ArrowRight className="h-5 w-5 text-orange-500 hidden md:block" />
                            <ArrowRight className="h-5 w-5 text-orange-500 rotate-90 md:hidden" />
                          </div>
                          <div className="h-px w-8 bg-slate-300 hidden md:block" />
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          To
                        </p>
                        <p className="font-bold text-[#0a1628]">
                          {shipment.receiver_name}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          {shipment.receiver_address}
                        </p>
                        {shipment.receiver_pincode && (
                          <p className="text-xs text-orange-500 font-medium mt-1">
                            PIN: {shipment.receiver_pincode}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Details grid — only non-empty values */}
                  <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${shipment.sender_name ? "pt-6 border-t border-slate-100" : ""}`}>
                    {[
                      { label: "Current Location", value: shipment.current_location },
                      { label: "Weight", value: shipment.weight > 0 ? `${shipment.weight} kg` : null },
                      { label: "Est. Delivery", value: shipment.estimated_delivery || null },
                      { label: "Delivered On", value: shipment.actual_delivery || null },
                    ]
                      .filter((item) => item.value)
                      .map((item) => (
                        <div
                          key={item.label}
                          className="bg-slate-50 rounded-xl p-3.5 border border-slate-100"
                        >
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                            {item.label}
                          </p>
                          <p className="font-bold text-[#0a1628] text-sm">
                            {item.value}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-8 shadow-[0_4px_24px_oklch(0.2_0.01_80/0.07)] overflow-hidden relative">
                  <div className="absolute top-0 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-[#0a1628]/20 to-transparent rounded-full" />

                  <h3 className="text-lg font-extrabold text-[#0a1628] mb-7">
                    Shipment Timeline
                  </h3>

                  <div className="relative space-y-0">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-orange-400/60 via-slate-200 to-transparent" />

                    {[...shipment.timeline].reverse().map((event, index) => {
                      const evSt = statusConfig[event.status];
                      const isLatest = index === 0;

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.12 }}
                          className="relative flex gap-5 pb-7 last:pb-0"
                        >
                          {/* Dot */}
                          <div
                            className={`relative z-10 shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm
                            ${
                              isLatest
                                ? `bg-gradient-to-br ${evSt.bg} text-white shadow-md`
                                : "bg-white border-2 border-slate-200 text-slate-400"
                            }`}
                          >
                            <evSt.icon className="h-3.5 w-3.5" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 pt-1">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold
                                ${
                                  isLatest
                                    ? `${evSt.iconBg} ${evSt.text}`
                                    : "bg-slate-100 text-slate-500"
                                }`}
                              >
                                {evSt.label}
                              </span>
                              <span className="text-xs text-slate-400">
                                {new Date(event.timestamp).toLocaleString(
                                  "en-IN",
                                  {
                                    day: "numeric",
                                    month: "short",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  },
                                )}
                              </span>
                            </div>
                            <p
                              className={`text-sm font-semibold ${isLatest ? "text-[#0a1628]" : "text-slate-600"}`}
                            >
                              {event.location}
                            </p>
                            <p className="text-xs text-slate-400 mt-0.5">
                              {event.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── 4. EMPTY STATE — White ── */}
      {!shipment && !isLoading && (
        <section className="pb-24 bg-white relative">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #0a1628 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <div className="max-w-2xl mx-auto text-center pt-8">
                {/* Empty icon */}
                <div className="inline-flex p-5 bg-[#0a1628]/5 rounded-2xl mb-5">
                  <Package className="h-12 w-12 text-[#0a1628]/20" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0a1628] mb-2">
                  Enter a Tracking ID
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto">
                  Enter your shipment tracking ID above to get real-time
                  updates on your delivery status.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </div>
  );
}
