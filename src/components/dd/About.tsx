import { studioImage } from "@/lib/images";
import { site, stats } from "@/lib/site";
import { Media } from "./Media";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

/**
 * The studio story. Deliberately short — a homeowner deciding who to call
 * wants to know who these people are and how they work, then wants to see
 * rooms. Everything else is in the portfolio.
 */
export function About() {
  return (
    <section id="studio" className="grain bg-limewash py-24 lg:py-section">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure>
              <div className="relative aspect-portrait w-full overflow-hidden bg-espresso">
                <Media
                  src={studioImage}
                  alt="A close view of an armchair, side table and textured wall in a Decodreams interior"
                  label="Studio detail"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 text-micro uppercase text-stone">
                Material detail · Scheme 54, Indore
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow">The studio</p>
              <h2 className="display-lg mt-7 max-w-xl text-espresso">
                We design for the way you already live, not the way a catalogue
                says you should.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9 max-w-prose space-y-6 text-espresso/80">
                <p className="lede">
                  Decodreams was started in Indore by {site.founders} on a simple
                  idea: a home should look like the people in it. So the first
                  meeting is mostly listening — who cooks, who works late, which
                  room everyone actually ends up in, and what you already own and
                  want to keep.
                </p>
                <p className="lede">
                  From there we take on the whole thing, from the elevation
                  drawing to the last cushion. Design, carpentry, POP, glass and
                  furnishing are handled by teams we work with every week, which
                  is why our sites finish close to the date we gave you and close
                  to the number we quoted.
                </p>
                <p className="lede">
                  We stay away from whatever is trending this year. The materials
                  we choose are the ones that will still look considered in ten.
                </p>
              </div>

              <p className="mt-10 flex items-center gap-4 text-micro uppercase text-espresso">
                <span className="block h-px w-10 bg-brass" />
                {site.founders} · Founders
              </p>
            </Reveal>
          </div>
        </div>

        {/* Stats ledger. Hairline-divided cells, tabular figures — read as a
            specification, not as marketing badges. */}
        <RevealGroup
          className="mt-20 grid border-t border-espresso/15 sm:mt-24 sm:grid-cols-3"
          step={0.12}
        >
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="border-b border-espresso/15 py-8 sm:border-b-0 sm:border-r sm:px-8 sm:last:border-r-0 sm:first:pl-0"
            >
              <p className="tnum font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-espresso">
                {stat.figure}
                <span className="text-brass">{stat.suffix}</span>
              </p>
              <p className="mt-3 text-micro uppercase text-stone">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
