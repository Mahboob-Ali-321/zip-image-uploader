/**
 * Shared motion language.
 *
 * One easing curve and four durations for the entire site. Interior work is slow
 * and considered, so the motion is too — nothing snaps, nothing bounces. Every
 * component imports from here rather than inventing its own timing, which is why
 * changing `ease` or `duration` re-tunes the whole site at once.
 *
 * Reduced motion is NOT handled by branching in components — that would produce
 * a different tree on the server than on the client and leave content stuck at
 * opacity 0 for exactly the people we were trying to help. It is handled once,
 * globally, by <MotionProvider> (see src/components/MotionProvider.tsx).
 */

/**
 * The single easing curve. Slow out, slow in.
 *
 * Annotated as a mutable tuple on purpose: Framer Motion's BezierDefinition is
 * `[number, number, number, number]`, and a readonly tuple (what `as const`
 * would give) is not assignable to it.
 */
export const ease: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

export const duration = {
  quick: 0.35,
  base: 0.5,
  slow: 0.6,
  reveal: 0.9,
} as const;

/** Viewport settings so sections reveal a little before they are fully in view. */
export const inView = { once: true, margin: "-12% 0px -12% 0px" } as const;
