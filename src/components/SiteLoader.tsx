"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#07111F]"
        >
          {/* =================================================
              BACKGROUND
          ================================================= */}

          <div className="absolute inset-0">
            {/* Blue glow */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1557A0]/10 blur-[100px]" />

            {/* Engineering grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `
                  linear-gradient(
                    to right,
                    #4F8FD2 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    to bottom,
                    #4F8FD2 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10 flex w-full max-w-[520px] flex-col items-center px-8">

            {/* Brand */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
              }}
              className="mb-10 text-center"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#4F8FD2]">
                REHAN CONSULTANTS
              </p>

              <h1 className="mt-3 text-[clamp(2rem,7vw,3.5rem)] font-medium tracking-[-0.05em] text-white">
                Building ideas.
              </h1>

              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#9BA7B4]">
                Engineering the future
              </p>
            </motion.div>

            {/* =================================================
                CONSTRUCTION SCENE
            ================================================= */}

            <div className="relative h-[230px] w-full">

              {/* Ground */}

              <div className="absolute bottom-[18px] left-[7%] right-[7%] h-px bg-[#4F8FD2]/30" />

              {/* =================================================
                  BUILDING
              ================================================= */}

              <div className="absolute bottom-[19px] left-[27%] h-[130px] w-[46%]">

                <motion.div
                  initial={{
                    scaleY: 0.86,
                    opacity: 0,
                  }}
                  animate={{
                    scaleY: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-0 left-0 h-full w-full origin-bottom border border-[#4F8FD2]/35 bg-[#13283C]"
                >
                  {/* Floors */}

                  <div className="absolute inset-x-0 top-[25%] h-px bg-[#4F8FD2]/25" />

                  <div className="absolute inset-x-0 top-[50%] h-px bg-[#4F8FD2]/25" />

                  <div className="absolute inset-x-0 top-[75%] h-px bg-[#4F8FD2]/25" />

                  {/* Columns */}

                  <div className="absolute inset-y-0 left-[22%] w-px bg-[#4F8FD2]/20" />

                  <div className="absolute inset-y-0 left-[48%] w-px bg-[#4F8FD2]/20" />

                  <div className="absolute inset-y-0 left-[74%] w-px bg-[#4F8FD2]/20" />

                  {/* Windows */}

                  <div className="absolute inset-0 grid grid-cols-3 gap-[7px] p-[12px]">
                    {Array.from({
                      length: 12,
                    }).map((_, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity:
                            index % 4 === 0
                              ? 0.35
                              : 0.7,
                        }}
                        transition={{
                          duration: 0.5,
                          delay:
                            0.45 +
                            index * 0.03,
                        }}
                        className="bg-[#78A6C4]/70"
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Roof */}

                <div className="absolute -left-[5%] -right-[5%] top-[-5px] h-[7px] bg-[#274D72]" />
              </div>

              {/* =================================================
                  CRANE
              ================================================= */}

              {/* Tower */}

              <div className="absolute bottom-[19px] left-[13%] h-[184px] w-[5px] bg-[#4F8FD2]">

                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#4F8FD2]/40" />

                <span className="absolute left-0 top-[20%] h-px w-[15px] rotate-[28deg] bg-[#4F8FD2]/50" />

                <span className="absolute left-[-10px] top-[20%] h-px w-[15px] -rotate-[28deg] bg-[#4F8FD2]/50" />

                <span className="absolute left-0 top-[40%] h-px w-[15px] rotate-[28deg] bg-[#4F8FD2]/50" />

                <span className="absolute left-[-10px] top-[40%] h-px w-[15px] -rotate-[28deg] bg-[#4F8FD2]/50" />

                <span className="absolute left-0 top-[60%] h-px w-[15px] rotate-[28deg] bg-[#4F8FD2]/50" />

                <span className="absolute left-[-10px] top-[60%] h-px w-[15px] -rotate-[28deg] bg-[#4F8FD2]/50" />

                <span className="absolute left-0 top-[80%] h-px w-[15px] rotate-[28deg] bg-[#4F8FD2]/50" />

                <span className="absolute left-[-10px] top-[80%] h-px w-[15px] -rotate-[28deg] bg-[#4F8FD2]/50" />
              </div>

              {/* Crane arm */}

              <motion.div
                animate={{
                  rotate: [
                    0,
                    -2,
                    1,
                    0,
                  ],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[196px] left-[11%] origin-left"
              >
                <div className="relative h-[5px] w-[260px] bg-[#4F8FD2]">

                  {/* Counterweight */}

                  <div className="absolute left-[-8px] top-[-4px] h-[13px] w-[22px] rounded-[2px] bg-[#274D72]" />

                  {/* Tip */}

                  <div className="absolute right-0 top-[-3px] h-[11px] w-[7px] bg-[#4F8FD2]" />
                </div>

                {/* Trolley */}

                <motion.div
                  animate={{
                    x: [
                      0,
                      65,
                      110,
                      45,
                      0,
                    ],
                  }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[80px] top-[-2px]"
                >
                  <div className="h-[8px] w-[15px] rounded-[2px] bg-[#D8A928]" />

                  {/* Cable */}

                  <motion.div
                    animate={{
                      height: [
                        44,
                        72,
                        53,
                        65,
                        44,
                      ],
                    }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="ml-[7px] w-px origin-top bg-[#9BA7B4]"
                  />

                  {/* Load */}

                  <motion.div
                    animate={{
                      y: [
                        0,
                        27,
                        8,
                        22,
                        0,
                      ],
                    }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="ml-[1px] h-[19px] w-[20px] -translate-x-1/2 rounded-[2px] border border-[#D8A928] bg-[#B88618]"
                  />
                </motion.div>
              </motion.div>

              {/* Crane base */}

              <div className="absolute bottom-[13px] left-[9%] h-[7px] w-[14%] bg-[#274D72]" />

              {/* Foundation */}

              <span className="absolute bottom-[5px] left-[9%] h-[2px] w-[14%] bg-[#4F8FD2]/30" />

              {/* Work light */}

              <motion.div
                animate={{
                  x: [0, 16, -6, 0],
                  opacity: [
                    0.25,
                    0.6,
                    0.35,
                    0.25,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[62px] right-[13%] h-[6px] w-[6px] rounded-full bg-[#D8A928] blur-[1px]"
              />
            </div>

            {/* =================================================
                PROGRESS
            ================================================= */}

            <div className="mt-6 w-full max-w-[350px]">

              <div className="flex items-center justify-between">

                <span className="text-[8px] uppercase tracking-[0.2em] text-[#9BA7B4]">
                  Preparing site
                </span>

                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4,
                  }}
                  className="text-[8px] uppercase tracking-[0.2em] text-[#4F8FD2]"
                >
                  Loading
                </motion.span>
              </div>

              <div className="mt-3 h-[2px] w-full overflow-hidden bg-white/10">

                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 2,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="h-full bg-[#4F8FD2]"
                />
              </div>
            </div>

            {/* Footer */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 0.4,
              }}
              className="mt-8 text-center text-[8px] uppercase tracking-[0.22em] text-[#6E7C89]"
            >
              Engineering · Infrastructure ·
              Architecture
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}