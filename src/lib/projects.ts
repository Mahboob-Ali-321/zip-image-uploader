import { unsplash } from "./images";

export type Category =
  | "Living Room"
  | "Bedroom"
  | "Kitchen"
  | "Full Home"
  | "Commercial";

export interface Project {
  /** Stable slug. Used as the React key and the lightbox anchor. */
  id: string;
  title: string;
  category: Category;
  locality: string;
  year: string;
  /** One line of scope, shown in the lightbox beside the title. */
  scope: string;
  /** A sentence or two about the room. Keep it about materials and decisions. */
  blurb: string;
  /** First image is the grid thumbnail; the rest appear in the lightbox. */
  images: string[];
  /** Grid emphasis. A "wide" project fills two columns; leave unset otherwise. */
  size?: "wide";
}

/**
 * PLACEHOLDER PROJECTS.
 * Titles, localities and copy are stand-ins written to show the layout at real
 * length. Replace each entry with an actual Decodreams project before launch —
 * the gallery, filters and lightbox all read from this array, so adding or
 * removing projects needs no component changes.
 */
export const projects: Project[] = [
  {
    id: "nipania-duplex",
    title: "Nipania Duplex",
    category: "Full Home",
    locality: "Nipania, Indore",
    year: "2025",
    scope: "Turnkey interiors · 4 BHK duplex",
    blurb:
      "A whole-home fitout for a family of five. We opened up the ground floor, moved the stair balustrade to glass so the light carries through, and kept every fixed surface in one teak tone so the rooms read as one house rather than five schemes.",
    images: [
      unsplash("photo-1600585154340-be6161a56a0c"),
      unsplash("photo-1600607687939-ce8a6c25118c"),
      unsplash("photo-1583847268964-b28dc8f51f92"),
      unsplash("photo-1513694203232-719a280e022f"),
    ],
    size: "wide",
  },
  {
    id: "limewash-living-room",
    title: "The Limewash Living Room",
    category: "Living Room",
    locality: "Scheme 54, Indore",
    year: "2025",
    scope: "Living and dining · colour texture, POP cove",
    blurb:
      "The client wanted the room to feel older than it is. Hand-applied limewash texture on three walls, a brass-trimmed cove that hides the light source, and low seating so the ceiling height does the work.",
    images: [
      unsplash("photo-1586023492125-27b2c045efd7"),
      unsplash("photo-1615529162924-f8605388461d"),
      unsplash("photo-1493809842364-78817add7ffb"),
    ],
  },
  {
    id: "teakwood-kitchen",
    title: "Teakwood Kitchen",
    category: "Kitchen",
    locality: "Silicon City, Indore",
    year: "2024",
    scope: "Modular kitchen · carpentry, glass shutters",
    blurb:
      "Built around a tall pantry the family already owned. Solid teak framing with fluted glass shutters above the counter, and a stone backsplash run in a single piece so there is no joint to clean.",
    images: [
      unsplash("photo-1567767292278-a4f21aa2d36e"),
      unsplash("photo-1631049307264-da0ec9d70304"),
      unsplash("photo-1631679706909-1844bbd07221"),
    ],
    size: "wide",
  },
  {
    id: "quiet-bedroom-sukhliya",
    title: "A Quiet Bedroom",
    category: "Bedroom",
    locality: "Sukhliya, Indore",
    year: "2024",
    scope: "Master bedroom · panelling, wardrobe, cushioning",
    blurb:
      "A west-facing room that ran hot all afternoon. Layered curtains and an upholstered headboard wall cut both the light and the echo; the wardrobe was pushed flush into the wall to keep the floor clear.",
    images: [
      unsplash("photo-1505693416388-ac5ce068fe85"),
      unsplash("photo-1540518614846-7eded433c457"),
      unsplash("photo-1502005229762-cf1b2da7c5d6"),
    ],
  },
  {
    /* Ordering note: within each category the "wide" project comes first. A wide
       cell needs two adjacent columns, so if it follows a single cell it drops to
       the next row and leaves a visible hole — most obvious on the Commercial
       filter, where there are only two projects. */
    id: "clinic-reception-ab-road",
    title: "Clinic Reception",
    category: "Commercial",
    locality: "AB Road, Indore",
    year: "2024",
    scope: "Reception and waiting · joinery, false ceiling",
    blurb:
      "A waiting area that needed to calm people down. Curved reception joinery with no sharp corner at knee height, indirect ceiling light instead of downlights, and acoustic backing behind the panelling.",
    images: [
      unsplash("photo-1497366754035-f200968a6e72"),
      unsplash("photo-1497366811353-6870744d04b2"),
      unsplash("photo-1618221195710-dd6b41faaea6"),
    ],
    size: "wide",
  },
  {
    id: "cafe-fitout-vijay-nagar",
    title: "Cafe Fitout",
    category: "Commercial",
    locality: "Vijay Nagar, Indore",
    year: "2025",
    scope: "Ground floor cafe · seating, lighting, signage",
    blurb:
      "Forty covers in a narrow shell. Banquettes along the long wall, a mirrored return to double the depth, and warm 2700K lighting kept low over the tables so evenings feel different from mornings.",
    images: [
      unsplash("photo-1521017432531-fbd92d768814"),
      unsplash("photo-1554118811-1e0d58224f24"),
      unsplash("photo-1517248135467-4c7edcad34c4"),
    ],
  },
  {
    id: "rajendra-nagar-villa",
    title: "Rajendra Nagar Villa",
    category: "Full Home",
    locality: "Rajendra Nagar, Indore",
    year: "2024",
    scope: "Elevation and interiors · 5 BHK",
    blurb:
      "We took this one from elevation drawings through to the last curtain rod. The front facade uses a deep brick reveal to throw a shadow line across the afternoon, and that same rhythm repeats in the joinery inside.",
    images: [
      unsplash("photo-1570129477492-45c003edd2be"),
      unsplash("photo-1600585152220-90363fe7e115"),
      unsplash("photo-1512917774080-9991f1c4c750"),
      unsplash("photo-1616486338812-3dadae4b4ace"),
    ],
  },
  {
    id: "panelled-master-suite",
    title: "Panelled Master Suite",
    category: "Bedroom",
    locality: "Nipania, Indore",
    year: "2025",
    scope: "Bedroom and dressing · woodwork, mirror work",
    blurb:
      "Full-height fluted panelling in a warm walnut stain, with the dressing mirror set into the run so it reads as part of the wall. The brass reveal at the skirting is the only bright thing in the room.",
    images: [
      unsplash("photo-1522771739844-6a9f6d5f14af"),
      unsplash("photo-1600566753086-00f18fb6b3ea"),
      unsplash("photo-1600210492486-724fe5c67fb0"),
    ],
  },
  {
    id: "island-kitchen-bicholi",
    title: "Island Kitchen",
    category: "Kitchen",
    locality: "Bicholi Mardana, Indore",
    year: "2024",
    scope: "Open kitchen · island, breakfast counter",
    blurb:
      "The wall between kitchen and dining came down and an island took its place, which gave the family a prep surface and the room a centre. Matte handleless shutters so the island stays visually quiet.",
    images: [
      unsplash("photo-1556909114-f6e7ad7d3136"),
      unsplash("photo-1600121848594-d8644e57abab"),
      unsplash("photo-1615873968403-89e068629265"),
    ],
  },
  {
    id: "family-lounge-saket",
    title: "Family Lounge",
    category: "Living Room",
    locality: "Saket Nagar, Indore",
    year: "2023",
    scope: "Informal living · wallpaper, seating, storage",
    blurb:
      "The room three generations actually use, so nothing in it is precious. A hard-wearing wallpaper on the television wall, deep seating with removable covers, and closed storage at child height.",
    images: [
      unsplash("photo-1522708323590-d24dbb6b0267"),
      unsplash("photo-1560448204-e02f11c3d0e2"),
      unsplash("photo-1611892440504-42a792e24d32"),
    ],
  },
  {
    id: "garden-facing-living",
    title: "Garden-Facing Living",
    category: "Living Room",
    locality: "Scheme 78, Indore",
    year: "2023",
    scope: "Living room · window design, glass work",
    blurb:
      "The best thing about this flat was a view nobody could see. We replaced the window wall with a slim-framed glazed run, dropped the sill, and put the seating at right angles to it.",
    images: [
      unsplash("photo-1616627561950-9f746e330187"),
      unsplash("photo-1618219908412-a29a1bb7b86e"),
      unsplash("photo-1524758631624-e2822e304c36"),
    ],
  },
  {
    id: "compact-flat-palasia",
    title: "Compact Flat",
    category: "Full Home",
    locality: "Palasia, Indore",
    year: "2023",
    scope: "Turnkey interiors · 2 BHK, 820 sq ft",
    blurb:
      "Eight hundred square feet for a couple who both work from home. Two desks built into circulation space, a sliding partition instead of a door, and a bathroom finished in one stone to keep it from feeling cut up.",
    images: [
      unsplash("photo-1616137466211-f939a420be84"),
      unsplash("photo-1584622650111-993a426fbf0a"),
      unsplash("photo-1595526114035-0d45ed16cfbf"),
    ],
  },
];

export const categories: Array<"All" | Category> = [
  "All",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Full Home",
  "Commercial",
];
