"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import BrickCursor from "@/components/cursor/BrickCursor";
import TopBar, {
  type SiteMode,
} from "@/components/navigation/TopBar";
import EngineeringButton from "@/components/EngineeringButton";

/* =========================================================
   EXPERTISE DATA
========================================================= */

const expertise = [
  {
    number: "01",
    title: "Civil & Structural Engineering",
    intro:
      "Engineering solutions developed around safety, functionality, constructability and project requirements.",
    groups: [
      {
        title: "Civil Engineering",
        items: [
          "Building Civil Works",
          "Site Development",
          "Earthworks",
          "Drainage",
          "Water Supply",
          "Sewerage",
          "Infrastructure Design",
        ],
      },
      {
        title: "Structural Engineering",
        items: [
          "Structural Analysis",
          "RCC Design",
          "Steel Structure Design",
          "Foundation Design",
          "Structural Drawings",
          "Structural Assessment",
          "Seismic Considerations / Design",
        ],
      },
    ],
  },

  {
    number: "02",
    title: "Quantity Surveying & Cost Consultancy",
    intro:
      "Cost-focused project support connecting design decisions with quantities, budgets and procurement requirements.",
    groups: [
      {
        title: "Quantity Surveying",
        items: [
          "Quantity Take-Off",
          "BOQ Preparation",
          "Cost Estimates",
          "Cost Planning",
          "Tender Documentation",
          "Contract Documentation",
        ],
      },
    ],
  },

  {
    number: "03",
    title: "Transportation & Infrastructure",
    intro:
      "Infrastructure and transportation solutions that connect projects, sites and communities.",
    groups: [
      {
        title: "Infrastructure",
        items: [
          "Road Infrastructure",
          "Transportation Planning",
          "Site Infrastructure",
          "Utility Infrastructure",
          "Drainage Networks",
          "Infrastructure Coordination",
        ],
      },
    ],
  },

  {
    number: "04",
    title: "Architectural Services",
    intro:
      "Architecture that responds to people, place, function and long-term project requirements.",
    groups: [
      {
        title: "Residential Architecture",
        items: [
          "Houses",
          "Villas",
          "Apartments",
          "Residential Developments",
        ],
      },
      {
        title: "Commercial Architecture",
        items: [
          "Offices",
          "Shops",
          "Commercial Buildings",
          "Hotels",
          "Institutional Buildings",
        ],
      },
      {
        title: "Architectural Design",
        items: [
          "Concept Design",
          "Space Planning",
          "Floor Plans",
          "Elevations",
          "Sections",
          "Working Drawings",
          "Detailed Drawings",
          "3D Visualization",
          "Interior Planning",
          "Renovation & Remodeling",
          "As-Built Drawings",
        ],
      },
    ],
  },

  {
    number: "05",
    title: "Project Management",
    intro:
      "Coordinated project delivery focused on schedule, cost, quality, communication and completion.",
    groups: [
      {
        title: "Project Management",
        items: [
          "Planning",
          "Procurement",
          "Construction Supervision",
          "Quality Control",
          "Schedule Monitoring",
          "Cost Monitoring",
          "Progress Monitoring",
          "Technical Support",
          "Completion & Handover",
        ],
      },
    ],
  },
];

/* =========================================================
   SOLID FLOATING BRIDGE
========================================================= */

