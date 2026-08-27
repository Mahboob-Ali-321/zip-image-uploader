import { navLinks, site, telHref } from "@/lib/site";
import { Icon, Stars, type IconName } from "./icons";
import { Reveal } from "./Reveal";

const socialIcons: Record<string, IconName> = {
  Instagram: "instagram",
  Pinterest: "pinterest",
  Facebook: "facebook",
};

/** Column headings are utility type, not display type — hence the font-sans
 *  override, since globals.css sets every heading in the display face. */
function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-sans text-eyebrow font-medium uppercase tracking-[0.2em] text-brass">
      {children}
    </h3>
  );
}

/**
 * Footer. Closes on the tagline at display size — the last thing a visitor
 * reads is the promise the studio makes.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain bg-ink text-limewash">
      <div className="shell py-20 lg:py-24">
        {/* Closing line */}
        <Reveal>
          <span className="block h-px w-full bg-brass/40" />
          <p className="display-lg mt-10 max-w-3xl text-limewash">
            We Decor{" "}
            <span className="text-brass-lit">Your Dreams</span>
          </p>
        </Reveal>

        <div className="mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Identity */}
          <div className="lg:col-span-4">
            <p className="font-display text-2xl tracking-tight text-limewash">
              {site.name}
            </p>
            <p className="mt-1 text-micro uppercase text-limewash/40">
              {site.nameHindi} · Interior design &amp; architecture
            </p>
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-limewash/60">
              A design and build studio in Vijay Nagar, Indore, drawing and
              delivering interiors, elevations and joinery under one roof.
            </p>
            <p className="mt-6 text-micro uppercase text-limewash/40">
              Founded by {site.founders}
            </p>
          </div>

          {/* Quick links */}
          <nav className="lg:col-span-2" aria-label="Footer">
            <ColumnHeading>Explore</ColumnHeading>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.9375rem] text-limewash/70 transition-colors duration-350 ease-soft hover:text-brass-lit"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Studio */}
          <div className="lg:col-span-3">
            <ColumnHeading>Studio</ColumnHeading>
            <address className="mt-6 not-italic text-[0.9375rem] leading-relaxed text-limewash/60">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.locality}
              <br />
              {site.address.region} {site.address.postalCode}
            </address>
            <div className="mt-6 space-y-2">
              <a
                href={telHref}
                className="block text-[0.9375rem] text-limewash/80 transition-colors duration-350 ease-soft hover:text-brass-lit"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block text-[0.9375rem] text-limewash/80 transition-colors duration-350 ease-soft hover:text-brass-lit"
              >
                {site.email}
              </a>
            </div>
          </div>

          {/* Follow + rating */}
          <div className="lg:col-span-3">
            <ColumnHeading>Follow</ColumnHeading>
            <ul className="mt-6 flex items-center gap-3">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center border border-limewash/20 text-limewash/80 transition-colors duration-350 ease-soft hover:border-brass hover:text-brass-lit"
                  >
                    <Icon
                      name={socialIcons[social.label] ?? "arrowUpRight"}
                      className="h-4 w-4"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-limewash/12 pt-6">
              <span className="text-brass">
                <Stars className="h-3.5 w-3.5" />
              </span>
              <p className="mt-3 text-micro uppercase text-limewash/45">
                <span className="tnum text-limewash/80">{site.rating.value}</span>{" "}
                from {site.rating.count} {site.rating.source}
              </p>
            </div>
          </div>
        </div>

        {/* Baseline */}
        <div className="mt-20 flex flex-col gap-4 border-t border-limewash/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-micro uppercase text-limewash/40">
            © {year} {site.legalName}
          </p>
          <p className="text-micro uppercase text-limewash/40">
            Interior Designer in Vijay Nagar, Indore
          </p>
        </div>
      </div>
    </footer>
  );
}
