import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { siteConfig } from "@/lib/site";
import {
  Code,
  Users,
  Target,
  Heart,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ValeoFx - Toronto's premier development studio specializing in modern web technologies, e-commerce solutions, and Web3 development.",
};

const values = [
  {
    icon: Target,
    title: "Excellence in Execution",
    description:
      "We're committed to delivering high-quality solutions that exceed expectations and drive real business results.",
  },
  {
    icon: Heart,
    title: "Client-Centric Approach",
    description:
      "Your success is our success. We build lasting partnerships through transparency, communication, and dedication.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description:
      "We stay ahead of technology trends and bring fresh, creative solutions to every project we undertake.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "We're always learning, improving, and adapting to provide you with the most cutting-edge solutions.",
  },
];

const technologies = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "WordPress", category: "CMS" },
  { name: "WooCommerce", category: "E-Commerce" },
  { name: "Shopify", category: "E-Commerce" },
  { name: "Web3.js", category: "Blockchain" },
  { name: "Ethereum", category: "Blockchain" },
  { name: "Solidity", category: "Smart Contracts" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "GraphQL", category: "API" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <AnimatedGradientText>
                <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                  About ValeoFx
                </span>
              </AnimatedGradientText>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              {siteConfig.tagline}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A Toronto-based development studio pushing the boundaries of web
              technology and design.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  ValeoFx is a Toronto-based development studio that specializes
                  in creating exceptional digital experiences. Founded with a
                  passion for technology and design, we&apos;ve grown into a
                  trusted partner for businesses looking to establish or enhance
                  their digital presence.
                </p>
                <p>
                  Our team brings together experts in modern web development,
                  e-commerce solutions, and blockchain technology. We don&apos;t
                  just build websites - we craft digital experiences that drive
                  results, engage users, and help businesses thrive in the
                  digital age.
                </p>
                <p>
                  From startups to established enterprises, we&apos;ve helped
                  countless clients across Toronto, Mississauga, and beyond turn
                  their digital vision into reality. Our work spans tourism
                  platforms, e-commerce stores, Web3 applications, and
                  everything in between.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <MagicCard className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </MagicCard>
              <MagicCard className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">
                  Notable Clients
                </div>
              </MagicCard>
              <MagicCard className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </MagicCard>
              <MagicCard className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </MagicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-muted/50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Mission</h2>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To empower businesses with cutting-edge digital solutions that not
            only meet today&apos;s needs but anticipate tomorrow&apos;s
            opportunities. We believe in building long-term partnerships through
            exceptional work, transparent communication, and unwavering
            commitment to our clients&apos; success.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <MagicCard key={index} className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </MagicCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-6 bg-muted/50 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Technologies We Master
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with the latest and most powerful technologies to build
              robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border bg-background hover:shadow-lg transition-shadow text-center">
                <div className="font-semibold mb-1">{tech.name}</div>
                <div className="text-xs text-muted-foreground">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse group of talented professionals passionate about
              creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: "Development Team",
                description:
                  "Expert developers specializing in modern frameworks, e-commerce platforms, and blockchain technology.",
                icon: Code,
              },
              {
                role: "Design Team",
                description:
                  "Creative designers focused on crafting intuitive, beautiful interfaces that users love.",
                icon: Lightbulb,
              },
              {
                role: "Strategy Team",
                description:
                  "Strategic thinkers who ensure every project aligns with business goals and delivers ROI.",
                icon: Target,
              },
            ].map((team, index) => {
              const Icon = team.icon;
              return (
                <MagicCard key={index} className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{team.role}</h3>
                  <p className="text-muted-foreground">{team.description}</p>
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something amazing
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Get In Touch
                </span>
              </ShimmerButton>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <p className="font-semibold mb-2">Toronto Office</p>
              <p className="text-sm text-muted-foreground">
                {siteConfig.locations[0].address}
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">Mississauga Office</p>
              <p className="text-sm text-muted-foreground">
                {siteConfig.locations[1].address}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
