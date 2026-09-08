"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SiteLoaderFast() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const seen = window.sessionStorage.getItem("rehan-site-loader-seen");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduceMotion) {
      setVisible(false);
      return;
    }

    window.sessionStorage.setItem("rehan-site-loader-seen", "1");
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07111F]"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white"
            >
              <img src="/mainlogo.png" alt="" className="h-11 w-11 object-contain" />
            </motion.div>
            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#4F8FD2]">Rehan Consultants</p>
            <div className="mx-auto mt-3 h-px w-24 overflow-hidden bg-white/10">
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.55 }} className="h-full origin-left bg-[#4F8FD2]" />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
