"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { siteConfig } from "@/lib/site";
import { ExternalLink, Quote } from "lucide-react";

type ProjectCategory =
  | "All"
  | "Web Development"
  | "E-Commerce"
  | "Web3"
  | "WordPress";

interface Project {
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: ProjectCategory;
  image?: string;
  link?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

const projects: Project[] = [
  {
    name: "Visit Saudi",
    description:
      "Comprehensive tourism platform showcasing Saudi Arabia's destinations",
    longDescription:
      "A full-scale tourism platform built for the Saudi Arabia Tourism Authority, featuring interactive maps, destination guides, booking systems, and multilingual support. The platform handles millions of visitors and provides an immersive experience of Saudi Arabia's rich culture and heritage.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Contentful"],
    category: "Web Development",
    stats: [
      { label: "Monthly Visitors", value: "500K+" },
      { label: "Page Load Time", value: "< 2s" },
      { label: "User Engagement", value: "+40%" },
    ],
  },
  {
    name: "MintoCrypto",
    description: "Web3 decentralized application for cryptocurrency trading",
    longDescription:
      "A comprehensive Web3 platform enabling users to mint, trade, and manage cryptocurrency assets. Features include wallet integration, smart contract interactions, real-time price tracking, and a user-friendly interface for both beginners and advanced traders.",
    tech: ["React", "Node.js", "Web3.js", "Thirdweb", "Solidity", "IPFS"],
    category: "Web3",
    stats: [
      { label: "Total Transactions", value: "10K+" },
      { label: "Active Users", value: "5K+" },
      { label: "Smart Contracts", value: "15+" },
    ],
  },
  {
    name: "EuroMotors",
    description:
      "Premium auto servicing platform with vehicle data integration",
    longDescription:
      "A sophisticated automotive service platform that integrates with the NHTSA API to provide comprehensive vehicle information. Features online booking, service history tracking, parts ordering, and a custom CMS for managing inventory and appointments.",
    tech: ["Next.js", "React", "NHTSA API", "GSAP", "PostgreSQL", "Stripe"],
    category: "Web Development",
    stats: [
      { label: "Online Bookings", value: "+300%" },
      { label: "Customer Retention", value: "95%" },
      { label: "Avg. Response Time", value: "< 1hr" },
    ],
  },
  {
    name: "Bananique E-Store",
    description: "Modern e-commerce platform for premium banana products",
    longDescription:
      "A sleek WooCommerce-powered online store featuring custom product configurator, subscription management, multi-currency support, and integrated loyalty program. Built with performance and conversion optimization in mind.",
    tech: ["WordPress", "WooCommerce", "React", "Stripe", "Mailchimp"],
    category: "E-Commerce",
    stats: [
      { label: "Conversion Rate", value: "4.5%" },
      { label: "Average Order", value: "$127" },
      { label: "Cart Abandonment", value: "-35%" },
    ],
  },
  {
    name: "Dufferin Aggregates",
    description: "Enterprise resource management system for construction",
    longDescription:
      "A comprehensive ERP system for managing construction materials, logistics, and customer relationships. Features include real-time inventory tracking, automated invoicing, route optimization, and detailed analytics dashboards.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis"],
    category: "Web Development",
    stats: [
      { label: "Processing Time", value: "-60%" },
      { label: "Error Reduction", value: "85%" },
      { label: "ROI", value: "250%" },
    ],
  },
  {
    name: "GenAI Content Hub",
    description: "AI-powered content generation and management platform",
    longDescription:
      "A cutting-edge WordPress-based content hub integrated with AI APIs for automated content generation, SEO optimization, and multi-channel distribution. Features include smart content recommendations and performance analytics.",
    tech: ["WordPress", "PHP", "OpenAI API", "React", "Node.js"],
    category: "WordPress",
    stats: [
      { label: "Content Output", value: "+400%" },
      { label: "SEO Score", value: "95/100" },
      { label: "Time Saved", value: "15hrs/week" },
    ],
  },
  {
    name: "NorthCan Marketplace",
    description: "Multi-vendor e-commerce marketplace for Canadian products",
    longDescription:
      "A robust Shopify-based marketplace connecting Canadian artisans with customers worldwide. Features vendor dashboards, commission management, advanced search and filtering, and integrated shipping solutions.",
    tech: ["Shopify", "Liquid", "React", "Node.js", "Stripe Connect"],
    category: "E-Commerce",
    stats: [
      { label: "Active Vendors", value: "150+" },
      { label: "Monthly Sales", value: "$500K+" },
      { label: "Products Listed", value: "3K+" },
    ],
  },
];

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    position: "Director of Digital, Saudi Tourism Authority",
    content:
      "ValeoFx delivered an exceptional platform that exceeded our expectations. Their technical expertise and attention to detail made the Visit Saudi platform a huge success.",
    company: "Saudi Tourism Authority",
  },
  {
    name: "Marcus Chen",
    position: "CEO, MintoCrypto",
    content:
      "The team at ValeoFx demonstrated deep understanding of blockchain technology. They built a secure, scalable Web3 platform that our users love.",
    company: "MintoCrypto",
  },
  {
    name: "Sarah Johnson",
    position: "Operations Manager, EuroMotors",
    content:
      "Our online booking system has transformed our business. ValeoFx's solution is intuitive, reliable, and has significantly increased our customer satisfaction.",
    company: "EuroMotors",
  },
];

const categories: ProjectCategory[] = [
  "All",
  "Web Development",
  "E-Commerce",
  "Web3",
  "WordPress",
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <AnimatedGradientText>
              <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </AnimatedGradientText>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            Projects We&apos;re Proud Of
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest work and see how we&apos;ve helped businesses
            transform their digital presence.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="relative group">
                <div className="relative overflow-hidden rounded-lg border bg-background hover:shadow-2xl transition-all duration-300">
                  <BorderBeam size={300} duration={15} delay={index * 2} />
                  <div className="p-8">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-primary px-3 py-1 rounded-full bg-primary/10">
                          {project.category}
                        </span>
                        {project.link && (
                          <Link
                            href={project.link}
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition-colors">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.longDescription}
                      </p>
                    </div>

                    {project.stats && (
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-lg bg-muted/50">
                        {project.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg font-bold text-primary">
                              {stat.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-muted/50 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from the clients
              we&apos;ve worked with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <MagicCard key={index} className="p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="pt-4 border-t">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </div>
                  <div className="text-xs text-primary mt-1">
                    {testimonial.company}
                  </div>
                </div>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "10+", label: "Notable Clients" },
              { value: "5+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-muted/50 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let&apos;s create something amazing together. Get in touch to
            discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Start Your Project
                </span>
              </ShimmerButton>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Explore Our Services
              </Button>
            </Link>
          </div>
          <div className="mt-12">
            <p className="text-sm text-muted-foreground mb-2">
              Have questions? We&apos;re here to help
            </p>
            <p className="font-semibold">{siteConfig.phone}</p>
            <p className="text-muted-foreground">{siteConfig.email}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
