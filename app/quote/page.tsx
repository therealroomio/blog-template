import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardList, Target } from "lucide-react";
import { QuickQuoteForm } from "@/components/forms/quick-quote-form";
import { MetricsDashboard } from "@/components/metrics-dashboard";

export const metadata: Metadata = {
  title: "Quick Quote | Scope Your Next Build with ValeoFx",
  description:
    "Get a tailored estimate for your next product launch in minutes. Share your goals and we’ll outline deliverables, timelines, and investment ranges.",
  openGraph: {
    title: "Quick Quote | ValeoFx",
    description:
      "Share your goals, budget, and timeline. Receive a curated plan with pricing ranges and next steps within one business day.",
    type: "website",
  },
};

const bulletPoints = [
  {
    title: "Strategic alignment",
    description: "We calibrate scope to your business priorities and go-to-market milestones.",
    icon: Target,
  },
  {
    title: "Actionable next steps",
    description: "Receive timeline ranges, team composition, and pilot suggestions.",
    icon: ClipboardList,
  },
];

export default function QuickQuotePage() {
  return (
    <div className="bg-background">
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,28,135,0.15),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            Quick Quote
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Scope your next build in minutes.
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Tell us about the outcomes you’re targeting and we’ll respond with a tailored proposal—
            complete with deliverables, timeline options, and engagement models.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <QuickQuoteForm />
          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 text-sm text-primary-foreground">
            <p className="font-semibold uppercase tracking-[0.25em] text-primary/80">
              What happens next?
            </p>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 text-primary" />
                <span>
                  Receive a bespoke Loom walkthrough with timeline &amp; pricing ranges within one business day.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 text-primary" />
                <span>
                  Book a strategy session to co-create backlog priorities, or move straight into a paid discovery sprint.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 text-primary" />
                <span>
                  Bring your stakeholders—we offer executive-ready decks and ROI projections.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-2xl border border-border/70 bg-card/80 p-8">
            <h2 className="text-2xl font-semibold text-foreground">Why teams choose ValeoFx</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We operate like an embedded product team. Strategy, design, engineering, and analytics under one roof.
            </p>
            <div className="mt-6 space-y-4">
              {bulletPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 bg-card/80 p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Prefer a discovery session first?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Book a 30-minute call to map technical requirements, review architecture plans, and align on KPIs.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Reserve a strategy call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </section>

      <section className="border-t border-border/60 bg-muted/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <MetricsDashboard />
        </div>
      </section>
    </div>
  );
}
