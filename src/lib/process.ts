/**
 * The four stages of a Decodreams project.
 *
 * This is the one place on the site where numbering is honest — the stages
 * genuinely happen in order, and a client reading it needs to know what comes
 * when. Numbered markers are used here and nowhere else.
 */
export interface Step {
  index: string;
  title: string;
  duration: string;
  description: string;
  icon: "consult" | "design" | "execute" | "handover";
}

export const processSteps: Step[] = [
  {
    index: "01",
    title: "Consultation",
    duration: "Week 1",
    description:
      "We come to the site, measure it properly, and spend an hour on how you actually use the space — who cooks, who works from home, where everyone ends up in the evening.",
    icon: "consult",
  },
  {
    index: "02",
    title: "Design",
    duration: "Weeks 2 – 4",
    description:
      "Layouts, 3D views and a physical material board. We revise until the drawing matches the picture in your head, and you approve a fixed cost before anything is cut.",
    icon: "design",
  },
  {
    index: "03",
    title: "Execution",
    duration: "Weeks 5 – 14",
    description:
      "Our own carpentry, POP, glass and painting teams work to a dated schedule you can hold us to. One person from the studio stays accountable for the site throughout.",
    icon: "execute",
  },
  {
    index: "04",
    title: "Handover",
    duration: "Final week",
    description:
      "We walk the space with you, write down every snag, and close the list before we ask for the last payment. After that we stay reachable — most of our work comes from people we handed over to.",
    icon: "handover",
  },
];
