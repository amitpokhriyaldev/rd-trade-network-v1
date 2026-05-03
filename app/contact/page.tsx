"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Have questions about our services? Need a custom logistics
              solution? Our team is here to help you 24/7.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={0}>
              <Card className="hover:glow transition-all">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Phone</h3>
                  <a
                    href="tel:+919888923612"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    +91 98889 23612
                  </a>
                  <a
                    href="tel:+917717529232"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block mt-1"
                  >
                    +91 77175 29232
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="hover:glow transition-all">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 bg-secondary/10 rounded-xl mb-4">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Email</h3>
                  <a
                    href="mailto:rakesh@rdtradenetwork.in"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    rakesh@rdtradenetwork.in
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="hover:glow transition-all">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">
                    Working Hours
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    24/7 Operations
                    <br />
                    Customer Support: 9 AM - 9 PM
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <AnimatedSection direction="left">
              <Card className="p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. Our team will contact you
                      shortly.
                    </p>
                    <Button
                      className="mt-6"
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Your Company Ltd." />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select
                        id="service"
                        className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your logistics requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2"
                      isLoading={isSubmitting}
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </AnimatedSection>

            {/* Map + Info */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.066!2d77.209!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-primary mb-4">
                    Office Address
                  </h3>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">
                        RD Trade Network Pvt. Ltd.
                      </p>
                      <p>Corporate Office</p>
                      <p>New Delhi, India - 110001</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
                  <h3 className="font-semibold mb-3">Emergency Contact</h3>
                  <p className="text-sm text-white/70 mb-4">
                    For urgent shipments or critical logistics needs, reach us
                    directly:
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+919888923612"
                      className="flex items-center gap-2 text-sm hover:text-secondary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      +91 98889 23612
                    </a>
                    <a
                      href="tel:+917717529232"
                      className="flex items-center gap-2 text-sm hover:text-secondary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      +91 77175 29232
                    </a>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
