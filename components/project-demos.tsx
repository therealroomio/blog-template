import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projectDemos } from "@/lib/project-demos";
import { MediaViewer } from "@/components/media-viewer";
import { cn } from "@/lib/utils";

export function ProjectDemos({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-8", className)}>
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Interactive Walkthroughs
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          See the experiences in motion
        </h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
          Short demos that break down UX decisions, micro-interactions, and performance techniques built into our flagship projects.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projectDemos.map((demo) => (
          <article
            key={demo.id}
            className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card/80 p-4"
          >
            <div className="relative overflow-hidden rounded-xl">
              <MediaViewer
                src={demo.src}
                type={demo.mediaType}
                className="border-none"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">{demo.name}</h3>
              <p className="text-sm text-muted-foreground">{demo.description}</p>
              {demo.link ? (
                <Link
                  href={demo.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Explore live
                  <ExternalLink className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
