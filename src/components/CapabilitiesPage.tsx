"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Calculator,
  ClipboardCheck,
  DraftingCompass,
  FileText,
  HardHat,
  Route,
  ShieldCheck,
} from "lucide-react";

import BrickCursor from "@/components/cursor/BrickCursor";
import CapabilitiesHeroMotion from "@/components/CapabilitiesHeroMotion";
import EngineeringButton from "@/components/EngineeringButton";
import { useSiteMode } from "@/components/SiteModeProvider";

const sectors = [
  {
    title: "Residential",
    text: "Houses, villas, apartments and residential developments requiring coordinated architecture, engineering and cost planning.",
    icon: Building2,
  },
  {
    title: "Commercial",
    text: "Offices, shops, mixed-use and commercial developments requiring design, technical documentation and project coordination.",
    icon: DraftingCompass,
  },
  {
    title: "Public Sector",
    text: "Institutional and public-sector assignments requiring formal documentation, quantities, tender support and technical coordination.",
    icon: ClipboardCheck,
  },
  {
    title: "Infrastructure",
    text: "Roads, drainage, utilities, site development and transportation-related infrastructure planning and engineering.",
    icon: Route,
  },
  {
    title: "Industrial",
    text: "Industrial and utility-related facilities requiring civil, structural, site and project delivery support.",
    icon: HardHat,
  },
  {
    title: "Institutional",
    text: "Education, healthcare and other institutional facilities requiring multidisciplinary design and technical documentation.",
    icon: ShieldCheck,
  },
];

const packages = [
  {
    title: "Design & drawings",
    icon: DraftingCompass,
    items: ["Concept design", "Architectural drawings", "Structural analysis", "RCC design", "Steel structure design", "Foundation design", "Working drawings"],
  },
  {
    title: "Cost & procurement",
    icon: Calculator,
    items: ["Quantity take-offs", "BOQ preparation", "Cost estimates", "Cost planning", "Tender documentation", "Contract documentation"],
  },
  {
    title: "Infrastructure",
    icon: Route,
    items: ["Road layouts", "Drainage networks", "Utility coordination", "Site development", "Water supply", "Sewerage planning"],
  },
  {
    title: "Delivery & supervision",
    icon: ClipboardCheck,
    items: ["Construction supervision", "Quality control", "Progress monitoring", "Schedule monitoring", "Technical support", "Completion & handover"],
  },
];

const sampleOutputs = [
  "Architectural drawings",
  "Structural drawings",
  "RCC & steel calculations",
  "Foundation details",
  "BOQs",
  "Quantity take-offs",
  "Cost estimates",
  "Tender documents",
  "Road & drainage layouts",
  "Site development plans",
  "Progress reports",
  "As-built drawings",
];

