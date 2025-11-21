import Link from "next/link";
import { ClipboardCheck, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function HealthAuditCTA({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background",
        className,
      )}
    >
      <div className="absolute inset-y-0 left-0 w-2/5 bg-[radial-gradient(circle_at_left,_rgba(124,58,237,0.35),transparent_55%)]" />
      <div className="relative grid gap-6 px-8 py-12 md:grid-cols-[0.65fr_0.35fr] md:items-center md:px-12 md:py-16">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-3 w-3" />
            Complimentary diagnostic
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Get a Next.js Stack Health Audit
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            We&apos;ll review your repo, Lighthouse data, and analytics to surface the top 5
            opportunities for performance, accessibility, and conversion improvements—no commitment required.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Repository-level audit with PR-ready recommendations</li>
            <li>• Core Web Vitals snapshot with remediation priority</li>
            <li>• Personalized roadmap for DX, CI/CD, and observability</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild size="lg">
              <Link href="/contact" className="inline-flex items-center gap-2">
                Book your audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact?resource=edge-performance-blueprint" className="inline-flex items-center gap-2">
                Preview the report
                <ClipboardCheck className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card/70 p-6 text-sm text-muted-foreground">
          <h3 className="flex items-center gap-2 text-base font-semibold text-foreground">
            What you&apos;ll receive
          </h3>
          <ul className="mt-4 space-y-2">
            <li>• Loom walkthrough of findings + prioritized next steps</li>
            <li>• Figma snippet of suggested UX tweaks for conversion</li>
            <li>• Edge-ready deployment template tailored to your stack</li>
          </ul>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Turnaround: 3 business days
          </p>
        </div>
      </div>
    </section>
  );
}
