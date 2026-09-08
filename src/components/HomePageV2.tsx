"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Calculator,
  ClipboardCheck,
  DraftingCompass,
  FileText,
  HardHat,
  MapPin,
  MessageCircle,
  Phone,
  Route,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import BrickCursor from "@/components/cursor/BrickCursor";
import EngineeringButton from "@/components/EngineeringButton";
import { useSiteMode } from "@/components/SiteModeProvider";

const services = [
  {
    icon: Building2,
    title: "Civil & Structural Engineering",
    text: "Planning, analysis, RCC and steel design, foundations, site development and technical drawings.",
  },
  {
    icon: DraftingCompass,
    title: "Architecture",
    text: "Concept design, space planning, working drawings, elevations, sections and coordinated design development.",
  },
  {
    icon: Route,
    title: "Infrastructure",
    text: "Roads, drainage, utilities, site infrastructure and transportation-related planning and coordination.",
  },
  {
    icon: Calculator,
    title: "Quantity Surveying",
    text: "BOQs, quantity take-offs, cost estimates, cost planning, tender and contract documentation.",
  },
  {
    icon: HardHat,
    title: "Construction Support",
    text: "Site supervision, quality control, technical coordination, progress monitoring and field support.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    text: "Planning, procurement, schedule and cost monitoring, coordination, reporting, completion and handover.",
  },
];

const sectors = [
  "Residential",
  "Commercial",
  "Public Sector",
  "Infrastructure",
  "Industrial",
  "Institutional",
];

const deliverables = [
  "Architectural drawings",
  "Structural drawings",
  "RCC & steel design",
  "BOQs & quantity take-offs",
  "Cost estimates",
  "Tender documentation",
  "Road & drainage layouts",
  "Site development plans",
  "Construction supervision reports",
  "Project schedules",
  "Technical assessments",
  "As-built documentation",
];

const reasons = [
  {
    title: "Professional engineering responsibility",
    text: "Engineering services are delivered by engineers registered with the Pakistan Engineering Council (PEC), with an emphasis on professional standards, safety and accountable technical work.",
  },
  {
    title: "One coordinated consultancy",
    text: "Architecture, civil and structural engineering, infrastructure, quantity surveying and project management are considered as one connected project workflow.",
  },
  {
    title: "Practical, buildable solutions",
    text: "Design decisions are considered against site conditions, constructability, cost, documentation requirements and long-term project use.",
  },
  {
    title: "Local understanding, professional delivery",
    text: "Based in Quetta and focused on Balochistan, the consultancy combines regional context with disciplined technical documentation and communication.",
  },
];

