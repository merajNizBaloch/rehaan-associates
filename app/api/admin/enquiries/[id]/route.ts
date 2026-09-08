import { NextRequest, NextResponse } from "next/server";

import { isAuthorizedAdminRequest } from "@/lib/adminRequest";
import { getEnquiriesDb } from "@/lib/cloudflare";

const STATUSES = new Set(["new", "contacted", "closed"]);

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await isAuthorizedAdminRequest(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  let body: { status?: unknown; isRead?: unknown };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const status = typeof body.status === "string" ? body.status : undefined;
  const isRead = typeof body.isRead === "boolean" ? body.isRead : undefined;

  if (status !== undefined && !STATUSES.has(status)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  if (status === undefined && isRead === undefined) {
    return NextResponse.json({ error: "Nothing to update." }, { status: 400 });
  }

  try {
    const db = getEnquiriesDb();
    const fields: string[] = [];
    const values: unknown[] = [];

    if (status !== undefined) {
      fields.push("status = ?");
      values.push(status);
    }

    if (isRead !== undefined) {
      fields.push("is_read = ?");
      values.push(isRead ? 1 : 0);
    }

    fields.push("updated_at = CURRENT_TIMESTAMP");
    values.push(id);

    await db
      .prepare(`UPDATE enquiries SET ${fields.join(", ")} WHERE id = ?`)
      .bind(...values)
      .run();

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to update enquiry", error);
    return NextResponse.json({ error: "Could not update enquiry." }, { status: 503 });
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await isAuthorizedAdminRequest(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;

  try {
    const db = getEnquiriesDb();
    await db.prepare("DELETE FROM enquiries WHERE id = ?").bind(id).run();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to delete enquiry", error);
    return NextResponse.json({ error: "Could not delete enquiry." }, { status: 503 });
  }
}
