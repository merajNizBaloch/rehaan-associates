"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import BrickCursor from "./cursor/BrickCursor";
import EngineeringButton from "./EngineeringButton";
import { useSiteMode } from "./SiteModeProvider";

export type SiteMode = "night" | "site";

interface HeroTextProps {
  mode: SiteMode;
}

/* =========================================================
   APPROACH DATA
========================================================= */

const approachStages = [
  "Client Requirement",
  "Planning & Feasibility",
  "Architecture",
  "Engineering",
  "Transportation / Infrastructure",
  "BOQ & Cost Planning",
  "Tender / Procurement",
  "Construction Supervision",
  "Project Management",
  "Completion & Handover",
];

/* =========================================================
   PROCESS DATA
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understand the client's objectives, requirements and budget.",
  },
  {
    number: "02",
    title: "Site Assessment",
    description:
      "Evaluate site conditions and project constraints.",
  },
  {
    number: "03",
    title: "Planning & Concept",
    description:
      "Develop the initial architectural, engineering or infrastructure concept.",
  },
  {
    number: "04",
    title: "Detailed Design",
    description:
      "Prepare detailed technical drawings and engineering documentation.",
  },
  {
    number: "05",
    title: "Cost & Tender",
    description:
      "Develop BOQs, estimates and tender documentation.",
  },
  {
    number: "06",
    title: "Construction",
    description:
      "Provide supervision, quality control and technical support.",
  },
  {
    number: "07",
    title: "Project Management",
    description:
      "Monitor schedule, cost, quality and progress.",
  },
  {
    number: "08",
    title: "Completion",
    description:
      "Final inspection, documentation and handover.",
  },
];

/* =========================================================
   SITE ENGINEERING OVERLAY
========================================================= */

function SiteEngineeringOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(21,87,160,0.075) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(21,87,160,0.075) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Survey point */}
      <div className="absolute left-[7%] top-[18%] hidden lg:block">
        <span className="absolute h-3 w-3 rounded-full border border-[#1557A0]" />

        <span className="absolute left-1/2 top-[-8px] h-20 w-px bg-[#1557A0]/25" />

        <span className="absolute left-[-8px] top-[-25px] whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.18em] text-[#1557A0]">
          BM-01
        </span>

        <span className="absolute left-[-8px] top-[-10px] whitespace-nowrap text-[8px] text-[#5C574E]">
          RL 116.40
        </span>
      </div>

      {/* Second survey point */}
      <div className="absolute right-[8%] top-[27%] hidden lg:block">
        <span className="absolute h-3 w-3 rounded-full border border-[#1557A0]" />

        <span className="absolute left-1/2 top-[-8px] h-24 w-px bg-[#1557A0]/25" />

        <span className="absolute left-[-8px] top-[-25px] whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.18em] text-[#1557A0]">
          ST-04
        </span>

        <span className="absolute left-[-8px] top-[-10px] whitespace-nowrap text-[8px] text-[#5C574E]">
          CH 04+280
        </span>
      </div>

      {/* Dimension */}
      <div className="absolute left-[18%] right-[18%] top-[15%] hidden lg:block">
        <div className="relative h-px bg-[#1557A0]/25">
          <span className="absolute left-0 top-[-5px] h-3 w-px bg-[#1557A0]/45" />
          <span className="absolute right-0 top-[-5px] h-3 w-px bg-[#1557A0]/45" />

          <span className="absolute left-1/2 top-[-19px] -translate-x-1/2 bg-[#C7B792] px-2 text-[8px] tracking-[0.18em] text-[#1557A0]">
            4500
          </span>
        </div>
      </div>

      {/* North arrow */}
      <div className="absolute right-[5%] top-[13%] hidden flex-col items-center lg:flex">
        <span className="text-[9px] font-medium tracking-[0.2em] text-[#1557A0]">
          N
        </span>

        <div className="relative mt-1 h-12 w-px bg-[#1557A0]/35">
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 border-x-[4px] border-b-[7px] border-x-transparent border-b-[#1557A0]" />
        </div>
      </div>

      {/* Technical information */}
      <div className="absolute bottom-[9%] left-[6%] hidden flex-wrap gap-6 text-[8px] uppercase tracking-[0.2em] text-[#5C574E] md:flex">
        <span>SECTION B—B</span>
        <span>SCALE 1:200</span>
        <span>GRADE 2.4%</span>
        <span>ROAD WORKS</span>
      </div>

      {/* Title block */}
      <div className="absolute bottom-[5%] right-[5%] hidden w-[245px] border border-[#282A2B]/20 bg-[#D2C3A5]/90 p-3 lg:block">
        <div className="grid grid-cols-2 gap-px border border-[#282A2B]/15 bg-[#282A2B]/15">
          <div className="bg-[#D2C3A5] p-2">
            <p className="text-[8px] uppercase tracking-[0.18em] text-[#69645B]">
              Project
            </p>
            <p className="mt-1 text-[10px] font-medium text-[#282A2B]">
              RA-001
            </p>
          </div>

          <div className="bg-[#D2C3A5] p-2">
            <p className="text-[8px] uppercase tracking-[0.18em] text-[#69645B]">
              Discipline
            </p>
            <p className="mt-1 text-[10px] font-medium text-[#282A2B]">
              CIVIL
            </p>
          </div>

          <div className="bg-[#D2C3A5] p-2">
            <p className="text-[8px] uppercase tracking-[0.18em] text-[#69645B]">
              Revision
            </p>
            <p className="mt-1 text-[10px] font-medium text-[#282A2B]">
              REV 02
            </p>
          </div>

          <div className="bg-[#D2C3A5] p-2">
            <p className="text-[8px] uppercase tracking-[0.18em] text-[#69645B]">
              Status
            </p>
            <p className="mt-1 text-[10px] font-medium text-[#282A2B]">
              ACTIVE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   WORKER
========================================================= */

function Worker({
  left,
  delay = 0,
  type = "shovel",
}: {
  left: string;
  delay?: number;
  type?: "shovel" | "survey" | "cone";
}) {
  return (
    <motion.div
      className="absolute bottom-[42px]"
      style={{ left }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      <motion.div
        animate={
          type === "shovel"
            ? { rotate: [0, -5, 4, 0] }
            : type === "survey"
              ? { y: [0, -2, 0] }
              : { x: [0, 1, 0] }
        }
        transition={{
          duration: type === "shovel" ? 1.8 : 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-[42px] w-[24px]"
      >
        {/* Head */}
        <div className="absolute left-[7px] top-0 h-[7px] w-[7px] rounded-full bg-[#282A2B]" />

        {/* Yellow safety clothing */}
        <div className="absolute left-[5px] top-[7px] h-[16px] w-[11px] rounded-[4px] bg-[#D8A928]">
          <span className="absolute left-0 top-[5px] h-[2px] w-full bg-[#F4D96A]/90" />

          <span className="absolute left-[4px] top-0 h-full w-[2px] bg-[#1557A0]/80" />
        </div>

        {/* Legs */}
        <span className="absolute left-[6px] top-[22px] h-[13px] w-[3px] rotate-[8deg] rounded-full bg-[#282A2B]" />

        <span className="absolute left-[12px] top-[22px] h-[13px] w-[3px] -rotate-[8deg] rounded-full bg-[#282A2B]" />

        {/* Arms */}
        <span className="absolute left-[3px] top-[10px] h-[3px] w-[11px] -rotate-[25deg] rounded-full bg-[#282A2B]" />

        <span className="absolute right-[2px] top-[11px] h-[3px] w-[10px] rotate-[28deg] rounded-full bg-[#282A2B]" />

        {/* Shovel */}
        {type === "shovel" && (
          <>
            <span className="absolute right-[-2px] top-[8px] h-[25px] w-px rotate-[28deg] bg-[#282A2B]" />

            <span className="absolute bottom-[1px] right-[-7px] h-[6px] w-[9px] rotate-[8deg] border border-[#1557A0] bg-[#C7B792]" />
          </>
        )}

        {/* Survey instrument */}
        {type === "survey" && (
          <>
            <span className="absolute right-[-9px] top-[6px] h-[20px] w-[2px] bg-[#1557A0]" />

            <span className="absolute right-[-13px] top-[5px] h-[7px] w-[10px] rounded-[2px] border border-[#1557A0] bg-[#C7B792]" />

            <span className="absolute right-[-14px] top-[25px] h-px w-[15px] bg-[#1557A0]" />
          </>
        )}

        {/* Construction cone */}
        {type === "cone" && (
          <div className="absolute bottom-[-1px] right-[-12px] flex h-[13px] w-[10px] flex-col items-center justify-end">
            <span className="h-0 w-0 border-x-[4px] border-b-[10px] border-x-transparent border-b-[#D8A928]" />

            <span className="h-[2px] w-[13px] bg-[#282A2B]" />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   ROAD ROLLER
   APPEARS IN BOTH NIGHT + SITE MODES
========================================================= */

function RoadRoller({ mode }: { mode: SiteMode }) {
  const [stopped, setStopped] = useState(false);

  const isSite = mode === "site";

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const distanceFromRoad = Math.sqrt(
        Math.pow(event.clientX - window.innerWidth / 2, 2) +
          Math.pow(event.clientY - window.innerHeight * 0.62, 2)
      );

      setStopped(distanceFromRoad < 190);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const roadColor = isSite ? "#5D5A53" : "#171F2A";
  const roadEdge = isSite ? "#1557A0" : "#4F8FD2";
  const roadMarking = isSite ? "#D8A928" : "#4F8FD2";

  const rollerBody = "#D8A928";
  const rollerDark = "#B88618";

  return (
    <div className="pointer-events-none relative mx-auto mt-7 h-[76px] w-full max-w-5xl">
      {/* Road shadow */}
      <div
        className={`absolute bottom-[13px] left-[3%] right-[3%] h-[22px] rounded-[4px] ${
          isSite ? "bg-[#413F3A]/35" : "bg-black/35"
        }`}
      />

      {/* Main road */}
      <div
        className="absolute bottom-[14px] left-[3%] right-[3%] h-[18px] rounded-[3px] border-y"
        style={{
          backgroundColor: roadColor,
          borderColor: `${roadEdge}55`,
        }}
      >
        {/* Center road marking */}
        <div
          className="absolute left-[1%] right-[1%] top-1/2 h-px -translate-y-1/2"
          style={{
            background: `
              repeating-linear-gradient(
                90deg,
                ${roadMarking} 0 20px,
                transparent 20px 36px
              )
            `,
            opacity: isSite ? 0.95 : 0.65,
          }}
        />
      </div>

      {/* Road edge */}
      <div
        className="absolute bottom-[31px] left-[3%] right-[3%] h-px"
        style={{
          backgroundColor: roadEdge,
          opacity: isSite ? 0.35 : 0.22,
        }}
      />

      {/* Workers */}
      <div className={isSite ? "opacity-100" : "opacity-65"}>
        <Worker left="17%" delay={0.5} type="shovel" />

        <Worker left="50%" delay={0.8} type="survey" />

        <Worker left="70%" delay={1} type="cone" />
      </div>

      {/* Road roller */}
      <motion.div
        className="absolute bottom-[31px] left-[4%]"
        animate={
          stopped
            ? { x: "0%" }
            : { x: ["0%", "89%"] }
        }
        transition={
          stopped
            ? {
                duration: 0.25,
                ease: "easeOut",
              }
            : {
                duration: 9,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }
        }
      >
        <div className="relative h-[32px] w-[54px]">
          {/* Front drum */}
          <motion.div
            animate={{
              rotate: stopped ? 0 : 360,
            }}
            transition={{
              duration: 0.65,
              repeat: stopped ? 0 : Infinity,
              ease: "linear",
            }}
            className="absolute bottom-0 left-0 flex h-7 w-7 items-center justify-center rounded-full border-[2px]"
            style={{
              backgroundColor: rollerBody,
              borderColor: rollerDark,
            }}
          >
            <span
              className={`h-2 w-2 rounded-full border ${
                isSite
                  ? "border-[#282A2B]/50"
                  : "border-white/45"
              }`}
            />
          </motion.div>

          {/* Rear wheel */}
          <motion.div
            animate={{
              rotate: stopped ? 0 : -360,
            }}
            transition={{
              duration: 0.5,
              repeat: stopped ? 0 : Infinity,
              ease: "linear",
            }}
            className="absolute bottom-0 right-0 h-[18px] w-[18px] rounded-full bg-[#282A2B]"
            style={{
              boxShadow: `0 0 0 1px ${rollerDark}`,
            }}
          />

          {/* Roller body */}
          <div
            className="absolute right-[2px] top-[4px] h-[18px] w-[31px] rounded-[3px]"
            style={{
              backgroundColor: rollerBody,
            }}
          />

          {/* Cabin */}
          <div
            className="absolute right-[7px] top-0 h-[13px] w-[16px]"
            style={{
              backgroundColor: rollerDark,
            }}
          >
            <div
              className="mx-auto mt-[2px] h-[7px] w-[10px]"
              style={{
                backgroundColor: isSite
                  ? "#C7B792"
                  : "#27384D",
              }}
            />
          </div>

          {/* Exhaust */}
          <span className="absolute right-[4px] top-[-4px] h-[5px] w-[2px] bg-[#282A2B]" />

          {/* Blue safety/company stripe */}
          <span className="absolute bottom-[2px] right-[5px] h-[2px] w-[13px] bg-[#1557A0]" />
        </div>
      </motion.div>

      {/* Chainage */}
      <span
        className="absolute bottom-0 left-[3%] text-[8px] uppercase tracking-[0.2em]"
        style={{
          color: isSite ? "#5C574E" : "#9BA7B4",
        }}
      >
        CH 04+200
      </span>

      <span
        className="absolute bottom-0 right-[3%] text-[8px] uppercase tracking-[0.2em]"
        style={{
          color: isSite ? "#5C574E" : "#9BA7B4",
        }}
      >
        CH 04+500
      </span>

      {/* Stop indicator */}
      <motion.span
        animate={{
          opacity: stopped ? 1 : 0,
        }}
        className="absolute right-[5%] top-0 text-[8px] font-medium uppercase tracking-[0.2em]"
        style={{
          color: roadEdge,
        }}
      >
        SITE STOP
      </motion.span>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function HeroText({ mode }: HeroTextProps) {
  const isSite = mode === "site";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
      style={{
        backgroundColor: isSite ? "#C7B792" : "#07111F",

        backgroundImage: isSite
          ? `
            radial-gradient(
              rgba(55,43,28,0.11) 0.55px,
              transparent 0.8px
            ),

            radial-gradient(
              rgba(255,248,228,0.15) 0.8px,
              transparent 1px
            ),

            repeating-linear-gradient(
              0deg,
              rgba(80,60,35,0.022) 0px,
              rgba(80,60,35,0.022) 1px,
              transparent 1px,
              transparent 5px
            ),

            repeating-linear-gradient(
              90deg,
              rgba(255,248,228,0.022) 0px,
              rgba(255,248,228,0.022) 1px,
              transparent 1px,
              transparent 7px
            ),

            radial-gradient(
              ellipse at 16% 18%,
              rgba(255,248,226,0.22),
              transparent 30%
            ),

            radial-gradient(
              ellipse at 82% 28%,
              rgba(92,65,35,0.1),
              transparent 25%
            ),

            radial-gradient(
              ellipse at 30% 84%,
              rgba(103,73,42,0.08),
              transparent 30%
            ),

            radial-gradient(
              ellipse at 85% 86%,
              rgba(255,247,225,0.14),
              transparent 25%
            ),

            radial-gradient(
              ellipse at center,
              transparent 42%,
              rgba(75,52,30,0.13) 100%
            )
          `
          : `
            radial-gradient(
              circle at 50% 45%,
              rgba(79,143,210,0.14),
              transparent 42%
            )
          `,

        backgroundSize: isSite
          ? `
            4px 4px,
            7px 7px,
            auto,
            auto,
            auto,
            auto,
            auto,
            auto,
            auto
          `
          : "auto",

        backgroundAttachment: isSite ? "fixed" : "initial",
      }}
    >
      {/* Site technical background */}
      {isSite && <SiteEngineeringOverlay />}

      {/* Night background marks */}
      {!isSite && (
        <>
          <div className="pointer-events-none absolute left-[10%] top-[25%] h-px w-24 bg-[#4F8FD2]/20" />

          <div className="pointer-events-none absolute right-[10%] top-[32%] h-px w-32 bg-[#4F8FD2]/20" />

          <div className="pointer-events-none absolute bottom-[20%] left-[15%] h-px w-20 bg-[#4F8FD2]/15" />
        </>
      )}

      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className={`mb-7 text-[11px] font-semibold uppercase tracking-[0.3em] ${
            isSite ? "text-[#1557A0]" : "text-[#4F8FD2]"
          }`}
        >
          {isSite
            ? "Civil Engineering · Site Documentation"
            : "Architecture · Engineering · Infrastructure · Project Management"}
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`text-[clamp(3.6rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.065em] ${
            isSite ? "text-[#282A2B]" : "text-[#F4F7FA]"
          }`}
        >
          Engineering
          <br />

          <span
            className={
              isSite ? "text-[#1557A0]" : "text-[#4F8FD2]"
            }
          >
            the land forward.
          </span>
        </motion.h1>

        {/* Road now appears in BOTH modes */}
        <RoadRoller mode={mode} />

        {/* Company description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.18,
          }}
          className={`mx-auto mt-10 max-w-3xl text-[15px] leading-7 md:text-[17px] ${
            isSite ? "text-[#5C574E]" : "text-[#9BA7B4]"
          }`}
        >
          Rehan Consultants provides multidisciplinary architectural,
          engineering, infrastructure, transportation, cost consultancy and
          project management services for residential, commercial, industrial
          and public-sector projects.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.34,
          }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <EngineeringButton
            href="#approach"
            variant="primary"
          >
            Our approach
          </EngineeringButton>

          <EngineeringButton
            href="#about"
            variant="secondary"
          >
            About us
          </EngineeringButton>
        </motion.div>

        {/* Site technical info */}
        {isSite && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
            className="mt-10 flex justify-center"
          >
            <div className="border border-[#282A2B]/15 bg-[#D2C3A5]/70 px-4 py-2">
              <div className="flex flex-wrap justify-center gap-5 text-[8px] uppercase tracking-[0.2em] text-[#5C574E]">
                <span>CHAINAGE 04+280</span>
                <span>RL 116.40</span>
                <span>GRADE 2.4%</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Night detail */}
        {!isSite && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.75,
            }}
            className="mt-12 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-[#4F8FD2]/25" />

            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#9BA7B4]">
              Building forward
            </span>

            <span className="h-px w-10 bg-[#4F8FD2]/25" />
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
   ABOUT
========================================================= */

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[var(--paper)] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              About us
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[0.95] tracking-[-0.045em] text-[var(--ink)] md:text-6xl">
              One multidisciplinary
              <br />
              consultancy.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-[16px] leading-8 text-[var(--muted)] md:text-[18px]">
              Rehan Consultants is a multidisciplinary consultancy providing
              professional services in architecture, engineering,
              transportation, infrastructure, quantity surveying and project
              management.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3">
              <div className="bg-[var(--surface)] p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--blue)]">
                  Vision
                </p>

                <p className="mt-5 text-[15px] leading-7 text-[var(--muted)]">
                  To become a leading multidisciplinary consultancy serving
                  Balochistan and beyond through professional excellence,
                  innovation and sustainable engineering solutions.
                </p>
              </div>

              <div className="bg-[var(--surface)] p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--blue)]">
                  Mission
                </p>

                <p className="mt-5 text-[15px] leading-7 text-[var(--muted)]">
                  To provide integrated, practical and cost-effective
                  solutions that help our clients successfully plan, design
                  and deliver their projects.
                </p>
              </div>

              <div className="bg-[var(--surface)] p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--blue)]">
                  Values
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Integrity",
                    "Professionalism",
                    "Quality",
                    "Safety",
                    "Innovation",
                    "Accountability",
                  ].map((value) => (
                    <span
                      key={value}
                      className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] text-[var(--muted)]"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   APPROACH
========================================================= */

function ApproachSection() {
  return (
    <section
      id="approach"
      className="bg-[var(--paper)] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              Our approach
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-medium leading-[0.95] tracking-[-0.045em] text-[var(--ink)] md:text-6xl">
              Integrated
              <br />
              project delivery.
            </h2>

            <p className="mt-8 max-w-md text-[15px] leading-7 text-[var(--muted)]">
              Every discipline connects to the next, giving clients one
              coordinated workflow from the first requirement to final
              handover.
            </p>

            <p className="mt-10 text-xl font-medium leading-7 tracking-[-0.02em] text-[var(--ink)]">
              One consultancy.
              <br />
              Multiple disciplines.
              <br />
              One coordinated solution.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-4 left-[17px] top-4 w-px bg-[var(--blue)]/20" />

            <div className="space-y-3">
              {approachStages.map((stage, index) => (
                <motion.div
                  key={stage}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="group relative flex items-center gap-6"
                >
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--blue)]/25 bg-[var(--paper)] text-[8px] font-semibold text-[var(--blue)] transition-all duration-300 group-hover:border-[var(--blue)] group-hover:bg-[var(--blue)] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[var(--blue)]/30">
                    <p className="text-[14px] font-medium text-[var(--ink)] md:text-[15px]">
                      {stage}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS
========================================================= */

function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-[var(--surface)] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
            Our process
          </p>

          <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.045em] text-[var(--ink)] md:text-6xl">
            A clear path from
            <br />
            idea to completion.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--border)] md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
              className="group bg-[var(--surface)] p-7 transition-colors duration-300 hover:bg-[var(--paper)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[var(--blue)]">
                  {step.number}
                </span>

                <span className="h-px w-8 bg-[var(--blue)]/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--blue)]" />
              </div>

              <h3 className="mt-12 text-xl font-medium tracking-[-0.03em] text-[var(--ink)]">
                {step.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-[var(--muted)]">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT CTA
========================================================= */

function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#07111F] px-6 py-28 text-white md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(79,143,210,0.08) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(79,143,210,0.08) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#4F8FD2]">
          Start a project
        </p>

        <h2 className="mx-auto mt-6 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
          Let's build the next
          <br />

          <span className="text-[#4F8FD2]">
            project forward.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-[15px] leading-7 text-[#9BA7B4] md:text-[16px]">
          Tell us about your project, requirements and goals. Our
          multidisciplinary team can help take it from concept to completion.
        </p>

        <div className="mt-10 flex justify-center">
          <EngineeringButton
            href="/contact"
            variant="primary"
            className="!bg-[#1557A0] hover:!bg-[#4F8FD2]"
          >
            Discuss your project
          </EngineeringButton>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function HomePage() {
  const { mode } = useSiteMode();

  return (
    <main
      data-mode={mode}
      className="min-h-screen bg-[var(--paper)] text-[var(--ink)]"
    >
      <BrickCursor />
      <HeroText mode={mode} />

      <AboutSection />

      <ApproachSection />

      <ProcessSection />

      <ContactCTA />

      
    

<footer className="border-t border-white/10 bg-[#07111F] px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[10px] uppercase tracking-[0.18em] text-[#9BA7B4] sm:flex-row sm:items-center sm:justify-between">
          <span className="whitespace-nowrap">
  Designed and Developed by{" "}
  <a
    href="https://wa.me/923336077281"
    target="_blank"
    rel="noopener noreferrer"
    className="underline underline-offset-2 decoration-white/50 transition-colors hover:decoration-white hover:text-white"
  >
    TechCraft
  </a>
</span>

          <span>
            Architecture · Engineering · Infrastructure · Project Management
          </span>

          <span>
            © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
</main>
  );
}