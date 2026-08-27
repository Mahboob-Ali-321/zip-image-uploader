import type { ReactNode } from "react";

/**
 * One icon language for the whole site: 24px grid, 1.25px stroke, no fills
 * except where a glyph needs one. Drawn as thin as a pencil line on a
 * technical drawing so the icons sit quietly beside the type instead of
 * competing with it.
 */
export type IconName =
  | "plan"
  | "elevation"
  | "carpentry"
  | "glass"
  | "ceiling"
  | "furnishing"
  | "consult"
  | "design"
  | "execute"
  | "handover"
  | "phone"
  | "whatsapp"
  | "mail"
  | "pin"
  | "clock"
  | "star"
  | "arrowRight"
  | "arrowUpRight"
  | "close"
  | "chevronLeft"
  | "chevronRight"
  | "menu"
  | "instagram"
  | "pinterest"
  | "facebook";

const glyphs: Record<IconName, ReactNode> = {
  // --- Services -----------------------------------------------------------
  plan: (
    <>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M3 14h7V3M10 14h11M14 21v-7" />
    </>
  ),
  elevation: (
    <>
      <path d="M3 21V9l9-6 9 6v12" />
      <path d="M2 21h20" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  carpentry: (
    <>
      <rect x="3" y="6" width="18" height="12" />
      <path d="M6 9.5c3.5 1.2 8.5 1.2 12 0M6 14.5c3.5-1.2 8.5-1.2 12 0" />
    </>
  ),
  glass: (
    <>
      <rect x="4" y="3" width="16" height="18" />
      <path d="M4 12h16M12 3v18" />
    </>
  ),
  ceiling: (
    <>
      <path d="M2 5h20" />
      <path d="M8 5v2.5M16 5v2.5" />
      <path d="M8 7.5L5 15h14l-3-7.5z" />
      <path d="M4 19h16" />
    </>
  ),
  furnishing: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M4 5c4 3.5 12 3.5 16 0M4 19c4-3.5 12-3.5 16 0" />
    </>
  ),

  // --- Process ------------------------------------------------------------
  consult: (
    <>
      <rect x="2" y="8" width="20" height="8" />
      <path d="M6.5 8v3M10.5 8v4M14.5 8v3M18.5 8v4" />
    </>
  ),
  design: (
    <>
      <path d="M12 3v3.5" />
      <path d="M12 6.5L6.5 20M12 6.5L17.5 20" />
      <path d="M8.6 15h6.8" />
    </>
  ),
  execute: (
    <>
      <path d="M4 20l5.5-5.5" />
      <path d="M9.5 14.5l-2-2 6-8.5 4.5 4.5-8.5 6z" />
    </>
  ),
  handover: (
    <>
      <circle cx="8" cy="16" r="3.5" />
      <path d="M10.5 13.5L20 4" />
      <path d="M16 4h4v4" />
    </>
  ),

  // --- Contact ------------------------------------------------------------
  phone: <path d="M6 3h3.5l1.8 4.5-2.6 1.8a12.5 12.5 0 005.9 5.9l1.8-2.6L21 14.5V18a2.5 2.5 0 01-2.7 2.5A16.8 16.8 0 013.5 5.7A2.5 2.5 0 016 3z" />,
  whatsapp: (
    <>
      <path d="M12 3.2a8.8 8.8 0 00-7.5 13.4L3.2 20.8l4.3-1.3A8.8 8.8 0 1012 3.2z" />
      <path d="M9.3 8.6c.4 1.9 2.2 3.7 4.1 4.1l1-1.2 1.8.8v1.3c0 .6-.5 1-1.1 1a6.8 6.8 0 01-6.8-6.8c0-.6.4-1.1 1-1.1h1.3l.8 1.8-1.1 1z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5S19 15 19 10a7 7 0 10-14 0c0 5 7 11.5 7 11.5z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.8 2.2" />
    </>
  ),
  star: (
    <path
      d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.2 1.2-6.5-4.8-4.6 6.6-.9z"
      fill="currentColor"
      stroke="none"
    />
  ),

  // --- Interface ----------------------------------------------------------
  arrowRight: <path d="M3 12h17M14 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17L17.5 6.5M8.5 6.5h9v9" />,
  close: <path d="M5 5l14 14M19 5L5 19" />,
  chevronLeft: <path d="M15 4.5L7.5 12l7.5 7.5" />,
  chevronRight: <path d="M9 4.5L16.5 12L9 19.5" />,
  menu: <path d="M3 8.5h18M3 15.5h18" />,

  // --- Social -------------------------------------------------------------
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  pinterest: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 17.5V7.5h2.6a2.6 2.6 0 010 5.2H10" />
    </>
  ),
  facebook: (
    <path
      d="M13.6 21v-8.2h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.6V3.3c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.2H7.4v3.2h2.7V21z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {glyphs[name]}
    </svg>
  );
}

/**
 * Row of five stars for the rating displays.
 *
 * `count` is how many read as filled — the rest stay in place at low opacity so
 * a 4-star review is visibly a 4 out of 5 rather than an unexplained short row.
 */
export function Stars({
  className = "h-3.5 w-3.5",
  count = 5,
}: {
  className?: string;
  count?: number;
}) {
  const filled = Math.max(0, Math.min(5, Math.round(count)));

  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon
          key={i}
          name="star"
          className={`${className}${i < filled ? "" : " opacity-25"}`}
        />
      ))}
    </span>
  );
}
