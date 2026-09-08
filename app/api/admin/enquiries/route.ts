import { NextRequest, NextResponse } from "next/server";

import { isAuthorizedAdminRequest } from "@/lib/adminRequest";
import { getEnquiriesDb } from "@/lib/cloudflare";

export interface EnquiryRow {
  id: string;
  name: string;
  phone: string;
  email: string;
  project_type: string;
  message: string;
  status: "new" | "contacted" | "closed";
  is_read: number;
  created_at: string;
  updated_at: string;
}

export async function GET(request: NextRequest) {
  if (!(await isAuthorizedAdminRequest(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = getEnquiriesDb();
    const { results } = await db
      .prepare(
        `SELECT id, name, phone, email, project_type, message, status,
                is_read, created_at, updated_at
         FROM enquiries
         ORDER BY datetime(created_at) DESC
         LIMIT 500`,
      )
      .all<EnquiryRow>();

    return NextResponse.json({ enquiries: results });
  } catch (error) {
    console.error("Failed to load enquiries", error);
    return NextResponse.json(
      { error: "The enquiry database is not available yet." },
      { status: 503 },
    );
  }
}
