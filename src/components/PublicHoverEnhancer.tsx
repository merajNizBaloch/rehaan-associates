"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const supportedPaths = new Set(["/", "/capabilities"]);

function isCandidate(element: HTMLElement) {
  if (element.closest("footer, header, nav")) return false;

  const className = typeof element.className === "string" ? element.className : "";

  if (element.tagName === "ARTICLE") return true;

  const roundedSurface =
    className.includes("rounded") &&
    className.includes("border") &&
    className.includes("bg-") &&
    (className.includes("p-4") ||
      className.includes("p-6") ||
      className.includes("p-7") ||
      className.includes("p-8") ||
      className.includes("px-4"));

  const darkReasonCard =
    className.includes("bg-[#0D1927]") &&
    (className.includes("p-7") || className.includes("p-8"));

  return roundedSurface || darkReasonCard;
}

export default function PublicHoverEnhancer() {
  const pathname = usePathname();
  const enabled = supportedPaths.has(pathname);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("rehan-new-page-hover");

    const enhance = () => {
      const main = document.querySelector("main");
      if (!main) return;

      const nodes = Array.from(main.querySelectorAll<HTMLElement>("article, section div"));

      nodes.forEach((element) => {
        if (!isCandidate(element)) return;

        const nestedCandidate = Array.from(
          element.querySelectorAll<HTMLElement>("article, div")
        ).some((child) => child !== element && isCandidate(child));

        if (element.tagName !== "ARTICLE" && nestedCandidate) return;

        element.classList.add("rehan-hover-surface");
      });
    };

    const frame = window.requestAnimationFrame(enhance);
    const observer = new MutationObserver(enhance);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      document.body.classList.remove("rehan-new-page-hover");
      document
        .querySelectorAll<HTMLElement>(".rehan-hover-surface")
        .forEach((element) => element.classList.remove("rehan-hover-surface"));
    };
  }, [enabled, pathname]);

  if (!enabled) return null;

  return (
    <style>{`
      @media (hover: hover) and (pointer: fine) {
        body.rehan-new-page-hover .rehan-hover-surface {
          position: relative;
          isolation: isolate;
          transition:
            translate 320ms cubic-bezier(.22,1,.36,1),
            border-color 280ms ease,
            box-shadow 320ms ease,
            background-color 280ms ease;
        }

        body.rehan-new-page-hover .rehan-hover-surface::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--blue);
          opacity: .48;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 360ms cubic-bezier(.22,1,.36,1);
          pointer-events: none;
          z-index: 3;
        }

        body.rehan-new-page-hover .rehan-hover-surface:hover {
          translate: 0 -4px;
          border-color: var(--blue);
          box-shadow: 0 18px 46px rgba(7, 17, 31, .12);
        }

        body.rehan-new-page-hover .rehan-hover-surface:hover::after {
          transform: scaleX(1);
        }

        body.rehan-new-page-hover .rehan-hover-surface > svg,
        body.rehan-new-page-hover .rehan-hover-surface > div > svg {
          transition: transform 300ms cubic-bezier(.22,1,.36,1), opacity 300ms ease;
          transform-origin: center;
        }

        body.rehan-new-page-hover .rehan-hover-surface:hover > svg,
        body.rehan-new-page-hover .rehan-hover-surface:hover > div > svg {
          transform: translate3d(3px, -3px, 0) rotate(-4deg) scale(1.07);
        }

        body.rehan-new-page-hover .rehan-hover-surface h2,
        body.rehan-new-page-hover .rehan-hover-surface h3,
        body.rehan-new-page-hover .rehan-hover-surface p,
        body.rehan-new-page-hover .rehan-hover-surface span {
          transition: transform 300ms cubic-bezier(.22,1,.36,1), color 260ms ease;
        }

        body.rehan-new-page-hover .rehan-hover-surface:hover h3 {
          transform: translateX(4px);
        }
      }
    `}</style>
  );
}
