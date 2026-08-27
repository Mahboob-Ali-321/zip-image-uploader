"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

/**
 * THE SIGNATURE ELEMENT.
 *
 * A brass hairline that draws itself around whatever it frames — borrowed from
 * the mounted frame on an architectural drawing, and from the brass reveal
 * Decodreams runs at the skirting of their joinery.
 *
 * It appears exactly twice on the site: once on hero load, drawn clockwise and
 * slowly, and again on every portfolio hover, drawn all at once and quickly.
 * Using one motif in two registers is what makes it read as an identity rather
 * than as an effect.
 *
 * The parent must be positioned (relative/absolute).
 *
 * Under prefers-reduced-motion, <MotionProvider> turns the scale animation into a
 * fade, so the hairline appears rather than draws. No branch needed here.
 */

type Segment = {
  position: string;
  origin: string;
  axis: "x" | "y";
};

/** Clockwise from the top edge: across, down, back, up. */
const segments: Segment[] = [
  { position: "left-0 top-0 h-px w-full", origin: "origin-left", axis: "x" },
  { position: "right-0 top-0 h-full w-px", origin: "origin-top", axis: "y" },
  { position: "bottom-0 left-0 h-px w-full", origin: "origin-right", axis: "x" },
  { position: "left-0 top-0 h-full w-px", origin: "origin-bottom", axis: "y" },
];

export function Frame({
  show = true,
  /** Seconds between each segment. 0 draws all four together. */
  stagger = 0,
  delay = 0,
  seconds = 0.45,
  /** Tailwind background class for the lines. */
  tone = "bg-brass",
  className = "",
}: {
  show?: boolean;
  stagger?: number;
  delay?: number;
  seconds?: number;
  tone?: string;
  className?: string;
}) {
  return (
    <span
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
    >
      {segments.map((segment, i) => {
        const closed = segment.axis === "x" ? { scaleX: 1 } : { scaleY: 1 };
        const open = segment.axis === "x" ? { scaleX: 0 } : { scaleY: 0 };

        return (
          <motion.span
            key={i}
            className={`absolute ${segment.position} ${segment.origin} ${tone}`}
            initial={open}
            animate={show ? closed : open}
            transition={{ duration: seconds, ease, delay: show ? delay + i * stagger : 0 }}
          />
        );
      })}
    </span>
  );
}
