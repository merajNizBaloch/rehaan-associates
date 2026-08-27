import type { Metadata } from "next";
import "./globals.css";

import OrganizationSchema from "@/components/OrganizationSchema";
import SiteLoader from "@/components/SiteLoader";
import TopBarWrapper from "@/components/navigation/TopBarWrapper";
import { SiteModeProvider } from "@/components/SiteModeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://rehanconsultants.com"),

  title: {
    default:
      "Rehan Consultants | Civil Engineering & Architecture in Balochistan",
    template: "%s | Rehan Consultants",
  },

  description:
    "Rehan Consultants is a civil engineering and architecture consultancy in Quetta, Balochistan, Pakistan, providing civil and structural engineering, architecture, infrastructure, quantity surveying, cost consultancy and project management services.",

  keywords: [
    "Rehan Consultants",
    "civil engineering",
    "civil engineering firm",
    "civil engineering company",
    "civil engineers",
    "civil engineering Balochistan",
    "civil engineering Quetta",
    "civil engineering Pakistan",
    "civil engineering firms in Balochistan",
    "civil engineering companies in Balochistan",
    "civil engineers in Quetta",
    "engineering consultants Balochistan",
    "engineering consultants Quetta",
    "architecture",
    "architectural consultancy",
    "architects in Quetta",
    "architecture Balochistan",
    "infrastructure engineering",
    "infrastructure Balochistan",
    "structural engineering",
    "structural engineers Quetta",
    "quantity surveying",
    "quantity surveyor Quetta",
    "cost consultancy",
    "project management",
    "construction consultancy",
    "construction management",
    "building design",
    "Balochistan Pakistan",
    "Quetta Pakistan",
  ],

  authors: [
    {
      name: "Rehan Consultants",
      url: "https://rehanconsultants.com",
    },
  ],

  creator: "Rehan Consultants",
  publisher: "Rehan Consultants",

  alternates: {
    canonical: "https://rehanconsultants.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/mainlogo.png",
    shortcut: "/mainlogo.png",
    apple: "/mainlogo.png",
  },

  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://rehanconsultants.com",
    siteName: "Rehan Consultants",
    title:
      "Rehan Consultants | Civil Engineering & Architecture in Balochistan",
    description:
      "Civil engineering, architecture, infrastructure, quantity surveying and project management consultancy in Quetta, Balochistan, Pakistan.",
    images: [
      {
        url: "/mainlogo.png",
        alt: "Rehan Consultants",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Rehan Consultants | Civil Engineering & Architecture in Balochistan",
    description:
      "Civil engineering, architecture, infrastructure and project consultancy in Quetta, Balochistan, Pakistan.",
    images: ["/mainlogo.png"],
  },

  category: "engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteModeProvider>
          <OrganizationSchema />
          <SiteLoader />
          <TopBarWrapper />
          {children}
        </SiteModeProvider>
      </body>
    </html>
  );
}
