import { getRuntimeEnv } from "@/lib/cloudflare";

export const ADMIN_COOKIE = "rehan_admin_session";
export const ADMIN_SESSION_SECONDS = 60 * 60 * 8;

function bytesToBase64Url(bytes: Uint8Array) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

async function hmac(value: string, secret: string) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return bytesToBase64Url(new Uint8Array(signature));
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return new Uint8Array(digest);
}

function constantTimeEqual(a: Uint8Array, b: Uint8Array) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let index = 0; index < a.length; index += 1) {
    result |= a[index] ^ b[index];
  }
  return result === 0;
}

export function adminAuthConfigured() {
  const env = getRuntimeEnv();
  return Boolean(env.ADMIN_PASSWORD && env.ADMIN_SESSION_SECRET);
}

export async function verifyAdminPassword(input: string) {
  const password = getRuntimeEnv().ADMIN_PASSWORD;
  if (!password) return false;

  const [providedHash, expectedHash] = await Promise.all([
    sha256(input),
    sha256(password),
  ]);

  return constantTimeEqual(providedHash, expectedHash);
}

export async function createAdminSession() {
  const secret = getRuntimeEnv().ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not configured.");

  const expiresAt = Math.floor(Date.now() / 1000) + ADMIN_SESSION_SECONDS;
  const payload = `admin.${expiresAt}`;
  const signature = await hmac(payload, secret);
  return `${payload}.${signature}`;
}

export async function verifyAdminSession(token?: string | null) {
  const secret = getRuntimeEnv().ADMIN_SESSION_SECRET;
  if (!secret || !token) return false;

  const parts = token.split(".");
  if (parts.length !== 3 || parts[0] !== "admin") return false;

  const expiresAt = Number(parts[1]);
  if (!Number.isFinite(expiresAt) || expiresAt <= Math.floor(Date.now() / 1000)) {
    return false;
  }

  const payload = `admin.${parts[1]}`;
  const expected = await hmac(payload, secret);

  const [providedHash, expectedHash] = await Promise.all([
    sha256(parts[2]),
    sha256(expected),
  ]);

  return constantTimeEqual(providedHash, expectedHash);
}
