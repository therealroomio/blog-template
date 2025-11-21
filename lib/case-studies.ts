export interface CaseStudyMetric {
  label: string;
  value: string;
  description?: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  industry: string;
  heroImage: string;
  techStack: string[];
  services: string[];
  metrics: CaseStudyMetric[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    avatar?: string;
  };
  liveUrl?: string;
  demoUrl?: string;
}

export const featuredCaseStudies: CaseStudy[] = [
  {
    slug: "visit-saudi-digital-platform",
    name: "Visit Saudi Tourism Platform",
    tagline: "Immersive discovery experience for a national tourism brand.",
    summary:
      "ValeoFx rebuilt Visit Saudi’s content-heavy platform on a modern Next.js stack, unlocking instant publishing workflows and a 62% faster time-to-first-byte.",
    industry: "Tourism & Hospitality",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel Edge", "Storyblok"],
    services: [
      "Experience Design",
      "Headless CMS Implementation",
      "Performance Engineering",
      "Internationalization",
    ],
    metrics: [
      {
        label: "Organic sessions",
        value: "+38%",
        description: "Six months after launch compared to previous year.",
      },
      {
        label: "Core Web Vitals",
        value: "98",
        description: "Largest Contentful Paint score on mobile.",
      },
      {
        label: "Launch timeline",
        value: "11 weeks",
        description: "From kick-off to production launch.",
      },
    ],
    testimonial: {
      quote:
        "ValeoFx delivered an insanely fast site that mirrors the ambition of the Visit Saudi brand. Their leadership across design, engineering, and SEO is unmatched.",
      author: "Rashid Al-Qahtani",
      title: "Director of Digital, Saudi Tourism Authority",
      avatar: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=200&q=80",
    },
    liveUrl: "https://visitsaudi.com",
  },
  {
    slug: "mintocrypto-web3-platform",
    name: "MintoCrypto Web3 Platform",
    tagline: "Future-proof dApp for minting NFTs and managing token utilities.",
    summary:
      "We partnered with MintoCrypto to architect and ship an all-in-one NFT minting and staking experience that handles peak traffic with sub-second responses.",
    industry: "Web3 & Fintech",
    heroImage:
      "https://images.unsplash.com/photo-1630673245365-3fdc2f6f6f1b?auto=format&fit=crop&w=1600&q=80",
    techStack: ["Next.js", "Thirdweb", "TypeScript", "Ethers.js", "Supabase"],
    services: [
      "Product Strategy",
      "Smart Contract Development",
      "Design System",
      "Security Review",
    ],
    metrics: [
      {
        label: "Minted assets",
        value: "48K",
        description: "NFTs minted in the first 30 days.",
      },
      {
        label: "Support tickets",
        value: "-72%",
        description: "Drop in support load thanks to guided UX flows.",
      },
      {
        label: "Platform uptime",
        value: "99.99%",
        description: "During high-demand release windows.",
      },
    ],
    testimonial: {
      quote:
        "Our launch broke internal records. ValeoFx handled everything from tokenomics to delightful UX—and they nailed performance under load.",
      author: "Sarah Mensah",
      title: "Co-Founder, MintoCrypto",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    },
    liveUrl: "https://mintocrypto.xyz",
    demoUrl: "https://demo.mintocrypto.xyz",
  },
  {
    slug: "euromotors-service-suite",
    name: "EuroMotors Service Suite",
    tagline: "High-converting automotive service experience with live data.",
    summary:
      "EuroMotors partnered with ValeoFx to modernize their digital service flow. The result: accelerated booking funnels and live vehicle data integrations that wow customers.",
    industry: "Automotive",
    heroImage:
      "https://images.unsplash.com/photo-1519643398871-6f673d962e97?auto=format&fit=crop&w=1600&q=80",
    techStack: ["Next.js", "GraphQL", "Node.js", "PostgreSQL", "Cloudflare"],
    services: [
      "Customer Journey Mapping",
      "API Integration",
      "Conversion Optimization",
      "Analytics Automation",
    ],
    metrics: [
      {
        label: "Booking conversion",
        value: "+54%",
        description: "Increase in service bookings within 90 days.",
      },
      {
        label: "Quote response time",
        value: "68s",
        description: "Average time to respond with dynamic pricing.",
      },
      {
        label: "Revenue uplift",
        value: "+$1.2M",
        description: "Attributed incremental annual revenue.",
      },
    ],
    testimonial: {
      quote:
        "ValeoFx transformed our service business. The new platform feels luxurious yet functional—and the analytics insights help us iterate weekly.",
      author: "Miguel Díaz",
      title: "Head of Digital, EuroMotors",
      avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
    },
    liveUrl: "https://euromotors.com",
  },
];
