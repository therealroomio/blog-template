import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Play } from "lucide-react";
import { CaseStudy, featuredCaseStudies } from "@/lib/case-studies";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const iconMap: Record<string, React.ReactNode> = {
  live: <ExternalLink className="h-4 w-4" />,
  demo: <Play className="h-4 w-4" />,
};

function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Card className="overflow-hidden border-border/60 bg-card/80 backdrop-blur">
      <CardHeader className="space-y-3 p-0">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-[1.04]"
            sizes="(min-width: 1280px) 480px, (min-width:768px) 50vw, 100vw"
            priority={false}
            unoptimized={caseStudy.heroImage.startsWith("http")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-black/60 text-white">
              {caseStudy.industry}
            </Badge>
            <Badge variant="outline" className="border-white/40 bg-white/20 text-white">
              Featured Build
            </Badge>
          </div>
        </div>
        <div className="space-y-2 px-6 pt-6">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            {caseStudy.name}
          </h3>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {caseStudy.tagline}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 px-6 pb-6 pt-2">
        <p className="text-base text-muted-foreground leading-relaxed">
          {caseStudy.summary}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Metrics
            </h4>
            <div className="grid gap-3">
              {caseStudy.metrics.map((metric) => (
                <div
                  key={`${caseStudy.slug}-${metric.label}`}
                  className="rounded-lg border border-border/80 bg-background/60 p-3"
                >
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {metric.label}
                  </div>
                  <div className="text-2xl font-semibold text-primary">{metric.value}</div>
                  {metric.description ? (
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Stack & Services
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="border-border/70 bg-muted/40">
                  {tech}
                </Badge>
              ))}
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {caseStudy.services.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {caseStudy.testimonial ? (
          <blockquote className="rounded-xl border border-border/60 bg-muted/30 p-5 text-sm italic text-muted-foreground">
            “{caseStudy.testimonial.quote}”
            <footer className="mt-3 not-italic">
              <div className="text-foreground font-medium">{caseStudy.testimonial.author}</div>
              <div className="text-xs text-muted-foreground">{caseStudy.testimonial.title}</div>
            </footer>
          </blockquote>
        ) : null}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-3 border-t border-border/60 bg-muted/30 px-6 py-4">
        {caseStudy.liveUrl ? (
          <Link
            href={caseStudy.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground transition hover:border-primary hover:bg-primary/10"
          >
            {iconMap.live}
            View Live
          </Link>
        ) : null}
        {caseStudy.demoUrl ? (
          <Link
            href={caseStudy.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground transition hover:border-primary hover:bg-primary/10"
          >
            {iconMap.demo}
            Watch Demo
          </Link>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export function FeaturedCaseStudies({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-10", className)}>
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Signature Projects
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Featured Case Studies
        </h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
          Battle-tested builds across tourism, fintech, and enterprise services. Each engagement
          is anchored in measurable outcomes, ruthless performance, and unforgettable experience design.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {featuredCaseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </section>
  );
}
