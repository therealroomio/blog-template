import { siteConfig } from "@/lib/site";
import { type PersonSchema } from "@/lib/structured-data";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "description": siteConfig.description,
    "email": siteConfig.email,
    "telephone": siteConfig.phone,
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.locations[0].address,
        "addressLocality": siteConfig.locations[0].city,
        "addressRegion": "ON",
        "addressCountry": "CA",
      },
      {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.locations[1].address,
        "addressLocality": siteConfig.locations[1].city,
        "addressRegion": "ON",
        "addressCountry": "CA",
      },
    ],
    "sameAs": [
      "https://www.linkedin.com/company/valeofx",
      "https://twitter.com/valeofx",
      "https://github.com/valeofx",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phone,
      "contactType": "Customer Service",
      "email": siteConfig.email,
      "areaServed": ["CA"],
      "availableLanguage": ["English"],
    },
    "founder": {
      "@type": "Person",
      "name": "Roomi Kh",
      "jobTitle": "Founder & Lead Developer",
    },
    "foundingDate": "2019",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA",
      },
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "43.6532",
        "longitude": "-79.3832",
      },
      "geoRadius": "50000",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Modern Tech Stack Development",
            "description": "Next.js, React, TypeScript, and Tailwind CSS development",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Solutions",
            "description": "WordPress, WooCommerce, and Shopify development",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web3 & dApp Development",
            "description": "Blockchain and decentralized application development",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "description": siteConfig.description,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/logo.png`,
      },
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/blog-listing?tag={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteConfig.name,
    "image": `${siteConfig.url}/logo.png`,
    "url": siteConfig.url,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.locations[0].address,
      "addressLocality": siteConfig.locations[0].city,
      "addressRegion": "ON",
      "addressCountry": "CA",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6532,
      "longitude": -79.3832,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00",
      },
    ],
    "sameAs": [
      "https://www.linkedin.com/company/valeofx",
      "https://twitter.com/valeofx",
      "https://github.com/valeofx",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  id?: string;
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: PersonSchema | PersonSchema[];
  tags?: string[];
  image?: string;
  timeRequired?: string;
  wordCount?: number;
}

export function ArticleSchema({
  id,
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  tags,
  image,
  timeRequired,
  wordCount,
}: ArticleSchemaProps) {
  const publisherLogo = `${siteConfig.url}/logo.png`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": id ?? url,
    "headline": title,
    "description": description,
    "url": url,
    "mainEntityOfPage": url,
    "datePublished": datePublished,
    "dateModified": dateModified ?? datePublished,
    "author": author,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogo,
      },
    },
    "image": image
      ? {
          "@type": "ImageObject",
          "url": image,
        }
      : undefined,
    "articleSection": tags && tags.length ? tags : undefined,
    "keywords": tags && tags.length ? tags.join(", ") : undefined,
    "timeRequired": timeRequired,
    "wordCount": wordCount,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
