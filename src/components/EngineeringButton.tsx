"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface EngineeringButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function EngineeringButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: EngineeringButtonProps) {
  const primary = variant === "primary";

  const content = (
    <motion.span
      data-magnetic
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={`
        group relative inline-flex items-center justify-center
        overflow-hidden rounded-full
        px-7 py-3.5
        text-[10px] font-semibold uppercase tracking-[0.18em]
        transition-all duration-300
        ${
          primary
            ? "bg-[#1557A0] text-white hover:bg-[#0B2F5B]"
            : "border border-[#1557A0] bg-transparent text-[#1557A0] hover:bg-[#1557A0] hover:text-white"
        }
        ${className}
      `}
    >
      {/* Small survey crosshair */}
      <span className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current" />
        <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
      </span>

      {/* Text */}
      <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-[2px]">
        {children}
      </span>

      {/* Engineering measurement line */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-0 left-3 right-3 h-px origin-left bg-current"
      />

      {/* Measurement ticks */}
      <span className="absolute bottom-0 left-3 h-1.5 w-px bg-current opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      <span className="absolute bottom-0 right-3 h-1.5 w-px bg-current opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      {/* Arrow */}
      <motion.span
        initial={{ opacity: 0, x: -3 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute right-3 text-[10px]"
      >
        →
      </motion.span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} data-magnetic>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} data-magnetic>
      {content}
    </button>
  );
}