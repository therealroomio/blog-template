"use client";

import { useTransition, useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const quickQuoteSchema = z.object({
  name: z.string().min(2, "Your name helps us personalize the response."),
  email: z.string().email("Please provide a valid email address."),
  company: z.string().optional(),
  timeline: z.string().optional(),
  budgetRange: z.string().optional(),
  projectGoal: z
    .string()
    .min(10, "Share a few sentences so we can tailor recommendations."),
});

type QuickQuoteValues = z.infer<typeof quickQuoteSchema>;

export function QuickQuoteForm({ className }: { className?: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [values, setValues] = useState<QuickQuoteValues>({
    name: "",
    email: "",
    company: "",
    timeline: "",
    budgetRange: "",
    projectGoal: "",
  });
  const [errors, setErrors] = useState<Record<keyof QuickQuoteValues, string>>(
    {} as Record<keyof QuickQuoteValues, string>,
  );
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof QuickQuoteValues) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = quickQuoteSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0] ?? "",
        email: fieldErrors.email?.[0] ?? "",
        company: fieldErrors.company?.[0] ?? "",
        timeline: fieldErrors.timeline?.[0] ?? "",
        budgetRange: fieldErrors.budgetRange?.[0] ?? "",
        projectGoal: fieldErrors.projectGoal?.[0] ?? "",
      } as Record<keyof QuickQuoteValues, string>);
      return;
    }

    startTransition(() => {
      // In production this would call an action or API route.
      // For now we simply redirect to thank you with query params.
      const params = new URLSearchParams({
        name: values.name,
        email: values.email,
        company: values.company ?? "",
        timeline: values.timeline ?? "",
        budget: values.budgetRange ?? "",
      });

      router.push(`/thank-you?${params.toString()}`);
      setSubmitted(true);
    });
  };

  if (submitted) {
    return (
      <div className={cn("rounded-2xl border border-border/70 bg-card/80 p-8 text-center", className)}>
        <h3 className="text-2xl font-semibold text-foreground">Thanks! We&apos;ll be in touch.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Expect a tailored value proposition in your inbox within one business day.
          We&apos;ll also follow up with a quick Loom overview.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid gap-4 rounded-2xl border border-border/70 bg-card/80 p-8", className)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Your name *
        </label>
        <Input
          id="name"
          placeholder="Roomi Kh"
          value={values.name}
          onChange={handleChange("name")}
          required
        />
        {errors.name ? <p className="text-xs text-red-500">{errors.name}</p> : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email *
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@company.com"
          value={values.email}
          onChange={handleChange("email")}
          required
        />
        {errors.email ? <p className="text-xs text-red-500">{errors.email}</p> : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company
          </label>
          <Input
            id="company"
            placeholder="Brand or product"
            value={values.company}
            onChange={handleChange("company")}
          />
          {errors.company ? <p className="text-xs text-red-500">{errors.company}</p> : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="timeline" className="text-sm font-medium text-foreground">
            Target launch window
          </label>
          <Input
            id="timeline"
            placeholder="e.g. Q3 2025"
            value={values.timeline}
            onChange={handleChange("timeline")}
          />
          {errors.timeline ? <p className="text-xs text-red-500">{errors.timeline}</p> : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="budgetRange" className="text-sm font-medium text-foreground">
          Investment range
        </label>
        <Input
          id="budgetRange"
          placeholder="e.g. $60k - $120k"
          value={values.budgetRange}
          onChange={handleChange("budgetRange")}
        />
        {errors.budgetRange ? <p className="text-xs text-red-500">{errors.budgetRange}</p> : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="projectGoal" className="text-sm font-medium text-foreground">
          What are we building together? *
        </label>
        <Textarea
          id="projectGoal"
          rows={4}
          placeholder="Share goals, audiences, existing stack, pain points..."
          value={values.projectGoal}
          onChange={handleChange("projectGoal")}
          required
        />
        {errors.projectGoal ? (
          <p className="text-xs text-red-500">{errors.projectGoal}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2"
        disabled={isPending}
      >
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Request Tailored Estimate
      </Button>
    </form>
  );
}
