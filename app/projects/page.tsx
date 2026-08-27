"use client";

import { useSiteMode } from "@/components/SiteModeProvider";
import type { SiteMode } from "@/components/navigation/TopBar";
import { motion } from "framer-motion";

import BrickCursor from "@/components/cursor/BrickCursor";
import EngineeringButton from "@/components/EngineeringButton";

/* =========================================================
   PROJECT TYPES
========================================================= */

type ProjectType =
  | "residential"
  | "commercial"
  | "infrastructure"
  | "structural"
  | "management";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects: {
  number: string;
  type: ProjectType;
  title: string;
  category: string;
  description: string;
  status: string;
}[] = [
  {
    number: "01",
    type: "residential",
    title: "Residential Projects",
    category: "Engineering · Architecture",
    description:
      "Residential developments shaped around site conditions, practical planning, structural requirements and long-term usability.",
    status: "Residential",
  },
  {
    number: "02",
    type: "commercial",
    title: "Commercial Developments",
    category: "Engineering · Architecture · Management",
    description:
      "Commercial environments delivered through coordinated design, engineering, cost planning and project management.",
    status: "Commercial",
  },
  {
    number: "03",
    type: "infrastructure",
    title: "Infrastructure Works",
    category: "Civil Engineering · Infrastructure",
    description:
      "Roads, bridges, drainage, utilities and site infrastructure designed around practical movement and connectivity.",
    status: "Infrastructure",
  },
  {
    number: "04",
    type: "structural",
    title: "Structural Projects",
    category: "Structural Engineering",
    description:
      "Structural solutions covering foundations, RCC, steel structures, analysis, assessment and construction requirements.",
    status: "Structural",
  },
  {
    number: "05",
    type: "management",
    title: "Project Delivery",
    category: "Project Management · Consultancy",
    description:
      "Coordinated project delivery connecting planning, procurement, construction supervision, quality, cost and completion.",
    status: "Management",
  },
];

/* =========================================================
   COLORS
========================================================= */

function getSceneColors(mode: SiteMode) {
  const isSite = mode === "site";

  return {
    blue: isSite ? "#1557A0" : "#4F8FD2",
    blueDark: isSite ? "#0D4179" : "#274D72",
    yellow: "#D8A928",
    yellowDark: "#B88618",
    wall: isSite ? "#D8C8A7" : "#223448",
    wallLight: isSite ? "#E2D5B9" : "#2C4157",
    window: isSite ? "#9DB2BE" : "#7EACC9",
    ground: isSite ? "#857966" : "#111923",
    shadow: isSite ? "rgba(52,42,28,0.18)" : "rgba(0,0,0,0.32)",
    ink: isSite ? "#282A2B" : "#E8EEF4",
  };
}

/* =========================================================
   RESIDENTIAL
========================================================= */

