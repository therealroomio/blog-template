import { performanceHighlights } from "@/lib/performance-metrics";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  GaugeCircle,
  Sparkles,
  Star,
  TrendingUp,
  Clock,
  Repeat2,
} from "lucide-react";

const iconMap = {
  sparkles: Sparkles,
  gauge: GaugeCircle,
  star: Star,
  "trending-up": TrendingUp,
  clock: Clock,
  repeat: Repeat2,
} as const;

function MetricCard({
  label,
  value,
  context,
  icon = "sparkles",
}: (typeof performanceHighlights)[number]) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? Sparkles;
  return (
    <Card className="relative overflow-hidden border-border/80 bg-background/80 p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </div>
      </div>
      <div className="mt-4 text-4xl font-semibold tracking-tight text-foreground">{value}</div>
      <p className="mt-3 text-sm text-muted-foreground">{context}</p>
    </Card>
  );
}

export function MetricsDashboard({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-8", className)}>
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Proof In Numbers
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Performance Dashboard
        </h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
          A live snapshot of ValeoFx delivery metrics across shipped engagements. These numbers
          auto-update each quarter as we launch new products and iterate on existing ones.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {performanceHighlights.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>
    </section>
  );
}
