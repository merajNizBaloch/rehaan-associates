import type { Metadata } from "next";

import AdminPortal from "@/components/admin/AdminPortal";

export const metadata: Metadata = {
  title: "Enquiries Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <div className="!cursor-auto [&_*]:!cursor-auto">
      <AdminPortal />
    </div>
  );
}