function ResidentialScene({
  mode,
}: {
  mode: SiteMode;
}) {
  const c = getSceneColors(mode);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ground */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[21%]"
        style={{ backgroundColor: c.ground }}
      />

      {/* house shadow */}
      <div
        className="absolute bottom-[18%] left-[25%] h-[9px] w-[51%] rounded-full blur-[3px]"
        style={{ backgroundColor: c.shadow }}
      />

      {/* house */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[19%] left-[24%] h-[138px] w-[52%]"
      >
        {/* main floor */}
        <div
          className="absolute bottom-0 left-[7%] h-[76%] w-[86%] rounded-[2px] border"
          style={{
            backgroundColor: c.wall,
            borderColor: `${c.blue}90`,
            boxShadow: `10px 10px 0 ${c.shadow}`,
          }}
        />

        {/* upper section */}
        <div
          className="absolute left-[16%] top-[3%] h-[36%] w-[68%] rounded-[2px] border"
          style={{
            backgroundColor: c.wallLight,
            borderColor: `${c.blue}80`,
          }}
        />

        {/* roof */}
        <div
          className="absolute left-[10%] top-0 h-[42px] w-[80%] overflow-hidden"
          style={{
            backgroundColor: c.blueDark,
            clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
          }}
        >
          <div
            className="absolute left-[50%] top-[13px] h-[3px] w-[62%] -translate-x-1/2"
            style={{ backgroundColor: c.yellow }}
          />
        </div>

        {/* balcony */}
        <div
          className="absolute right-[9%] top-[39%] h-[22px] w-[27%] border"
          style={{
            borderColor: c.blue,
          }}
        />

        <div
          className="absolute right-[8%] top-[57%] h-[3px] w-[29%]"
          style={{ backgroundColor: c.blue }}
        />

        {/* front door */}
        <div
          className="absolute bottom-0 left-1/2 h-[37%] w-[18%] -translate-x-1/2 rounded-t-[2px]"
          style={{
            backgroundColor: c.blueDark,
          }}
        />

        {/* door glass */}
        <div
          className="absolute bottom-[4%] left-1/2 h-[27%] w-[10%] -translate-x-1/2"
          style={{
            backgroundColor: c.window,
          }}
        />

        {/* windows */}
        {[
          { left: "14%", top: "47%" },
          { right: "14%", top: "47%" },
          { left: "22%", top: "14%" },
          { right: "22%", top: "14%" },
        ].map((position, index) => (
          <div
            key={index}
            className="absolute h-[19px] w-[27px] rounded-[1px] border"
            style={{
              ...position,
              borderColor: `${c.blue}85`,
              backgroundColor: c.window,
            }}
          >
            <span
              className="absolute left-1/2 top-0 h-full w-px"
              style={{ backgroundColor: `${c.blue}55` }}
            />
          </div>
        ))}
      </motion.div>

      {/* tree left */}
      <div className="absolute bottom-[19%] left-[11%]">
        <div
          className="mx-auto h-[34px] w-[5px]"
          style={{ backgroundColor: c.blueDark }}
        />
        <div
          className="h-[47px] w-[47px] rounded-full"
          style={{ backgroundColor: `${c.blue}32` }}
        />
      </div>

      {/* tree right */}
      <div className="absolute bottom-[19%] right-[10%]">
        <div
          className="mx-auto h-[30px] w-[5px]"
          style={{ backgroundColor: c.blueDark }}
        />
        <div
          className="h-[42px] w-[42px] rounded-full"
          style={{ backgroundColor: `${c.blue}30` }}
        />
      </div>

      {/* small family car */}
      <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute bottom-[17%] right-[19%] h-[21px] w-[47px]"
      >
        <div
          className="absolute bottom-0 left-0 h-[13px] w-full rounded-[5px_5px_3px_3px]"
          style={{ backgroundColor: c.yellow }}
        />

        <div
          className="absolute left-[10px] top-0 h-[10px] w-[22px] rounded-t-[5px]"
          style={{ backgroundColor: c.blueDark }}
        />

        <span className="absolute bottom-[-4px] left-[7px] h-[8px] w-[8px] rounded-full bg-[#24292D]" />
        <span className="absolute bottom-[-4px] right-[7px] h-[8px] w-[8px] rounded-full bg-[#24292D]" />
      </motion.div>
    </div>
  );
}

/* =========================================================
   COMMERCIAL
========================================================= */

