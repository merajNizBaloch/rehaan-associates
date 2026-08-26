"use client";

import { motion } from "framer-motion";

interface SiteCanvasProps {
  mode?: string;
}

export default function SiteCanvas({ mode }: SiteCanvasProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F5F2E9] px-6 pt-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#5D7358]"
        >
          Civil Engineering · Balochistan
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.88] tracking-[-0.065em] text-[#20262D]"
        >
          Engineering
          <br />

          <span className="text-[#004295]">
            the land{" "}
            <span className="relative inline-block">
              {/* Main word */}
              <span>forward</span>

              {/* Engineering line */}
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.8,
                  ease: "easeOut",
                }}
                className="absolute bottom-[-7px] left-0 h-[2px] bg-[#1557A0]"
              />

              {/* Dimension ticks */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.35 }}
                className="pointer-events-none absolute bottom-[-12px] left-0 h-[7px] w-px bg-[#1557A0]"
              />

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.45 }}
                className="pointer-events-none absolute bottom-[-12px] left-1/2 h-[7px] w-px -translate-x-1/2 bg-[#1557A0]"
              />

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.55 }}
                className="pointer-events-none absolute bottom-[-12px] right-0 h-[7px] w-px bg-[#1557A0]"
              />

              {/* Direction arrow */}
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.45,
                  ease: "easeOut",
                }}
                className="absolute -right-10 bottom-[-7px] text-[20px] font-normal text-[#5D7358] md:-right-12 md:text-[24px]"
                aria-hidden="true"
              >
                →
              </motion.span>

              {/* Engineering annotation */}
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.7,
                }}
                className="absolute -bottom-9 left-0 text-[6px] font-medium uppercase tracking-[0.22em] text-[#687267] md:-bottom-10"
              >
                DIRECTION / PROGRESS
              </motion.span>
            </span>
            .
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="mx-auto mt-14 max-w-2xl text-[15px] leading-7 text-[#687267] md:text-[17px]"
        >
          Civil engineering, infrastructure and project delivery shaped by
          technical discipline, local knowledge and a long-term view of
          Balochistan.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.42,
          }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {/* Primary */}
          <motion.a
            href="#projects"
            data-magnetic
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-[#1557A0] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F7F4EC] shadow-[0_8px_24px_rgba(184,107,69,0.18)] transition-colors duration-300 hover:bg-[#0B2F5B]"
          >
            Explore our work
          </motion.a>

          {/* Secondary */}
          <motion.a
            href="#expertise"
            data-magnetic
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-[#004295]/30 bg-transparent px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#004295] transition-all duration-300 hover:border-[#5D7358] hover:bg-[#5D7358]/10 hover:text-[#002252]"
          >
            Our expertise
          </motion.a>
        </motion.div>

        {/* Minimal footer detail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-[#5D7358]/35" />

          <span className="text-[7px] font-medium uppercase tracking-[0.25em] text-[#687267]">
            Building forward
          </span>

          <span className="h-px w-10 bg-[#5D7358]/35" />
        </motion.div>
      </div>
    </section>
  );
}