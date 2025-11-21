import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | ValeoFx",
  description:
    "Thanks for reaching out to ValeoFx. A product strategist will follow up shortly with next steps tailored to your goals.",
};

export default function ThankYouPage({
  searchParams,
}: {
  searchParams?: Record<string, string>;
}) {
  const params = searchParams ?? {};

  return (
    <div className="bg-background">
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-8 px-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Sparkles className="h-8 w-8" />
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            We got it!
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            Thanks {params.name ?? "friend"}. We&apos;ll review your goals and deliver a tailored plan to{" "}
            <span className="font-semibold text-primary">
              {params.email ?? "your inbox"}
            </span>{" "}
            within one business day.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl border border-border/60 bg-card/80 p-6 text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2 text-foreground">
            <Mail className="h-4 w-4" />
            <span>What to expect</span>
          </div>
          <ul className="space-y-2 text-left">
            <li>• Loom walkthrough of recommended roadmap, deliverables, and budget ranges.</li>
            <li>• Option to schedule an executive strategy session to align stakeholders.</li>
            <li>• Bonus: complimentary Edge Performance checklist you can use immediately.</li>
          </ul>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </section>
    </div>
  );
}