function CommercialScene({
  mode,
}: {
  mode: SiteMode;
}) {
  const c = getSceneColors(mode);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ground */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[18%]"
        style={{ backgroundColor: c.ground }}
      />

      {/* building shadow */}
      <div
        className="absolute bottom-[15%] left-[22%] h-[8px] w-[57%] rounded-full blur-[3px]"
        style={{ backgroundColor: c.shadow }}
      />

      {/* office tower */}
      <motion.div
        initial={{ y: 45, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="absolute bottom-[16%] left-[25%] h-[215px] w-[43%]"
      >
        {/* tower body */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[3px] border"
          style={{
            backgroundColor: c.wall,
            borderColor: `${c.blue}90`,
            boxShadow: `12px 12px 0 ${c.shadow}`,
          }}
        />

        {/* glass curtain wall */}
        <div
          className="absolute left-[9%] right-[9%] top-[10%] bottom-[14%] grid grid-cols-4 gap-[5px]"
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[1px]"
              style={{
                backgroundColor: c.window,
                opacity: index % 5 === 0 ? 0.72 : 0.88,
              }}
            />
          ))}
        </div>

        {/* entrance */}
        <div
          className="absolute bottom-0 left-1/2 h-[17%] w-[20%] -translate-x-1/2"
          style={{
            backgroundColor: c.blueDark,
          }}
        />

        <div
          className="absolute bottom-[4%] left-1/2 h-[10%] w-[9%] -translate-x-1/2"
          style={{
            backgroundColor: c.window,
          }}
        />

        {/* roof feature */}
        <div
          className="absolute left-0 right-0 top-0 h-[12px]"
          style={{
            backgroundColor: c.blueDark,
          }}
        />

        <div
          className="absolute left-[12%] right-[12%] top-[-10px] h-[10px]"
          style={{
            backgroundColor: c.yellow,
          }}
        />

        {/* side fins */}
        <div
          className="absolute left-[-7px] top-[13%] bottom-[10%] w-[7px]"
          style={{ backgroundColor: c.blueDark }}
        />

        <div
          className="absolute right-[-7px] top-[13%] bottom-[10%] w-[7px]"
          style={{ backgroundColor: c.blueDark }}
        />
      </motion.div>

      {/* crane */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute bottom-[16%] right-[10%] h-[225px] w-[115px]"
      >
        <div
          className="absolute bottom-0 right-[35px] h-full w-[4px]"
          style={{ backgroundColor: c.blueDark }}
        />

        <div
          className="absolute right-[0] top-0 h-[4px] w-[108px]"
          style={{ backgroundColor: c.blueDark }}
        />

        <div
          className="absolute right-[69px] top-0 h-[87px] w-[3px]"
          style={{ backgroundColor: c.blueDark }}
        />

        <div
          className="absolute right-[10px] top-[-7px] h-[11px] w-[17px]"
          style={{ backgroundColor: c.yellow }}
        />

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[59px] top-[88px] h-[20px] w-[23px]"
          style={{ backgroundColor: c.yellow }}
        />
      </motion.div>

      {/* worker */}
      <ConstructionWorker
        mode={mode}
        left="12%"
        bottom="16%"
      />
    </div>
  );
}

/* =========================================================
   INFRASTRUCTURE
========================================================= */

