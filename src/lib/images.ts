/**
 * Image sources.
 *
 * Placeholder photography is pulled from Unsplash so the site looks finished
 * from the first load. To swap in Decodreams' own photos: drop files into
 * /public/images and replace the helper calls below (and in projects.ts) with
 * plain paths like "/images/nipania-duplex-01.jpg". Nothing else changes.
 */

/** Builds an Unsplash source URL. Next.js handles the resizing from here. */
export function unsplash(id: string, w = 1800) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

/** Full-bleed hero. Warm evening light, low furniture, one lamp. */
export const heroImage = unsplash("photo-1524758631624-e2822e304c36", 2400);

/** Portrait-ish detail shot beside the studio story. */
export const studioImage = unsplash("photo-1493809842364-78817add7ffb", 1400);
