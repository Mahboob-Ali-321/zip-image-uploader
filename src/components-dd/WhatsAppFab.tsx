"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { duration, ease } from "@/lib/motion";
import { whatsappHref } from "@/lib/site";
import { Icon } from "./icons";

/**
 * Mobile WhatsApp shortcut.
 *
 * Phone only, and only after the hero has scrolled away — otherwise it would
 * sit on top of the hero's scroll cue and the rating line. Square rather than a
 * circle, so it belongs to the same sharp-cornered language as everything else.
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send an enquiry on WhatsApp"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: duration.quick, ease }}
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center border border-brass/50 bg-espresso text-limewash shadow-[0_12px_32px_rgba(30,25,23,0.32)] lg:hidden"
        >
          <Icon name="whatsapp" className="h-6 w-6" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
