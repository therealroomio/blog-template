"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface MediaViewerProps {
  src: string;
  alt?: string;
  type?: "image" | "video";
  className?: string;
  width?: number;
  height?: number;
}

export function MediaViewer({
  src,
  alt = "",
  type = "image",
  className,
  width,
  height,
}: MediaViewerProps) {
  const baseClassName = cn(
    "absolute inset-0 h-full w-full rounded-lg border object-cover",
    className
  );

  const renderMedia = () => {
    if (type === "video") {
      return (
        <video
          className={baseClassName}
          src={src}
          controls
          loop
          style={{ objectFit: "cover" }}
        >
          Your browser does not support the video tag.
        </video>
      );
    }

    const isRemote = src.startsWith("http");

    if (width && height) {
      return (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={baseClassName}
          sizes="(min-width: 1024px) 800px, 100vw"
          priority={false}
          unoptimized={isRemote}
        />
      );
    }

    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={baseClassName}
        sizes="(min-width: 1024px) 800px, 100vw"
        priority={false}
        unoptimized={isRemote}
      />
    );
  };

  return (
    <div className="my-6 w-full">
      <div className="relative w-full overflow-hidden rounded-lg">
        <div className="relative aspect-video w-full">{renderMedia()}</div>
      </div>
    </div>
  );
}

// Helper components for easier MDX usage
export function ImageViewer(props: Omit<MediaViewerProps, "type">) {
  return <MediaViewer {...props} type="image" />;
}

export function VideoViewer(props: Omit<MediaViewerProps, "type">) {
  return <MediaViewer {...props} type="video" />;
}