function InfrastructureScene({
  mode,
}: {
  mode: SiteMode;
}) {
  const c = getSceneColors(mode);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* landscape */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[35%]"
        style={{ backgroundColor: c.ground }}
      />

      {/* distant land */}
      <div
        className="absolute bottom-[33%] left-0 right-0 h-[20%]"
        style={{
          backgroundColor: mode === "site" ? "#9D927C" : "#182330",
          clipPath:
            "polygon(0 80%, 18% 50%, 35% 70%, 52% 30%, 72% 66%, 86% 38%, 100% 58%, 100% 100%, 0 100%)",
        }}
      />

      {/* bridge road */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute left-[-4%] top-[45%] h-[39px] w-[108%] origin-left -rotate-[5deg]"
        style={{
          backgroundColor:
            mode === "site" ? "#585751" : "#202A35",
        }}
      />

      {/* bridge deck */}
      <div
        className="absolute left-[30%] top-[40%] h-[10px] w-[39%] rotate-[-5deg]"
        style={{
          backgroundColor: c.blueDark,
        }}
      />

      {/* piers */}
      <div
        className="absolute left-[35%] top-[43%] h-[69px] w-[11px]"
        style={{
          backgroundColor: c.blueDark,
          transform: "rotate(-5deg)",
        }}
      />

      <div
        className="absolute left-[59%] top-[42%] h-[69px] w-[11px]"
        style={{
          backgroundColor: c.blueDark,
          transform: "rotate(-5deg)",
        }}
      />

      {/* bridge rail */}
      <div
        className="absolute left-[29%] top-[37%] h-[4px] w-[41%] rotate-[-5deg]"
        style={{
          backgroundColor: c.yellow,
        }}
      />

      {/* bridge cable */}
      <svg
        viewBox="0 0 300 90"
        className="absolute left-[28%] top-[32%] h-[85px] w-[44%]"
        fill="none"
      >
        <path
          d="M10 5 Q150 75 290 5"
          stroke={c.blue}
          strokeWidth="3"
        />

        {[45, 80, 115, 150, 185, 220, 255].map((x) => (
          <line
            key={x}
            x1={x}
            y1={25 + Math.abs(150 - x) * 0.12}
            x2={x}
            y2="69"
            stroke={c.blue}
            strokeWidth="2"
            opacity="0.65"
          />
        ))}
      </svg>

      {/* road vehicle */}
      <motion.div
        animate={{
          x: ["0%", "380%"],
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute left-[5%] top-[47%] h-[16px] w-[35px] -rotate-[5deg]"
      >
        <div
          className="absolute bottom-0 left-0 h-[10px] w-[35px] rounded-[3px]"
          style={{ backgroundColor: c.yellow }}
        />

        <div
          className="absolute left-[7px] top-0 h-[8px] w-[15px] rounded-t-[4px]"
          style={{ backgroundColor: c.blueDark }}
        />

        <span className="absolute bottom-[-4px] left-[6px] h-[6px] w-[6px] rounded-full bg-[#24292D]" />
        <span className="absolute bottom-[-4px] right-[5px] h-[6px] w-[6px] rounded-full bg-[#24292D]" />
      </motion.div>

      {/* cone */}
      <div className="absolute bottom-[24%] right-[17%]">
        <div
          className="h-0 w-0 border-x-[7px] border-b-[18px] border-x-transparent"
          style={{ borderBottomColor: c.yellow }}
        />

        <div className="mt-[-2px] h-[3px] w-[19px] bg-[#282A2B]" />
      </div>

      {/* worker */}
      <ConstructionWorker
        mode={mode}
        left="15%"
        bottom="22%"
      />
    </div>
  );
}

/* =========================================================
   STRUCTURAL
========================================================= */

function StructuralScene({
  mode,
}: {
  mode: SiteMode;
}) {
  const c = getSceneColors(mode);

  const columns = ["22%", "36%", "50%", "64%", "78%"];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ground */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[18%]"
        style={{ backgroundColor: c.ground }}
      />

      {/* concrete slab foundation */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="absolute bottom-[18%] left-[18%] h-[10px] w-[64%] origin-center"
        style={{
          backgroundColor: c.wallLight,
          border: `1px solid ${c.blue}`,
        }}
      />

      {/* columns */}
      {columns.map((left, index) => (
        <motion.div
          key={left}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: 0.45 + index * 0.08,
          }}
          className="absolute bottom-[28%] h-[118px] w-[10px] origin-bottom rounded-[1px]"
          style={{
            left,
            backgroundColor: c.wallLight,
            border: `1px solid ${c.blue}`,
          }}
        />
      ))}

      {/* beams */}
      {[38, 60].map((bottom, index) => (
        <motion.div
          key={bottom}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.85 + index * 0.18,
          }}
          className="absolute left-[18%] right-[18%] h-[10px] origin-left"
          style={{
            bottom: `${bottom}%`,
            backgroundColor: c.wallLight,
            border: `1px solid ${c.blue}`,
          }}
        />
      ))}

      {/* partial wall panels */}
      <div
        className="absolute bottom-[28%] left-[36%] h-[40px] w-[28%]"
        style={{
          backgroundColor: `${c.wall}cc`,
          borderLeft: `1px solid ${c.blue}`,
          borderRight: `1px solid ${c.blue}`,
        }}
      />

      {/* upper wall */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-[68%] left-[36%] h-[39px] w-[28%] origin-bottom"
        style={{
          backgroundColor: c.wall,
          border: `1px solid ${c.blue}`,
        }}
      />

      {/* worker */}
      <ConstructionWorker
        mode={mode}
        left="10%"
        bottom="17%"
      />

      {/* safety barrier */}
      <div className="absolute bottom-[21%] right-[10%] h-[49px] w-[65px]">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute bottom-0 h-[49px] w-[3px]"
            style={{
              left: `${i * 31}px`,
              backgroundColor: c.yellow,
            }}
          />
        ))}

        <span
          className="absolute left-0 top-[8px] h-[4px] w-full"
          style={{ backgroundColor: c.yellow }}
        />

        <span
          className="absolute left-0 top-[25px] h-[4px] w-full"
          style={{ backgroundColor: c.yellow }}
        />
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT MANAGEMENT
========================================================= */

