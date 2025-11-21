import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";
import { siteConfig } from "./lib/site";

const withMDX = createMDX();

const siteHostname = new URL(siteConfig.url).hostname;

const nextConfig: NextConfig = {
  transpilePackages: ["geist", "motion"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: siteHostname,
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com",
      },
    ],
  },
};

export default withMDX(nextConfig);
