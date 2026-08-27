"use client";

import { motion } from "framer-motion";
import { ease, inView } from "@/lib/motion";
import { processSteps } from "@/lib/process";
import { Icon } from "./icons";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

/**
 * How a project runs.
 *
 * This is the one place on the site that uses numbered markers, because this is
 * the one place where the content is genuinely a sequence and the order carries
 * information a client needs. A single brass hairline draws left to right across
 * all four stages as the section comes into view — the sequence, made literal.
 */
export function Process() {
  return (
    <section id="process" className="grain bg-limewash py-24 lg:py-section">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">How we work</p>
              <h2 className="display-lg mt-7 max-w-lg text-espresso">
                Four stages, and you always know which one you are in.
              </h2>
            </div>
            <p className="max-w-sm text-espresso/70 lg:pb-2">
              Most people have heard a renovation story that ended badly. This is
              the sequence we follow to make sure yours is not one of them.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          {/* The sequence line. Draws across all four stages, once. */}
          <motion.span
            aria-hidden="true"
            className="absolute left-0 top-0 hidden h-px w-full origin-left bg-brass lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={inView}
            transition={{ duration: 1.4, ease }}
          />

          <RevealGroup
            className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4"
            step={0.14}
          >
            {processSteps.map((step) => (
              <RevealItem key={step.index}>
                <article className="h-full border-t border-espresso/15 pt-8 lg:pr-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="tnum font-display text-[2.5rem] leading-none text-brass">
                      {step.index}
                    </span>
                    <Icon name={step.icon} className="h-7 w-7 text-espresso/45" />
                  </div>

                  <h3 className="display-sm mt-8 text-espresso">{step.title}</h3>
                  <p className="mt-2 text-eyebrow font-medium uppercase text-stone">
                    {step.duration}
                  </p>
                  <p className="mt-5 text-[0.9375rem] leading-relaxed text-espresso/70">
                    {step.description}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