function ManagementScene({
  mode,
}: {
  mode: SiteMode;
}) {
  const c = getSceneColors(mode);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ground */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[23%]"
        style={{ backgroundColor: c.ground }}
      />

      {/* site building */}
      <div
        className="absolute bottom-[23%] left-[30%] h-[83px] w-[32%]"
        style={{
          backgroundColor: c.wall,
          border: `1px solid ${c.blue}`,
        }}
      >
        <div
          className="absolute left-[10%] top-[15%] h-[22px] w-[22%]"
          style={{ backgroundColor: c.window }}
        />

        <div
          className="absolute left-[39%] top-[15%] h-[22px] w-[22%]"
          style={{ backgroundColor: c.window }}
        />

        <div
          className="absolute left-[68%] top-[15%] h-[22px] w-[22%]"
          style={{ backgroundColor: c.window }}
        />

        <div
          className="absolute bottom-0 left-1/2 h-[29px] w-[17%] -translate-x-1/2"
          style={{ backgroundColor: c.blueDark }}
        />
      </div>

      {/* crane */}
      <div className="absolute bottom-[23%] right-[18%] h-[137px] w-[85px]">
        <div
          className="absolute bottom-0 right-[26px] h-full w-[3px]"
          style={{ backgroundColor: c.blueDark }}
        />

        <div
          className="absolute right-0 top-0 h-[3px] w-[80px]"
          style={{ backgroundColor: c.blueDark }}
        />

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute right-[45px] top-[3px] h-[18px] w-[20px]"
          style={{ backgroundColor: c.yellow }}
        />
      </div>

      {/* project manager */}
      <ConstructionWorker
        mode={mode}
        left="16%"
        bottom="22%"
      />

      {/* clipboard */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="absolute bottom-[34%] left-[18.5%] h-[25px] w-[18px] rounded-[2px] border"
        style={{
          borderColor: c.blue,
          backgroundColor: c.wallLight,
        }}
      >
        <span
          className="absolute left-[4px] top-[7px] h-[2px] w-[9px]"
          style={{ backgroundColor: c.blue }}
        />
        <span
          className="absolute left-[4px] top-[12px] h-[2px] w-[7px]"
          style={{ backgroundColor: c.blue }}
        />
        <span
          className="absolute left-[4px] top-[17px] h-[2px] w-[10px]"
          style={{ backgroundColor: c.blue }}
        />
      </motion.div>

      {/* progress markers */}
      <div className="absolute left-[8%] right-[8%] top-[14%]">
        <div
          className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2"
          style={{ backgroundColor: `${c.blue}35` }}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.4 }}
          className="absolute left-0 top-1/2 h-[2px] w-full origin-left"
          style={{ backgroundColor: c.blue }}
        />

        {[0, 25, 50, 75, 100].map((position, index) => (
          <motion.span
            key={position}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.65 + index * 0.2,
            }}
            className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
            style={{
              left: `${position}%`,
              borderColor: c.blue,
              backgroundColor:
                index === 3
                  ? c.yellow
                  : mode === "site"
                    ? "#C7B792"
                    : "#07111F",
            }}
          />
        ))}
      </div>

      <span
        className="absolute left-[8%] top-[8%] text-[8px] font-medium uppercase tracking-[0.18em]"
        style={{ color: c.blue }}
      >
        PROJECT CONTROL
      </span>
    </div>
  );
}

/* =========================================================
   WORKER
========================================================= */

