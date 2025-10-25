"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { siteConfig } from "@/lib/site";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Linkedin,
  Twitter,
  Github,
  Facebook,
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const services = [
  "Modern Tech Stacks",
  "E-Commerce Solutions",
  "Web3 & dApps",
  "WordPress Development",
  "Performance Optimization",
  "UI/UX Design",
  "General Inquiry",
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website can take 2-4 weeks, while complex applications may take 2-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes! We provide comprehensive support packages including updates, security monitoring, performance optimization, and feature enhancements. We're here to ensure your digital product continues to perform optimally.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow a structured 4-phase process: Discovery & Planning, Design & Prototyping, Development & Testing, and Launch & Support. This ensures clear communication and successful delivery at every stage.",
  },
  {
    question: "Can you work with our existing website or system?",
    answer:
      "Absolutely! We regularly work with existing platforms and can enhance, optimize, or migrate your current solution. We'll assess your current setup and recommend the best path forward.",
  },
  {
    question: "What platforms and technologies do you specialize in?",
    answer:
      "We specialize in Next.js, React, WordPress, WooCommerce, Shopify, and Web3 technologies. Our team is proficient in modern JavaScript frameworks, PHP, and blockchain development.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "We offer both fixed-price and hourly rate options depending on project requirements. After understanding your needs, we'll provide a detailed proposal with transparent pricing and deliverables.",
  },
  {
    question: "Do you work with clients outside of Toronto?",
    answer:
      "Yes! While we're based in Toronto and Mississauga, we work with clients across Canada and internationally. We're experienced in remote collaboration and maintain excellent communication regardless of location.",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <AnimatedGradientText>
              <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                Get In Touch
              </span>
            </AnimatedGradientText>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            Let&apos;s Build Something Amazing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? We&apos;d love to hear
            about your project.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MagicCard className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-muted-foreground hover:text-primary transition-colors">
                {siteConfig.phone}
              </a>
            </MagicCard>

            <MagicCard className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground hover:text-primary transition-colors">
                {siteConfig.email}
              </a>
            </MagicCard>

            <MagicCard className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Locations</h3>
              <p className="text-muted-foreground text-sm">
                Toronto & Mississauga
              </p>
            </MagicCard>
          </div>
        </div>
      </section>

      {/* Form and Office Locations */}
      <section className="py-24 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your name"
                    className="mt-2"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="(416) 123-4567"
                    className="mt-2"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="service">Service Interest *</Label>
                  <Select onValueChange={(value) => setValue("service", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your project..."
                    className="mt-2 min-h-[150px]"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <ShimmerButton
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full">
                  <span className="flex items-center justify-center gap-2 text-white">
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="h-4 w-4" />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </span>
                </ShimmerButton>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
              <div className="space-y-6">
                {siteConfig.locations.map((location, index) => (
                  <MagicCard key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          {location.city} Office
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {location.address}
                        </p>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            location.address + " " + location.city
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline">
                          View on Google Maps
                          <Send className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </MagicCard>
                ))}

                {/* Social Media */}
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, href: "#" },
                      { icon: Twitter, href: "#" },
                      { icon: Github, href: "#" },
                      { icon: Facebook, href: "#" },
                    ].map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg border bg-background hover:bg-muted transition-colors">
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-muted/50 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about working with ValeoFx.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <MagicCard key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </MagicCard>
            ))}
          </div>

          <div className="mt-12 text-center p-6 rounded-lg border bg-background">
            <h3 className="text-xl font-semibold mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              We&apos;re here to help! Reach out and we&apos;ll get back to you
              as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${siteConfig.phone}`}>
                <Button variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Button>
              </a>
              <a href={`mailto:${siteConfig.email}`}>
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="py-24 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Visit Our Toronto Office
          </h2>
          <div className="rounded-lg overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0956207896777!2d-79.3387!3d43.6629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM5JzQ2LjQiTiA3OcKwMjAnMTkuMyJX!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
