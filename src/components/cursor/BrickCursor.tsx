"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function BrickCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 600,
    damping: 35,
    mass: 0.15,
  });

  const y = useSpring(mouseY, {
    stiffness: 600,
    damping: 35,
    mass: 0.15,
  });

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(hover: none)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);

    window.addEventListener("mousemove", handleMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-magnetic]"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [mouseX, mouseY]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[99999]"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: hovering ? 1.18 : 1,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      <div className="relative flex h-8 w-8 items-center justify-center">
        {/* Outer survey ring */}
        <motion.div
          animate={{
            rotate: hovering ? 90 : 0,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="absolute inset-0 rounded-full border border-[#004295]/50"
        />

        {/* Crosshair */}
        <span className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-[#004295]" />
        <span className="absolute bottom-0 left-1/2 h-2 w-px -translate-x-1/2 bg-[#004295]" />
        <span className="absolute left-0 top-1/2 h-px w-2 -translate-y-1/2 bg-[#004295]" />
        <span className="absolute right-0 top-1/2 h-px w-2 -translate-y-1/2 bg-[#004295]" />

        {/* Central survey point */}
        <motion.span
          animate={{
            scale: hovering ? 1.35 : 1,
          }}
          transition={{
            duration: 0.2,
          }}
          className="relative h-2.5 w-2.5 rounded-full bg-[#1557A0] shadow-[0_0_0_2px_#F5F2E9]"
        />

        {/* Small measurement tick */}
        <span className="absolute -right-3 top-1/2 h-px w-2 -translate-y-1/2 bg-[#5D7358]" />

        {/* Tiny coordinate marker */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: hovering ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          className="absolute left-7 top-[-5px] whitespace-nowrap text-[5px] font-medium uppercase tracking-[0.18em] text-[#5D7358]"
        >
          POINT
        </motion.span>
      </div>
    </motion.div>
  );
}