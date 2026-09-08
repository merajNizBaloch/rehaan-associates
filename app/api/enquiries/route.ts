import { NextResponse } from "next/server";

import { getEnquiriesDb } from "@/lib/cloudflare";
import { sendEnquiryEmail } from "@/lib/enquiryNotifications";

const PROJECT_TYPES = new Set([
  "residential",
  "commercial",
  "industrial",
  "infrastructure",
  "public-sector",
  "other",
]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    // Honeypot: bots often fill hidden website/company fields.
    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true }, { status: 201 });
    }

    const name = clean(body.name, 120);
    const phone = clean(body.phone, 40);
    const email = clean(body.email, 180).toLowerCase();
    const projectType = clean(body.projectType, 60);
    const message = clean(body.message, 5000);

    if (!name || !phone || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Please complete all fields before sending your enquiry." },
        { status: 400 },
      );
    }

    if (!validEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!PROJECT_TYPES.has(projectType)) {
      return NextResponse.json(
        { error: "Please select a valid project type." },
        { status: 400 },
      );
    }

    const db = getEnquiriesDb();

    // Lightweight abuse control without storing visitor IP addresses.
    const recent = await db
      .prepare(
        `SELECT COUNT(*) AS count
         FROM enquiries
         WHERE created_at > datetime('now', '-5 minutes')
           AND (email = ? OR phone = ?)`,
      )
      .bind(email, phone)
      .first<{ count: number }>();

    if (Number(recent?.count ?? 0) >= 3) {
      return NextResponse.json(
        { error: "Too many recent submissions. Please wait a few minutes and try again." },
        { status: 429 },
      );
    }

    const id = crypto.randomUUID();

    await db
      .prepare(
        `INSERT INTO enquiries
          (id, name, phone, email, project_type, message, status, is_read)
         VALUES (?, ?, ?, ?, ?, ?, 'new', 0)`,
      )
      .bind(id, name, phone, email, projectType, message)
      .run();

    // Notifications are best-effort: an email provider outage should never
    // cause a successfully saved enquiry to be lost from the dashboard.
    try {
      await sendEnquiryEmail({
        id,
        name,
        phone,
        email,
        projectType,
        message,
      });
    } catch (notificationError) {
      console.error("Enquiry notification failed", notificationError);
    }

    return NextResponse.json({ ok: true, id }, { status: 201 });
  } catch (error) {
    console.error("Enquiry submission failed", error);

    const message =
      error instanceof Error && error.message.includes("D1 binding DB")
        ? "The enquiry service is being configured. Please contact us by phone or email for now."
        : "We could not send your enquiry right now. Please try again.";

    return NextResponse.json({ error: message }, { status: 503 });
  }
}
