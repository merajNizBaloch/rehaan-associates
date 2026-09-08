# Rehan Consultants — Enquiries Admin Setup

The application code expects a Cloudflare D1 database binding named `DB` and two admin authentication secrets. Email notifications are optional and use Resend.

## 1. D1 database

Database:

- Name: `rehan-enquiries`
- Database ID: `b2206cc1-fa65-4b20-baf8-dca656037dfa`

Run the SQL in `migrations/0001_create_enquiries.sql` in the Cloudflare D1 Console.

## 2. Bind D1 to the Worker

The production Worker is `rehanconsultant`.

Add a D1 binding with:

- Variable name: `DB`
- Database: `rehan-enquiries`

The repository `wrangler.jsonc` is already configured with:

```jsonc
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "rehan-enquiries",
    "database_id": "b2206cc1-fa65-4b20-baf8-dca656037dfa"
  }
]
```

## 3. Configure admin authentication

In **Workers & Pages → rehanconsultant → Settings → Variables and Secrets**, add these as encrypted secrets:

- `ADMIN_PASSWORD` — the password used to sign in at `admin.rehanconsultants.com`
- `ADMIN_SESSION_SECRET` — a long random value (32+ random characters recommended)

The application stores only a signed, HttpOnly, Secure session cookie in the browser. The password and signing secret remain server-side.

## 4. Optional email notifications

The enquiry is always saved to D1 first. Email delivery is best-effort and does not block saving the enquiry.

To enable email notifications, configure:

- `RESEND_API_KEY`
- `ENQUIRY_NOTIFICATION_EMAIL=reekij364@gmail.com` (optional; this is also the code default)
- `ENQUIRY_FROM_EMAIL=Rehan Consultants <enquiries@YOUR_VERIFIED_DOMAIN>`

Verify the sending domain in Resend before using the production sender address.

## 5. Domains

The same Worker can serve all existing custom domains. The application checks the request hostname and renders the admin dashboard when the hostname is:

`admin.rehanconsultants.com`

A protected fallback is also available at:

`https://rehanconsultants.com/admin`

## 6. Contact form flow

`/contact` → `POST /api/enquiries` → D1 `enquiries` table → optional email notification → `admin.rehanconsultants.com`

The dashboard supports:

- unread/read state
- New / Contacted / Closed workflow
- search and filtering
- phone call action
- WhatsApp reply action
- email reply action
- deletion

## 7. Automatic WhatsApp notifications

The dashboard can already open a WhatsApp conversation with the client without additional credentials. Automatic server-to-WhatsApp alerts require an official provider such as Meta WhatsApp Cloud API and an approved message template; this can be added after the email notification flow is live.
