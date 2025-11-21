"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@/components/ui/drawer";

interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  tagCounts?: Record<string, number>;
}

interface TagFilterVariantProps {
  tags: string[];
  selectedTag: string;
  tagCounts?: Record<string, number>;
  onTagSelect: (tag: string) => void;
}

function DesktopTagFilter({
  tags,
  selectedTag,
  tagCounts,
  onTagSelect,
}: TagFilterVariantProps) {
  return (
    <div className="hidden flex-wrap gap-2 md:flex">
      {tags.map((tag) => {
        const isActive = selectedTag === tag;
        return (
          <button
            key={tag}
            onClick={() => onTagSelect(tag)}
            className={`flex h-8 cursor-pointer items-center rounded-lg border px-1 pl-3 text-sm transition-colors ${
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:bg-muted"
            }`}
          >
            <span>{tag}</span>
            {tagCounts?.[tag] ? (
              <span
                className={`ml-2 flex h-6 min-w-6 items-center justify-center rounded-md border text-xs font-medium ${
                  isActive
                    ? "border-border/40 bg-background text-primary dark:border-primary-foreground"
                    : "border-border dark:border-border"
                }`}
              >
                {tagCounts[tag]}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

function MobileTagFilter({
  tags,
  selectedTag,
  tagCounts,
  onTagSelect,
}: TagFilterVariantProps) {
  return (
    <Drawer>
      <DrawerTrigger className="flex w-full items-center justify-between rounded-lg border border-border px-4 py-2 transition-colors hover:bg-muted md:hidden">
        <span className="text-sm font-medium capitalize">{selectedTag}</span>
        <ChevronDown className="h-4 w-4" />
      </DrawerTrigger>

      <DrawerContent className="md:hidden">
        <DrawerHeader>
          <h3 className="text-sm font-semibold">Select Category</h3>
        </DrawerHeader>

        <DrawerBody>
          <div className="space-y-2">
            {tags.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => onTagSelect(tag)}
                  className="flex w-full items-center justify-between text-sm font-medium transition-colors"
                >
                  <span
                    className={`flex w-full items-center justify-between text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary underline underline-offset-4"
                        : "text-muted-foreground"
                    }`}
                  >
                    {tag}
                  </span>
                  {tagCounts?.[tag] ? (
                    <span className="ml-2 flex h-6 min-w-6 items-center justify-center rounded-md border border-border">
                      {tagCounts[tag]}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export function TagFilter({ tags, selectedTag, tagCounts }: TagFilterProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams();
    if (tag !== "All") {
      params.set("tag", tag);
    }

    const queryString = params.toString();
    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  };

  return (
    <>
      <DesktopTagFilter
        tags={tags}
        selectedTag={selectedTag}
        tagCounts={tagCounts}
        onTagSelect={handleTagClick}
      />
      <MobileTagFilter
        tags={tags}
        selectedTag={selectedTag}
        tagCounts={tagCounts}
        onTagSelect={handleTagClick}
      />
    </>
  );
}
