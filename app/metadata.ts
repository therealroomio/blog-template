import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadataKeywords = [
    "Web Development Toronto",
    "Toronto Web Developer",
    "Next.js Development",
    "React Development",
    "WordPress Development Toronto",
    "Shopify Development",
    "WooCommerce Development",
    "Web3 Development",
    "dApp Development",
    "SEO Services Toronto",
    "Core Web Vitals Optimization",
    "Performance Optimization",
    "TypeScript Development",
    "Tailwind CSS",
    "E-Commerce Development",
    "Custom Web Applications",
    "Technical SEO",
    "Blockchain Development",
    "Smart Contract Development",
    "Modern Web Development",
]

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: "Roomi Kh",
            url: "https://valeofx.com",
        },
    ],
    creator: "ValeoFx",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
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