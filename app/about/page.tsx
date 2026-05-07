import type { Metadata } from "next";
import { milestones } from "@/data/mock-data";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/sections/animated-section";
import {
  Target,
  Eye,
  Award,
  Users,
  Calendar,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RD Trade Network Pvt. Ltd. - 16+ years of logistics excellence. Meet our directors Rakesh Singh, Saty Prakash Singh, and Seema Singh.",
};

// Updated directors data inline (overrides mock-data)
const directors = [
  {
    name: "Rakesh Singh",
    initial: "R",
    role: "Director",
    experience: "16+ Years",
    bio: "With over 16 years of hands-on experience in the logistics and courier industry, Rakesh Singh has been the driving force behind RD Trade Network's growth. His deep industry knowledge and customer-first approach have shaped the company's vision and operations from the ground up.",
  },
  {
    name: "Saty Prakash Singh",
    initial: "S",
    role: "Director",
    experience: "Operations",
    bio: "A seasoned operations expert, Saty Prakash Singh oversees the company's expansive logistics network. His strategic leadership ensures seamless coordination across 27+ cities and 21,000+ pin codes, maintaining the company's 99.8% delivery success rate.",
  },
  {
    name: "Seema Singh",
    initial: "S",
    role: "Director",
    experience: "Business Growth",
    bio: "Seema Singh brings a sharp business acumen and client relationship expertise to the leadership team. Her focus on service quality, client satisfaction, and sustainable growth has been instrumental in building trust with 50,000+ businesses across India.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ── 1. HERO — Dark Navy ── */}
      <section className="relative py-24 lg:py-36 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] overflow-hidden">
        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glows */}
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
                Since 2021
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                RD Trade Network
              </span>
            </h1>
            <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
              Building India's most reliable logistics network with innovation,
              integrity, and an unwavering commitment to customer satisfaction.
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

      {/* ── 2. MISSION & VISION — White ── */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #0a1628 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0a1628]/5 border border-[#0a1628]/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-[#0a1628]/60 uppercase tracking-wider">
                Our Purpose
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0a1628] leading-tight mt-2">
              Mission &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Vision
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Mission */}
            <AnimatedSection direction="left">
              <div className="group relative h-full bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_oklch(0.2_0.01_80/0.10)]">
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex p-3 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-xl mb-6 transition-colors duration-300">
                    <Target className="h-7 w-7 text-orange-500" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0a1628] mb-4">
                    Our Mission
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-base lg:text-lg">
                    To provide seamless, reliable, and cost-effective logistics
                    solutions that empower businesses across India. We strive to
                    be the single-window logistics partner that simplifies
                    supply chain management through innovation, technology, and
                    dedicated service.
                  </p>
                  <div className="mt-6 flex gap-4 flex-wrap">
                    {["Quality First", "Customer Centric"].map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-1.5 text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection direction="right">
              <div className="group relative h-full bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_oklch(0.2_0.01_80/0.10)]">
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#0a1628]/40 to-transparent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex p-3 bg-[#0a1628]/8 group-hover:bg-[#0a1628]/12 rounded-xl mb-6 transition-colors duration-300">
                    <Eye className="h-7 w-7 text-[#0a1628]" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0a1628] mb-4">
                    Our Vision
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-base lg:text-lg">
                    To become India's most trusted and comprehensive logistics
                    network, connecting every corner of the nation with
                    world-class transportation and supply chain solutions. We
                    envision a future where logistics is seamless, sustainable,
                    and accessible to all.
                  </p>
                  <div className="mt-6 flex gap-4 flex-wrap">
                    {["Continuous Growth", "Future Ready"].map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-1.5 text-sm font-medium text-[#0a1628]/70 bg-[#0a1628]/5 px-3 py-1.5 rounded-full"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 3. COMPANY STORY — Dark Navy ── */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-orange-400" />
              <span className="text-sm text-orange-300 font-medium uppercase tracking-wider">
                Our Story
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mt-2">
              From Humble Beginnings to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Industry Leadership
              </span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
                {/* Top accent */}
                <div className="absolute top-0 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />

                <div className="space-y-6 text-white/60 text-base lg:text-lg leading-relaxed">
                  <p>
                    RD Trade Network Pvt. Ltd. was founded in{" "}
                    <span className="text-orange-400 font-semibold">2021</span>{" "}
                    with a simple yet ambitious vision: to create a logistics
                    network that would connect every corner of India with
                    reliable, efficient, and affordable transportation
                    solutions. What started as a focused courier operation has
                    today grown into one of India's most comprehensive logistics
                    companies.
                  </p>
                  <p>
                    We have expanded our services to include air cargo through
                    partnerships with leading commercial airlines, comprehensive
                    rail cargo services, extensive surface transport networks,
                    and state-of-the-art warehousing solutions. Our coverage now
                    extends to over{" "}
                    <span className="text-white/90 font-semibold">
                      21,000 pin codes
                    </span>{" "}
                    across India, with 24/7 operating teams in{" "}
                    <span className="text-white/90 font-semibold">
                      27 major cities
                    </span>
                    .
                  </p>
                  <p>
                    Today, RD Trade Network stands as a testament to what
                    dedication, innovation, and customer-centric service can
                    achieve. With a{" "}
                    <span className="text-orange-400 font-semibold">
                      99.8% delivery success rate
                    </span>{" "}
                    and over{" "}
                    <span className="text-orange-400 font-semibold">
                      50,000 satisfied clients
                    </span>
                    , we continue to push the boundaries of what's possible in
                    Indian logistics.
                  </p>
                </div>

                {/* Mini stats row */}
                <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
                  {[
                    { value: "2021", label: "Founded" },
                    { value: "50,000+", label: "Happy Clients" },
                    { value: "99.8%", label: "Success Rate" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-2xl font-extrabold text-orange-400">
                        {s.value}
                      </p>
                      <p className="text-xs text-white/40 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 4. DIRECTORS — White ── */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #0a1628 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0a1628]/5 border border-[#0a1628]/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-[#0a1628]/60 uppercase tracking-wider">
                Leadership
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0a1628] leading-tight mt-2">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Directors
              </span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
              Visionary leaders driving innovation and excellence in logistics
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {directors.map((director) => (
              <StaggerItem key={director.name}>
                <div className="group relative bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_oklch(0.2_0.01_80/0.10)]">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  {/* Avatar area */}
                  <div className="relative h-52 bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] flex items-center justify-center overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-4xl font-extrabold shadow-lg shadow-orange-500/30">
                        {director.initial}
                      </div>
                      <span className="px-3 py-1 bg-orange-500/15 border border-orange-500/25 rounded-full text-xs text-orange-300 font-medium">
                        {director.experience}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-extrabold text-[#0a1628]">
                      {director.name}
                    </h3>
                    <p className="text-sm font-semibold text-orange-500 mt-1">
                      {director.role}
                    </p>
                    <div className="h-px bg-slate-100 my-4" />
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {director.bio}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── 5. TIMELINE — Dark Navy ── */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
              </span>
              <span className="text-sm text-orange-300 font-medium uppercase tracking-wider">
                Journey
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mt-2">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Milestones
              </span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Key moments that shaped our growth and success
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline vertical line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/60 via-orange-400/30 to-transparent lg:-translate-x-px" />

              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={milestone.year}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div
                    className={`relative flex items-start gap-8 mb-10 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-[#0a1628] shadow-lg shadow-orange-500/40 lg:-translate-x-2 z-10 mt-2" />

                    {/* Card */}
                    <div
                      className={`ml-12 lg:ml-0 lg:w-5/12 ${
                        index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                      }`}
                    >
                      <div className="group relative bg-white/5 hover:bg-white/8 backdrop-blur-md border border-white/10 hover:border-orange-500/30 rounded-2xl p-6 transition-all duration-300 overflow-hidden">
                        {/* Hover bottom accent */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full transition-all duration-500" />

                        <div
                          className={`flex items-center gap-2 mb-3 ${
                            index % 2 === 0 ? "lg:justify-end" : ""
                          }`}
                        >
                          <span className="inline-flex items-center px-3 py-1 bg-orange-500/15 border border-orange-500/25 rounded-full text-xs font-bold text-orange-400">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:w-5/12" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
