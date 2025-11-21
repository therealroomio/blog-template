import { CalendarDays, Headphones, Mic, Tv } from "lucide-react";
import { speakingEngagements } from "@/lib/media";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const iconMap = {
  talk: Mic,
  podcast: Headphones,
  panel: Tv,
};

export function SpeakingMedia({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-8", className)}>
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Stage & Airwaves
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Speaking & Media Features
        </h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
          Conversations that shape how teams design, ship, and scale modern digital products.
          Catch Roomi Kh in conferences, podcasts, and panels across the industry.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {speakingEngagements.map((item) => {
          const Icon = iconMap[item.type] ?? Mic;
          return (
            <Card key={item.id} className="border-border/70 bg-card/80 backdrop-blur">
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{item.year}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.event}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Watch / Listen
                  </Link>
                ) : null}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
