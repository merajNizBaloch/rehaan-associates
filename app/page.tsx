import type { Metadata } from "next";
import { headers } from "next/headers";

import AdminPortal from "@/components/admin/AdminPortal";
import HomePageV2 from "@/components/HomePageV2";

async function requestHost() {
  return (await headers()).get("host")?.split(":")[0].toLowerCase();
}

export async function generateMetadata(): Promise<Metadata> {
  if ((await requestHost()) === "admin.rehanconsultants.com") {
    return {
      title: "Enquiries Admin",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: "Civil Engineering & Architecture in Balochistan",
    description:
      "Rehan Consultants provides civil and structural engineering, architecture, infrastructure, quantity surveying, construction support and project management in Quetta, Balochistan, with engineering services delivered by PEC-registered professionals.",
    alternates: {
      canonical: "https://rehanconsultants.com",
    },
  };
}

export default async function Page() {
  if ((await requestHost()) === "admin.rehanconsultants.com") {
    return (
      <div className="!cursor-auto [&_*]:!cursor-auto">
        <AdminPortal />
      </div>
    );
  }

  return <HomePageV2 />;
}
