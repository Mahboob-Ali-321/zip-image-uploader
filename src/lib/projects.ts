import { photos } from "./images";

export type Category = "Living Room" | "Bedroom" | "Full Home" | "Commercial";

export interface Project {
  /** Stable slug. Used as the React key and the lightbox anchor. */
  id: string;
  title: string;
  category: Category;
  locality: string;
  year: string;
  /** One line of scope, shown in the lightbox beside the title. */
  scope: string;
  /** A sentence or two about the room. */
  blurb: string;
  /** First image is the grid thumbnail; the rest appear in the lightbox. */
  images: string[];
  /** Grid emphasis. A "wide" project fills two columns; leave unset otherwise. */
  size?: "wide";
}

export const projects: Project[] = [
  {
    id: "chesterfield-living",
    title: "The Chesterfield Living Room",
    category: "Living Room",
    locality: "Vijay Nagar, Indore",
    year: "2025",
    scope: "Living and lounge · panelling, brass trims, lighting",
    blurb:
      "A tufted grey chesterfield anchored between fluted timber returns, with a gold-framed texture panel behind it and a geometric linear pendant overhead. Brass appears only as an outline, never as a fill.",
    images: [photos.chesterfieldLiving, photos.roundCoveLiving, photos.entryConsole],
    size: "wide",
  },
  {
    id: "round-cove-living",
    title: "Round Cove Living",
    category: "Living Room",
    locality: "Scheme 54, Indore",
    year: "2025",
    scope: "Living room · POP cove ceiling, panelling, furnishing",
    blurb:
      "Concentric plaster rings in the ceiling carry the light outward and give a wide room a centre. Moulded wall panels, a black stone reveal at the arch, and low leather seating keep the volume calm.",
    images: [photos.roundCoveLiving, photos.chesterfieldLiving],
  },
  {
    id: "gallery-wall-living",
    title: "Gallery Wall Apartment",
    category: "Living Room",
    locality: "Palasia, Indore",
    year: "2024",
    scope: "Living room · art wall, lighting, soft furnishing",
    blurb:
      "A quiet scheme for a compact flat. A staggered frame wall above the sectional, one warm brass floor lamp for the evenings, and nothing else competing for attention.",
    images: [photos.galleryWallLiving, photos.compactBedroom],
  },
  {
    id: "navy-master-suite",
    title: "Navy Panelled Master Suite",
    category: "Bedroom",
    locality: "Nipania, Indore",
    year: "2025",
    scope: "Master bedroom · upholstered panelling, wardrobe, lighting",
    blurb:
      "Full-height navy upholstery framed in brass reveals and warm oak, with matched sconces either side of the bed. The wardrobe run sits flush with the wall so the floor stays clear.",
    images: [photos.navyBedroom, photos.studioBedroom],
    size: "wide",
  },
  {
    id: "study-bedroom",
    title: "The Study Bedroom",
    category: "Bedroom",
    locality: "AB Road, Indore",
    year: "2024",
    scope: "Teen bedroom · study desk, wardrobe, wall art",
    blurb:
      "Built for someone who works where they sleep. A full-length desk in matte black, teal wardrobe shutters, red open shelving as the one loud note, and a framed set over the bed.",
    images: [photos.studioBedroom, photos.compactBedroom],
  },
  {
    id: "compact-bedroom-study",
    title: "Compact Bedroom & Study",
    category: "Bedroom",
    locality: "Sukhliya, Indore",
    year: "2024",
    scope: "Bedroom · storage wall, desk, styling",
    blurb:
      "Eleven feet of wall doing four jobs: headboard, art, desk and open storage. Warm oak framing with slim black lines to keep the shelving from reading heavy.",
    images: [photos.compactBedroom, photos.galleryWallLiving],
  },
  {
    id: "double-height-villa",
    title: "Double-Height Villa Lobby",
    category: "Full Home",
    locality: "Rajendra Nagar, Indore",
    year: "2025",
    scope: "Turnkey interiors · staircase, mouldings, furnishing",
    blurb:
      "A curved brass balustrade sweeping over a marble stair, fluted columns, a coffered cove ceiling, and organic boucle seating placed to soften all that geometry.",
    images: [photos.doubleHeightLobby, photos.entryConsole, photos.roundCoveLiving],
    size: "wide",
  },
  {
    id: "entry-console",
    title: "Backlit Entry Foyer",
    category: "Full Home",
    locality: "Bicholi Mardana, Indore",
    year: "2024",
    scope: "Entrance foyer · 3D panel, mirror work, stone console",
    blurb:
      "A sculpted leaf panel backlit on all four edges, a single stone shelf cantilevered off it, and bronze mirror on the flanking walls so the corridor reads twice as wide.",
    images: [photos.entryConsole, photos.doubleHeightLobby],
  },
  {
    id: "mk-jewellers",
    title: "MK Jewellers Showroom",
    category: "Commercial",
    locality: "Sarafa, Indore",
    year: "2025",
    scope: "Retail fitout · display joinery, lighting, facade branding",
    blurb:
      "Retail where the product is small and the lighting does the selling. Sage textured walls, gilded columns, tiered crystal chandeliers, and backlit display towers along the counter run.",
    images: [photos.jewelleryShowroom, photos.doubleHeightLobby],
    size: "wide",
  },
];

export const categories: Array<"All" | Category> = [
  "All",
  "Living Room",
  "Bedroom",
  "Full Home",
  "Commercial",
];