const process = [
  ["01", "Understand", "Project brief, requirements, site context and objectives."],
  ["02", "Assess", "Site conditions, constraints, feasibility and technical needs."],
  ["03", "Design", "Coordinated architecture, engineering, infrastructure and cost work."],
  ["04", "Document", "Drawings, BOQs, specifications, tender and project documentation."],
  ["05", "Deliver", "Construction support, monitoring, coordination and handover."],
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePageV2() {
  const { mode } = useSiteMode();
  const isSite = mode === "site";

  return (
    <main data-mode={mode} className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <BrickCursor />

      <section
        className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:pt-36"
        style={{
          backgroundColor: isSite ? "#C7B792" : "#07111F",
          backgroundImage: isSite
            ? "linear-gradient(rgba(21,87,160,.045) 1px, transparent 1px),linear-gradient(90deg,rgba(21,87,160,.045) 1px,transparent 1px),radial-gradient(circle at 70% 30%,rgba(255,248,228,.25),transparent 32%)"
            : "linear-gradient(rgba(79,143,210,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(79,143,210,.045) 1px,transparent 1px),radial-gradient(circle at 72% 32%,rgba(79,143,210,.16),transparent 35%)",
          backgroundSize: "56px 56px,56px 56px,auto",
        }}
      >
        <div className="pointer-events-none absolute left-[6%] top-[24%] hidden lg:block">
          <div className="h-3 w-3 rounded-full border border-[var(--blue)]" />
          <div className="absolute left-1/2 top-3 h-28 w-px bg-[var(--blue)]/30" />
          <span className="absolute -left-2 -top-7 whitespace-nowrap text-[8px] uppercase tracking-[0.22em] text-[var(--blue)]">PEC · ENGINEERING</span>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.12fr_.88fr] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--blue)]"
            >
              Quetta · Balochistan · Pakistan
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-5xl text-[clamp(3.4rem,7vw,7.4rem)] font-medium leading-[0.9] tracking-[-0.065em]"
            >
              Engineering
              <br />
              <span className="text-[var(--blue)]">the land forward.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="mt-8 max-w-2xl text-[15px] leading-8 text-[var(--muted)] md:text-[17px]"
            >
              Rehan Consultants is a multidisciplinary consultancy for civil and structural engineering,
              architecture, infrastructure, quantity surveying, construction support and project management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <EngineeringButton href="/contact" variant="primary">Request consultation</EngineeringButton>
              <EngineeringButton href="/capabilities" variant="secondary">Explore capabilities</EngineeringButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/80 p-7 shadow-[0_24px_80px_rgba(0,0,0,.12)] backdrop-blur md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--blue)]/10 text-[var(--blue)]">
                  <BadgeCheck size={25} strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Professional credentials</p>
                  <h2 className="mt-1 text-xl font-medium tracking-[-0.03em]">PEC-registered engineering professionals</h2>
                </div>
              </div>

              <p className="mt-6 text-[14px] leading-7 text-[var(--muted)]">
                Engineering services are undertaken by engineers registered with the Pakistan Engineering Council (PEC),
                supporting responsible design, technical documentation, safety and professional accountability.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Civil & structural", "Infrastructure", "Cost & quantities", "Project delivery"].map((item) => (
                  <div key={item} className="rounded-xl border border-[var(--border)] bg-[var(--paper)]/60 px-4 py-3 text-[11px] font-medium text-[var(--ink)]">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-[var(--border)] pt-5 text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                Technical work · documented · coordinated · accountable
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[var(--blue)]" size={22} />
            <div>
              <p className="text-sm font-medium">Engineering backed by professional credentials</p>
              <p className="mt-1 text-xs text-[var(--muted)]">PEC-registered engineers · multidisciplinary coordination · technical documentation</p>
            </div>
          </div>
          <EngineeringButton href="/contact" variant="secondary">Discuss a project</EngineeringButton>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Core expertise</p>
              <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl">One consultancy. Multiple disciplines.</h2>
              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[var(--muted)]">A coordinated technical workflow from first requirement to design, documentation, cost planning and project delivery.</p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="bg-[var(--surface)] p-7 transition hover:bg-[var(--paper)]"
                >
                  <Icon size={21} strokeWidth={1.5} className="text-[var(--blue)]" />
                  <h3 className="mt-8 text-xl font-medium tracking-[-0.03em]">{service.title}</h3>
                  <p className="mt-4 text-[14px] leading-7 text-[var(--muted)]">{service.text}</p>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-9">
            <EngineeringButton href="/expertise" variant="secondary">View full expertise</EngineeringButton>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Project types we serve</p>
                <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl">Built for different project contexts.</h2>
              </div>
              <p className="max-w-2xl text-[15px] leading-7 text-[var(--muted)] lg:justify-self-end">
                These are sectors and project types Rehan Consultants is equipped to support. They are presented as capabilities, not as a list of completed client projects.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--paper)] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold tracking-[0.18em] text-[var(--blue)]">{String(index + 1).padStart(2, "0")}</span>
                  <Ruler size={15} className="text-[var(--blue)]/60" />
                </div>
                <p className="mt-10 text-xl font-medium tracking-[-0.03em]">{sector}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-9">
            <EngineeringButton href="/capabilities" variant="primary">View capabilities</EngineeringButton>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Technical deliverables</p>
              <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl">Work you can actually use.</h2>
              <p className="mt-6 max-w-md text-[15px] leading-7 text-[var(--muted)]">Clear, coordinated outputs prepared to support decision-making, approvals, tendering, construction and project control.</p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {deliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.025 }}
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4"
              >
                <FileText size={15} className="shrink-0 text-[var(--blue)]" />
                <span className="text-[13px] text-[var(--ink)]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111F] px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#4F8FD2]">Why Rehan Consultants</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl">Professional capability before portfolio claims.</h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#9BA7B4]">Our focus is to earn trust through technical competence, clear documentation, professional responsibility and disciplined project delivery.</p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="bg-[#0D1927] p-7 md:p-8">
                <span className="text-[9px] font-semibold tracking-[0.18em] text-[#4F8FD2]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-7 text-xl font-medium tracking-[-0.03em]">{reason.title}</h3>
                <p className="mt-4 text-[14px] leading-7 text-[#9BA7B4]">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Our process</p>
              <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl">A clear technical path.</h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-3 lg:grid-cols-5">
            {process.map(([number, title, text]) => (
              <div key={number} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <span className="text-[9px] font-semibold tracking-[0.18em] text-[var(--blue)]">{number}</span>
                <h3 className="mt-8 text-lg font-medium">{title}</h3>
                <p className="mt-3 text-[13px] leading-6 text-[var(--muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--surface)] px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(var(--blue) 1px,transparent 1px),linear-gradient(90deg,var(--blue) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Start a project</p>
            <h2 className="mt-6 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">Bring us the requirement.<br /><span className="text-[var(--blue)]">We will define the technical path.</span></h2>
            <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-[var(--muted)]">Request a consultation, discuss a site visit, or send your project requirements for an initial technical conversation.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <EngineeringButton href="/contact" variant="primary">Request consultation</EngineeringButton>
              <a href="https://wa.me/923178921361?text=Hello%20Rehan%20Consultants%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--paper)] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--ink)] transition hover:border-[var(--blue)]/40">
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#07111F] px-6 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white"><img src="/mainlogo.png" alt="Rehan Consultants" className="h-9 w-9 object-contain" /></div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.14em]">REHAN CONSULTANTS</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#9BA7B4]">Engineering across disciplines</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-[13px] leading-6 text-[#9BA7B4]">Civil and structural engineering, architecture, infrastructure, quantity surveying, construction support and project management.</p>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#4F8FD2]">Contact</p>
            <div className="mt-4 space-y-3 text-[12px] text-[#C2CAD3]">
              <a className="flex items-center gap-2 hover:text-white" href="tel:+923178921361"><Phone size={13} /> +92 317 8921361</a>
              <a className="flex items-center gap-2 hover:text-white" href="mailto:therehanconsultants@gmail.com"><MessageCircle size={13} /> therehanconsultants@gmail.com</a>
              <span className="flex items-center gap-2"><MapPin size={13} /> Jinnah Town, Quetta</span>
            </div>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#4F8FD2]">Quick links</p>
            <div className="mt-4 flex flex-col gap-3 text-[12px] text-[#C2CAD3]">
              <a href="/expertise" className="hover:text-white">Expertise</a>
              <a href="/capabilities" className="hover:text-white">Capabilities</a>
              <a href="/contact" className="hover:text-white">Request consultation</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-9 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.16em] text-[#7F8A96] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Rehan Consultants</span>
          <span>Designed & developed by <a className="underline underline-offset-2 hover:text-white" href="https://wa.me/923336077281" target="_blank" rel="noreferrer">TechCraft</a></span>
        </div>
      </footer>

      <div className="fixed bottom-3 left-3 right-3 z-[90] grid grid-cols-2 gap-2 md:hidden">
        <a href="tel:+923178921361" className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#07111F]/95 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-xl backdrop-blur"><Phone size={14} /> Call</a>
        <a href="https://wa.me/923178921361" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-xl"><MessageCircle size={14} /> WhatsApp</a>
      </div>
    </main>
  );
}
