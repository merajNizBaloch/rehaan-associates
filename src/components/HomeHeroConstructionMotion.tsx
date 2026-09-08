"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import type { SiteMode } from "@/components/navigation/TopBar";

type Props = {
  mode: SiteMode;
};

function Worker({ left, type }: { left: string; type: "survey" | "shovel" }) {
  return (
    <motion.div
      className="absolute bottom-[34px] h-[38px] w-[22px]"
      style={{ left }}
      animate={type === "survey" ? { y: [0, -2, 0] } : { rotate: [0, -4, 3, 0] }}
      transition={{ duration: type === "survey" ? 2.4 : 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="absolute left-[7px] top-0 h-[7px] w-[7px] rounded-full bg-[#282A2B]" />
      <span className="absolute left-[5px] top-[7px] h-[16px] w-[11px] rounded-[4px] bg-[#D8A928]" />
      <span className="absolute left-[7px] top-[22px] h-[13px] w-[3px] rotate-[8deg] rounded-full bg-[#282A2B]" />
      <span className="absolute left-[13px] top-[22px] h-[13px] w-[3px] -rotate-[8deg] rounded-full bg-[#282A2B]" />
      {type === "survey" ? (
        <>
          <span className="absolute right-[-10px] top-[7px] h-[20px] w-[2px] bg-[var(--blue)]" />
          <span className="absolute right-[-14px] top-[5px] h-[7px] w-[10px] rounded-[2px] border border-[var(--blue)] bg-[var(--paper)]" />
          <span className="absolute right-[-16px] top-[26px] h-px w-[16px] bg-[var(--blue)]" />
        </>
      ) : (
        <>
          <span className="absolute right-[-3px] top-[8px] h-[25px] w-px rotate-[28deg] bg-[#282A2B]" />
          <span className="absolute bottom-[1px] right-[-8px] h-[6px] w-[9px] rotate-[8deg] border border-[var(--blue)] bg-[var(--paper)]" />
        </>
      )}
    </motion.div>
  );
}

export default function HomeHeroConstructionMotion({ mode }: Props) {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();
  const isSite = mode === "site";

  useEffect(() => {
    const update = () => setVisible(window.scrollY < window.innerHeight * 0.72);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 18 }}
      transition={{ duration: 0.35 }}
      className="pointer-events-none fixed inset-x-0 bottom-[2.5vh] z-[6] hidden h-[132px] md:block"
    >
      <div className="relative mx-auto h-full w-[min(1180px,92vw)]">
        <div
          className="absolute bottom-[18px] left-[2%] right-[2%] h-[22px] rounded-[4px] border-y"
          style={{
            backgroundColor: isSite ? "#5D5A53" : "#171F2A",
            borderColor: isSite ? "rgba(21,87,160,.35)" : "rgba(79,143,210,.28)",
          }}
        >
          <div
            className="absolute left-[2%] right-[2%] top-1/2 h-px -translate-y-1/2"
            style={{
              background: `repeating-linear-gradient(90deg, #D8A928 0 24px, transparent 24px 42px)`,
              opacity: isSite ? 0.9 : 0.65,
            }}
          />
        </div>

        <div className="absolute bottom-[40px] left-[2%] right-[2%] h-px bg-[var(--blue)]/20" />
        <span className="absolute bottom-[4px] left-[2%] text-[8px] uppercase tracking-[0.2em] text-[var(--muted)]">CH 00+000</span>
        <span className="absolute bottom-[4px] right-[2%] text-[8px] uppercase tracking-[0.2em] text-[var(--muted)]">CH 00+500</span>

        <div className="absolute bottom-[44px] left-[9%]">
          <span className="block h-3 w-3 rounded-full border border-[var(--blue)]" />
          <span className="absolute left-1/2 top-[-12px] h-16 w-px -translate-x-1/2 bg-[var(--blue)]/25" />
          <span className="absolute -left-2 -top-7 whitespace-nowrap text-[8px] uppercase tracking-[0.18em] text-[var(--blue)]">BM-01</span>
        </div>

        <div className="absolute bottom-[44px] right-[10%]">
          <span className="block h-3 w-3 rounded-full border border-[var(--blue)]" />
          <span className="absolute left-1/2 top-[-12px] h-16 w-px -translate-x-1/2 bg-[var(--blue)]/25" />
          <span className="absolute -left-3 -top-7 whitespace-nowrap text-[8px] uppercase tracking-[0.18em] text-[var(--blue)]">ST-04</span>
        </div>

        <Worker left="25%" type="shovel" />
        <Worker left="64%" type="survey" />

        <motion.div
          className="absolute bottom-[40px] left-[6%] h-[35px] w-[72px]"
          animate={reduceMotion ? undefined : { x: ["0vw", "53vw", "0vw"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute bottom-[7px] left-[5px] h-[21px] w-[49px] rounded-[5px_8px_4px_4px] bg-[#D8A928] shadow-[0_4px_10px_rgba(0,0,0,.15)]" />
          <div className="absolute bottom-[28px] left-[29px] h-[16px] w-[22px] rounded-t-[5px] border border-[var(--blue)] bg-[var(--surface)]" />
          <div className="absolute bottom-[10px] right-0 h-[30px] w-[30px] rounded-full border-[4px] border-[#282A2B] bg-[#8E959B]" />
          <div className="absolute bottom-[7px] left-0 h-[17px] w-[17px] rounded-full border-[4px] border-[#282A2B] bg-[#8E959B]" />
          <motion.span
            className="absolute -right-6 top-[3px] h-px w-6 bg-[var(--blue)]/45"
            animate={reduceMotion ? undefined : { scaleX: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-[76px] left-1/2 h-px w-[34%] -translate-x-1/2 bg-[var(--blue)]/20"
          animate={reduceMotion ? undefined : { opacity: [0.25, 0.7, 0.25] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="absolute left-0 top-[-5px] h-3 w-px bg-[var(--blue)]/35" />
          <span className="absolute right-0 top-[-5px] h-3 w-px bg-[var(--blue)]/35" />
          <span className="absolute left-1/2 top-[-16px] -translate-x-1/2 bg-[var(--paper)]/70 px-2 text-[8px] uppercase tracking-[0.18em] text-[var(--blue)]">SITE WORKFLOW</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
