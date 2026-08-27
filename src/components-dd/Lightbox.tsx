"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ease } from "@/lib/motion";
import type { Project } from "@/lib/projects";
import { Frame } from "./Frame";
import { Media } from "./Media";
import { Icon } from "./icons";

/**
 * Project viewer.
 *
 * Arrow keys and the side controls move through the photographs of one project;
 * the footer moves to the next project. Escape closes, focus is trapped inside
 * while open, and focus returns to the thumbnail that opened it.
 *
 * The parent mounts this with key={project.id}, so switching projects remounts
 * the component and the image index resets to the first photograph on its own.
 */
export function Lightbox({
  project,
  onClose,
  onPrevProject,
  onNextProject,
}: {
  project: Project;
  onClose: () => void;
  onPrevProject: () => void;
  onNextProject: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const dialogRef = useRef<HTMLDivElement>(null);
  const total = project.images.length;

  // Keep the latest callbacks reachable from a listener that is bound once.
  const latest = useRef({ onClose, total });
  useEffect(() => {
    latest.current = { onClose, total };
  });

  const step = (delta: number) => {
    setDirection(delta);
    setIndex((current) => (current + delta + total) % total);
  };

  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusable = () =>
      Array.from(
        node.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      );

    focusable()[0]?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        latest.current.onClose();
        return;
      }

      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const delta = event.key === "ArrowRight" ? 1 : -1;
        setDirection(delta);
        setIndex((current) => (current + delta + latest.current.total) % latest.current.total);
        return;
      }

      if (event.key === "Tab") {
        const items = focusable();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title}, ${project.locality}`}
      className="fixed inset-0 z-50 flex flex-col bg-ink/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease }}
    >
      {/* Header */}
      <div className="shell flex shrink-0 items-center justify-between gap-6 border-b border-limewash/12 py-4">
        <div className="min-w-0">
          <h2 className="display-sm truncate text-limewash">{project.title}</h2>
          <p className="mt-1 text-eyebrow font-medium uppercase text-brass">
            {project.category}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-6">
          <span className="tnum hidden text-micro uppercase text-limewash/50 sm:block">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project viewer"
            className="p-2 text-limewash transition-colors duration-350 ease-soft hover:text-brass-lit"
          >
            <Icon name="close" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Image stage */}
      <div className="relative flex min-h-0 flex-1 items-center">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0 m-4 sm:m-8 lg:m-10"
            initial={{ opacity: 0, x: direction * 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -28 }}
            transition={{ duration: 0.45, ease }}
          >
            <Media
              src={project.images[index]}
              alt={`${project.title}, ${project.locality} — photograph ${index + 1} of ${total}`}
              label={project.title}
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photograph"
              className="absolute left-1 z-10 p-3 text-limewash/70 transition-colors duration-350 ease-soft hover:text-brass-lit sm:left-3"
            >
              <Icon name="chevronLeft" className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photograph"
              className="absolute right-1 z-10 p-3 text-limewash/70 transition-colors duration-350 ease-soft hover:text-brass-lit sm:right-3"
            >
              <Icon name="chevronRight" className="h-7 w-7" />
            </button>
          </>
        )}
      </div>

      {/* Footer: what this room is, and the way onward */}
      <div className="shell shrink-0 border-t border-limewash/12 py-5">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-micro uppercase text-limewash/50">
              {project.scope} · {project.locality} · {project.year}
            </p>
            <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-limewash/75">
              {project.blurb}
            </p>
          </div>

          <div className="lg:col-span-5">
            {total > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar lg:justify-end">
                {project.images.map((image, i) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-label={`Show photograph ${i + 1}`}
                    aria-current={i === index}
                    className="relative h-14 w-16 shrink-0 overflow-hidden bg-espresso"
                  >
                    <Media
                      src={image}
                      alt=""
                      label=" "
                      sizes="64px"
                      className={`object-cover transition-opacity duration-350 ease-soft ${
                        i === index ? "opacity-100" : "opacity-45 hover:opacity-80"
                      }`}
                    />
                    <Frame show={i === index} className="inset-0" tone="bg-brass-lit" seconds={0.35} />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-4 flex items-center gap-6 lg:justify-end">
              <button
                type="button"
                onClick={onPrevProject}
                className="text-eyebrow font-medium uppercase text-limewash/60 transition-colors duration-350 ease-soft hover:text-brass-lit"
              >
                Previous project
              </button>
              <button
                type="button"
                onClick={onNextProject}
                className="flex items-center gap-2 text-eyebrow font-medium uppercase text-limewash transition-colors duration-350 ease-soft hover:text-brass-lit"
              >
                Next project
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
