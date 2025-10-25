import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ValeoFx. Visit our Toronto or Mississauga offices, call us at 416-717-7732, or email hello@valeofx.com. We're here to help with your web development needs.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
