export interface ProjectDemo {
  id: string;
  name: string;
  description: string;
  mediaType: "video" | "image";
  src: string;
  poster?: string;
  link?: string;
}

export const projectDemos: ProjectDemo[] = [
  {
    id: "visit-saudi-navigation",
    name: "Visit Saudi Navigation Rebuild",
    description:
      "A responsive mega-navigation with geo-personalized recommendations and skeleton loading states tuned for edge deployment.",
    mediaType: "image",
    src: "https://images.unsplash.com/photo-1523726491678-b0544216e742?auto=format&fit=crop&w=1400&q=80",
    link: "https://visitsaudi.com",
  },
  {
    id: "mintocrypto-portfolio",
    name: "MintoCrypto Token Portfolio Explorer",
    description:
      "Real-time Web3 wallet dashboard with staking projections, gas estimates, and gamified achievement unlocks.",
    mediaType: "image",
    src: "https://images.unsplash.com/photo-1614064641938-3bbee5296866?auto=format&fit=crop&w=1400&q=80",
    link: "https://mintocrypto.xyz",
  },
  {
    id: "euromotors-configurator",
    name: "EuroMotors Service Configurator",
    description:
      "Guided booking flow that integrates live diagnostic data, pricing tiers, and service bundling for higher AOV.",
    mediaType: "image",
    src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=80",
    link: "https://euromotors.com",
  },
];
