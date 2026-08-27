/**
 * Every business detail on the site comes from this file.
 * Change a phone number or an address here and it updates everywhere —
 * navigation, contact section, footer, click-to-call, WhatsApp and the
 * structured data Google reads.
 */

export const site = {
  name: "Decodreams",
  legalName: "Decodreams Interior Design Studio",
  nameHindi: "डेकोड्रीम्स",
  tagline: "We Decor Your Dreams",
  founders: "Hemant & Kartik Ramdiya",
  url: "https://decodreams.in",

  /** Digits only, with country code — used to build tel: and wa.me links. */
  phone: "919111621411",
  phoneDisplay: "+91 91116 21411",
  email: "decodreams@gmail.com",

  address: {
    line1: "2nd Floor, Freito Cafe Building",
    line2: "Plot No. 343, Scheme 54 PU4",
    locality: "Vijay Nagar, Indore",
    region: "Madhya Pradesh",
    postalCode: "452010",
    country: "IN",
  },

  /** Keyless Google Maps embed — no API key or billing account required. */
  mapEmbedUrl:
    "https://www.google.com/maps?q=Decodreams+interior+design+studio,+Scheme+54+PU4,+Vijay+Nagar,+Indore,+Madhya+Pradesh+452010&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Decodreams+interior+design+studio,+Scheme+54+PU4,+Vijay+Nagar,+Indore",

  rating: {
    value: "4.9",
    count: 131,
    source: "Google Reviews",
  },

  /**
   * Opening hours. Google lists the studio as closing at 7 pm — confirm the
   * opening time and Sunday policy with Hemant before launch.
   */
  hours: [
    { days: "Monday – Saturday", time: "10:30 am – 7:00 pm" },
    { days: "Sunday", time: "By appointment" },
  ],

  socials: [
    { label: "Instagram", href: "https://www.instagram.com/decodreams" },
    { label: "Pinterest", href: "https://in.pinterest.com/decodreams" },
    { label: "Facebook", href: "https://www.facebook.com/decodreams" },
  ],
} as const;

export const navLinks = [
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

/** Stats ledger in the studio section. Placeholder figures — confirm before launch. */
export const stats = [
  { figure: "12", suffix: "", label: "Years in practice" },
  { figure: "250", suffix: "+", label: "Spaces completed" },
  { figure: "4.9", suffix: "★", label: `${site.rating.count} Google reviews` },
] as const;

export const telHref = `tel:+${site.phone}`;

/** Prefilled WhatsApp message so the studio knows where the enquiry came from. */
export function whatsappHref(message?: string) {
  const text =
    message ??
    "Hello Decodreams, I found you through your website and I'd like to discuss an interior project.";
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(text)}`;
}

export const fullAddress = [
  site.address.line1,
  site.address.line2,
  site.address.locality,
  `${site.address.region} ${site.address.postalCode}`,
].join(", ");
