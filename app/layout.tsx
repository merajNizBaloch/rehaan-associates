import type { Metadata } from "next";
import "./globals.css";

import SiteLoader from "@/components/SiteLoader";
import TopBarWrapper from "@/components/navigation/TopBarWrapper";
import { SiteModeProvider } from "@/components/SiteModeProvider";

export const metadata: Metadata = {
  title: "Rehan Consultants | Civil Engineering",
  description:
    "Civil engineering and infrastructure across Balochistan.",
  icons: {
    icon: "/mainlogo.png",
    shortcut: "/mainlogo.png",
    apple: "/mainlogo.png",
  },
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
          <SiteLoader />
          <TopBarWrapper />
          {children}
        </SiteModeProvider>
      </body>
    </html>
  );
}
