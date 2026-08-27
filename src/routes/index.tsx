import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/dd/About";
import { Contact } from "@/components/dd/Contact";
import { Footer } from "@/components/dd/Footer";
import { Hero } from "@/components/dd/Hero";
import { MotionProvider } from "@/components/dd/MotionProvider";
import { Navbar } from "@/components/dd/Navbar";
import { Portfolio } from "@/components/dd/Portfolio";
import { Process } from "@/components/dd/Process";
import { Services } from "@/components/dd/Services";
import { Testimonials } from "@/components/dd/Testimonials";
import { WhatsAppFab } from "@/components/dd/WhatsAppFab";
import { heroImage } from "@/lib/images";
import { site } from "@/lib/site";

const title = "Decodreams — Interior Designer in Vijay Nagar, Indore";
const description =
  "Decodreams is an interior design and architecture studio in Vijay Nagar, Indore, led by Hemant and Kartik Ramdiya. Turnkey interiors, elevation design, carpentry, POP and glass work.";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#studio`,
  name: site.legalName,
  alternateName: site.name,
  slogan: site.tagline,
  description,
  url: site.url,
  telephone: `+${site.phone}`,
  email: site.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: "Indore",
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.7480965, longitude: 75.8955697 },
  areaServed: { "@type": "City", name: "Indore" },
  founder: [
    { "@type": "Person", name: "Hemant Ramdiya" },
    { "@type": "Person", name: "Kartik Ramdiya" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
    bestRating: "5",
  },
  sameAs: site.socials.map((s) => s.href),
  hasMap: site.mapDirectionsUrl,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionProvider>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <link rel="preload" as="image" href={heroImage} />
    </MotionProvider>
  );
}
