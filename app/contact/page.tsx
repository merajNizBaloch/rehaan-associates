"use client";

import { useSiteMode } from "@/components/SiteModeProvider";
import type { SiteMode } from "@/components/navigation/TopBar";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import BrickCursor from "@/components/cursor/BrickCursor";
import EngineeringButton from "@/components/EngineeringButton";

/* =========================================================
   COLORS
========================================================= */

function getColors(mode: SiteMode) {
  const isSite = mode === "site";

  return {
    blue: isSite ? "#1557A0" : "#4F8FD2",
    blueDark: isSite ? "#0D4179" : "#274D72",

    yellow: "#D8A928",

    wall: isSite ? "#D8C8A7" : "#223448",
    wallLight: isSite ? "#E2D5B9" : "#30485F",

    window: isSite ? "#9DB2BE" : "#78A6C4",

    ground: isSite ? "#857966" : "#111923",

    shadow: isSite
      ? "rgba(52,42,28,0.18)"
      : "rgba(0,0,0,0.32)",

    text: isSite ? "#282A2B" : "#E8EEF4",
  };
}

/* =========================================================
   WHATSAPP ICON
========================================================= */

function WhatsAppIcon({
  size = 25,
}: {
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className="fill-none stroke-white"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 5.5a10.5 10.5 0 0 0-9.1 15.8L5 27l5.9-1.9A10.5 10.5 0 1 0 16 5.5Z" />

      <path d="M12.5 11.7c.5-.6 1-.5 1.3-.2l1.2 1.8c.2.3.2.6 0 .9l-.5.6c.9 1.7 2.2 2.8 3.9 3.7l.6-.5c.3-.2.6-.2.9 0l1.8 1.2c.3.2.4.8-.2 1.3-.8.7-2 .8-3.3.4-3.2-.9-6.3-4-7.2-7.2-.4-1.3-.2-2.5.5-3.3Z" />
    </svg>
  );
}

/* =========================================================
   SIMPLE HOME
========================================================= */

function HomeBuilding({
  mode,
}: {
  mode: SiteMode;
}) {
  const c = getColors(mode);

  return (
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
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute bottom-[28px] left-[7%] h-[120px] w-[165px] md:left-[11%] md:w-[185px]"
    >
      {/* House body */}
      <div
        className="absolute bottom-0 left-[10%] h-[72px] w-[80%] rounded-[3px]"
        style={{
          backgroundColor: c.wall,
          border: `1px solid ${c.blue}70`,
        }}
      />

      {/* Roof */}
      <div
        className="absolute left-[13%] top-[-8px] h-[58px] w-[74%]"
        style={{
          backgroundColor: c.blueDark,
          clipPath:
            "polygon(50% 0%, 100% 100%, 0% 100%)",
        }}
      />

      {/* Left window */}
      <div
        className="absolute bottom-[38px] left-[19%] h-[22px] w-[27px] rounded-[2px] border"
        style={{
          borderColor: `${c.blue}80`,
          backgroundColor: c.window,
        }}
      >
        <span
          className="absolute left-1/2 top-0 h-full w-px"
          style={{
            backgroundColor: `${c.blue}55`,
          }}
        />
      </div>

      {/* Right window */}
      <div
        className="absolute bottom-[38px] right-[19%] h-[22px] w-[27px] rounded-[2px] border"
        style={{
          borderColor: `${c.blue}80`,
          backgroundColor: c.window,
        }}
      >
        <span
          className="absolute left-1/2 top-0 h-full w-px"
          style={{
            backgroundColor: `${c.blue}55`,
          }}
        />
      </div>

      {/* Door */}
      <div
        className="absolute bottom-0 left-1/2 h-[38px] w-[24px] -translate-x-1/2 rounded-t-[2px]"
        style={{
          backgroundColor: c.blueDark,
        }}
      />

      {/* Door handle */}
      <span
        className="absolute bottom-[17px] left-[55%] h-[3px] w-[3px] rounded-full"
        style={{
          backgroundColor: c.yellow,
        }}
      />

      {/* Label */}
      <span
        className="absolute -bottom-[22px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.18em]"
        style={{
          color: c.blue,
        }}
      >
        HOME
      </span>
    </motion.div>
  );
}

