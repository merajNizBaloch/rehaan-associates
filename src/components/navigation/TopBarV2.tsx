"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, Moon, Ruler, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export type SiteMode = "night" | "site";

type Props = {
  mode: SiteMode;
  setMode: (mode: SiteMode) => void;
};

const links = [
  ["Home", "/"],
  ["Expertise", "/expertise"],
  ["Capabilities", "/capabilities"],
  ["Contact", "/contact"],
] as const;

function activePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function TopBarV2({ mode, setMode }: Props) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMode = () => setMode(mode === "night" ? "site" : "night");

  return (
    <>
      <header className="fixed left-3 right-3 top-3 z-[100] md:left-6 md:right-6 md:top-5">
        <div className="mx-auto flex h-[64px] max-w-[1500px] items-center justify-between rounded-[19px] border border-[var(--border)] bg-[var(--nav-bg)] px-4 shadow-[0_14px_45px_rgba(0,0,0,.12)] backdrop-blur-xl md:h-[70px] md:px-6">
          <Link href="/" data-magnetic className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
              <img src="/mainlogo.png" alt="Rehan Consultants" className="h-full w-full object-contain p-1" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[9px] font-semibold tracking-[0.13em] text-[var(--ink)] md:text-[10px]">REHAN CONSULTANTS</span>
              <span className="mt-0.5 hidden text-[7px] uppercase tracking-[0.2em] text-[var(--muted)] sm:block">Engineering across disciplines</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map(([label, href]) => {
              const active = activePath(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  data-magnetic
                  className={`relative rounded-full px-4 py-2.5 text-[11px] font-medium transition ${active ? "bg-[var(--blue)]/10 text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
                >
                  {label}
                  {active ? <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--blue)]" /> : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              onClick={toggleMode}
              whileTap={{ scale: 0.94 }}
              data-magnetic
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/55 text-[var(--blue)]"
              aria-label={mode === "night" ? "Switch to site mode" : "Switch to night mode"}
            >
              {mode === "night" ? <Moon size={15} /> : <Ruler size={15} />}
            </motion.button>

            <Link
              href="/contact"
              data-magnetic
              className="hidden items-center gap-2 rounded-full bg-[var(--blue)] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 md:flex"
            >
              Request consultation
            </Link>

            <motion.button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              whileTap={{ scale: 0.94 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/55 text-[var(--ink)] lg:hidden"
              aria-expanded={menuOpen}
              aria-label="Open navigation"
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed left-3 right-3 top-[78px] z-[99] overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--nav-bg)] p-3 shadow-2xl backdrop-blur-xl md:left-auto md:right-6 md:top-[86px] md:w-[330px] lg:hidden"
          >
            <div className="grid gap-1">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-[12px] font-medium ${activePath(pathname, href) ? "bg-[var(--blue)]/10 text-[var(--ink)]" : "text-[var(--muted)]"}`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[var(--border)] pt-3">
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="flex items-center justify-center rounded-xl bg-[var(--blue)] px-3 py-3 text-[9px] font-semibold uppercase tracking-[0.13em] text-white">Consultation</Link>
              <a href="https://wa.me/923178921361" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-3 text-[9px] font-semibold uppercase tracking-[0.13em] text-white"><MessageCircle size={13} /> WhatsApp</a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
