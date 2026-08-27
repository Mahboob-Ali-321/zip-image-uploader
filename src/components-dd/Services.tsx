import { services } from "@/lib/services";
import { Icon } from "./icons";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

/**
 * Services as a schedule of work rather than a set of marketing cards: hairline
 * cells, a material note as the eyebrow, and a brass rule that runs across the
 * top of a cell on hover. No boxes, no shadows.
 */

/**
 * Horizontal padding per cell, so text in the outer columns stays flush with the
 * shell while inner columns are inset. Driven by the map index rather than by
 * nth-child: each card is wrapped in a <RevealItem>, so it is always the only
 * child of its wrapper and every nth-child selector would match every card.
 */
function cellPadding(i: number) {
  const twoUp = i % 2 === 0 ? "sm:pl-0 sm:pr-8" : "sm:pl-8 sm:pr-0";
  const threeUp =
    i % 3 === 0 ? "lg:pl-0 lg:pr-8" : i % 3 === 2 ? "lg:pl-8 lg:pr-0" : "lg:px-8";
  return `px-0 ${twoUp} ${threeUp}`;
}

export function Services() {
  return (
    <section id="services" className="bg-plaster py-24 lg:py-section">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="display-lg mt-7 max-w-lg text-espresso">
                Everything a finished room needs, under one roof.
              </h2>
            </div>
            <p className="max-w-sm text-espresso/70 lg:pb-2">
              Take the whole project or a single room. Either way you deal with
              one studio and one schedule, not six contractors.
            </p>
          </div>
        </Reveal>

        <RevealGroup
          className="mt-16 grid border-t border-espresso/12 sm:grid-cols-2 lg:grid-cols-3"
          step={0.07}
        >
          {services.map((service, i) => (
            <RevealItem key={service.title}>
              <article
                className={`group relative h-full border-b border-espresso/12 py-9 ${cellPadding(i)}`}
              >
                {/* Brass rule grows across the top edge on hover. */}
                <span className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-brass transition-transform duration-600 ease-soft group-hover:scale-x-100" />

                <div className="flex items-start justify-between gap-4">
                  <Icon name={service.icon} className="h-8 w-8 text-brass" />
                  <span className="text-eyebrow font-medium uppercase text-stone">
                    {service.note}
                  </span>
                </div>

                <h3 className="display-sm mt-10 text-espresso">{service.title}</h3>
                <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-espresso/70">
                  {service.description}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