/* =========================================================
   OFFICE
========================================================= */

function OfficeBuilding({
  mode,
}: {
  mode: SiteMode;
}) {
  const c = getColors(mode);

  return (
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
        duration: 0.8,
        delay: 0.2,
      }}
      className="absolute bottom-[28px] right-[4%] h-[150px] w-[200px] md:right-[9%] md:w-[235px]"
    >
      {/* Ground shadow */}
      <div
        className="absolute bottom-[-4px] left-[3%] h-[9px] w-[94%] rounded-full blur-[4px]"
        style={{
          backgroundColor: c.shadow,
        }}
      />

      {/* Main office */}
      <div
        className="absolute bottom-0 left-[5%] h-[114px] w-[90%] overflow-hidden rounded-[3px] border"
        style={{
          backgroundColor: c.wall,
          borderColor: `${c.blue}90`,
          boxShadow: `10px 10px 0 ${c.shadow}`,
        }}
      >
        {/* Side panel */}
        <div
          className="absolute right-0 top-0 h-full w-[9%]"
          style={{
            backgroundColor: c.blueDark,
          }}
        />

        {/* Glass facade */}
        <div className="absolute left-[9%] right-[14%] top-[17px] bottom-[27px] grid grid-cols-4 gap-[5px]">
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="rounded-[1px]"
              style={{
                backgroundColor: c.window,
                opacity:
                  index % 5 === 0
                    ? 0.7
                    : 0.9,
              }}
            />
          ))}
        </div>

        {/* Entrance */}
        <div
          className="absolute bottom-0 left-1/2 h-[42px] w-[30px] -translate-x-1/2"
          style={{
            backgroundColor: c.blueDark,
          }}
        />

        <div
          className="absolute bottom-[7px] left-1/2 h-[22px] w-[11px] -translate-x-1/2"
          style={{
            backgroundColor: c.window,
          }}
        />
      </div>

      {/* Roof slab */}
      <div
        className="absolute left-0 top-[25px] h-[10px] w-full rounded-[2px]"
        style={{
          backgroundColor: c.blueDark,
        }}
      />

      {/* Roof accent */}
      <div
        className="absolute left-[10%] right-[12%] top-[16px] h-[8px] rounded-[2px]"
        style={{
          backgroundColor: c.yellow,
        }}
      />

      {/* R&A sign */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 rounded-[2px] border px-4 py-1.5"
        style={{
          borderColor: c.blue,
          backgroundColor:
            mode === "site"
              ? "#C7B792"
              : "#07111F",
        }}
      >
        <span
          className="text-[8px] font-semibold uppercase tracking-[0.16em]"
          style={{
            color: c.blue,
          }}
        >
          R&A OFFICE
        </span>
      </div>

      {/* Steps */}
      <span
        className="absolute bottom-0 left-[23%] h-[3px] w-[54%]"
        style={{
          backgroundColor: c.blue,
          opacity: 0.45,
        }}
      />

      {/* Label */}
      <span
        className="absolute -bottom-[22px] left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-[9px] font-semibold uppercase tracking-[0.11em]"
        style={{
          color: c.blue,
        }}
      >
        REHAAN & ASSOCIATES
      </span>
    </motion.div>
  );
}

/* =========================================================
   HOUSE → OFFICE
========================================================= */

