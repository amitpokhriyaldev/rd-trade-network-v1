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
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-950 text-white">
      {/* Features Bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-3">
                <div className="p-2.5 bg-secondary/20 rounded-lg">
                  <feature.icon className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{feature.label}</p>
                  <p className="text-xs text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="RD Trade Network Logo"
                width={100}
                height={32}
                className="h-15 w-100 object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted logistics partner with 16+ years of experience. We
              provide comprehensive courier, air cargo, rail cargo, and surface
              transport solutions across 21,000+ pin codes in India.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+919888923612"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-secondary transition-colors"
              >
                <Phone className="h-4 w-4 text-secondary" />
                +91 98889 23612 / +91 77175 29232
              </a>
              <a
                href="mailto:rakesh@rdtradenetwork.in"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-secondary transition-colors"
              >
                <Mail className="h-4 w-4 text-secondary" />
                rakesh@rdtradenetwork.in
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <span>Corporate Office, New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-secondary">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-secondary">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-secondary">
              Support
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-secondary">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for logistics insights and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary"
              />
              <Button
                size="sm"
                className="bg-secondary hover:bg-secondary-600 text-white"
              >
                Subscribe
              </Button>
            </div>
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-white/10 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} RD Trade Network Pvt. Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 bg-secondary/20 rounded-lg hover:bg-secondary transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
