"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { heroImage } from "@/lib/images";
import { ease } from "@/lib/motion";
import { site } from "@/lib/site";
import { Frame } from "./Frame";
import { Media } from "./Media";
import { Icon, Stars } from "./icons";

/** A line of the headline rising through a mask. */
function Line({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * The hero opens with the most characteristic thing in this studio's world: a
 * finished room in evening light. Type sits low and left, the way a caption
 * sits under a plate in an interiors magazine, and the brass frame draws itself
 * clockwise around the whole image as the page settles.
 *
 * Under prefers-reduced-motion, <MotionProvider> drops the transforms and the
 * whole opening becomes a set of quiet fades.
 */
export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      {/* Slow settle on the photograph. Barely perceptible, and that is the point. */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.07 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
      >
        <Media
          src={heroImage}
          alt="A warm, softly lit living room with low seating and a single floor lamp, designed by Decodreams"
          label="Decodreams · Interiors"
          sizes="100vw"
          priority
          quality={85}
          className="object-cover"
        />
      </motion.div>

      {/* Two scrims: one to seat the type, one to keep the top edge legible. */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />

      {/* Signature: the brass hairline draws clockwise, slowly, once. */}
      <Frame
        className="inset-4 sm:inset-6 lg:inset-8"
        tone="bg-brass-lit/60"
        stagger={0.13}
        delay={0.5}
        seconds={0.85}
      />

      <div className="shell relative z-10 pb-40 pt-32 lg:pb-48">
        <motion.p
          className="eyebrow text-brass-lit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
        >
          Interior design &amp; architecture · Indore
        </motion.p>

        <h1 className="display-xl mt-7 max-w-4xl text-limewash">
          <Line delay={0.3}>We Decor</Line>
          <Line delay={0.42}>
            <span className="text-brass-lit">Your Dreams</span>
          </Line>
        </h1>

        <motion.p
          className="lede mt-8 max-w-prose text-limewash/75"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.85 }}
        >
          Turnkey interiors, elevation design and joinery for homes and workspaces
          across Indore. Designed around how you actually live, and built by our
          own teams — so the room you approve is the room you get.
        </motion.p>

        <motion.div
          className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 1 }}
        >
          <a href="#work" className="btn bg-limewash text-ink hover:bg-brass-lit">
            View our work
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn btn-outline-light">
            Get a free consultation
          </a>
        </motion.div>
      </div>

      {/* Bottom strip: proof on the left, the way down on the right. */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-10 pb-9 lg:pb-11"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 1.25 }}
      >
        <div className="shell flex items-end justify-between gap-6">
          <div className="flex flex-col gap-2.5">
            <span className="text-brass-lit">
              <Stars className="h-3 w-3" />
            </span>
            <span className="text-micro uppercase text-limewash/70">
              {site.rating.value} / 5 · {site.rating.count} {site.rating.source}
            </span>
          </div>

          <a
            href="#studio"
            aria-label="Scroll to the studio section"
            className="hidden items-center gap-3 text-limewash/60 transition-colors duration-350 ease-soft hover:text-brass-lit sm:flex"
          >
            <span className="vertical-rl text-eyebrow font-medium uppercase">
              Scroll
            </span>
            <span className="relative block h-14 w-px overflow-hidden bg-limewash/20">
              <span className="absolute inset-0 block animate-scroll-hint bg-brass-lit" />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
