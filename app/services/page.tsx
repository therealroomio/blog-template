import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { siteConfig } from "@/lib/site";
import {
  Code,
  ShoppingCart,
  Blocks,
  Zap,
  Palette,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  FileCode,
  Rocket,
  CheckCircle,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive web development services including modern tech stacks, e-commerce solutions, Web3 development, WordPress, performance optimization, and UI/UX design.",
};

const services = [
  {
    icon: Code,
    title: "Modern Tech Stacks",
    description:
      "Build lightning-fast, scalable applications with the latest web technologies. We specialize in Next.js, React, TypeScript, and modern frameworks that deliver exceptional performance and user experience.",
    features: [
      "Next.js 15 with App Router",
      "React 19 Server Components",
      "TypeScript for type safety",
      "Tailwind CSS for rapid styling",
      "API development with tRPC/GraphQL",
      "Real-time features with WebSockets",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
    caseStudy: {
      name: "Visit Saudi",
      result: "40% increase in user engagement",
    },
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Custom e-commerce platforms optimized for conversions. From small online shops to enterprise-level marketplaces, we create shopping experiences that drive sales and delight customers.",
    features: [
      "WooCommerce custom development",
      "Shopify theme & app development",
      "Payment gateway integration",
      "Inventory management systems",
      "Multi-currency & multi-language",
      "Advanced analytics & reporting",
    ],
    technologies: [
      "WooCommerce",
      "Shopify",
      "Stripe",
      "PayPal",
      "WordPress",
      "React",
    ],
    caseStudy: {
      name: "EuroMotors",
      result: "300% increase in online bookings",
    },
  },
  {
    icon: Blocks,
    title: "Web3 & dApps",
    description:
      "Cutting-edge blockchain solutions and decentralized applications. We build secure, transparent, and innovative Web3 experiences that leverage the power of blockchain technology.",
    features: [
      "Smart contract development",
      "NFT marketplace creation",
      "DeFi protocol integration",
      "Wallet integration (MetaMask, etc.)",
      "Token creation & management",
      "Blockchain data indexing",
    ],
    technologies: [
      "Solidity",
      "Web3.js",
      "Ethers.js",
      "Thirdweb",
      "Ethereum",
      "IPFS",
    ],
    caseStudy: {
      name: "MintoCrypto",
      result: "Successfully launched NFT platform",
    },
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Expert WordPress development for content-rich websites and enterprise applications. Custom themes, plugins, and optimizations that make WordPress work harder for your business.",
    features: [
      "Custom theme development",
      "Plugin development & customization",
      "Headless WordPress with Next.js",
      "WooCommerce integration",
      "Security hardening",
      "Performance optimization",
    ],
    technologies: [
      "WordPress",
      "PHP",
      "ACF Pro",
      "WooCommerce",
      "REST API",
      "GraphQL",
    ],
    caseStudy: {
      name: "Multiple Clients",
      result: "50+ WordPress sites delivered",
    },
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed improvements that boost rankings and conversions. We optimize Core Web Vitals, reduce load times, and implement best practices that make your site blazingly fast.",
    features: [
      "Core Web Vitals optimization",
      "Image & asset optimization",
      "Code splitting & lazy loading",
      "CDN setup & configuration",
      "Database query optimization",
      "Caching strategies",
    ],
    technologies: [
      "Lighthouse",
      "WebPageTest",
      "Cloudflare",
      "Vercel",
      "Redis",
      "CDN",
    ],
    caseStudy: {
      name: "Various Projects",
      result: "Average 70% speed improvement",
    },
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love. We combine aesthetic excellence with conversion-focused design to create experiences that look great and perform even better.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Responsive & mobile-first design",
      "Accessibility (WCAG) compliance",
      "Design systems & component libraries",
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Framer",
      "InVision",
      "Principle",
    ],
    caseStudy: {
      name: "Client Projects",
      result: "Consistent user satisfaction scores 90%+",
    },
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your business, goals, and target audience. Through detailed discussions and research, we create a comprehensive project roadmap.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Our designers create wireframes and high-fidelity mockups that bring your vision to life. We iterate based on your feedback until it's perfect.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Our developers build your solution using best practices and modern technologies. Rigorous testing ensures everything works flawlessly.",
    icon: FileCode,
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We handle deployment and provide ongoing support to ensure your digital product continues to perform optimally and evolve with your needs.",
    icon: Rocket,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <AnimatedGradientText>
              <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                Our Services
              </span>
            </AnimatedGradientText>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            Comprehensive Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            From modern web applications to blockchain solutions, we offer
            end-to-end services that transform your digital presence.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}>
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-3 text-lg">
                        What We Offer:
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50 border">
                      <div className="text-sm text-muted-foreground mb-1">
                        Case Study
                      </div>
                      <div className="font-semibold">
                        {service.caseStudy.name}
                      </div>
                      <div className="text-sm text-primary">
                        {service.caseStudy.result}
                      </div>
                    </div>
                  </div>

                  <div className={isEven ? "" : "lg:col-start-1"}>
                    <div className="relative">
                      <MagicCard className="p-12 min-h-[400px] flex items-center justify-center">
                        <div className="text-center">
                          <Icon className="h-32 w-32 text-primary/20 mx-auto mb-4" />
                          <div className="text-6xl font-bold text-primary/10">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                        </div>
                      </MagicCard>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-muted/50 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="relative overflow-hidden rounded-lg border bg-background p-6 h-full hover:shadow-lg transition-shadow">
                    <BorderBeam size={250} duration={12} delay={index * 3} />
                    <div className="mb-4">
                      <div className="text-5xl font-bold text-primary/20 mb-4">
                        {item.step}
                      </div>
                      <div className="p-3 rounded-lg bg-primary/10 w-fit">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose ValeoFx
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re not just developers - we&apos;re your partners in
              digital success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "Expert Team",
                description:
                  "Seasoned professionals with deep expertise across modern web technologies and platforms.",
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                description:
                  "Agile development approach ensures quick turnaround without compromising quality.",
              },
              {
                icon: MessageSquare,
                title: "Clear Communication",
                description:
                  "Regular updates, transparent pricing, and open communication throughout the project.",
              },
              {
                icon: Code,
                title: "Clean Code",
                description:
                  "We write maintainable, well-documented code that follows industry best practices.",
              },
              {
                icon: Rocket,
                title: "Scalable Solutions",
                description:
                  "Build for today, prepared for tomorrow. Our solutions grow with your business.",
              },
              {
                icon: CheckCircle2,
                title: "Ongoing Support",
                description:
                  "We don't disappear after launch. Comprehensive support keeps your site running smoothly.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <MagicCard key={index} className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </MagicCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-muted/50 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss your project requirements and create a custom
            solution that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Schedule a Consultation
                </span>
              </ShimmerButton>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="group">
                View Our Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="mt-12">
            <p className="text-sm text-muted-foreground mb-2">
              Questions? Reach out anytime
            </p>
            <p className="font-semibold">{siteConfig.phone}</p>
            <p className="text-muted-foreground">{siteConfig.email}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