function HouseToOffice({
  mode,
}: {
  mode: SiteMode;
}) {
  const c = getColors(mode);

  return (
    <div className="relative mx-auto mt-10 h-[255px] w-full max-w-[960px] overflow-hidden">

      {/* Ground */}
      <div
        className="absolute bottom-[28px] left-[5%] right-[5%] h-px"
        style={{
          backgroundColor: c.blue,
          opacity: 0.24,
        }}
      />

      {/* Road */}
      <div
        className="absolute bottom-[14px] left-[6%] right-[6%] h-[14px] rounded-[3px]"
        style={{
          backgroundColor: c.ground,
        }}
      />

      {/* Road marking */}
      <div
        className="absolute bottom-[20px] left-[7%] right-[7%] h-px"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            ${c.yellow} 0 20px,
            transparent 20px 35px
          )`,
          opacity: 0.8,
        }}
      />

      {/* Home */}
      <HomeBuilding mode={mode} />

      {/* Office */}
      <OfficeBuilding mode={mode} />

      {/* Communication route */}
      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.6,
        }}
        className="absolute bottom-[108px] left-[23%] right-[23%] h-[2px] origin-left rounded-full"
        style={{
          backgroundColor: c.blue,
          opacity: 0.22,
        }}
      />

      {/* Start point */}
      <span
        className="absolute bottom-[103px] left-[21.8%] h-[9px] w-[9px] rounded-full"
        style={{
          backgroundColor: c.blue,
        }}
      />

      {/* End point */}
      <span
        className="absolute bottom-[103px] right-[22.5%] h-[9px] w-[9px] rounded-full"
        style={{
          backgroundColor: c.blue,
        }}
      />

      {/* ===================================================
          MOVING WHATSAPP
      =================================================== */}

      <motion.div
        className="absolute bottom-[95px] left-[20%]"
        animate={{
          left: ["20%", "74%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            y: [0, -5, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.25)]"
        >
          <WhatsAppIcon size={25} />

          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border border-white/80 bg-[#D8A928]" />
        </motion.div>
      </motion.div>

      {/* Route heading */}
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
          delay: 0.9,
        }}
        className="absolute left-1/2 top-[14px] -translate-x-1/2 text-center"
      >
        <p
          className="text-[9px] font-semibold uppercase tracking-[0.22em]"
          style={{
            color: c.blue,
          }}
        >
          Project communication
        </p>

        <p
          className="mt-1 text-[10px]"
          style={{
            color: c.text,
            opacity: 0.72,
          }}
        >
          From your home to our office
        </p>
      </motion.div>
    </div>
  );
}

/* =========================================================
   CONTACT DETAILS
========================================================= */

function ContactDetails({
  mode,
}: {
  mode: SiteMode;
}) {
  const isSite = mode === "site";

  const cards = [
    {
      icon: <MapPin size={19} strokeWidth={1.5} />,
      label: "Office",
      title: "Rehaan & Associates",
      text: "Balochistan, Pakistan",
    },
    {
      icon: <Phone size={19} strokeWidth={1.5} />,
      label: "Phone",
      title: "Let's talk",
      text: "Add your official contact number here.",
    },
    {
      icon: <Mail size={19} strokeWidth={1.5} />,
      label: "Email",
      title: "Send an enquiry",
      text: "Add your official email address here.",
    },
  ];

  return (
    <section
      className={`px-6 py-24 md:py-32 ${
        isSite
          ? "bg-[#C7B792]"
          : "bg-[var(--paper)]"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
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
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`rounded-[24px] border p-7 ${
                isSite
                  ? "border-[#282A2B]/15 bg-[#D2C3A5]/70"
                  : "border-[var(--border)] bg-[var(--surface)]"
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full ${
                  isSite
                    ? "bg-[#1557A0]/10 text-[#1557A0]"
                    : "bg-[var(--blue)]/8 text-[var(--blue)]"
                }`}
              >
                {card.icon}
              </div>

              <p
                className={`mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] ${
                  isSite
                    ? "text-[#1557A0]"
                    : "text-[var(--blue)]"
                }`}
              >
                {card.label}
              </p>

              <h2
                className={`mt-3 text-2xl font-medium ${
                  isSite
                    ? "text-[#282A2B]"
                    : "text-[var(--ink)]"
                }`}
              >
                {card.title}
              </h2>

              <p
                className={`mt-4 text-[14px] leading-7 ${
                  isSite
                    ? "text-[#5C574E]"
                    : "text-[var(--muted)]"
                }`}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT FORM
========================================================= */

function ContactForm() {
  return (
    <section
      id="contact-form"
      className="bg-[var(--surface)] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              Project enquiry
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.045em] text-[var(--ink)] md:text-6xl">
              Tell us what
              <br />
              you're building.
            </h2>

            <p className="mt-7 max-w-md text-[15px] leading-7 text-[var(--muted)]">
              Share a few details about your project and requirements so we
              can understand the scope and discuss the next step.
            </p>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            className="rounded-[26px] border border-[var(--border)] bg-[var(--paper)] p-7 md:p-9"
          >
            <div className="grid gap-6 md:grid-cols-2">

              <label className="block">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Name
                </span>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-[14px] text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--blue)]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Phone
                </span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-[14px] text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--blue)]"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Email
                </span>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-[14px] text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--blue)]"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Project type
                </span>

                <select
                  name="projectType"
                  defaultValue=""
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-[14px] text-[var(--ink)] outline-none transition-colors focus:border-[var(--blue)]"
                >
                  <option value="" disabled>
                    Select project type
                  </option>

                  <option value="residential">
                    Residential
                  </option>

                  <option value="commercial">
                    Commercial
                  </option>

                  <option value="industrial">
                    Industrial
                  </option>

                  <option value="infrastructure">
                    Infrastructure
                  </option>

                  <option value="public-sector">
                    Public Sector
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Message
                </span>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-[14px] leading-7 text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--blue)]"
                />
              </label>

              <div className="md:col-span-2">
                <EngineeringButton
                  variant="primary"
                  onClick={() => {}}
                >
                  Send enquiry
                </EngineeringButton>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function ContactPage() {
  const { mode } = useSiteMode();

  const isSite = mode === "site";

  return (
    <main
      data-mode={mode}
      className="min-h-screen bg-[var(--paper)] text-[var(--ink)]"
    >
      {/* Navigation */}
      <BrickCursor />

            {/* ===================================================
          HERO
      =================================================== */}

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
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                ${
                  isSite
                    ? "rgba(21,87,160,0.5)"
                    : "rgba(79,143,210,0.5)"
                } 1px,
                transparent 1px
              ),

              linear-gradient(
                to bottom,
                ${
                  isSite
                    ? "rgba(21,87,160,0.5)"
                    : "rgba(79,143,210,0.5)"
                } 1px,
                transparent 1px
              )
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Contact marker */}
        <div className="pointer-events-none absolute left-[7%] top-[29%] hidden lg:block">
          <span
            className={`block h-3 w-3 rounded-full border ${
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
            className={`absolute left-[-5px] top-[-33px] whitespace-nowrap text-[8px] uppercase tracking-[0.2em] ${
              isSite
                ? "text-[#1557A0]"
                : "text-[#4F8FD2]"
            }`}
          >
            CONTACT POINT
          </span>
        </div>

        {/* Office marker */}
        <div className="pointer-events-none absolute right-[7%] top-[34%] hidden lg:block">
          <span
            className={`block h-3 w-3 rounded-full border ${
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
            className={`absolute left-[-5px] top-[-35px] whitespace-nowrap text-[8px] uppercase tracking-[0.2em] ${
              isSite
                ? "text-[#1557A0]"
                : "text-[#4F8FD2]"
            }`}
          >
            REHAAN & ASSOCIATES
          </span>
        </div>

        {/* Hero content */}
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
            Contact Rehaan & Associates
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
            Let's move your
            <br />

            <span
              className={
                isSite
                  ? "text-[#1557A0]"
                  : "text-[#4F8FD2]"
              }
            >
              project forward.
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
            className={`mx-auto mt-10 max-w-2xl text-[15px] leading-7 md:text-[17px] ${
              isSite
                ? "text-[#5C574E]"
                : "text-[#9BA7B4]"
            }`}
          >
            Tell us about your project, requirements and goals. Whether you
            need engineering, architecture, infrastructure, cost consultancy
            or project management, our team is ready to discuss the next step.
          </motion.p>

          {/* Home → WhatsApp → Office */}
          <HouseToOffice mode={mode} />

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
              delay: 0.6,
            }}
            className="mt-3 flex flex-wrap justify-center gap-3"
          >
            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d]"
            >
              <span className="flex h-5 w-5 items-center justify-center">
                <WhatsAppIcon size={15} />
              </span>

              WhatsApp us

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <EngineeringButton
              href="/"
              variant="secondary"
            >
              Back to home
            </EngineeringButton>
          </motion.div>
        </div>
      </section>

      {/* Contact details */}
      <ContactDetails mode={mode} />

      {/* Enquiry form */}
      <ContactForm />

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
