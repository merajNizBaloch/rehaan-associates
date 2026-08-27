import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Civil Engineering Projects in Balochistan & Pakistan",
  description:
    "Explore civil engineering, architecture, construction and infrastructure projects by Rehan Consultants in Quetta, Balochistan and Pakistan.",
  alternates: {
    canonical: "https://rehanconsultants.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
