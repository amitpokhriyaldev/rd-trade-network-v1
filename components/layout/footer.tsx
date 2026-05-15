"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  Package,
  Clock,
  Shield,
  Truck,
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  services: [
    { label: "Air Cargo", href: "/services#air-cargo" },
    { label: "Surface Transport", href: "/services#surface-transport" },
    { label: "Rail Cargo", href: "/services#rail-cargo" },
    { label: "Express Delivery", href: "/services#express-delivery" },
    { label: "Document Delivery", href: "/services#document-delivery" },
    { label: "Warehousing", href: "/services#warehousing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Track Shipment", href: "/track" },
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const features = [
  { icon: Clock, label: "24/7 Support", desc: "Round the clock assistance" },
  { icon: Shield, label: "Secure Handling", desc: "Safe & secure logistics" },
  { icon: Truck, label: "Pan India", desc: "21,000+ pin codes" },
  { icon: Package, label: "Real-time Tracking", desc: "Live shipment updates" },
];

const socials = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#060e1c] text-white overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient glow — top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-500/[0.06] rounded-full blur-[100px] pointer-events-none" />

      {/* ── Features Bar ── */}
      <div className="relative z-10 border-b border-white/[0.07]">
        <div className="container mx-auto px-4 py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-3 group"
              >
                <div className="p-2.5 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-xl transition-colors duration-200 shrink-0">
                  <feature.icon className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-white/90">
                    {feature.label}
                  </p>
                  <p className="text-xs text-white/40 mt-0.5">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="relative z-10 container mx-auto px-4 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="RD Trade Network"
                width={160}
                height={52}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-white/45 text-sm leading-relaxed mb-7 max-w-xs">
              Your trusted logistics partner with 16+ years of experience.
              Comprehensive courier, air cargo, rail & surface transport across
              21,000+ pin codes in India.
            </p>

            {/* Contact details */}
            <div className="space-y-3.5">
              <a
                href="tel:+919888923612"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-orange-400 transition-colors duration-200 group"
              >
                <div className="p-1.5 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors shrink-0">
                  <Phone className="h-3.5 w-3.5 text-orange-400" />
                </div>
                +91 98889 23612 &nbsp;/&nbsp; +91 77175 29232
              </a>
              <a
                href="mailto:info@rdtradenetwork.in"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-orange-400 transition-colors duration-200 group"
              >
                <div className="p-1.5 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors shrink-0">
                  <Mail className="h-3.5 w-3.5 text-orange-400" />
                </div>
                info@rdtradenetwork.in
              </a>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <div className="p-1.5 bg-orange-500/10 rounded-lg shrink-0 mt-0.5">
                  <MapPin className="h-3.5 w-3.5 text-orange-400" />
                </div>
                Registered Office: Plot NO. 141, Phase 2, Panchkula, Haryana, IN
                134109
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-5">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Socials */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-5">
              Stay Updated
            </h4>
            <p className="text-sm text-white/40 mb-4 leading-relaxed">
              Subscribe for logistics insights and updates.
            </p>

            {/* Email input */}
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full h-10 px-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all duration-200"
              />
              <button className="w-full h-10 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors duration-200 shadow-md shadow-orange-500/20">
                Subscribe
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5 mt-6">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 flex items-center justify-center bg-white/5 hover:bg-orange-500 border border-white/10 hover:border-orange-500 rounded-xl transition-all duration-200"
                >
                  <Icon className="h-4 w-4 text-white/60 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 border-t border-white/[0.07]">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30 order-2 md:order-1">
            © {new Date().getFullYear()} RD Trade Network Pvt. Ltd. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5 order-1 md:order-2">
            {["Terms", "Privacy", "Sitemap"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-white/30 hover:text-white/70 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="order-3 h-8 w-8 flex items-center justify-center bg-orange-500/10 hover:bg-orange-500 border border-orange-500/20 hover:border-orange-500 rounded-lg transition-all duration-200 group"
          >
            <ArrowUp className="h-4 w-4 text-orange-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
}
