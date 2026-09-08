"use client";

import { motion } from "framer-motion";

import type { SiteMode } from "@/components/navigation/TopBar";

type Props = {
  mode: SiteMode;
};

export default function CapabilitiesHeroMotion({ mode }: Props) {
  const isSite = mode === "site";

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.32 }}
      className="pointer-events-none mx-auto mt-10 w-full max-w-4xl"
    >
      <div className="relative h-[145px]">
        <div
          className={`absolute bottom-[8px] left-[7%] right-[7%] h-px ${
            isSite ? "bg-[#1557A0]/25" : "bg-[#4F8FD2]/20"
          }`}
        />

        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="absolute bottom-[9px] left-[35%] h-[91px] w-[30%] rounded-[3px] border"
          style={{
            borderColor: isSite ? "#1557A0" : "#4F8FD2",
            backgroundColor: isSite ? "#D8C8A7" : "#223448",
            boxShadow: isSite
              ? "9px 9px 0 rgba(52,42,28,0.12)"
              : "9px 9px 0 rgba(0,0,0,0.25)",
          }}
        >
          <div className="absolute inset-[10px] grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 + index * 0.04 }}
                className="rounded-[1px]"
                style={{ backgroundColor: isSite ? "#9DB2BE" : "#6F9AB8" }}
              />
            ))}
          </div>

          <div
            className="absolute bottom-0 left-1/2 h-[28px] w-[20px] -translate-x-1/2"
            style={{ backgroundColor: isSite ? "#0D4179" : "#17283A" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="absolute bottom-[9px] right-[19%] h-[122px] w-[75px]"
        >
          <div
            className="absolute bottom-0 right-[23px] h-full w-[3px]"
            style={{ backgroundColor: isSite ? "#1557A0" : "#4F8FD2" }}
          />

          <div
            className="absolute right-0 top-0 h-[3px] w-[73px]"
            style={{ backgroundColor: isSite ? "#1557A0" : "#4F8FD2" }}
          />

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[39px] top-[3px] h-[16px] w-[19px] bg-[#D8A928]"
          />
        </motion.div>

        <motion.div
          animate={{ x: ["0%", "420%"] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute bottom-[7px] left-[5%] h-[23px] w-[46px]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 h-[20px] w-[20px] rounded-full border-2 border-[#B88618] bg-[#D8A928]"
          />
          <div className="absolute right-0 top-[3px] h-[15px] w-[28px] rounded-[3px] bg-[#D8A928]" />
          <div className="absolute right-[4px] top-0 h-[11px] w-[13px] bg-[#B88618]" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-3 flex items-center justify-center gap-4"
      >
        {[
          ["Concept", true],
          ["Construction", true],
          ["Completion", false],
        ].map(([label, line], index) => (
          <div key={String(label)} className="contents">
            <span
              className={`text-[9px] uppercase tracking-[0.22em] ${
                isSite ? "text-[#5C574E]" : "text-[#9BA7B4]"
              }`}
            >
              {label}
            </span>
            {line ? (
              <span
                className={`h-px w-8 ${
                  isSite ? "bg-[#1557A0]/30" : "bg-[#4F8FD2]/25"
                }`}
              />
            ) : null}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
