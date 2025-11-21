import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const portfolioUrl = `${siteConfig.url}/portfolio`;
const portfolioDescription =
  "Browse ValeoFx client work spanning tourism platforms, fintech products, Shopify and WooCommerce stores, and high-performance marketing sites built with Next.js.";

export const metadata: Metadata = {
  title: "Project Portfolio | ValeoFx Web Development Agency",
  description: portfolioDescription,
  keywords: [
    "Next.js case studies",
    "E-commerce portfolio",
    "Toronto web projects",
  ],
  alternates: {
    canonical: portfolioUrl,
  },
  openGraph: {
    title: "ValeoFx Project Portfolio",
    description: portfolioDescription,
    url: portfolioUrl,
    type: "website",
    siteName: "ValeoFx",
  },
  twitter: {
    card: "summary_large_image",
    title: "ValeoFx Project Portfolio",
    description: portfolioDescription,
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
