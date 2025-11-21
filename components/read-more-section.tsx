import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx/runtime/next";
import Link from "next/link";
import Image from "next/image";

const blogSource = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

interface BlogData {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
  author?: string;
  authorImage?: string;
  thumbnail?: string;
}

interface BlogPage {
  url: string;
  data: BlogData;
}

interface ReadMoreSectionProps {
  currentSlug: string[];
  currentTags?: string[];
}

export function ReadMoreSection({
  currentSlug,
  currentTags = [],
}: ReadMoreSectionProps) {
  const allPages = blogSource.getPages() as BlogPage[];

  const currentUrl = `/blog/${currentSlug.join("/")}`;

  const otherPosts = allPages
    .filter((page) => page.url !== currentUrl)
    .map((page) => {
      const tagOverlap = currentTags.filter((tag) =>
        page.data.tags?.includes(tag)
      ).length;

      return {
        ...page,
        relevanceScore: tagOverlap,
        date: new Date(page.data.date),
      };
    })
    .sort((a, b) => {
      if (a.relevanceScore !== b.relevanceScore) {
        return b.relevanceScore - a.relevanceScore;
      }
      return b.date.getTime() - a.date.getTime();
    })
    .slice(0, 3);

  if (otherPosts.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-border p-0">
      <div className="p-6 lg:p-10">
        <h2 className="text-2xl font-medium mb-8">Read more</h2>

        <div className="flex flex-col gap-8">
          {otherPosts.map((post) => {
            const formattedDate = formatDate(post.date);

            return (
              <Link
                key={post.url}
                href={post.url}
                className="group grid grid-cols-1 lg:grid-cols-12 items-center gap-4 cursor-pointer"
              >
                {post.data.thumbnail && (
                  <div className="flex-shrink-0 col-span-1 lg:col-span-4">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={post.data.thumbnail}
                        alt={post.data.title}
                        fill
                        className="object-cover transition-opacity group-hover:opacity-80"
                        sizes="(min-width: 1024px) 320px, 100vw"
                        priority={false}
                        unoptimized={post.data.thumbnail.startsWith("http")}
                      />
                    </div>
                  </div>
                )}
                <div className="space-y-2 flex-1 col-span-1 lg:col-span-8">
                  <h3 className="text-lg group-hover:underline underline-offset-4 font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.data.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 group-hover:underline underline-offset-4">
                    {post.data.description}
                  </p>
                  <time className="block text-xs font-medium text-muted-foreground">
                    {formattedDate}
                  </time>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
