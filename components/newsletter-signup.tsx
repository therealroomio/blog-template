"use client";

import { useState } from "react";
import { Loader2, Mail, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NewsletterSignup({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) return;
    setIsSubmitting(true);

    // Placeholder for API integration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail("");
    }, 1200);
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-4 rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center",
          className,
        )}
      >
        <Sparkles className="h-10 w-10 text-primary" />
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-foreground">You&apos;re on the list!</h3>
          <p className="text-sm text-muted-foreground">
            Look out for the next ValeoFx Field Notes drop—packed with tactics and code samples.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "grid gap-3 rounded-2xl border border-border/70 bg-card/80 p-8 shadow-sm sm:grid-cols-[1.2fr_0.8fr] sm:items-center",
        className,
      )}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
          ValeoFx Field Notes
        </p>
        <h3 className="text-xl font-semibold text-foreground">
          Monthly breakdowns of the experiments we’re running.
        </h3>
        <p className="text-sm text-muted-foreground">
          Case studies, performance teardowns, templates, and behind-the-scenes process updates.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="bg-background/80"
        />
        <Button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2">
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
          Join The List
        </Button>
      </div>
    </form>
  );
}
