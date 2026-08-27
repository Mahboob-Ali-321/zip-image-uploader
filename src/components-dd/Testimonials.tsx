"use client";

import { useRef } from "react";
import { site } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";
import { Icon, Stars } from "./icons";
import { Reveal } from "./Reveal";

/**
 * Client reviews.
 *
 * The track is a native scroll-snap row rather than a JavaScript carousel: it
 * swipes properly on a phone, keeps keyboard and scrollbar behaviour intact,
 * and cannot get out of sync with the layout. The arrows scroll it by one card.
 */
export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const nudge = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.75, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="grain bg-espresso py-24 lg:py-section">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Rating summary */}
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Client reviews</p>
            <h2 className="display-lg mt-7 text-limewash">
              What people say afterwards.
            </h2>

            <div className="mt-10 border-t border-limewash/15 pt-8">
              <p className="tnum font-display text-[clamp(3.5rem,7vw,5rem)] leading-none text-limewash">
                {site.rating.value}
                <span className="text-[0.35em] align-top text-brass"> / 5</span>
              </p>
              <span className="mt-4 block text-brass">
                <Stars className="h-4 w-4" />
              </span>
              <p className="mt-4 text-micro uppercase text-limewash/55">
                {site.rating.count} reviews on Google
              </p>
            </div>

            <div className="mt-8 hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={() => nudge(-1)}
                aria-label="Previous reviews"
                className="flex h-11 w-11 items-center justify-center border border-limewash/25 text-limewash transition-colors duration-350 ease-soft hover:border-brass hover:text-brass"
              >
                <Icon name="chevronLeft" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => nudge(1)}
                aria-label="Next reviews"
                className="flex h-11 w-11 items-center justify-center border border-limewash/25 text-limewash transition-colors duration-350 ease-soft hover:border-brass hover:text-brass"
              >
                <Icon name="chevronRight" className="h-5 w-5" />
              </button>
            </div>
          </Reveal>

          {/* Track */}
          <div className="lg:col-span-8">
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 no-scrollbar"
              tabIndex={0}
              role="group"
              aria-label="Client reviews, scrollable"
            >
              {testimonials.map((testimonial, i) => (
                <figure
                  key={i}
                  className="flex min-w-[86%] snap-start flex-col justify-between border border-limewash/15 p-7 sm:min-w-[62%] lg:min-w-[calc(50%-0.625rem)] lg:p-8"
                >
                  <div>
                    <span className="text-brass">
                      <Stars className="h-3.5 w-3.5" count={testimonial.rating} />
                    </span>
                    <blockquote className="mt-6 font-display text-[1.0625rem] leading-relaxed text-limewash/90 lg:text-lg">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-8 border-t border-limewash/15 pt-5">
                    <p className="text-micro uppercase text-limewash">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-micro uppercase text-limewash/45">
                      {testimonial.detail}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={() => nudge(-1)}
                aria-label="Previous reviews"
                className="flex h-11 w-11 items-center justify-center border border-limewash/25 text-limewash transition-colors duration-350 ease-soft hover:border-brass hover:text-brass"
              >
                <Icon name="chevronLeft" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => nudge(1)}
                aria-label="Next reviews"
                className="flex h-11 w-11 items-center justify-center border border-limewash/25 text-limewash transition-colors duration-350 ease-soft hover:border-brass hover:text-brass"
              >
                <Icon name="chevronRight" className="h-5 w-5" />
              </button>
              <span className="ml-auto text-micro uppercase text-limewash/40">
                Swipe
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
