import type { NextRequest } from "next/server";

import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/adminAuth";

export async function isAuthorizedAdminRequest(request: NextRequest) {
  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  return verifyAdminSession(token);
}
