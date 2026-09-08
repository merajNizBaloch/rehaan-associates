import { getRuntimeEnv } from "@/lib/cloudflare";

export interface EnquiryNotification {
  id: string;
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendEnquiryEmail(enquiry: EnquiryNotification) {
  const env = getRuntimeEnv();
  const apiKey = env.RESEND_API_KEY;
  const to = env.ENQUIRY_NOTIFICATION_EMAIL || "reekij364@gmail.com";
  const from = env.ENQUIRY_FROM_EMAIL;

  if (!apiKey || !from) {
    return { sent: false, reason: "Email notification variables are not configured." };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `New project enquiry from ${enquiry.name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#182333">
          <h2 style="margin-bottom:8px">New Rehan Consultants enquiry</h2>
          <p style="color:#5f6b7a;margin-top:0">A new project enquiry was submitted on rehanconsultants.com.</p>
          <table style="width:100%;border-collapse:collapse;margin-top:24px">
            <tr><td style="padding:8px 0;font-weight:700">Name</td><td>${escapeHtml(enquiry.name)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Phone</td><td>${escapeHtml(enquiry.phone)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Email</td><td>${escapeHtml(enquiry.email)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Project type</td><td>${escapeHtml(enquiry.projectType)}</td></tr>
          </table>
          <div style="margin-top:24px;padding:18px;background:#f4f6f8;border-radius:12px;white-space:pre-wrap">${escapeHtml(enquiry.message)}</div>
          <p style="margin-top:24px"><a href="https://admin.rehanconsultants.com" style="color:#1557A0">Open admin dashboard</a></p>
          <p style="font-size:12px;color:#7d8792">Enquiry ID: ${escapeHtml(enquiry.id)}</p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    return {
      sent: false,
      reason: `Resend returned ${response.status}.`,
    };
  }

  return { sent: true };
}
