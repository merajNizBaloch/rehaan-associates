"use client";

import {
  CheckCircle2,
  Clock3,
  ExternalLink,
  LogOut,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Trash2,
  X,
} from "lucide-react";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";

type EnquiryStatus = "new" | "contacted" | "closed";

type Enquiry = {
  id: string;
  name: string;
  phone: string;
  email: string;
  project_type: string;
  message: string;
  status: EnquiryStatus;
  is_read: number;
  created_at: string;
  updated_at: string;
};

type AuthState = "checking" | "login" | "ready" | "setup";
type Filter = "all" | "unread" | EnquiryStatus;

const PROJECT_LABELS: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
  infrastructure: "Infrastructure",
  "public-sector": "Public Sector",
  other: "Other",
};

const STATUS_LABELS: Record<EnquiryStatus, string> = {
  new: "New",
  contacted: "Contacted",
  closed: "Closed",
};

function formatDate(value: string) {
  const normalized = value.includes("T") ? value : `${value.replace(" ", "T")}Z`;
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-PK", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function whatsAppNumber(phone: string) {
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = `92${digits.slice(1)}`;
  return digits;
}

function statusClasses(status: EnquiryStatus) {
  if (status === "new") return "bg-[#E8F1FB] text-[#1557A0]";
  if (status === "contacted") return "bg-[#FFF4D9] text-[#8B6500]";
  return "bg-[#E9F5ED] text-[#277A43]";
}

