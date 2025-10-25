export interface Author {
  name: string;
  position: string;
  avatar: string;
  bio?: string;
  location?: string;
  url?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  sameAs?: string[];
}

export const authors: Record<string, Author> = {
  roomi: {
    name: "Roomi Kh",
    position: "Founder & Lead Developer at ValeoFx",
    avatar: "/authors/roomi.png",
    bio: "Founder of ValeoFx, building high-performance web applications and e-commerce experiences with modern JavaScript tooling.",
    location: "Toronto, Canada",
    url: "https://valeofx.com",
    twitter: "https://twitter.com/valeofx",
    linkedin: "https://www.linkedin.com/in/roomikh/",
    github: "https://github.com/therealroomio",
    sameAs: [
      "https://twitter.com/valeofx",
      "https://www.linkedin.com/company/valeofx",
      "https://github.com/valeofx",
    ],
  },
} as const;

export type AuthorKey = keyof typeof authors;

export function getAuthor(key: AuthorKey): Author {
  return authors[key];
}

export function isValidAuthor(key: string): key is AuthorKey {
  return key in authors;
}
