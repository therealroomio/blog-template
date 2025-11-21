import Image from "next/image";
import Link from "next/link";
import { resourceDownloads } from "@/lib/resources";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResourceDownloads({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-8", className)}>
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Flagship Playbooks
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Download Our Tactical Guides
        </h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
          Bring ValeoFx strategy into your own roadmap. Detailed frameworks, tooling diagrams,
          and checklists designed to accelerate modern product teams.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {resourceDownloads.map((resource) => (
          <Card key={resource.id} className="overflow-hidden border-border/70 bg-card/80">
            <CardHeader className="space-y-4 p-0">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={resource.coverImage}
                  alt={resource.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority={false}
                  unoptimized={resource.coverImage.startsWith("http")}
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <Badge variant="secondary" className="bg-black/70 text-white">
                    PDF
                  </Badge>
                  {resource.badge ? (
                    <Badge variant="outline" className="border-white/50 bg-white/10 text-white">
                      {resource.badge}
                    </Badge>
                  ) : null}
                </div>
              </div>
              <div className="space-y-2 px-6 pt-6">
                <h3 className="text-2xl font-semibold text-foreground">{resource.title}</h3>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-2 pt-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {resource.description}
              </p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-4">
              <Link
                href={resource.downloadUrl}
                className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                Download
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
