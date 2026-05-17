"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import toast from "react-hot-toast";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setIsSubmitted(true);
      setFormData(emptyForm);
      toast.success("Message sent! We'll get back to you soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full h-11 px-4 rounded-xl bg-white border border-slate-200 text-[#0a1628] text-sm placeholder:text-slate-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/15 transition-all duration-200";

  const labelClass = "block text-sm font-semibold text-[#0a1628]/80 mb-1.5";

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
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Us
              </span>
            </h1>
            <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
              Have questions about our services? Need a custom logistics
              solution? Our team is here to help you 24/7.
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

      {/* ── 2. CONTACT INFO CARDS — White (overlapping hero) ── */}
      <section className="relative bg-white pt-4 pb-0 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 -mt-10 relative z-10">
            {[
              {
                icon: Phone,
                label: "Phone",
                content: (
                  <div className="space-y-1">
                    <a
                      href="tel:+919888923612"
                      className="block text-sm text-slate-500 hover:text-orange-500 transition-colors duration-200"
                    >
                      +91 98889 23612
                    </a>
                    <a
                      href="tel:+917717529232"
                      className="block text-sm text-slate-500 hover:text-orange-500 transition-colors duration-200"
                    >
                      +91 77175 29232
                    </a>
                  </div>
                ),
              },
              {
                icon: Mail,
                label: "Email",
                content: (
                  <a
                    href="mailto:rdtradenetwork@outlook.com"
                    className="block text-sm text-slate-500 hover:text-orange-500 transition-colors duration-200"
                  >
                    <br></br>
                    rdtradenetwork@outlook.com
                  </a>
                ),
              },
              {
                icon: Clock,
                label: "Working Hours",
                content: (
                  <div className="text-sm text-slate-500 space-y-1">
                    <p className="font-medium text-[#0a1628]">
                      24/7 Operations
                    </p>
                    <p>Support: 9 AM – 9 PM</p>
                  </div>
                ),
              },
            ].map((card, i) => (
              <AnimatedSection key={card.label} delay={i * 0.1}>
                <div className="group bg-white border border-slate-200/80 hover:border-orange-300 rounded-2xl p-6 text-center shadow-[0_4px_24px_oklch(0.2_0.01_80/0.06)] hover:shadow-[0_8px_32px_oklch(0.2_0.01_80/0.10)] transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
                  <div className="inline-flex p-3 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-xl mb-4 transition-colors duration-300">
                    <card.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-[#0a1628] text-sm mb-2">
                    {card.label}
                  </h3>
                  {card.content}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FORM + MAP — White (continued) ── */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #0a1628 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* ── Contact Form ── */}
            <AnimatedSection direction="left">
              <div className="bg-white border border-slate-200/80 rounded-3xl p-8 lg:p-10 shadow-[0_4px_32px_oklch(0.2_0.01_80/0.07)] overflow-hidden relative">
                {/* Top accent */}
                <div className="absolute top-0 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 flex flex-col items-center"
                    >
                      <div className="h-20 w-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5">
                        <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-[#0a1628] mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-slate-500 text-sm max-w-xs leading-relaxed mb-6">
                        Thank you for reaching out. Our team will contact you
                        within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-[#0a1628] hover:bg-slate-50 transition-colors"
                      >
                        Send Another Message
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1628] mb-1">
                        Send Us a Message
                      </h2>
                      <p className="text-slate-500 text-sm mb-7">
                        Fill out the form below and we'll get back to you within
                        24 hours.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="name" className={labelClass}>
                              Full Name *
                            </label>
                            <input
                              id="name"
                              type="text"
                              placeholder="John Doe"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className={labelClass}>
                              Email Address *
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="john@company.com"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="phone" className={labelClass}>
                              Phone Number *
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              placeholder="+91 98765 43210"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label htmlFor="company" className={labelClass}>
                              Company Name
                            </label>
                            <input
                              id="company"
                              type="text"
                              placeholder="Your Company Ltd."
                              value={formData.company}
                              onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="service" className={labelClass}>
                            Service Interest
                          </label>
                          <select
                            id="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={`${inputClass} cursor-pointer`}
                          >
                            <option value="">Select a service</option>
                            <option value="air-cargo">Air Cargo</option>
                            <option value="surface">Surface Transport</option>
                            <option value="rail">Rail Cargo</option>
                            <option value="express">Express Delivery</option>
                            <option value="document">Document Delivery</option>
                            <option value="warehousing">Warehousing</option>
                            <option value="other">Other / Custom</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className={labelClass}>
                            Message *
                          </label>
                          <textarea
                            id="message"
                            placeholder="Tell us about your logistics requirements..."
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className={`${inputClass} h-auto resize-none py-3`}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white text-sm font-semibold rounded-xl shadow-md shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-orange-500/40"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>

            {/* ── Map + Info ── */}
            <AnimatedSection direction="right">
              <div className="space-y-5 h-full flex flex-col">
                {/* Map */}
                <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_4px_24px_oklch(0.2_0.01_80/0.06)] flex-1 min-h-[280px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d77632.97412332287!2d76.79148061304974!3d30.692381918921658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x390f95001449661b%3A0x54049c3cc8903606!2sRd%20Trade%20Network%2C%20phase%202%2C%20141%2C%20Industrial%20Area%20Phase%202%2C%20Panchkula%2C%20Haryana%20134113!3m2!1d30.676160999999997!2d76.8349853!4m5!1s0x390f95001449661b%3A0x54049c3cc8903606!2sRd%20Trade%20Network%2C%20phase%202%2C%20141%2C%20Industrial%20Area%20Phase%202%2C%20Panchkula%2C%20Haryana%20134113!3m2!1d30.676160999999997!2d76.8349853!5e0!3m2!1sen!2sin!4v1778171819975!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "280px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="RD Trade Network Office Location"
                  />
                </div>

                {/* Office Address */}
                <div className="group bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_4px_24px_oklch(0.2_0.01_80/0.08)] relative overflow-hidden">
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
                  <h3 className="font-bold text-[#0a1628] mb-4 flex items-center gap-2">
                    <div className="p-1.5 bg-orange-500/10 rounded-lg">
                      <MapPin className="h-4 w-4 text-orange-500" />
                    </div>
                    Office Address
                  </h3>
                  <div className="text-sm text-slate-500 space-y-1 pl-1">
                    <p className="font-semibold text-[#0a1628]">
                      RD Trade Network Pvt. Ltd.
                    </p>
                    <p>Registered Office</p>
                    <p>
                      Plot NO. 141, Industrial Area Phase 2, Panchkula, Haryana,
                      IN 134113
                    </p>
                  </div>
                </div>

                {/* Emergency Contact — Dark Card */}
                <div className="relative bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] rounded-2xl p-6 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1.5 bg-orange-500/15 rounded-lg">
                        <Phone className="h-4 w-4 text-orange-400" />
                      </div>
                      <h3 className="font-bold text-white text-sm">
                        Emergency Contact
                      </h3>
                      <span className="ml-auto px-2 py-0.5 bg-orange-500/15 border border-orange-500/25 rounded-full text-xs text-orange-300 font-medium">
                        24/7
                      </span>
                    </div>
                    <p className="text-white/45 text-xs mb-4 pl-1">
                      For urgent shipments or critical logistics needs
                    </p>
                    <div className="space-y-2.5">
                      {["+91 98889 23612", "+91 77175 29232"].map((num) => (
                        <a
                          key={num}
                          href={`tel:${num.replace(/\s/g, "")}`}
                          className="flex items-center gap-2.5 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/30 rounded-xl text-sm text-white/70 hover:text-orange-400 transition-all duration-200 group/num"
                        >
                          <Phone className="h-3.5 w-3.5 text-orange-500/60 group-hover/num:text-orange-400 shrink-0 transition-colors" />
                          {num}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