export default function AdminPortal() {
  const [authState, setAuthState] = useState<AuthState>("checking");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Enquiry | null>(null);

  const loadEnquiries = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/enquiries", {
        cache: "no-store",
        credentials: "same-origin",
      });

      if (response.status === 401) {
        setAuthState("login");
        setEnquiries([]);
        return;
      }

      const data = (await response.json()) as {
        enquiries?: Enquiry[];
        error?: string;
      };

      if (!response.ok) {
        setError(data.error ?? "Could not load enquiries.");
        setAuthState("ready");
        return;
      }

      setEnquiries(data.enquiries ?? []);
      setAuthState("ready");
    } catch {
      setError("Could not connect to the enquiry service.");
      setAuthState("ready");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadEnquiries();
  }, [loadEnquiries]);

  async function login(event: FormEvent) {
    event.preventDefault();
    setLoginError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await response.json()) as { error?: string };

      if (response.status === 503) {
        setLoginError(data.error ?? "Admin authentication needs setup.");
        setAuthState("setup");
        return;
      }

      if (!response.ok) {
        setLoginError(data.error ?? "Could not sign in.");
        return;
      }

      setPassword("");
      await loadEnquiries();
    } catch {
      setLoginError("Could not connect to the admin service.");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setSelected(null);
    setEnquiries([]);
    setAuthState("login");
  }

  async function updateEnquiry(
    id: string,
    patch: { status?: EnquiryStatus; isRead?: boolean },
  ) {
    const response = await fetch(`/api/admin/enquiries/${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    });

    if (response.status === 401) {
      setAuthState("login");
      return;
    }

    if (!response.ok) {
      setError("Could not update this enquiry.");
      return;
    }

    setEnquiries((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              ...(patch.status ? { status: patch.status } : {}),
              ...(patch.isRead !== undefined
                ? { is_read: patch.isRead ? 1 : 0 }
                : {}),
            }
          : item,
      ),
    );

    setSelected((current) =>
      current?.id === id
        ? {
            ...current,
            ...(patch.status ? { status: patch.status } : {}),
            ...(patch.isRead !== undefined
              ? { is_read: patch.isRead ? 1 : 0 }
              : {}),
          }
        : current,
    );
  }

  async function openEnquiry(item: Enquiry) {
    setSelected(item);
    if (!item.is_read) {
      await updateEnquiry(item.id, { isRead: true });
    }
  }

  async function deleteEnquiry(item: Enquiry) {
    if (!window.confirm(`Delete the enquiry from ${item.name}? This cannot be undone.`)) {
      return;
    }

    const response = await fetch(`/api/admin/enquiries/${encodeURIComponent(item.id)}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      setError("Could not delete this enquiry.");
      return;
    }

    setEnquiries((current) => current.filter((entry) => entry.id !== item.id));
    setSelected(null);
  }

  const metrics = useMemo(
    () => ({
      total: enquiries.length,
      unread: enquiries.filter((item) => !item.is_read).length,
      new: enquiries.filter((item) => item.status === "new").length,
      contacted: enquiries.filter((item) => item.status === "contacted").length,
    }),
    [enquiries],
  );

  const visibleEnquiries = useMemo(() => {
    const query = search.trim().toLowerCase();

    return enquiries.filter((item) => {
      const matchesFilter =
        filter === "all"
          ? true
          : filter === "unread"
            ? !item.is_read
            : item.status === filter;

      if (!matchesFilter) return false;
      if (!query) return true;

      return [
        item.name,
        item.phone,
        item.email,
        item.project_type,
        item.message,
      ].some((value) => value.toLowerCase().includes(query));
    });
  }, [enquiries, filter, search]);

  if (authState === "checking") {
    return (
      <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#07111F] text-white">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-white/55">
            Opening admin
          </p>
        </div>
      </div>
    );
  }

  if (authState === "login" || authState === "setup") {
    return (
      <div className="fixed inset-0 z-[10000] overflow-y-auto bg-[#07111F] px-6 py-12 text-white">
        <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-md items-center">
          <div className="w-full rounded-[28px] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur md:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
              <img src="/mainlogo.png" alt="Rehan Consultants" className="h-9 w-9 object-contain" />
            </div>

            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#78A6C4]">
              Rehan Consultants
            </p>
            <h1 className="mt-3 text-3xl font-medium tracking-[-0.035em]">
              Enquiries admin
            </h1>
            <p className="mt-3 text-sm leading-6 text-white/55">
              Sign in to review project enquiries submitted through the website.
            </p>

            {authState === "setup" ? (
              <div className="mt-7 rounded-2xl border border-[#D8A928]/25 bg-[#D8A928]/10 p-4 text-sm leading-6 text-[#F3D987]">
                Admin authentication still needs its Cloudflare secrets. The dashboard code is ready; configure
                <strong> ADMIN_PASSWORD </strong> and
                <strong> ADMIN_SESSION_SECRET </strong> before going live.
              </div>
            ) : (
              <form onSubmit={login} className="mt-8">
                <label className="block">
                  <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Admin password
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    required
                    className="w-full rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#4F8FD2]"
                  />
                </label>

                {loginError ? (
                  <p className="mt-3 text-sm text-[#FFAAA0]">{loginError}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full rounded-2xl bg-[#1557A0] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#1C67B8] disabled:opacity-60"
                >
                  {loading ? "Signing in…" : "Sign in"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[10000] overflow-y-auto bg-[#F4F6F8] text-[#17202A]">
      <header className="sticky top-0 z-30 border-b border-black/[0.07] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.07] bg-white">
              <img src="/mainlogo.png" alt="" className="h-7 w-7 object-contain" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1557A0]">
                Rehan Consultants
              </p>
              <p className="mt-0.5 text-sm font-medium">Enquiries</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://rehanconsultants.com"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-xl border border-black/[0.08] bg-white px-3.5 py-2.5 text-xs font-medium text-[#4D5966] transition hover:border-[#1557A0]/30 hover:text-[#1557A0] sm:flex"
            >
              Website <ExternalLink size={14} />
            </a>
            <button
              onClick={logout}
              className="flex items-center gap-2 rounded-xl border border-black/[0.08] bg-white px-3.5 py-2.5 text-xs font-medium text-[#4D5966] transition hover:border-red-200 hover:text-red-600"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-5 py-7 md:px-8 md:py-9">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1557A0]">
              Project enquiries
            </p>
            <h1 className="mt-2 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
              Client inbox
            </h1>
          </div>
          <button
            onClick={() => void loadEnquiries()}
            disabled={loading}
            className="mt-3 self-start rounded-xl border border-black/[0.08] bg-white px-4 py-2.5 text-xs font-medium text-[#53606D] shadow-sm transition hover:border-[#1557A0]/25 md:mt-0"
          >
            {loading ? "Refreshing…" : "Refresh"}
          </button>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            ["Total", metrics.total, "All enquiries"],
            ["Unread", metrics.unread, "Need review"],
            ["New", metrics.new, "Not contacted"],
            ["Contacted", metrics.contacted, "Follow-up started"],
          ].map(([label, value, note]) => (
            <div key={String(label)} className="rounded-2xl border border-black/[0.07] bg-white p-5 shadow-[0_8px_25px_rgba(18,32,48,0.035)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7C8793]">
                {label}
              </p>
              <p className="mt-3 text-3xl font-medium tracking-[-0.04em]">{value}</p>
              <p className="mt-1 text-xs text-[#8A949E]">{note}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-black/[0.07] bg-white p-3 shadow-[0_8px_25px_rgba(18,32,48,0.035)] md:flex md:items-center md:justify-between md:gap-4">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8D98A2]" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search name, phone, email or message…"
              className="w-full rounded-xl bg-[#F4F6F8] py-3 pl-10 pr-4 text-sm outline-none ring-[#1557A0]/20 transition focus:ring-2"
            />
          </div>

          <div className="mt-3 flex flex-wrap gap-2 md:mt-0">
            {(["all", "unread", "new", "contacted", "closed"] as Filter[]).map((value) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`rounded-xl px-3.5 py-2.5 text-[11px] font-semibold capitalize transition ${
                  filter === value
                    ? "bg-[#1557A0] text-white"
                    : "bg-[#F4F6F8] text-[#65717D] hover:text-[#1557A0]"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {error ? (
          <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        <div className="mt-5 overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_8px_25px_rgba(18,32,48,0.035)]">
          <div className="hidden grid-cols-[1.25fr_1fr_1fr_0.8fr_0.5fr] gap-4 border-b border-black/[0.06] bg-[#FAFBFC] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8B959F] lg:grid">
            <span>Client</span>
            <span>Project</span>
            <span>Received</span>
            <span>Status</span>
            <span className="text-right">Open</span>
          </div>

          {visibleEnquiries.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <Mail className="mx-auto text-[#B7C0C8]" size={27} strokeWidth={1.5} />
              <p className="mt-4 text-sm font-medium text-[#56616C]">No enquiries found</p>
              <p className="mt-1 text-xs text-[#929BA4]">
                New website submissions will appear here automatically.
              </p>
            </div>
          ) : (
            visibleEnquiries.map((item) => (
              <button
                key={item.id}
                onClick={() => void openEnquiry(item)}
                className="grid w-full gap-3 border-b border-black/[0.055] px-5 py-4 text-left transition last:border-b-0 hover:bg-[#F8FAFC] lg:grid-cols-[1.25fr_1fr_1fr_0.8fr_0.5fr] lg:items-center lg:gap-4"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    {!item.is_read ? <span className="h-2 w-2 shrink-0 rounded-full bg-[#1557A0]" /> : null}
                    <p className="truncate text-sm font-semibold text-[#1E2933]">{item.name}</p>
                  </div>
                  <p className="mt-1 truncate text-xs text-[#7C8792]">{item.email}</p>
                </div>

                <div>
                  <p className="text-xs font-medium text-[#56616C]">
                    {PROJECT_LABELS[item.project_type] ?? item.project_type}
                  </p>
                  <p className="mt-1 truncate text-xs text-[#929BA4]">{item.phone}</p>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#697580]">
                  <Clock3 size={13} className="text-[#A0A9B2]" />
                  {formatDate(item.created_at)}
                </div>

                <div>
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusClasses(item.status)}`}>
                    {STATUS_LABELS[item.status]}
                  </span>
                </div>

                <div className="text-right text-xs font-semibold text-[#1557A0]">View →</div>
              </button>
            ))
          )}
        </div>
      </main>

      {selected ? (
        <div className="fixed inset-0 z-50 bg-[#07111F]/35 backdrop-blur-[2px]" onMouseDown={() => setSelected(null)}>
          <aside
            className="absolute bottom-0 right-0 top-0 w-full max-w-xl overflow-y-auto bg-white shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/[0.07] bg-white/95 px-6 py-4 backdrop-blur">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#1557A0]">Enquiry details</p>
                <p className="mt-1 text-sm font-semibold">{selected.name}</p>
              </div>
              <button onClick={() => setSelected(null)} className="rounded-xl border border-black/[0.07] p-2 text-[#6B7680] hover:bg-[#F4F6F8]">
                <X size={18} />
              </button>
            </div>

            <div className="p-6 md:p-7">
              <div className="flex flex-wrap gap-2">
                <a href={`tel:${selected.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-[#1557A0] px-4 py-3 text-xs font-semibold text-white">
                  <Phone size={15} /> Call
                </a>
                <a
                  href={`https://wa.me/${whatsAppNumber(selected.phone)}?text=${encodeURIComponent(`Hello ${selected.name}, thank you for contacting Rehan Consultants regarding your ${PROJECT_LABELS[selected.project_type] ?? selected.project_type} project.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-semibold text-white"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
                <a href={`mailto:${selected.email}`} className="inline-flex items-center gap-2 rounded-xl border border-black/[0.08] px-4 py-3 text-xs font-semibold text-[#4F5B67]">
                  <Mail size={15} /> Email
                </a>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  ["Phone", selected.phone],
                  ["Email", selected.email],
                  ["Project type", PROJECT_LABELS[selected.project_type] ?? selected.project_type],
                  ["Received", formatDate(selected.created_at)],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-[#F5F7F9] p-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#909AA3]">{label}</p>
                    <p className="mt-2 break-words text-sm font-medium text-[#34404B]">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#909AA3]">Message</p>
                <div className="mt-2 whitespace-pre-wrap rounded-2xl border border-black/[0.07] bg-white p-5 text-sm leading-7 text-[#495560]">
                  {selected.message}
                </div>
              </div>

              <div className="mt-7 border-t border-black/[0.07] pt-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#909AA3]">Progress</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {(["new", "contacted", "closed"] as EnquiryStatus[]).map((status) => (
                    <button
                      key={status}
                      onClick={() => void updateEnquiry(selected.id, { status })}
                      className={`rounded-xl border px-3 py-3 text-[10px] font-semibold transition ${
                        selected.status === status
                          ? "border-[#1557A0] bg-[#1557A0] text-white"
                          : "border-black/[0.08] text-[#697580] hover:border-[#1557A0]/30"
                      }`}
                    >
                      {STATUS_LABELS[status]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-black/[0.07] pt-6">
                <div className="flex items-center gap-2 text-xs text-[#7A858F]">
                  <CheckCircle2 size={15} className={selected.is_read ? "text-[#277A43]" : "text-[#A0A9B2]"} />
                  {selected.is_read ? "Reviewed" : "Unread"}
                </div>
                <button onClick={() => void deleteEnquiry(selected)} className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50">
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
