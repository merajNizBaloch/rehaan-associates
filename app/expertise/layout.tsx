import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Civil Engineering & Architecture Services in Balochistan",
  description:
    "Rehan Consultants provides civil engineering, structural engineering, architecture, infrastructure, quantity surveying, cost consultancy and project management services in Quetta and across Balochistan.",
  alternates: {
    canonical: "https://rehanconsultants.com/expertise",
  },
};

export default function ExpertiseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
