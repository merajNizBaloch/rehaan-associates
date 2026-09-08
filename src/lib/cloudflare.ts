import { getCloudflareContext } from "@opennextjs/cloudflare";

export interface D1PreparedStatementLike {
  bind(...values: unknown[]): D1PreparedStatementLike;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
  run(): Promise<{ success?: boolean; meta?: Record<string, unknown> }>;
}

export interface D1DatabaseLike {
  prepare(query: string): D1PreparedStatementLike;
}

export interface RuntimeEnv {
  DB?: D1DatabaseLike;
  ADMIN_PASSWORD?: string;
  ADMIN_SESSION_SECRET?: string;
  RESEND_API_KEY?: string;
  ENQUIRY_NOTIFICATION_EMAIL?: string;
  ENQUIRY_FROM_EMAIL?: string;
}

export function getRuntimeEnv(): RuntimeEnv {
  const { env } = getCloudflareContext();
  return env as unknown as RuntimeEnv;
}

export function getEnquiriesDb(): D1DatabaseLike {
  const db = getRuntimeEnv().DB;
  if (!db) {
    throw new Error(
      "D1 binding DB is not configured. Bind your rehan-enquiries database to the Worker using the variable name DB.",
    );
  }

  return db;
}