function ConstructionWorker({
  mode,
  left,
  bottom,
}: {
  mode: SiteMode;
  left: string;
  bottom: string;
}) {
  const c = getSceneColors(mode);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="absolute"
      style={{
        left,
        bottom,
      }}
    >
      <motion.div
        animate={{
          y: [0, -1.5, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-[54px] w-[27px]"
      >
        {/* helmet */}
        <div
          className="absolute left-[5px] top-0 h-[8px] w-[17px] rounded-t-full"
          style={{ backgroundColor: c.yellow }}
        />

        {/* head */}
        <div className="absolute left-[8px] top-[7px] h-[8px] w-[10px] rounded-full bg-[#604B3C]" />

        {/* torso */}
        <div
          className="absolute left-[6px] top-[15px] h-[20px] w-[15px] rounded-[4px]"
          style={{ backgroundColor: c.yellow }}
        />

        {/* blue vest strip */}
        <div
          className="absolute left-[12px] top-[15px] h-[20px] w-[3px]"
          style={{ backgroundColor: c.blue }}
        />

        {/* legs */}
        <span className="absolute left-[7px] top-[34px] h-[16px] w-[4px] rounded-full bg-[#282A2B]" />

        <span className="absolute left-[16px] top-[34px] h-[16px] w-[4px] rounded-full bg-[#282A2B]" />

        {/* arms */}
        <span className="absolute left-[3px] top-[17px] h-[4px] w-[13px] -rotate-[28deg] rounded-full bg-[#282A2B]" />

        <span className="absolute right-[-5px] top-[18px] h-[4px] w-[13px] rotate-[25deg] rounded-full bg-[#282A2B]" />
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   PROJECT VISUAL
========================================================= */

function ProjectVisual({
  type,
  mode,
}: {
  type: ProjectType;
  mode: SiteMode;
}) {
  switch (type) {
    case "residential":
      return <ResidentialScene mode={mode} />;

    case "commercial":
      return <CommercialScene mode={mode} />;

    case "infrastructure":
      return <InfrastructureScene mode={mode} />;

    case "structural":
      return <StructuralScene mode={mode} />;

    case "management":
      return <ManagementScene mode={mode} />;

    default:
      return null;
  }
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
  mode,
}: {
  project: (typeof projects)[number];
  index: number;
  mode: SiteMode;
}) {
  const isSite = mode === "site";
  const c = getSceneColors(mode);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 28,
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
        duration: 0.6,
        delay: index * 0.06,
      }}
      whileHover={{
        y: -4,
      }}
      className={`group overflow-hidden rounded-[26px] border ${
        isSite
          ? "border-[#282A2B]/15 bg-[#D2C3A5]/75"
          : "border-[var(--border)] bg-[var(--surface)]"
      }`}
    >
      {/* Scene */}
      <div
        className={`relative h-[320px] overflow-hidden ${
          isSite
            ? "bg-[#C7B792]"
            : "bg-[#0D1927]"
        }`}
      >
        <ProjectVisual
          type={project.type}
          mode={mode}
        />

        {/* number */}
        <span
          className={`absolute right-5 top-5 text-[10px] font-semibold tracking-[0.2em] ${
            isSite
              ? "text-[#1557A0]"
              : "text-[#4F8FD2]"
          }`}
        >
          {project.number}
        </span>

        {/* status */}
        <span
          className={`absolute left-5 top-5 rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] ${
            isSite
              ? "border-[#1557A0]/25 bg-[#C7B792]/80 text-[#1557A0]"
              : "border-[#4F8FD2]/25 bg-[#07111F]/70 text-[#4F8FD2]"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* text */}
      <div className="p-7">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{
            color: c.blue,
          }}
        >
          {project.category}
        </p>

        <div className="mt-4 flex items-start justify-between gap-5">
          <h2
            className={`text-2xl font-medium tracking-[-0.035em] ${
              isSite
                ? "text-[#282A2B]"
                : "text-[var(--ink)]"
            }`}
          >
            {project.title}
          </h2>

          <span
            className="mt-1 text-[18px] transition-transform duration-300 group-hover:translate-x-1"
            style={{
              color: c.blue,
            }}
          >
            →
          </span>
        </div>

        <p
          className={`mt-4 text-[14px] leading-7 ${
            isSite
              ? "text-[#5C574E]"
              : "text-[var(--muted)]"
          }`}
        >
          {project.description}
        </p>

        <div
          className={`mt-7 border-t pt-5 ${
            isSite
              ? "border-[#282A2B]/15"
              : "border-[var(--border)]"
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`text-[9px] font-medium uppercase tracking-[0.18em] ${
                isSite
                  ? "text-[#69645B]"
                  : "text-[var(--muted)]"
              }`}
            >
              Rehan Consultants
            </span>

            <span
              className="text-[9px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: c.blue }}
            >
              Project
            </span>
          </div>
        </div>
      </div>

      {/* hover accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35 }}
        className="h-px origin-left"
        style={{
          backgroundColor: c.blue,
          opacity: 0.45,
        }}
      />
    </motion.article>
  );
}

/* =========================================================
   PROJECTS PAGE
========================================================= */

export default function ProjectsPage() {
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
        {/* subtle grid */}
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

        {/* side markers */}
        <div className="pointer-events-none absolute left-[7%] top-[27%] hidden lg:block">
          <span
            className={`block h-3 w-3 rounded-full border ${
              isSite
                ? "border-[#1557A0]"
                : "border-[#4F8FD2]"
            }`}
          />

          <span
            className={`absolute left-1/2 top-[-18px] h-24 w-px opacity-25 ${
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
            PROJECT 01
          </span>
        </div>

        <div className="pointer-events-none absolute right-[7%] top-[31%] hidden lg:block">
          <span
            className={`block h-3 w-3 rounded-full border ${
              isSite
                ? "border-[#1557A0]"
                : "border-[#4F8FD2]"
            }`}
          />

          <span
            className={`absolute left-1/2 top-[-18px] h-28 w-px opacity-25 ${
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
            BUILT ENVIRONMENT
          </span>
        </div>

        {/* hero content */}
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
            Selected projects
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
            From plans
            <br />

            <span
              className={
                isSite
                  ? "text-[#1557A0]"
                  : "text-[#4F8FD2]"
              }
            >
              to reality.
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
            Different project types demand different responses. Our
            multidisciplinary approach brings engineering, infrastructure,
            architecture and project management together.
          </motion.p>

          {/* small construction scene */}
          <motion.div
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
              delay: 0.32,
            }}
            className="mx-auto mt-12 max-w-4xl"
          >
            <div className="relative h-[145px]">
              {/* ground */}
              <div
                className={`absolute bottom-[8px] left-[7%] right-[7%] h-px ${
                  isSite
                    ? "bg-[#1557A0]/25"
                    : "bg-[#4F8FD2]/20"
                }`}
              />

              {/* building */}
              <motion.div
                initial={{
                  y: 25,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.55,
                }}
                className="absolute bottom-[9px] left-[35%] h-[91px] w-[30%] rounded-[3px] border"
                style={{
                  borderColor: isSite
                    ? "#1557A0"
                    : "#4F8FD2",
                  backgroundColor: isSite
                    ? "#D8C8A7"
                    : "#223448",
                  boxShadow: isSite
                    ? "9px 9px 0 rgba(52,42,28,0.12)"
                    : "9px 9px 0 rgba(0,0,0,0.25)",
                }}
              >
                {/* windows */}
                <div className="absolute inset-[10px] grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <span
                      key={index}
                      className="rounded-[1px]"
                      style={{
                        backgroundColor: isSite
                          ? "#9DB2BE"
                          : "#6F9AB8",
                      }}
                    />
                  ))}
                </div>

                {/* entrance */}
                <div
                  className="absolute bottom-0 left-1/2 h-[28px] w-[20px] -translate-x-1/2"
                  style={{
                    backgroundColor: isSite
                      ? "#0D4179"
                      : "#17283A",
                  }}
                />
              </motion.div>

              {/* crane */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.75,
                }}
                className="absolute bottom-[9px] right-[19%] h-[122px] w-[75px]"
              >
                <div
                  className="absolute bottom-0 right-[23px] h-full w-[3px]"
                  style={{
                    backgroundColor: isSite
                      ? "#1557A0"
                      : "#4F8FD2",
                  }}
                />

                <div
                  className="absolute right-0 top-0 h-[3px] w-[73px]"
                  style={{
                    backgroundColor: isSite
                      ? "#1557A0"
                      : "#4F8FD2",
                  }}
                />

                <motion.div
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2.1,
                    repeat: Infinity,
                  }}
                  className="absolute right-[39px] top-[3px] h-[16px] w-[19px] bg-[#D8A928]"
                />
              </motion.div>

              {/* roller */}
              <motion.div
                animate={{
                  x: ["0%", "420%"],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="absolute bottom-[7px] left-[5%] h-[23px] w-[46px]"
              >
                <div className="absolute bottom-0 left-0 h-[20px] w-[20px] rounded-full border-2 border-[#B88618] bg-[#D8A928]" />

                <div className="absolute right-0 top-[3px] h-[15px] w-[28px] rounded-[3px] bg-[#D8A928]" />

                <div className="absolute right-[4px] top-0 h-[11px] w-[13px] bg-[#B88618]" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.8,
            }}
            className="mt-3 flex items-center justify-center gap-4"
          >
            <span
              className={`text-[9px] uppercase tracking-[0.22em] ${
                isSite
                  ? "text-[#5C574E]"
                  : "text-[#9BA7B4]"
              }`}
            >
              Concept
            </span>

            <span
              className={`h-px w-8 ${
                isSite
                  ? "bg-[#1557A0]/30"
                  : "bg-[#4F8FD2]/25"
              }`}
            />

            <span
              className={`text-[9px] uppercase tracking-[0.22em] ${
                isSite
                  ? "text-[#5C574E]"
                  : "text-[#9BA7B4]"
              }`}
            >
              Construction
            </span>

            <span
              className={`h-px w-8 ${
                isSite
                  ? "bg-[#1557A0]/30"
                  : "bg-[#4F8FD2]/25"
              }`}
            />

            <span
              className={`text-[9px] uppercase tracking-[0.22em] ${
                isSite
                  ? "text-[#5C574E]"
                  : "text-[#9BA7B4]"
              }`}
            >
              Completion
            </span>
          </motion.div>
        </div>
      </section>

      {/* ===================================================
          PROJECT PORTFOLIO
      =================================================== */}

      <section
        className={`px-6 py-28 md:py-36 ${
          isSite
            ? "bg-[#C7B792]"
            : "bg-[var(--paper)]"
        }`}
      >
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
                  isSite
                    ? "text-[#1557A0]"
                    : "text-[var(--blue)]"
                }`}
              >
                Project portfolio
              </p>

              <h2
                className={`mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.045em] md:text-6xl ${
                  isSite
                    ? "text-[#282A2B]"
                    : "text-[var(--ink)]"
                }`}
              >
                Different projects.
                <br />
                Different expertise.
              </h2>
            </div>

            <p
              className={`max-w-xl text-[15px] leading-7 ${
                isSite
                  ? "text-[#5C574E]"
                  : "text-[var(--muted)]"
              }`}
            >
              Each project requires a different combination of engineering,
              design, infrastructure and management expertise.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.number}
                project={project}
                index={index}
                mode={mode}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          APPROACH
      =================================================== */}

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
                Project delivery
              </p>

              <h2
                className={`mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.045em] md:text-6xl ${
                  isSite
                    ? "text-[#282A2B]"
                    : "text-[var(--ink)]"
                }`}
              >
                From requirement
                <br />
                to handover.
              </h2>

              <p
                className={`mt-7 max-w-md text-[15px] leading-7 ${
                  isSite
                    ? "text-[#5C574E]"
                    : "text-[var(--muted)]"
                }`}
              >
                Our multidisciplinary approach keeps design, engineering,
                cost, construction and management connected throughout the
                project lifecycle.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
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
              ].map((stage, index) => (
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
                  className={`group flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ${
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

      {/* ===================================================
          CTA
      =================================================== */}

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
            Start a project
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
            help turn them into a coordinated result.
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

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="border-t border-white/10 bg-[#07111F] px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[10px] uppercase tracking-[0.18em] text-[#9BA7B4] sm:flex-row sm:items-center sm:justify-between">
          <span>
            REHAN CONSULTANTS
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
