import type { Metadata } from "next";
import "./globals.css";

import SiteLoader from "@/components/SiteLoader";
import TopBarWrapper from "@/components/navigation/TopBarWrapper";
import { SiteModeProvider } from "@/components/SiteModeProvider";

export const metadata: Metadata = {
  title:
    "Rehaan & Associates | Civil Engineering",
  description:
    "Civil engineering and infrastructure across Balochistan.",
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