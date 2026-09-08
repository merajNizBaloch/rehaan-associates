import { NextResponse } from "next/server";

import {
  ADMIN_COOKIE,
  ADMIN_SESSION_SECONDS,
  adminAuthConfigured,
  createAdminSession,
  verifyAdminPassword,
} from "@/lib/adminAuth";

export async function POST(request: Request) {
  if (!adminAuthConfigured()) {
    return NextResponse.json(
      { error: "Admin authentication has not been configured on Cloudflare yet." },
      { status: 503 },
    );
  }

  let password = "";
  try {
    const body = (await request.json()) as { password?: unknown };
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!(await verifyAdminPassword(password))) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: ADMIN_COOKIE,
    value: await createAdminSession(),
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: ADMIN_SESSION_SECONDS,
  });

  return response;
}
