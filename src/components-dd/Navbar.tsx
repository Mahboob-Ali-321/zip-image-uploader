"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ease } from "@/lib/motion";
import { navLinks, site, telHref, whatsappHref } from "@/lib/site";
import { Icon } from "./icons";

/**
 * Sticky masthead. Transparent over the hero image, then settles onto blurred
 * limewash once the page moves. The switch is the only thing that changes —
 * position, type size and spacing stay put so nothing jumps.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * Everything the mobile menu needs while it is open: the page held still
   * behind it, Escape to close, Tab kept inside it, focus moved into it on open
   * and handed back to the trigger on close, and an automatic close if the
   * viewport grows past the breakpoint where the menu no longer exists.
   */
  useEffect(() => {
    if (!open) return;

    const trigger = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ) ?? [],
      );

    focusables()[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const items = focusables();
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
    };

    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
      trigger?.focus();
    };
  }, [open]);

  const onLight = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-450 ease-soft ${
          scrolled
            ? "bg-limewash/85 py-3 backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="shell flex items-center justify-between gap-6">
          {/* Wordmark, set as a small masthead. */}
          <a
            href="#top"
            className={`flex items-baseline gap-3 transition-colors duration-450 ease-soft ${
              onLight ? "text-espresso" : "text-limewash"
            }`}
          >
            <span className="font-display text-xl tracking-display sm:text-[1.35rem]">
              Decodreams
            </span>
            <span className="hidden h-px w-6 shrink-0 self-center bg-brass sm:block" />
            <span className="hidden text-eyebrow font-medium uppercase text-brass sm:block">
              Indore
            </span>
          </a>

          <nav
            aria-label="Sections"
            className={`hidden items-center gap-8 lg:flex ${
              onLight ? "text-espresso" : "text-limewash"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-1 text-eyebrow font-medium uppercase transition-colors duration-350 ease-soft hover:text-brass"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brass transition-transform duration-450 ease-soft group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={telHref}
              className={`hidden items-center gap-2.5 text-eyebrow font-medium uppercase transition-colors duration-350 ease-soft hover:text-brass lg:flex ${
                onLight ? "text-espresso" : "text-limewash"
              }`}
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phoneDisplay}
            </a>

            {/* The CTA has to flip too: espresso-on-near-black would disappear
                against the hero photograph, so it runs light until the masthead
                lands on limewash. */}
            <a
              href="#contact"
              className={`btn hidden !px-6 !py-3.5 lg:inline-flex ${
                onLight ? "btn-solid" : "bg-limewash text-ink hover:bg-brass-lit"
              }`}
            >
              Book a consultation
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={`-mr-2 p-2 transition-colors duration-350 ease-soft lg:hidden ${
                onLight ? "text-espresso" : "text-limewash"
              }`}
            >
              <Icon name="menu" className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Hairline that appears with the background, not before it. */}
        <span
          className={`absolute inset-x-0 bottom-0 h-px bg-espresso/12 transition-opacity duration-450 ease-soft ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </header>

      {/* --- Mobile menu ---------------------------------------------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="grain fixed inset-0 z-50 flex flex-col overflow-y-auto bg-espresso lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            <div className="shell flex items-center justify-between py-5">
              <span className="font-display text-xl tracking-display text-limewash">
                Decodreams
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="-mr-2 p-2 text-limewash"
              >
                <Icon name="close" className="h-6 w-6" />
              </button>
            </div>

            <motion.nav
              aria-label="Sections"
              className="shell flex flex-1 flex-col justify-center gap-1 py-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display-md flex items-center justify-between border-b border-limewash/10 py-4 text-limewash"
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                  }}
                >
                  {link.label}
                  <Icon name="arrowUpRight" className="h-5 w-5 text-brass" />
                </motion.a>
              ))}
            </motion.nav>

            <div className="shell flex flex-col gap-3 pb-10">
              <a href={telHref} className="btn bg-limewash text-ink">
                <Icon name="phone" className="h-4 w-4" />
                Call {site.phoneDisplay}
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Message on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
