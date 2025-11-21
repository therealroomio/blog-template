import { type Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadataKeywords = [
  "Toronto Web Development Agency",
  "Custom Next.js Development",
  "React Engineers Toronto",
  "Shopify Development Partner",
  "WooCommerce Experts Toronto",
  "E-Commerce Conversion Optimization",
  "Headless WordPress Developers",
  "Web3 dApp Development",
  "Core Web Vitals Optimization",
  "Technical SEO Services",
  "Bespoke Web Applications",
  "TypeScript Consultants",
  "Tailwind CSS Specialists",
  "Enterprise Web Development",
  "Digital Product Design Toronto",
  "SaaS Product Engineering",
  "Conversion-Focused Web Design",
  "Performance Tuning for Next.js",
  "Accessibility-Driven Web Design",
  "AI & Automation Integrations",
];

const defaultTitle = "ValeoFx | Toronto Web Development & E-Commerce Studio";
const defaultDescription =
  "ValeoFx is a Toronto-based development studio building high-performance Next.js websites, Shopify and WooCommerce stores, and Web3 experiences for growth-focused brands.";

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: metadataKeywords,
  authors: [
    {
      name: "Roomi Kh",
      url: siteConfig.url,
    },
  ],
  creator: "ValeoFx",
  publisher: "ValeoFx",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    title: defaultTitle,
    description: defaultDescription,
    siteName: "ValeoFx",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: "@valeofx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
