export interface SpeakingEngagement {
  id: string;
  title: string;
  event: string;
  year: number;
  description: string;
  link?: string;
  type: "talk" | "podcast" | "panel";
}

export const speakingEngagements: SpeakingEngagement[] = [
  {
    id: "talk-spectrum",
    title: "Designing Edge-First Commerce",
    event: "Next.js Conf",
    year: 2024,
    description:
      "How ValeoFx rebuilt enterprise storefronts for sub-second performance with edge rendering and domain-driven design.",
    link: "https://conf.2024.nextjs.org/talks/designing-edge-first-commerce",
    type: "talk",
  },
  {
    id: "podcast-code-story",
    title: "Building High-Trust Web Apps for Regulated Markets",
    event: "Code Story Podcast",
    year: 2023,
    description:
      "A deep dive into auditing, compliance, and the tooling stack behind ValeoFx’s fintech engagements.",
    link: "https://codestory.co/episodes/valeofx-high-trust-web",
    type: "podcast",
  },
  {
    id: "panel-react-summit",
    title: "State of Server Components in Production",
    event: "React Summit",
    year: 2024,
    description:
      "Panel discussion on lessons learned shipping React Server Components in mission-critical apps.",
    link: "https://reactsummit.com/panels/server-components-production",
    type: "panel",
  },
  {
    id: "talk-seo-day",
    title: "Marrying Technical SEO with Modern React Apps",
    event: "Technical SEO Day",
    year: 2025,
    description:
      "Roomi Kh breaks down holistic strategies for shipping blazing-fast React experiences without sacrificing discoverability.",
    type: "talk",
  },
];