export default function CapabilitiesPage() {
  const { mode } = useSiteMode();
  const isSite = mode === "site";

  return (
    <main data-mode={mode} className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <BrickCursor />

      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-28 md:pt-32"
        style={{
          backgroundColor: isSite ? "#C7B792" : "#07111F",
          backgroundImage: isSite
            ? "linear-gradient(rgba(21,87,160,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(21,87,160,.05) 1px,transparent 1px),radial-gradient(circle at 50% 38%,rgba(255,248,228,.2),transparent 34%)"
            : "linear-gradient(rgba(79,143,210,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(79,143,210,.05) 1px,transparent 1px),radial-gradient(circle at 50% 40%,rgba(79,143,210,.14),transparent 36%)",
          backgroundSize: "56px 56px,56px 56px,auto",
        }}
      >
        <div className="pointer-events-none absolute left-[7%] top-[27%] hidden lg:block">
          <span className="block h-3 w-3 rounded-full border border-[var(--blue)]" />
          <span className="absolute left-1/2 top-[-18px] h-24 w-px bg-[var(--blue)]/25" />
          <span className="absolute -left-1 -top-9 whitespace-nowrap text-[8px] uppercase tracking-[0.2em] text-[var(--blue)]">CAPABILITY 01</span>
        </div>

        <div className="pointer-events-none absolute right-[7%] top-[31%] hidden lg:block">
          <span className="block h-3 w-3 rounded-full border border-[var(--blue)]" />
          <span className="absolute left-1/2 top-[-18px] h-28 w-px bg-[var(--blue)]/25" />
          <span className="absolute -left-1 -top-9 whitespace-nowrap text-[8px] uppercase tracking-[0.2em] text-[var(--blue)]">BUILT ENVIRONMENT</span>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--blue)]"
          >
            Engineering capabilities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[clamp(3.6rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.065em]"
          >
            From requirements
            <br />
            <span className="text-[var(--blue)]">to buildable solutions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mx-auto mt-9 max-w-2xl text-[15px] leading-7 text-[var(--muted)] md:text-[17px]"
          >
            Different project types require different combinations of engineering, architecture, infrastructure,
            quantity surveying and project delivery. These are the sectors and technical outputs we are equipped to support.
          </motion.p>

          <CapabilitiesHeroMotion mode={mode} />
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] px-6 py-10 md:py-12">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--blue)]/10 text-[var(--blue)]">
            <ShieldCheck size={22} strokeWidth={1.5} />
          </div>
          <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--blue)]">Professional engineering basis</p>
          <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-7 text-[var(--muted)]">Engineering services are delivered by engineers registered with the Pakistan Engineering Council (PEC). This page describes capability and project types, not completed-client-project claims.</p>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Sectors</p>
            <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl">Different contexts. One technical workflow.</h2>
          </div>

          <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.article
                  key={sector.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-colors duration-300 hover:border-[var(--blue)]/35"
                >
                  <div className="flex items-center justify-between">
                    <motion.div whileHover={{ rotate: -5, scale: 1.08 }}><Icon size={20} className="text-[var(--blue)]" /></motion.div>
                    <span className="text-[9px] font-semibold tracking-[0.18em] text-[var(--blue)]">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-9 text-2xl font-medium tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-1">{sector.title}</h3>
                  <p className="mt-4 text-[14px] leading-7 text-[var(--muted)]">{sector.text}</p>
                  <div className="mt-7 h-px w-8 bg-[var(--blue)]/30 transition-all duration-300 group-hover:w-16" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Service packages</p>
            <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl">What we can deliver.</h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--border)] md:grid-cols-2">
            {packages.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div key={group.title} whileHover={{ y: -4 }} className="group bg-[var(--paper)] p-7 transition-colors duration-300 hover:bg-[var(--surface)] md:p-9">
                  <Icon size={20} className="text-[var(--blue)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110" />
                  <h3 className="mt-7 text-2xl font-medium tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-1">{group.title}</h3>
                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <motion.div key={item} whileHover={{ x: 4 }} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[12px] text-[var(--muted)] transition-colors hover:border-[var(--blue)]/30 hover:text-[var(--ink)]">{item}</motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Technical outputs</p>
            <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl">Documents that move work forward.</h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-[var(--muted)]">The exact deliverable set is defined by project scope, discipline, approval requirements and stage of work.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {sampleOutputs.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.025 }}
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4 transition-colors hover:border-[var(--blue)]/35"
              >
                <FileText size={15} className="text-[var(--blue)]" /><span className="text-[13px]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111F] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#4F8FD2]">Talk to the consultancy</p>
          <h2 className="mt-6 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">Have a project requirement?</h2>
          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-[#9BA7B4]">Send the site, scope or requirement. We can discuss the appropriate engineering, architecture, quantity surveying or project-delivery path.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <EngineeringButton href="/contact" variant="primary">Request consultation</EngineeringButton>
            <EngineeringButton href="/expertise" variant="secondary">View expertise</EngineeringButton>
          </div>
        </div>
      </section>
    </main>
  );
}
