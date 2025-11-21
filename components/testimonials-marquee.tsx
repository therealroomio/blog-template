import Image from "next/image";
import { testimonials } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialsMarqueeProps {
  className?: string;
}

export function TestimonialsMarquee({ className }: TestimonialsMarqueeProps) {
  return (
    <section className={cn("space-y-8 overflow-hidden", className)}>
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Client Love
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Proof from the people who matter
        </h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
          From tourism to fintech to enterprise platforms, founders and product leaders partner
          with ValeoFx to ship experiences that compound revenue and reputation.
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex gap-6 animate-[marquee_40s_linear_infinite] [--gap:1.5rem] hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <figure
              key={`${testimonial.id}-${index}`}
              className="flex min-w-[320px] max-w-sm flex-col gap-4 rounded-2xl border border-border/60 bg-card/90 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                {testimonial.avatar ? (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold uppercase text-primary">
                    {testimonial.author.slice(0, 2)}
                  </span>
                )}
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed">
                “{testimonial.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
