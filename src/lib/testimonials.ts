/**
 * ⚠️ PLACEHOLDER TESTIMONIALS — REPLACE BEFORE LAUNCH.
 *
 * These paraphrase the themes that appear in Decodreams' real Google reviews
 * (professionalism, creativity, understanding the client's requirement, delivery
 * on time and within budget), but the wording is invented for layout purposes.
 *
 * Attribution is deliberately anonymised — "Homeowner · 4 BHK duplex, Nipania"
 * rather than an invented person — so that nothing on the page claims a named
 * client said something they did not. Before launch, replace each quote and
 * name with the real text from the Google Business listing. Publishing
 * fabricated named reviews misleads clients and breaches Google's terms.
 */
export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "They listened first and drew second. What came back was a plan for the way our family actually lives, not a showroom. The finishing and the quality of the woodwork are what stood out most.",
    name: "Homeowner",
    detail: "4 BHK duplex · Nipania",
    rating: 5,
  },
  {
    quote:
      "Handed over on the date they gave us in the very first meeting, and the final bill matched the estimate. For an interior project in Indore that is rarer than it should be.",
    name: "Homeowner",
    detail: "Turnkey interiors · Scheme 78",
    rating: 5,
  },
  {
    quote:
      "We were nervous about choosing something we would be tired of in three years. They kept steering us back to materials that will still look right later, and they were right.",
    name: "Homeowner",
    detail: "Living and dining · Vijay Nagar",
    rating: 5,
  },
  {
    quote:
      "An extremely creative team, and easy to reach through the whole build. Every question got an answer the same day, which made a nine-week site feel manageable.",
    name: "Cafe owner",
    detail: "Ground floor fitout · AB Road",
    rating: 5,
  },
  {
    quote:
      "The 3D views were close enough to the finished room that there were no surprises at all. The one snag we found after handover was fixed within two days.",
    name: "Homeowner",
    detail: "Master bedroom · Sukhliya",
    rating: 5,
  },
  {
    quote:
      "The best of the five studios we spoke to in the city. They understood the budget without ever treating it as a limitation on the design.",
    name: "Homeowner",
    detail: "2 BHK renovation · Palasia",
    rating: 5,
  },
];
