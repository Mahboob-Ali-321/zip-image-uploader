"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ease } from "@/lib/motion";
import { categories, projects, type Category } from "@/lib/projects";
import { Frame } from "./Frame";
import { Lightbox } from "./Lightbox";
import { Media } from "./Media";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";

/**
 * The centerpiece.
 *
 * Dark ground so the photography carries the section, uniform 4:5 plates with
 * an occasional 8:5 wide cell — the two ratios tile to the same row height, so
 * the grid stays flush at every breakpoint no matter which filter is active.
 *
 * On hover the brass frame from the hero draws itself inside the plate. Same
 * motif, faster register: that repetition is what makes it an identity.
 */
export function Portfolio() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [hovered, setHovered] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  const openProject = openIndex === null ? null : filtered[openIndex] ?? null;

  const stepProject = (delta: number) =>
    setOpenIndex((current) => {
      if (current === null || filtered.length === 0) return null;
      return (current + delta + filtered.length) % filtered.length;
    });

  return (
    <section id="work" className="bg-ink py-24 lg:py-section">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="display-lg mt-7 max-w-xl text-limewash">
                Rooms we have finished in and around Indore.
              </h2>
            </div>
            <p className="max-w-sm text-limewash/60 lg:pb-2">
              A dozen recent projects, from a single living room to a five-bedroom
              villa taken from elevation drawing to handover.
            </p>
          </div>
        </Reveal>

        {/* Filters. Scrollable on small screens rather than wrapped, so the row
            keeps its shape. */}
        <Reveal delay={0.08}>
          <div className="mt-14 flex gap-7 overflow-x-auto border-b border-limewash/12 pb-4 no-scrollbar">
            {categories.map((category) => {
              const isActive = category === active;
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActive(category);
                    setOpenIndex(null);
                  }}
                  aria-pressed={isActive}
                  className={`group relative shrink-0 pb-1 text-eyebrow font-medium uppercase transition-colors duration-350 ease-soft ${
                    isActive ? "text-brass" : "text-limewash/55 hover:text-limewash"
                  }`}
                >
                  {category}
                  <span className="tnum ml-1.5 align-super text-[0.5625rem] opacity-60">
                    {count}
                  </span>
                  <span
                    className={`absolute -bottom-4 left-0 h-px w-full origin-left bg-brass transition-transform duration-450 ease-soft ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid. Keyed on the filter so a category change is one clean
            crossfade instead of a dozen competing layout animations. */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="mt-10 grid grid-flow-row-dense grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease }}
          >
            {filtered.map((project, i) => {
              const wide = project.size === "wide";
              return (
                /* The card is an <article>, not a <button>: a heading and a
                   paragraph are not allowed inside a button, and screen readers
                   flatten anything that is. The button is an invisible overlay on
                   the photograph instead, which keeps the whole plate clickable
                   while leaving the caption as real, readable text. */
                <article
                  key={project.id}
                  className={`group ${wide ? "sm:col-span-2" : ""}`}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className={`relative w-full overflow-hidden bg-espresso ${
                      wide ? "aspect-[8/5]" : "aspect-plate"
                    }`}
                  >
                    <Media
                      src={project.images[0]}
                      alt={`${project.title} — ${project.scope} in ${project.locality}`}
                      label={project.title}
                      sizes={
                        wide
                          ? "(min-width: 1024px) 66vw, 100vw"
                          : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      }
                      className="object-cover transition-transform duration-[900ms] ease-soft group-hover:scale-[1.045]"
                    />

                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-600 ease-soft group-hover:opacity-100" />

                    {/* The signature, in its quick register. */}
                    <Frame
                      show={hovered === project.id}
                      className="inset-4"
                      tone="bg-brass-lit/75"
                      seconds={0.5}
                    />

                    <span className="pointer-events-none absolute bottom-6 left-6 flex items-center gap-2 text-eyebrow font-medium uppercase text-limewash opacity-0 transition-opacity duration-600 ease-soft group-hover:opacity-100">
                      <Icon name="arrowUpRight" className="h-4 w-4 text-brass-lit" />
                      {project.images.length} photographs
                    </span>

                    <button
                      type="button"
                      onClick={() => setOpenIndex(i)}
                      onFocus={() => setHovered(project.id)}
                      onBlur={() => setHovered(null)}
                      aria-label={`Open ${project.title}, ${project.locality} — ${project.images.length} photographs`}
                      className="absolute inset-0 z-10 h-full w-full"
                    />
                  </div>

                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="display-sm text-limewash">{project.title}</h3>
                    <span className="shrink-0 text-eyebrow font-medium uppercase text-brass">
                      {project.category}
                    </span>
                  </div>
                  <p className="mt-1.5 text-micro uppercase text-limewash/45">
                    {project.locality} · {project.year}
                  </p>
                </article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <Reveal>
          <div className="mt-16 flex flex-col items-start gap-5 border-t border-limewash/12 pt-9 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-limewash/60">
              Looking for something closer to your own plan? We can walk you
              through comparable projects at the studio.
            </p>
            <a href="#contact" className="btn btn-outline-light shrink-0">
              Book a studio visit
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* mode="wait" matters here: the lightbox locks background scroll and traps
          focus on mount, so two instances must never overlap while one exits. */}
      <AnimatePresence mode="wait">
        {openProject && (
          <Lightbox
            key={openProject.id}
            project={openProject}
            onClose={() => setOpenIndex(null)}
            onPrevProject={() => stepProject(-1)}
            onNextProject={() => stepProject(1)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
