import type { Metadata } from "next";
import "./globals.css";

import TopBarWrapper from "@/components/navigation/TopBarWrapper";
import SiteLoader from "@/components/SiteLoader";

export const metadata: Metadata = {
  title: "Rehaan & Associates | Civil Engineering",
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
        {/* ================================================
            INITIAL SITE LOADER
        ================================================ */}

        <SiteLoader />

        {/* ================================================
            GLOBAL NAVBAR
        ================================================ */}

        <TopBarWrapper />

        {/* ================================================
            PAGES
        ================================================ */}

        {children}
      </body>
    </html>
  );
}