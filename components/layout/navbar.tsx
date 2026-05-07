"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Package,
  Phone,
  Mail,
  ChevronDown,
  User,
  LogOut,
  LayoutDashboard,
  Search,
  MapPin,
} from "lucide-react";
import { useAuthStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/track", label: "Track Shipment" },
  { href: "/pincode", label: "Pincode Check" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Top Bar (desktop only, hides on scroll) ── */}
      <div
        className={cn(
          "hidden lg:block bg-[#060e1c] text-white text-xs transition-all duration-500 overflow-hidden",
          isScrolled ? "h-0 py-0 opacity-0" : "h-auto py-2 opacity-100",
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919888923612"
              className="flex items-center gap-1.5 text-white/60 hover:text-orange-400 transition-colors duration-200"
            >
              <Phone className="h-3 w-3" />
              +91 98889 23612
            </a>
            <a
              href="mailto:rakesh@rdtradenetwork.in"
              className="flex items-center gap-1.5 text-white/60 hover:text-orange-400 transition-colors duration-200"
            >
              <Mail className="h-3 w-3" />
              rakesh@rdtradenetwork.in
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/track"
              className="flex items-center gap-1.5 text-white/60 hover:text-orange-400 transition-colors duration-200"
            >
              <Search className="h-3 w-3" />
              Track Order
            </Link>
            <Link
              href="/pincode"
              className="flex items-center gap-1.5 text-white/60 hover:text-orange-400 transition-colors duration-200"
            >
              <MapPin className="h-3 w-3" />
              Pincode Check
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <motion.header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_24px_oklch(0.2_0.01_80/0.08)] border-b border-slate-200/80"
            : "bg-[#0a1628]",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 lg:h-[72px] items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="RD Trade Network"
                width={140}
                height={48}
                className={cn(
                  "h-11 w-auto object-contain transition-all duration-500",
                  isScrolled ? "" : "brightness-0 invert",
                )}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      isScrolled
                        ? active
                          ? "text-[#0a1628] bg-[#0a1628]/5"
                          : "text-slate-600 hover:text-[#0a1628] hover:bg-[#0a1628]/5"
                        : active
                          ? "text-white bg-white/10"
                          : "text-white/70 hover:text-white hover:bg-white/10",
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className={cn(
                          "absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full",
                          isScrolled ? "bg-orange-500" : "bg-orange-400",
                        )}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              {isAuthenticated ? (
                <>
                  <Link href="/dashboard">
                    <button
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        isScrolled
                          ? "text-slate-600 hover:text-[#0a1628] hover:bg-slate-100"
                          : "text-white/70 hover:text-white hover:bg-white/10",
                      )}
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </button>
                  </Link>

                  {/* User dropdown */}
                  <div className="relative group">
                    <button
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        isScrolled
                          ? "text-slate-600 hover:text-[#0a1628] hover:bg-slate-100"
                          : "text-white/70 hover:text-white hover:bg-white/10",
                      )}
                    >
                      <div className="h-6 w-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <User className="h-3.5 w-3.5 text-orange-400" />
                      </div>
                      {user?.name?.split(" ")[0]}
                      <ChevronDown className="h-3 w-3 opacity-60" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-1.5 min-w-[160px]">
                        <button
                          onClick={logout}
                          className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <LogOut className="h-4 w-4" />
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <button
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        isScrolled
                          ? "text-slate-600 hover:text-[#0a1628] hover:bg-slate-100"
                          : "text-white/70 hover:text-white hover:bg-white/10",
                      )}
                    >
                      Sign In
                    </button>
                  </Link>
                  <Link href="/signup">
                    <button
                      className={cn(
                        "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md",
                        isScrolled
                          ? "bg-[#0a1628] hover:bg-[#0d1f3c] text-white shadow-[#0a1628]/20"
                          : "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/25",
                      )}
                    >
                      <Package className="h-4 w-4" />
                      Get Started
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors duration-200",
                isScrolled
                  ? "text-[#0a1628] hover:bg-slate-100"
                  : "text-white hover:bg-white/10",
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "lg:hidden border-t overflow-hidden",
                isScrolled
                  ? "bg-white border-slate-200/80"
                  : "bg-[#0d1f3c] border-white/10",
              )}
            >
              <div className="container mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200",
                        isScrolled
                          ? isActive(link.href)
                            ? "bg-[#0a1628]/5 text-[#0a1628]"
                            : "text-slate-600 hover:bg-slate-50"
                          : isActive(link.href)
                            ? "bg-white/10 text-white"
                            : "text-white/60 hover:text-white hover:bg-white/5",
                      )}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTAs */}
                <div className="pt-3 border-t border-white/10 space-y-2 mt-2">
                  {isAuthenticated ? (
                    <>
                      <Link href="/dashboard">
                        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#0a1628] text-white rounded-xl text-sm font-semibold">
                          <LayoutDashboard className="h-4 w-4" />
                          Dashboard
                        </button>
                      </Link>
                      <button
                        onClick={logout}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl text-sm font-semibold"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login">
                        <button
                          className={cn(
                            "w-full px-4 py-3 rounded-xl text-sm font-semibold border transition-colors",
                            isScrolled
                              ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                              : "border-white/15 text-white/80 hover:bg-white/5",
                          )}
                        >
                          Sign In
                        </button>
                      </Link>
                      <Link href="/signup">
                        <button className="w-full px-4 py-3 rounded-xl text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 transition-colors">
                          Get Started
                        </button>
                      </Link>
                    </>
                  )}
                </div>

                {/* Mobile contact quick links */}
                <div className="pt-3 border-t border-white/10 flex gap-3 mt-2">
                  <a
                    href="tel:+919888923612"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 text-white/50 text-xs hover:text-orange-400 hover:bg-white/10 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Call Us
                  </a>
                  <a
                    href="mailto:rakesh@rdtradenetwork.in"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 text-white/50 text-xs hover:text-orange-400 hover:bg-white/10 transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
