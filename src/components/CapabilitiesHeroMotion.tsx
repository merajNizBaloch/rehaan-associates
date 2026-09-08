"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import type { SiteMode } from "@/components/navigation/TopBar";

type Props = {
  mode: SiteMode;
};

export default function CapabilitiesHeroMotion({ mode }: Props) {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();
  const isSite = mode === "site";

  const blue = isSite ? "#1557A0" : "#4F8FD2";
  const concrete = isSite ? "#C9BEA5" : "#25384B";
  const concreteLight = isSite ? "#DDD2B8" : "#30485F";
  const asphalt = isSite ? "#5E5C56" : "#151C25";
  const yellow = "#D8A928";

  useEffect(() => {
    const update = () => setVisible(window.scrollY < window.innerHeight * 0.62);
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 18 }}
      transition={{ duration: 0.35 }}
      className="pointer-events-none fixed inset-x-0 bottom-[1.5vh] z-[4] hidden h-[155px] md:block"
    >
      <div className="relative mx-auto h-full w-[min(1180px,92vw)] overflow-hidden">
        <div
          className="absolute bottom-[12px] left-[3%] right-[3%] h-px"
          style={{ backgroundColor: blue, opacity: 0.24 }}
        />

        <span
          className="absolute bottom-0 left-[3%] text-[8px] uppercase tracking-[0.2em]"
          style={{ color: blue }}
        >
          CAP-01
        </span>
        <span
          className="absolute bottom-0 right-[3%] text-[8px] uppercase tracking-[0.2em]"
          style={{ color: blue }}
        >
          CAP-06
        </span>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="absolute bottom-[13px] left-[11%] h-[30px] w-[58px]"
        >
          <div className="absolute bottom-0 h-[8px] w-full" style={{ backgroundColor: concreteLight }} />
          <div
            className="absolute bottom-[7px] left-[11px] h-[24px] w-[36px] rounded-[2px] border"
            style={{ backgroundColor: concrete, borderColor: `${blue}70` }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.5 }}
          className="absolute bottom-[13px] right-[11%] h-[30px] w-[58px]"
        >
          <div className="absolute bottom-0 h-[8px] w-full" style={{ backgroundColor: concreteLight }} />
          <div
            className="absolute bottom-[7px] left-[11px] h-[24px] w-[36px] rounded-[2px] border"
            style={{ backgroundColor: concrete, borderColor: `${blue}70` }}
          />
        </motion.div>

        {[27, 73].map((position, index) => (
          <motion.div
            key={position}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.65, delay: 0.45 + index * 0.12 }}
            className="absolute bottom-[21px] h-[60px] w-[18px] origin-bottom rounded-[2px] border"
            style={{ left: `${position}%`, backgroundColor: concrete, borderColor: `${blue}70` }}
          />
        ))}

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-[76px] left-[12%] right-[12%] h-[20px] origin-center rounded-[3px] border"
          style={{ backgroundColor: concrete, borderColor: `${blue}70` }}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="absolute bottom-[93px] left-[13%] right-[13%] h-[7px] origin-center rounded-[2px]"
          style={{ backgroundColor: asphalt }}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 1.18 }}
          className="absolute bottom-[96px] left-[17%] right-[17%] h-[2px] origin-center"
          style={{
            background: `repeating-linear-gradient(90deg, ${yellow} 0 20px, transparent 20px 34px)`,
          }}
        />

        <svg
          viewBox="0 0 700 110"
          preserveAspectRatio="none"
          className="absolute bottom-[91px] left-[18%] h-[52px] w-[64%] overflow-visible"
        >
          <motion.path
            d="M5 10 Q350 100 695 10"
            fill="none"
            stroke={blue}
            strokeWidth="3"
            strokeLinecap="round"
            pathLength={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.75 }}
            transition={{ duration: 1.1, delay: 1.25 }}
          />
        </svg>

        {[24, 32, 40, 48, 56, 64, 72, 80].map((position, index) => (
          <motion.span
            key={position}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.28, delay: 1.45 + index * 0.05 }}
            className="absolute bottom-[76px] h-[24px] w-px origin-bottom"
            style={{ left: `${position}%`, backgroundColor: blue, opacity: 0.42 }}
          />
        ))}

        <motion.div
          className="absolute bottom-[102px] h-[18px] w-[38px]"
          animate={reduceMotion ? undefined : { left: ["18%", "75%", "18%"] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute bottom-0 h-[11px] w-full rounded-[4px]" style={{ backgroundColor: yellow }} />
          <div className="absolute left-[8px] top-0 h-[8px] w-[16px] rounded-t-[4px]" style={{ backgroundColor: blue }} />
          <span className="absolute bottom-[-4px] left-[5px] h-[7px] w-[7px] rounded-full bg-[#24292D]" />
          <span className="absolute bottom-[-4px] right-[5px] h-[7px] w-[7px] rounded-full bg-[#24292D]" />
        </motion.div>

        <motion.div
          animate={reduceMotion ? undefined : { rotate: [0, -1.5, 1, 0] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[14px] right-[2%] h-[128px] w-[150px] origin-bottom"
        >
          <div className="absolute bottom-0 right-[36px] h-[118px] w-[4px]" style={{ backgroundColor: blue }} />
          <div className="absolute right-[0] top-[10px] h-[4px] w-[138px]" style={{ backgroundColor: blue }} />
          <div className="absolute right-[115px] top-[6px] h-[11px] w-[24px]" style={{ backgroundColor: concreteLight }} />
          <motion.div
            className="absolute right-[27px] top-[13px]"
            animate={reduceMotion ? undefined : { x: [0, -52, -18, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-[7px] w-[14px] rounded-[2px]" style={{ backgroundColor: yellow }} />
            <motion.div
              className="ml-[6px] w-px bg-[var(--muted)]"
              animate={reduceMotion ? undefined : { height: [34, 58, 42, 34] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="ml-[-2px] h-[14px] w-[17px] rounded-[2px] border"
              style={{ borderColor: yellow, backgroundColor: concrete }}
              animate={reduceMotion ? undefined : { y: [0, 22, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-[129px] left-1/2 flex -translate-x-1/2 items-center gap-3"
          animate={reduceMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="h-px w-14" style={{ backgroundColor: blue, opacity: 0.35 }} />
          <span className="text-[8px] font-medium uppercase tracking-[0.22em]" style={{ color: blue }}>
            MULTIDISCIPLINARY CAPABILITY
          </span>
          <span className="h-px w-14" style={{ backgroundColor: blue, opacity: 0.35 }} />
        </motion.div>
      </div>
    </motion.div>
  );
}
