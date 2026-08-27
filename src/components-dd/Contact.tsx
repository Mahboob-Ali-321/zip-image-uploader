import { site, telHref, whatsappHref } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { Icon, type IconName } from "./icons";
import { Reveal } from "./Reveal";

/**
 * One line of the contact list.
 *
 * The icon lives inside the <dt> and is positioned out into the left margin: a
 * <dl> may only contain dt/dd pairs (optionally wrapped one group per <div>), so
 * a flex row with the icon as a sibling of the group would be invalid markup and
 * would break the list semantics screen readers rely on.
 */
function Row({
  icon,
  label,
  children,
}: {
  icon: IconName;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative border-t border-espresso/12 py-5 pl-10">
      <dt className="text-eyebrow font-medium uppercase text-stone">
        <Icon name={icon} className="absolute left-0 top-4 h-5 w-5 text-brass" />
        {label}
      </dt>
      <dd className="mt-2 text-espresso">{children}</dd>
    </div>
  );
}

/**
 * Contact. Two columns: the ways to reach a human on the left, the form on the
 * right. In Indore a phone call or a WhatsApp message closes far more work than
 * a web form, so both sit above the map rather than below it.
 */
export function Contact() {
  return (
    <section id="contact" className="bg-plaster py-24 lg:py-section">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="display-lg mt-7 max-w-xl text-espresso">
                Tell us about the space.
              </h2>
            </div>
            <p className="max-w-sm text-espresso/70 lg:pb-2">
              The first consultation is free, at the studio or at your site.
              Bring a floor plan if you have one — a photograph works just as
              well.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Ways in */}
          <Reveal className="lg:col-span-5">
            <dl>
              <Row icon="phone" label="Call the studio">
                <a href={telHref} className="link-brass text-lg">
                  {site.phoneDisplay}
                </a>
                <p className="mt-1.5 text-[0.9375rem] text-espresso/60">
                  Monday to Saturday, 10:30 am to 7 pm
                </p>
              </Row>

              <Row icon="whatsapp" label="WhatsApp">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-brass text-lg"
                >
                  Message us
                </a>
                <p className="mt-1.5 text-[0.9375rem] text-espresso/60">
                  Send photographs of the space and we will call you back
                </p>
              </Row>

              <Row icon="mail" label="Email">
                <a href={`mailto:${site.email}`} className="link-brass">
                  {site.email}
                </a>
              </Row>

              <Row icon="pin" label="Studio">
                <address className="not-italic leading-relaxed text-espresso/80">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.locality}, {site.address.region}{" "}
                  {site.address.postalCode}
                </address>
                <a
                  href={site.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-brass mt-3 inline-block text-eyebrow font-medium uppercase"
                >
                  Get directions
                </a>
              </Row>

              <Row icon="clock" label="Hours">
                <ul className="space-y-1.5 text-[0.9375rem] text-espresso/80">
                  {site.hours.map((entry) => (
                    <li key={entry.days} className="flex justify-between gap-6">
                      <span>{entry.days}</span>
                      <span className="tnum text-espresso/60">{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </Row>
            </dl>

            <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden border border-espresso/12 bg-limewash">
              <iframe
                src={site.mapEmbedUrl}
                title="Map showing the Decodreams studio in Vijay Nagar, Indore"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
