import { type Author } from "@/lib/authors";
import { siteConfig } from "@/lib/site";

export interface PersonSchema {
  "@type": "Person";
  name: string;
  description?: string;
  jobTitle?: string;
  url?: string;
  sameAs?: string[];
  image?: string;
  address?: {
    "@type": "PostalAddress";
    addressLocality?: string;
    addressRegion?: string;
    addressCountry?: string;
  };
  worksFor?: {
    "@type": "Organization";
    name: string;
    url?: string;
  };
}

export function authorToPersonSchema(author: Author): PersonSchema {
  const sameAs = author.sameAs ?? [
    author.twitter,
    author.linkedin,
    author.github,
    author.url,
  ].filter(Boolean) as string[];

  return {
    "@type": "Person",
    name: author.name,
    description: author.bio,
    jobTitle: author.position,
    url: author.url,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    image: author.avatar ? `${siteConfig.url}${author.avatar}` : undefined,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function readTimeToISODuration(readTime?: string): string | undefined {
  if (!readTime) {
    return undefined;
  }

  const minutesMatch = readTime.match(/(\d+)(?=\s*min)/i);

  if (!minutesMatch) {
    return undefined;
  }

  const minutes = Number.parseInt(minutesMatch[1] ?? "", 10);

  if (Number.isNaN(minutes) || minutes <= 0) {
    return undefined;
  }

  return `PT${minutes}M`;
}
