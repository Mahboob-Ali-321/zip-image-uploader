"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Global motion settings.
 *
 * `reducedMotion="user"` is the reason no component in this project branches on
 * useReducedMotion(). Branching would render one tree on the server and a
 * different one on a client that prefers reduced motion; React does not patch
 * mismatched attributes during hydration, so the server's `opacity: 0` would
 * stick and the page would come up blank for those visitors.
 *
 * With this set, Framer Motion skips transform and layout animation but still
 * animates opacity, so a fade-up becomes a plain fade. Same tree everywhere, and
 * the preference is honoured. The CSS backstop in globals.css covers the handful
 * of animations written in CSS rather than in JS.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
