import type { Metadata } from "next"
import Image from "next/image"
import { directors, milestones } from "@/data/mock-data"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/sections/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Award, Users, Calendar, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about RD Trade Network Pvt. Ltd. - 16+ years of logistics excellence. Meet our directors Rakesh Singh, Saty Prakash Singh, and Seema Singh.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Since 2008</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              About RD Trade Network
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Building India&apos;s most reliable logistics network with innovation, 
              integrity, and an unwavering commitment to customer satisfaction.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedSection direction="left">
              <Card className="h-full p-8 lg:p-10 hover:glow">
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To provide seamless, reliable, and cost-effective logistics solutions that empower 
                  businesses across India. We strive to be the single-window logistics partner that 
                  simplifies supply chain management through innovation, technology, and dedicated service.
                </p>
                <div className="mt-6 flex gap-4">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Award className="h-4 w-4" />
                    <span>Quality First</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Users className="h-4 w-4" />
                    <span>Customer Centric</span>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card className="h-full p-8 lg:p-10 hover:glow">
                <div className="inline-flex p-3 bg-secondary/10 rounded-xl mb-6">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To become India&apos;s most trusted and comprehensive logistics network, connecting 
                  every corner of the nation with world-class transportation and supply chain solutions. 
                  We envision a future where logistics is seamless, sustainable, and accessible to all.
                </p>
                <div className="mt-6 flex gap-4">
                  <div className="flex items-center gap-2 text-sm text-secondary">
                    <TrendingUp className="h-4 w-4" />
                    <span>Continuous Growth</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary">
                    <Calendar className="h-4 w-4" />
                    <span>Future Ready</span>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">
              From Humble Beginnings to Industry Leadership
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  RD Trade Network Pvt. Ltd. was founded in 2008 with a simple yet ambitious vision: 
                  to create a logistics network that would connect every corner of India with reliable, 
                  efficient, and affordable transportation solutions. What started as a small courier 
                  operation has today grown into one of India&apos;s most comprehensive logistics companies.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Over the past 16 years, we have expanded our services to include air cargo through 
                  partnerships with leading commercial airlines, comprehensive rail cargo services, 
                  extensive surface transport networks, and state-of-the-art warehousing solutions. 
                  Our coverage now extends to over 21,000 pin codes across India, with 24/7 operating 
                  teams in 27 major cities.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, RD Trade Network stands as a testament to what dedication, innovation, and 
                  customer-centric service can achieve. With a 99.8% delivery success rate and over 
                  50,000 satisfied clients, we continue to push the boundaries of what&apos;s possible 
                  in Indian logistics.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">
              Meet Our Directors
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Visionary leaders driving innovation and excellence in logistics
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {directors.map((director) => (
              <StaggerItem key={director.name}>
                <Card className="overflow-hidden hover:glow transition-all duration-300">
                  <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold">
                      {director.name.charAt(0)}
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-primary">{director.name}</h3>
                    <p className="text-sm text-secondary font-medium mt-1">{director.role}</p>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {director.bio}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Journey</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2">
              Our Milestones
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Key moments that shaped our growth and success
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary lg:-translate-x-px" />

              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={milestone.year}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}>
                    {/* Dot */}
                    <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg lg:-translate-x-2 z-10 mt-1.5" />

                    {/* Content */}
                    <div className={`ml-12 lg:ml-0 lg:w-5/12 ${
                      index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                    }`}>
                      <Card className="p-6 hover:glow">
                        <Badge variant="secondary" className="mb-3">{milestone.year}</Badge>
                        <h3 className="text-lg font-bold text-primary mb-2">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </Card>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block lg:w-5/12" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
