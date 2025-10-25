/* eslint-disable @next/next/no-img-element */
import { type Author } from "@/lib/authors";
import { cn } from "@/lib/utils";

interface AuthorCardProps {
  author: Author;
  className?: string;
}

export function AuthorCard({ author, className }: AuthorCardProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <img
        src={author.avatar}
        alt={author.name}
        className="rounded-full w-10 h-10 border border-border object-cover flex-shrink-0"
      />
      <div className="flex-1 space-y-1">
        <h3 className="text-sm tracking-tight text-balance font-semibold leading-tight">
          {author.name}
        </h3>
        <p className="text-xs text-muted-foreground text-balance leading-relaxed">
          {author.position}
          {author.location ? ` · ${author.location}` : null}
        </p>
        {author.bio ? (
          <p className="text-xs text-muted-foreground text-balance leading-relaxed">
            {author.bio}
          </p>
        ) : null}
        {(author.url || author.twitter || author.linkedin || author.github) ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {author.url ? (
              <a
                href={author.url}
                className="text-xs font-medium text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            ) : null}
            {author.twitter ? (
              <a
                href={author.twitter}
                className="text-xs font-medium text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            ) : null}
            {author.linkedin ? (
              <a
                href={author.linkedin}
                className="text-xs font-medium text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            ) : null}
            {author.github ? (
              <a
                href={author.github}
                className="text-xs font-medium text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
