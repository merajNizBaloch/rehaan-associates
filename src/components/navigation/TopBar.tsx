"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  Moon,
  Ruler,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export type SiteMode = "night" | "site";

interface TopBarProps {
  mode: SiteMode;
  setMode: (mode: SiteMode) => void;
}

/* =========================================================
   NAVIGATION LINKS
========================================================= */

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Expertise",
    href: "/expertise",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   MODES
========================================================= */

const modes: {
  id: SiteMode;
  label: string;
  description: string;
}[] = [
  {
    id: "night",
    label: "Night",
    description: "Modern infrastructure",
  },
  {
    id: "site",
    label: "Site",
    description: "Civil engineering",
  },
];

/* =========================================================
   ACTIVE ROUTE
========================================================= */

function isActivePath(
  pathname: string,
  href: string
) {
  if (href === "/") {
    return pathname === "/";
  }

  return (
    pathname === href ||
    pathname.startsWith(`${href}/`)
  );
}

/* =========================================================
   NAV LINK
========================================================= */

function NavLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  const [hovered, setHovered] =
    useState(false);

  const highlighted =
    hovered || active;

  return (
    <motion.div
      onMouseEnter={() =>
        setHovered(true)
      }
      onMouseLeave={() =>
        setHovered(false)
      }
      whileHover={{ y: -1 }}
      transition={{
        duration: 0.2,
      }}
      className="relative"
    >
      <Link
        href={href}
        data-magnetic
        className="group relative flex items-center px-4 py-3 text-[12px] font-medium"
        style={{
          color: highlighted
            ? "var(--ink)"
            : "var(--muted)",
        }}
      >
        {/* Crosshair */}

        <motion.span
          initial={false}
          animate={{
            opacity: highlighted ? 1 : 0,
            scale: highlighted ? 1 : 0.5,
          }}
          transition={{
            duration: 0.18,
          }}
          className="absolute -left-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2"
        >
          <span className="absolute left-1/2 top-0 h-2.5 w-px -translate-x-1/2 bg-white" />

          <span className="absolute left-0 top-1/2 h-px w-2.5 -translate-y-1/2 bg-[var(--blue)]" />
        </motion.span>

        {/* Text */}

        <motion.span
          animate={{
            x: highlighted ? 3 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          {label}
        </motion.span>

        {/* Engineering line */}

        <span className="absolute bottom-1 left-4 right-4 h-px overflow-hidden bg-[var(--blue)]/15">
          <motion.span
            initial={false}
            animate={{
              scaleX: highlighted ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="absolute inset-0 origin-left bg-[var(--blue)]"
          />
        </span>

        {/* Left tick */}

        <motion.span
          initial={false}
          animate={{
            opacity: highlighted ? 1 : 0,
            height: highlighted ? 5 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="absolute bottom-[-1px] left-4 w-px bg-[var(--blue)]"
        />

        {/* Right tick */}

        <motion.span
          initial={false}
          animate={{
            opacity: highlighted ? 1 : 0,
            height: highlighted ? 5 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="absolute bottom-[-1px] right-4 w-px bg-[var(--blue)]"
        />

        {/* Active dot */}

        <motion.span
          initial={false}
          animate={{
            opacity: active ? 1 : 0,
            scale: active ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--blue)]"
        />
      </Link>
    </motion.div>
  );
}

/* =========================================================
   TOP BAR
========================================================= */

export default function TopBar({
  mode,
  setMode,
}: TopBarProps) {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [modeOpen, setModeOpen] =
    useState(false);

  const currentMode =
    modes.find(
      (item) => item.id === mode
    ) ?? modes[0];

  const changeMode = (
    newMode: SiteMode
  ) => {
    setMode(newMode);
    setModeOpen(false);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP HEADER
      ===================================================== */}

      <header className="fixed left-4 right-4 top-4 z-[100] hidden md:block lg:left-6 lg:right-6">
        <div className="relative mx-auto flex h-[72px] max-w-[1500px] items-center justify-between rounded-[22px] border border-[var(--border)] bg-[var(--nav-bg)] px-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:px-7">

          {/* =================================================
              BRAND
          ================================================= */}

          <Link
            href="/"
            data-magnetic
            className="group relative z-10 flex items-center gap-3"
          >
            <motion.div
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[12px] bg-white"
              whileHover={{
                scale: 1.02,
                borderRadius: "50%",
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <img
                src="/mainlogo.png"
                alt="Rehan Consultants"
                className="h-full w-full object-contain p-1"
              />

              <motion.span
                className="absolute bottom-0 left-0 h-[2px] w-full bg-white"
                initial={{
                  scaleX: 0,
                }}
                whileHover={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.25,
                }}
              />
            </motion.div>

            <div>
              <div className="text-[10px] font-semibold tracking-[0.12em] text-[var(--ink)]">
                REHAN CONSULTANTS
              </div>

              <div className="mt-[2px] text-[7px] uppercase tracking-[0.23em] text-[var(--muted)]">
                Engineering across disciplines
              </div>
            </div>
          </Link>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <nav className="relative z-10 flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.label}
                label={link.label}
                href={link.href}
                active={isActivePath(
                  pathname,
                  link.href
                )}
              />
            ))}
          </nav>

          {/* =================================================
              MODE SELECTOR
          ================================================= */}

          <div className="relative z-20">
            <motion.button
              type="button"
              data-magnetic
              onClick={() =>
                setModeOpen(
                  (value) => !value
                )
              }
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/50 px-3 py-2 transition-colors hover:border-[var(--blue)]/40"
              aria-expanded={modeOpen}
            >
              {mode === "night" ? (
                <Moon
                  size={13}
                  strokeWidth={1.6}
                  className="text-[var(--blue)]"
                />
              ) : (
                <Ruler
                  size={13}
                  strokeWidth={1.6}
                  className="text-[var(--blue)]"
                />
              )}

              <span className="text-[9px] font-medium tracking-[0.12em] text-[var(--ink)]">
                {currentMode.label}
              </span>

              <motion.span
                animate={{
                  rotate: modeOpen
                    ? 180
                    : 0,
                }}
                className="text-[var(--blue)]"
              >
                ↓
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {modeOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    scale: 0.97,
                  }}
                  className="absolute right-0 top-[calc(100%+10px)] w-[220px] overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--nav-bg)] p-2 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl"
                >
                  <div className="px-3 py-2">
                    <div className="text-[9px] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
                      Experience
                    </div>
                  </div>

                  {modes.map((item) => {
                    const active =
                      item.id === mode;

                    return (
                      <motion.button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          changeMode(
                            item.id
                          )
                        }
                        whileHover={{
                          x: 3,
                        }}
                        className={`flex w-full items-center gap-3 rounded-[13px] px-3 py-3 text-left transition-colors ${
                          active
                            ? "bg-[var(--blue)]/8"
                            : "hover:bg-[var(--blue)]/5"
                        }`}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--blue)]/8 text-[var(--blue)]">
                          {item.id ===
                          "night" ? (
                            <Moon
                              size={14}
                              strokeWidth={
                                1.4
                              }
                            />
                          ) : (
                            <Ruler
                              size={14}
                              strokeWidth={
                                1.4
                              }
                            />
                          )}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-[11px] font-medium text-[var(--ink)]">
                            {item.label}
                          </span>

                          <span className="mt-0.5 block text-[9px] text-[var(--muted)]">
                            {
                              item.description
                            }
                          </span>
                        </span>

                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--blue)]" />
                        )}
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}

      <header className="fixed left-3 right-3 top-3 z-[100] md:hidden">
        <div className="flex h-[64px] items-center justify-between rounded-[18px] border border-[var(--border)] bg-[var(--nav-bg)] px-4 shadow-[0_10px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl">

          <Link
            href="/"
            className="flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-[10px] bg-white">
            <img
              src="/mainlogo.png"
              alt="Rehan Consultants"
              className="h-full w-full object-contain p-1"
            />
          </div>

            <div>
              <div className="text-[9px] font-semibold tracking-[0.1em] text-[var(--ink)]">
                REHAN CONSULTANTS
              </div>

              <div className="mt-[2px] text-[7px] uppercase tracking-[0.18em] text-[var(--muted)]">
                Engineering across disciplines
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2">

            {/* Mobile mode button */}

            <motion.button
              type="button"
              onClick={() =>
                setModeOpen(
                  (value) => !value
                )
              }
              whileTap={{
                scale: 0.9,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/50"
            >
              {mode === "night" ? (
                <Moon
                  size={14}
                  className="text-[var(--blue)]"
                />
              ) : (
                <Ruler
                  size={14}
                  className="text-[var(--blue)]"
                />
              )}
            </motion.button>

            {/* Mobile menu button */}

            <motion.button
              type="button"
              onClick={() =>
                setMenuOpen(
                  (value) => !value
                )
              }
              whileTap={{
                scale: 0.9,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/50 text-[var(--ink)]"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={16} />
              ) : (
                <Menu size={16} />
              )}
            </motion.button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MODE MENU
      ===================================================== */}

      <AnimatePresence>
        {modeOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            className="fixed left-3 right-3 top-[84px] z-[90] md:hidden"
          >
            <div className="rounded-[18px] border border-[var(--border)] bg-[var(--nav-bg)] p-2 shadow-[0_15px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl">

              {modes.map((item) => {
                const active =
                  item.id === mode;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      changeMode(
                        item.id
                      )
                    }
                    whileHover={{
                      x: 3,
                    }}
                    className={`flex w-full items-center gap-3 rounded-[13px] px-4 py-3 text-left ${
                      active
                        ? "bg-[var(--blue)]/8"
                        : "hover:bg-[var(--blue)]/5"
                    }`}
                  >
                    <span className="text-[var(--blue)]">
                      {item.id ===
                      "night" ? (
                        <Moon
                          size={15}
                          strokeWidth={
                            1.4
                          }
                        />
                      ) : (
                        <Ruler
                          size={15}
                          strokeWidth={
                            1.4
                          }
                        />
                      )}
                    </span>

                    <span className="flex-1">
                      <span className="block text-[11px] font-medium text-[var(--ink)]">
                        {item.label}
                      </span>

                      <span className="mt-0.5 block text-[9px] text-[var(--muted)]">
                        {
                          item.description
                        }
                      </span>
                    </span>

                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--blue)]" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            className="fixed left-3 right-3 top-[84px] z-[80] md:hidden"
          >
            <div className="overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--nav-bg)] p-2 shadow-[0_15px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl">

              {links.map((link) => {
                const active =
                  isActivePath(
                    pathname,
                    link.href
                  );

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() =>
                      setMenuOpen(
                        false
                      )
                    }
                    className="flex items-center justify-between rounded-[13px] px-4 py-4 text-[13px] transition-colors"
                    style={{
                      color: active
                        ? "var(--ink)"
                        : "var(--muted)",

                      backgroundColor:
                        active
                          ? "color-mix(in srgb, var(--blue) 8%, transparent)"
                          : "transparent",
                    }}
                  >
                    <span
                      className={
                        active
                          ? "font-medium"
                          : ""
                      }
                    >
                      {link.label}
                    </span>

                    <div className="flex items-center gap-2">
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--blue)]" />
                      )}

                      <span className="text-[var(--blue)]">
                        →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}