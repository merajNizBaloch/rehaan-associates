"use client";

import Link from "next/link";
import {
  type MouseEvent,
  type ReactNode,
} from "react";

interface EngineeringButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: (
    event: MouseEvent<HTMLButtonElement>
  ) => void;
  disabled?: boolean;
}

/* =========================================================
   ENGINEERING BUTTON
========================================================= */

export default function EngineeringButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
}: EngineeringButtonProps) {
  const baseClasses =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300";

  const primaryClasses =
    "bg-[var(--blue)] text-white hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]";

  const secondaryClasses =
    "border border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] hover:-translate-y-1 hover:border-[var(--blue)]/40";

  const disabledClasses =
    disabled
      ? "pointer-events-none cursor-not-allowed opacity-50"
      : "";

  const variantClasses =
    variant === "primary"
      ? primaryClasses
      : secondaryClasses;

  const classes = `
    ${baseClasses}
    ${variantClasses}
    ${disabledClasses}
    ${className}
  `;

  /* =======================================================
     NO HREF → NORMAL BUTTON
  ======================================================= */

  if (!href) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={classes}
      >
        <span className="relative z-10">
          {children}
        </span>

        <span className="relative z-10 ml-3 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    );
  }

  /* =======================================================
     EXTERNAL LINK
  ======================================================= */

  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={
          href.startsWith("http://") ||
          href.startsWith("https://")
            ? "_blank"
            : undefined
        }
        rel={
          href.startsWith("http://") ||
          href.startsWith("https://")
            ? "noopener noreferrer"
            : undefined
        }
      >
        <span className="relative z-10">
          {children}
        </span>

        <span className="relative z-10 ml-3 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>
    );
  }

  /* =======================================================
     INTERNAL LINK → NEXT.JS CLIENT NAVIGATION
  ======================================================= */

  return (
    <Link
      href={href}
      className={classes}
    >
      <span className="relative z-10">
        {children}
      </span>

      <span className="relative z-10 ml-3 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}