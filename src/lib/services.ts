/**
 * Services. The `icon` key maps to a thin-stroke SVG in components/icons.tsx —
 * add a new icon there before adding a service with a new key.
 *
 * Descriptions are deliberately concrete. "Bespoke solutions tailored to your
 * lifestyle" tells a homeowner nothing; "our own carpenters, cut on site"
 * tells them who is doing the work.
 */
export interface Service {
  icon: "plan" | "elevation" | "carpentry" | "glass" | "ceiling" | "furnishing";
  title: string;
  description: string;
  /** Small material note used as the card eyebrow. */
  note: string;
}

export const services: Service[] = [
  {
    icon: "plan",
    title: "Interior Design & Architecture",
    description:
      "Layouts, drawings and 3D views for the whole space, from where a wall moves to which side a door swings.",
    note: "Drawings",
  },
  {
    icon: "elevation",
    title: "Elevation Design",
    description:
      "Front facades for new builds and refits, worked out in light and shadow rather than only in plan.",
    note: "Facade",
  },
  {
    icon: "carpentry",
    title: "Carpentry & Woodwork",
    description:
      "Wardrobes, kitchens, panelling and loose furniture built by our own carpenters to the drawing.",
    note: "Teak · Ply",
  },
  {
    icon: "glass",
    title: "Glass Work & Windows",
    description:
      "Slim-framed glazing, shower enclosures, mirror work and fluted glass shutters, measured and fitted on site.",
    note: "Glazing",
  },
  {
    icon: "ceiling",
    title: "POP Ceiling & Wallpaper",
    description:
      "False ceilings, coves that hide the light source, colour texture and wallpaper across the full range.",
    note: "Surfaces",
  },
  {
    icon: "furnishing",
    title: "Decor & Furnishing",
    description:
      "Cushioning, curtains, upholstery and the decorative pieces that make a finished room look lived in.",
    note: "Soft goods",
  },
];
