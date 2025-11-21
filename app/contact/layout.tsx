import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const contactUrl = `${siteConfig.url}/contact`;
const contactDescription =
  "Book a consultation with ValeoFx to discuss modern web development, Shopify builds, or Web3 initiatives. Visit our Toronto or Mississauga offices, call 416-717-7732, or email hello@valeofx.com.";

export const metadata: Metadata = {
  title: "Contact ValeoFx | Book a Web Development Consultation",
  description: contactDescription,
  keywords: [
    "Contact ValeoFx",
    "Toronto web consultation",
    "Book a discovery call",
  ],
  alternates: {
    canonical: contactUrl,
  },
  openGraph: {
    title: "Contact ValeoFx",
    description: contactDescription,
    url: contactUrl,
    type: "website",
    siteName: "ValeoFx",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ValeoFx",
    description: contactDescription,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
