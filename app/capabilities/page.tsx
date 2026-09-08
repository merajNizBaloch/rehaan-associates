import type { Metadata } from "next";

import CapabilitiesPage from "@/components/CapabilitiesPage";

export const metadata: Metadata = {
  title: "Engineering Capabilities",
  description:
    "Explore the civil, structural, architectural, infrastructure, quantity surveying and project-delivery capabilities of Rehan Consultants in Quetta, Balochistan.",
  alternates: {
    canonical: "https://rehanconsultants.com/capabilities",
  },
  openGraph: {
    title: "Engineering Capabilities | Rehan Consultants",
    description:
      "Project types, technical services and deliverables supported by Rehan Consultants in Quetta, Balochistan.",
    url: "https://rehanconsultants.com/capabilities",
  },
};

export default function Page() {
  return <CapabilitiesPage />;
}
