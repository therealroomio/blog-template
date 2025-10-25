import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore ValeoFx's portfolio of successful projects including web development, e-commerce solutions, Web3 dApps, and WordPress sites for clients like Saudi Tourism Authority, MintoCrypto, and EuroMotors.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
