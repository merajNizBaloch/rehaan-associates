import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Civil Engineering Consultants in Quetta",
  description:
    "Contact Rehan Consultants in Jinnah Town, Quetta for civil engineering, architecture, infrastructure, quantity surveying, cost consultancy and project management services.",
  alternates: {
    canonical: "https://rehanconsultants.com/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
