"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { duration, ease, inView } from "@/lib/motion";

/**
 * Scroll-triggered reveal. Wraps a block and lifts it into place once, the first
 * time it enters the viewport.
 *
 * Reduced motion is handled globally by <MotionProvider>, which turns this into
 * a plain fade rather than a fade-and-rise. Do not add a useReducedMotion branch
 * here — see the note in src/lib/motion.ts.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  /** Distance to travel. Set to 0 for a plain fade. */
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: duration.slow, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered group. Children wrapped in <RevealItem> animate in sequence once the
 * group enters view.
 */
export function RevealGroup({
  children,
  className,
  step = 0.09,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: step, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}
