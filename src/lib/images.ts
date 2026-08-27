/**
 * Image sources — Decodreams' own photography, served from the CDN.
 */
import d1 from "@/assets/d1.jpg.asset.json";
import d2 from "@/assets/d2.jpg.asset.json";
import d3 from "@/assets/d3.jpg.asset.json";
import d4 from "@/assets/d4.jpg.asset.json";
import d5 from "@/assets/d5.jpg.asset.json";
import d6 from "@/assets/d6.jpg.asset.json";
import d7 from "@/assets/d7.jpg.asset.json";
import d8 from "@/assets/d8.jpg.asset.json";
import d9 from "@/assets/d9.webp.asset.json";

export const photos = {
  chesterfieldLiving: d5.url,
  jewelleryShowroom: d2.url,
  entryConsole: d3.url,
  navyBedroom: d4.url,
  galleryWallLiving: d6.url,
  doubleHeightLobby: d7.url,
  studioBedroom: d8.url,
  compactBedroom: d9.url,
  roundCoveLiving: d1.url,
} as const;

/** Full-bleed hero. */
export const heroImage = photos.chesterfieldLiving;

/** Portrait detail shot beside the studio story. */
export const studioImage = photos.entryConsole;
