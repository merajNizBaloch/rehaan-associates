import type { Metadata } from "next";
import { headers } from "next/headers";

import AdminPortal from "@/components/admin/AdminPortal";
import HomePage from "@/components/HomePage";

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

  return {};
}

export default async function Page() {
  if ((await requestHost()) === "admin.rehanconsultants.com") {
    return (
      <div className="!cursor-auto [&_*]:!cursor-auto">
        <AdminPortal />
      </div>
    );
  }

  return <HomePage />;
}
