import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  Truck,
  Train,
  Zap,
  FileText,
  Warehouse,
  Check,
  ArrowRight,
  Phone,
  Package,
} from "lucide-react";
import { services } from "@/data/mock-data";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/sections/animated-section";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive logistics services - Air Cargo, Surface Transport, Rail Cargo, Express Delivery, Document Delivery, and Warehousing across 21,000+ pin codes.",
};

const iconMap: Record<string, React.ElementType> = {
  Plane,
  Truck,
  Train,
  Zap,
  FileText,
  Warehouse,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Comprehensive Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              End-to-end logistics solutions designed to meet every business
              need — from express deliveries to bulk cargo transportation across
              India.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview Cards */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Package;
              return (
                <StaggerItem key={service.id}>
                  <Card
                    id={service.id}
                    className="h-full hover:glow transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 4).map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {service.price_starting && (
                        <p className="text-sm font-semibold text-primary mb-4">
                          Starting from {service.price_starting}
                        </p>
                      )}
                      <Link href="/contact">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full gap-2"
                        >
                          Get Quote
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Detailed Service Tabs */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Service Details
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore each service in detail to find the perfect solution for
              your needs
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <Tabs defaultValue="air-cargo" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 h-auto gap-2 mb-8">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="text-xs lg:text-sm py-3"
                  >
                    {service.title.split(" ")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {services.map((service) => {
                const Icon = iconMap[service.icon] || Package;
                return (
                  <TabsContent key={service.id} value={service.id}>
                    <Card className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="hidden sm:inline-flex p-4 bg-primary/10 rounded-xl">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-primary mb-4">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {service.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {service.features.map((feature, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center p-4 bg-primary/5 rounded-lg">
                            {service.price_starting && (
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  Starting Price
                                </p>
                                <p className="text-xl font-bold text-primary">
                                  {service.price_starting}
                                </p>
                              </div>
                            )}
                            <div className="flex gap-3 sm:ml-auto">
                              <Link href="/contact">
                                <Button className="gap-2">
                                  <Phone className="h-4 w-4" />
                                  Request Quote
                                </Button>
                              </Link>
                              <Link href="/track">
                                <Button variant="outline" className="gap-2">
                                  Track Shipment
                                  <ArrowRight className="h-4 w-4" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>
                );
              })}
            </Tabs>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Card className="p-8 lg:p-12 text-center bg-gradient-to-r from-primary-900 to-primary-800 text-white border-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Need a Custom Logistics Solution?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Our team will work with you to design a tailored logistics plan
                that fits your business requirements and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary-600 text-white gap-2"
                  >
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+919888923612">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    +91 98889 23612
                  </Button>
                </a>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
