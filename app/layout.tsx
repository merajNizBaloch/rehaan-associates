import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rehaan & Associates | Civil Engineering",
  description: "Civil engineering and infrastructure across Balochistan."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