function BridgeConstruction({
  mode,
}: {
  mode: SiteMode;
}) {
  const isSite = mode === "site";

  const blue = isSite ? "#1557A0" : "#4F8FD2";
  const concrete = isSite ? "#C9BEA5" : "#25384B";
  const concreteLight = isSite ? "#DDD2B8" : "#30485F";
  const asphalt = isSite ? "#5E5C56" : "#151C25";
  const yellow = "#D8A928";

  return (
    <div className="pointer-events-none relative mx-auto mt-10 h-[205px] w-full max-w-[900px] overflow-hidden">

      {/* =====================================================
          FLOATING BRIDGE ASSEMBLY
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        {/* Ground */}
        <div
          className="absolute bottom-[18px] left-[5%] right-[5%] h-px"
          style={{
            backgroundColor: blue,
            opacity: 0.28,
          }}
        />

        {/* Water */}
        <div
          className="absolute bottom-[18px] left-[20%] right-[20%] h-[34px] rounded-t-[50%]"
          style={{
            backgroundColor: `${blue}12`,
          }}
        />

        {/* =================================================
            LEFT FOUNDATION
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="absolute bottom-[18px] left-[16%] h-[44px] w-[56px]"
        >
          <div
            className="absolute bottom-0 left-0 h-[9px] w-full rounded-[2px]"
            style={{
              backgroundColor: concreteLight,
            }}
          />

          <div
            className="absolute bottom-[8px] left-[11px] h-[36px] w-[34px] rounded-[2px]"
            style={{
              backgroundColor: concrete,
              border: `1px solid ${blue}60`,
            }}
          />
        </motion.div>

        {/* =================================================
            RIGHT FOUNDATION
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="absolute bottom-[18px] right-[16%] h-[44px] w-[56px]"
        >
          <div
            className="absolute bottom-0 left-0 h-[9px] w-full rounded-[2px]"
            style={{
              backgroundColor: concreteLight,
            }}
          />

          <div
            className="absolute bottom-[8px] left-[11px] h-[36px] w-[34px] rounded-[2px]"
            style={{
              backgroundColor: concrete,
              border: `1px solid ${blue}60`,
            }}
          />
        </motion.div>

        {/* =================================================
            MAIN PIERS
        ================================================= */}

        <motion.div
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.6,
          }}
          className="absolute bottom-[52px] left-[24%] h-[70px] w-[20px] origin-bottom rounded-[2px]"
          style={{
            backgroundColor: concrete,
            border: `1px solid ${blue}70`,
          }}
        />

        <motion.div
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
          className="absolute bottom-[52px] right-[24%] h-[70px] w-[20px] origin-bottom rounded-[2px]"
          style={{
            backgroundColor: concrete,
            border: `1px solid ${blue}70`,
          }}
        />

        {/* Pier caps */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.45,
            delay: 1.15,
          }}
          className="absolute bottom-[114px] left-[22.5%] h-[9px] w-[9%] origin-center rounded-[2px]"
          style={{
            backgroundColor: concreteLight,
          }}
        />

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.45,
            delay: 1.2,
          }}
          className="absolute bottom-[114px] right-[22.5%] h-[9px] w-[9%] origin-center rounded-[2px]"
          style={{
            backgroundColor: concreteLight,
          }}
        />

        {/* =================================================
            MAIN DECK
        ================================================= */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute bottom-[114px] left-[12%] right-[12%] h-[22px] origin-center rounded-[3px]"
          style={{
            backgroundColor: concrete,
            border: `1px solid ${blue}70`,
            boxShadow:
              mode === "site"
                ? "0 6px 0 rgba(52,42,28,0.13)"
                : "0 6px 0 rgba(0,0,0,0.25)",
          }}
        />

        {/* Asphalt surface */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.3,
          }}
          className="absolute bottom-[132px] left-[13%] right-[13%] h-[8px] origin-center rounded-[2px]"
          style={{
            backgroundColor: asphalt,
          }}
        />

        {/* Yellow centre line */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.75,
            delay: 1.45,
          }}
          className="absolute bottom-[135px] left-[17%] right-[17%] h-[2px] origin-center"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              ${yellow} 0 20px,
              transparent 20px 34px
            )`,
          }}
        />

        {/* =================================================
            RAILING
        ================================================= */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.6,
          }}
          className="absolute bottom-[145px] left-[14%] right-[14%] h-[5px] origin-center rounded-full"
          style={{
            backgroundColor: blue,
          }}
        />

        {[18, 28, 38, 48, 58, 68, 78, 82].map(
          (position, index) => (
            <motion.span
              key={position}
              initial={{
                scaleY: 0,
              }}
              animate={{
                scaleY: 1,
              }}
              transition={{
                duration: 0.25,
                delay: 1.65 + index * 0.05,
              }}
              className="absolute bottom-[140px] h-[17px] w-[2px] origin-bottom rounded-full"
              style={{
                left: `${position}%`,
                backgroundColor: blue,
                opacity: 0.65,
              }}
            />
          )
        )}

        {/* =================================================
            SUSPENSION CABLE
        ================================================= */}

        <svg
          viewBox="0 0 700 150"
          preserveAspectRatio="none"
          className="absolute bottom-[140px] left-[17%] h-[56px] w-[66%] overflow-visible"
        >
          <motion.path
            d="M10 8 Q350 115 690 8"
            fill="none"
            stroke={blue}
            strokeWidth="4"
            strokeLinecap="round"
            pathLength={1}
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1.9,
            }}
          />
        </svg>

        {/* Cable hangers */}
        {[24, 32, 40, 48, 56, 64, 72, 80].map(
          (position, index) => (
            <motion.span
              key={position}
              initial={{
                scaleY: 0,
              }}
              animate={{
                scaleY: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 2.15 + index * 0.06,
              }}
              className="absolute bottom-[118px] h-[28px] w-px origin-bottom"
              style={{
                left: `${position}%`,
                backgroundColor: blue,
                opacity: 0.5,
              }}
            />
          )
        )}

        {/* =================================================
            MOVING VEHICLE
        ================================================= */}

        <motion.div
          className="absolute bottom-[143px] h-[16px] w-[34px]"
          animate={{
            left: ["18%", "73%"],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div
            className="absolute bottom-0 left-0 h-[10px] w-full rounded-[3px]"
            style={{
              backgroundColor: yellow,
            }}
          />

          <div
            className="absolute left-[7px] top-0 h-[8px] w-[14px] rounded-t-[4px]"
            style={{
              backgroundColor: blue,
            }}
          />

          <span className="absolute bottom-[-4px] left-[4px] h-[6px] w-[6px] rounded-full bg-[#24292D]" />

          <span className="absolute bottom-[-4px] right-[4px] h-[6px] w-[6px] rounded-full bg-[#24292D]" />
        </motion.div>

        {/* =================================================
            LABEL
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 5,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 2.35,
          }}
          className="absolute right-[5%] top-[10px] flex items-center gap-2"
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: yellow,
            }}
          />

          <span
            className="text-[8px] font-medium uppercase tracking-[0.2em]"
            style={{
              color: blue,
            }}
          >
            ENGINEERING
          </span>
        </motion.div>

        {/* Dimensions */}
        <span
          className="absolute bottom-0 left-[12%] text-[7px] uppercase tracking-[0.18em]"
          style={{
            color: blue,
          }}
        >
          12000
        </span>

        <span
          className="absolute bottom-0 right-[12%] text-[7px] uppercase tracking-[0.18em]"
          style={{
            color: blue,
          }}
        >
          BRIDGE SPAN
        </span>
      </motion.div>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function ExpertiseHero({
  mode,
}: {
  mode: SiteMode;
}) {
  const isSite = mode === "site";

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
      style={{
        backgroundColor: isSite
          ? "#C7B792"
          : "#07111F",

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
          ? "4px 4px, 7px 7px, auto, auto, auto"
          : "auto",

        backgroundAttachment: isSite
          ? "fixed"
          : "initial",
      }}
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              ${
                isSite
                  ? "rgba(21,87,160,0.45)"
                  : "rgba(79,143,210,0.45)"
              } 1px,
              transparent 1px
            ),

            linear-gradient(
              to bottom,
              ${
                isSite
                  ? "rgba(21,87,160,0.45)"
                  : "rgba(79,143,210,0.45)"
              } 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Left technical marker */}
      <div className="pointer-events-none absolute left-[7%] top-[25%] hidden lg:block">
        <span
          className={`absolute h-3 w-3 rounded-full border ${
            isSite
              ? "border-[#1557A0]"
              : "border-[#4F8FD2]"
          }`}
        />

        <span
          className={`absolute left-1/2 top-[-15px] h-24 w-px opacity-30 ${
            isSite
              ? "bg-[#1557A0]"
              : "bg-[#4F8FD2]"
          }`}
        />

        <span
          className={`absolute left-[-5px] top-[-34px] whitespace-nowrap text-[8px] uppercase tracking-[0.2em] ${
            isSite
              ? "text-[#1557A0]"
              : "text-[#4F8FD2]"
          }`}
        >
          ENGINEERING
        </span>
      </div>

      {/* Right technical marker */}
      <div className="pointer-events-none absolute right-[7%] top-[29%] hidden lg:block">
        <span
          className={`absolute h-3 w-3 rounded-full border ${
            isSite
              ? "border-[#1557A0]"
              : "border-[#4F8FD2]"
          }`}
        />

        <span
          className={`absolute left-1/2 top-[-20px] h-28 w-px opacity-30 ${
            isSite
              ? "bg-[#1557A0]"
              : "bg-[#4F8FD2]"
          }`}
        />

        <span
          className={`absolute left-[-5px] top-[-36px] whitespace-nowrap text-[8px] uppercase tracking-[0.2em] ${
            isSite
              ? "text-[#1557A0]"
              : "text-[#4F8FD2]"
          }`}
        >
          DELIVERY
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
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
          className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${
            isSite
              ? "text-[#1557A0]"
              : "text-[#4F8FD2]"
          }`}
        >
          Our expertise
        </motion.p>

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
          className={`mt-6 text-[clamp(3.6rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.065em] ${
            isSite
              ? "text-[#282A2B]"
              : "text-[#F4F7FA]"
          }`}
        >
          Engineering
          <br />

          <span
            className={
              isSite
                ? "text-[#1557A0]"
                : "text-[#4F8FD2]"
            }
          >
            across disciplines.
          </span>
        </motion.h1>

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
            isSite
              ? "text-[#5C574E]"
              : "text-[#9BA7B4]"
          }`}
        >
          Rehaan & Associates brings together engineering, cost consultancy,
          transportation, architecture and project management to deliver
          coordinated solutions from concept to completion.
        </motion.p>

        {/* Floating bridge */}
        <BridgeConstruction mode={mode} />

        {/* Service labels */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.4,
          }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            "Engineering",
            "Quantity Surveying",
            "Infrastructure",
            "Architecture",
            "Project Management",
          ].map((item) => (
            <span
              key={item}
              className={`rounded-full border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.12em] ${
                isSite
                  ? "border-[#1557A0]/25 text-[#1557A0]"
                  : "border-[#4F8FD2]/25 text-[#4F8FD2]"
              }`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   EXPERTISE CARD
========================================================= */

function ExpertiseCard({
  service,
  index,
  mode,
}: {
  service: (typeof expertise)[number];
  index: number;
  mode: SiteMode;
}) {
  const isSite = mode === "site";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.04,
      }}
      className={`group relative overflow-hidden rounded-[28px] border ${
        isSite
          ? "border-[#282A2B]/15 bg-[#D2C3A5]/75"
          : "border-[var(--border)] bg-[var(--surface)]"
      }`}
    >
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">

        {/* LEFT */}
        <div
          className={`relative overflow-hidden border-b p-8 md:p-10 lg:border-b-0 lg:border-r ${
            isSite
              ? "border-[#282A2B]/15"
              : "border-[var(--border)]"
          }`}
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-[16px] ${
              isSite
                ? "bg-[#1557A0]/10"
                : "bg-[var(--blue)]/10"
            }`}
          >
            <span
              className={`text-sm font-semibold ${
                isSite
                  ? "text-[#1557A0]"
                  : "text-[var(--blue)]"
              }`}
            >
              {service.number}
            </span>
          </div>

          <h2
            className={`mt-9 max-w-xl text-3xl font-medium leading-tight tracking-[-0.035em] md:text-4xl ${
              isSite
                ? "text-[#282A2B]"
                : "text-[var(--ink)]"
            }`}
          >
            {service.title}
          </h2>

          <p
            className={`mt-6 max-w-xl text-[15px] leading-7 md:text-[16px] ${
              isSite
                ? "text-[#5C574E]"
                : "text-[var(--muted)]"
            }`}
          >
            {service.intro}
          </p>

          <div className="mt-10 flex items-center gap-3">
            <span
              className={`h-px w-10 ${
                isSite
                  ? "bg-[#1557A0]"
                  : "bg-[var(--blue)]"
              }`}
            />

            <span
              className={`text-[10px] font-medium uppercase tracking-[0.18em] ${
                isSite
                  ? "text-[#1557A0]"
                  : "text-[var(--blue)]"
              }`}
            >
              Professional expertise
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-10">
          <div className="space-y-10">
            {service.groups.map((group) => (
              <div key={group.title}>
                <h3
                  className={`text-[12px] font-semibold uppercase tracking-[0.2em] ${
                    isSite
                      ? "text-[#1557A0]"
                      : "text-[var(--blue)]"
                  }`}
                >
                  {group.title}
                </h3>

                <div className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{
                        x: 4,
                      }}
                      className={`flex items-start gap-3 text-[14px] leading-6 ${
                        isSite
                          ? "text-[#282A2B]"
                          : "text-[var(--ink)]"
                      }`}
                    >
                      <span
                        className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${
                          isSite
                            ? "bg-[#1557A0]/65"
                            : "bg-[var(--blue)]/65"
                        }`}
                      />

                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accent */}
      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className={`absolute bottom-0 left-0 h-px w-full origin-left ${
          isSite
            ? "bg-[#1557A0]/30"
            : "bg-[var(--blue)]/20"
        }`}
      />
    </motion.article>
  );
}

/* =========================================================
   INTEGRATED DELIVERY
========================================================= */

function IntegratedDelivery({
  mode,
}: {
  mode: SiteMode;
}) {
  const isSite = mode === "site";

  const stages = [
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

  return (
    <section
      className={`border-y px-6 py-28 md:py-36 ${
        isSite
          ? "border-[#282A2B]/15 bg-[#D2C3A5]"
          : "border-[var(--border)] bg-[var(--surface)]"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          <div>
            <p
              className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
                isSite
                  ? "text-[#1557A0]"
                  : "text-[var(--blue)]"
              }`}
            >
              Integrated delivery
            </p>

            <h2
              className={`mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.045em] md:text-6xl ${
                isSite
                  ? "text-[#282A2B]"
                  : "text-[var(--ink)]"
              }`}
            >
              One consultancy.
              <br />
              Multiple disciplines.
            </h2>

            <p
              className={`mt-7 max-w-md text-[15px] leading-7 ${
                isSite
                  ? "text-[#5C574E]"
                  : "text-[var(--muted)]"
              }`}
            >
              Our disciplines work together throughout the project lifecycle
              so that design, engineering, cost and delivery remain aligned.
            </p>

            <p
              className={`mt-9 text-xl font-medium leading-7 ${
                isSite
                  ? "text-[#282A2B]"
                  : "text-[var(--ink)]"
              }`}
            >
              One consultancy.
              <br />
              Multiple disciplines.
              <br />
              One coordinated solution.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {stages.map((stage, index) => (
              <motion.div
                key={stage}
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.035,
                }}
                className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ${
                  isSite
                    ? "border-[#282A2B]/15 bg-[#C7B792]/50 hover:border-[#1557A0]/35"
                    : "border-[var(--border)] bg-[var(--paper)] hover:border-[var(--blue)]/30"
                }`}
              >
                <span
                  className={`text-[10px] font-semibold ${
                    isSite
                      ? "text-[#1557A0]"
                      : "text-[var(--blue)]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`text-[14px] ${
                    isSite
                      ? "text-[#282A2B]"
                      : "text-[var(--ink)]"
                  }`}
                >
                  {stage}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ExpertisePage() {
  const [mode, setMode] = useState<SiteMode>("night");

  return (
    <main
      data-mode={mode}
      className="min-h-screen bg-[var(--paper)] text-[var(--ink)]"
    >
      <BrickCursor />

      <TopBar
        mode={mode}
        setMode={setMode}
      />

      {/* Hero */}
      <ExpertiseHero mode={mode} />

      {/* Expertise */}
      <section
        className={`px-6 py-24 md:py-32 ${
          mode === "site"
            ? "bg-[#C7B792]"
            : "bg-[var(--paper)]"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-6">
          {expertise.map((service, index) => (
            <ExpertiseCard
              key={service.number}
              service={service}
              index={index}
              mode={mode}
            />
          ))}
        </div>
      </section>

      {/* Delivery */}
      <IntegratedDelivery mode={mode} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#07111F] px-6 py-28 text-white md:py-36">
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
            Start a conversation
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Have a project
            <br />

            <span className="text-[#4F8FD2]">
              in mind?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-7 text-[#9BA7B4] md:text-[16px]">
            Bring us your requirements and let our multidisciplinary team
            help turn them into a coordinated solution.
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

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#07111F] px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[10px] uppercase tracking-[0.18em] text-[#9BA7B4] sm:flex-row sm:items-center sm:justify-between">
          <span>
            REHAAN & ASSOCIATES
          </span>

          <span>
            Engineering · Quantity Surveying · Infrastructure · Architecture · Project Management
          </span>

          <span>
            © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </main>
  );
}