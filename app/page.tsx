import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Shield, Sparkles } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx/runtime/next";
import { BlogCard } from "@/components/blog-card";
import { siteConfig } from "@/lib/site";
import { MagicCard } from "@/components/magicui/magic-card";
import { FeaturedCaseStudies } from "@/components/featured-case-studies";
import { MetricsDashboard } from "@/components/metrics-dashboard";
import { ProjectDemos } from "@/components/project-demos";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import { ResourceDownloads } from "@/components/resource-downloads";
import { HealthAuditCTA } from "@/components/health-audit-cta";
import { NewsletterSignup } from "@/components/newsletter-signup";

const homepageDescription =
  "Full-service Toronto web development agency delivering Next.js websites, conversion-focused e-commerce, and high-impact Web3 products for ambitious brands.";

export const metadata: Metadata = {
  title: "Toronto Web Development Agency for High-Growth Brands",
  description: homepageDescription,
  keywords: [
    "Toronto web agency",
    "Next.js developers",
    "E-commerce development Toronto",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Toronto Web Development Agency | ValeoFx",
    description: homepageDescription,
    url: siteConfig.url,
    type: "website",
    siteName: "ValeoFx",
    images: [
      {
        url: `${siteConfig.url}/blog-og-image.png`,
        width: 1200,
        height: 630,
        alt: "ValeoFx web development agency hero graphic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toronto Web Development Agency | ValeoFx",
    description: homepageDescription,
    images: [`${siteConfig.url}/blog-og-image.png`],
  },
};

const blogSource = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

const services = [
  {
    icon: Code,
    title: "Modern Tech Stacks",
    description:
      "Build fast, responsive, and scalable applications with Next.js, React, and cutting-edge technologies.",
    features: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Sparkles,
    title: "E-Commerce Solutions",
    description:
      "Custom e-commerce platforms optimized for conversions using WordPress, WooCommerce, and Shopify.",
    features: ["WooCommerce", "Shopify", "Payment Integration", "Analytics"],
  },
  {
    icon: Zap,
    title: "Web3 & dApps",
    description:
      "Blockchain technology and decentralized applications that push the boundaries of what's possible.",
    features: ["Smart Contracts", "NFTs", "DeFi", "Web3.js"],
  },
  {
    icon: Shield,
    title: "Performance Optimization",
    description:
      "Speed improvements, Core Web Vitals optimization, and SEO enhancements for better rankings.",
    features: ["Core Web Vitals", "SEO", "Speed Optimization", "Analytics"],
  },
];

const clients = [
  "Bananique",
  "CRH",
  "Dufferin",
  "EuroMotors",
  "Fresenius",
  "GenAI",
  "MintoCrypto",
  "NOPS",
  "NorthCan",
  "Saudi Tourism Authority",
];

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function HomePage() {
  const allPages = blogSource.getPages();
  const sortedBlogs = allPages
    .sort((a, b) => {
      const dateA = new Date((a.data as { date: string }).date).getTime();
      const dateB = new Date((b.data as { date: string }).date).getTime();
      return dateB - dateA;
    })
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.05}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="mb-6 flex justify-center">
            <AnimatedGradientText>
              🚀 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
              <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                Toronto&apos;s Premier Development Studio
              </span>
            </AnimatedGradientText>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            {siteConfig.tagline}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            {siteConfig.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Start Your Project
                </span>
              </ShimmerButton>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="group">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="mt-16">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by leading brands
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-60">
              {clients.slice(0, 6).map((client) => (
                <span key={client} className="text-sm font-medium">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <MetricsDashboard />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your business
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="relative group">
                  <MagicCard className="p-8 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </MagicCard>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FeaturedCaseStudies />
        </div>
      </section>

      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ProjectDemos />
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/20 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <TestimonialsMarquee />
        </div>
      </section>

      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ResourceDownloads />
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <HealthAuditCTA />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert tips and insights on web development, SEO, and modern
              technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedBlogs.map((blog) => {
              const data = blog.data as {
                date: string;
                title: string;
                description: string;
                thumbnail: string;
              };
              const date = new Date(data.date);
              const formattedDate = formatDate(date);

              return (
                <BlogCard
                  key={blog.url}
                  url={blog.url}
                  title={data.title}
                  description={data.description}
                  date={formattedDate}
                  thumbnail={data.thumbnail}
                />
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog-listing">
              <Button size="lg" variant="outline">
                Read All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/40 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <NewsletterSignup />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/60 bg-muted/50 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to build what your competitors can&apos;t catch?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Share your goals, budget, and timeline. We&apos;ll craft a tailored roadmap—with projections,
            deliverables, and a phased engagement plan your stakeholders will love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Request a Quick Quote
                </span>
              </ShimmerButton>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="gap-2">
                Book Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <p className="font-semibold mb-1">Toronto</p>
              <p className="text-sm text-muted-foreground">
                {siteConfig.locations[0].address}
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">Mississauga</p>
              <p className="text-sm text-muted-foreground">
                {siteConfig.locations[1].address}
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">Contact</p>
              <p className="text-sm text-muted-foreground">
                {siteConfig.phone}
              </p>
              <p className="text-sm text-muted-foreground">
                {siteConfig.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
