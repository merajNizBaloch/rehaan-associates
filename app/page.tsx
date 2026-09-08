import { headers } from "next/headers";

import AdminPortal from "@/components/admin/AdminPortal";
import HomePage from "@/components/HomePage";

export default async function Page() {
  const host = (await headers()).get("host")?.split(":")[0].toLowerCase();

  if (host === "admin.rehanconsultants.com") {
    return <AdminPortal />;
  }

  return <HomePage />;
}
