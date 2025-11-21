import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import { metadata as baseMetadata, metadataKeywords } from "./metadata";
import { SiteNav } from "@/components/site-nav";
import Footer from "@/components/footer";
import {
  OrganizationSchema,
  WebsiteSchema,
  LocalBusinessSchema,
} from "@/components/structured-data";
import "@/app/globals.css";

export const viewport: Viewport = {
  themeColor: "black",
};

const baseDescription =
  baseMetadata.description ??
  "ValeoFx is a Toronto-based development studio building high-performance web and e-commerce experiences.";
const defaultTitle =
  "ValeoFx | Toronto Web Development & E-Commerce Studio";

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: "%s | ValeoFx",
  },
  description: baseDescription,
  keywords: metadataKeywords,
  alternates: {
    ...baseMetadata.alternates,
    canonical: siteConfig.url,
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: defaultTitle,
    description: baseDescription,
    url: siteConfig.url,
    siteName: "ValeoFx",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: defaultTitle,
    description: baseDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth">
      <body>
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <SiteNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
