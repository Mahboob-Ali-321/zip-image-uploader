
import Image from "next/image";
import { useState } from "react";

/**
 * Image with a graceful failure state.
 *
 * The portfolio runs on placeholder photography until Decodreams' own photos
 * are in. If any source ever fails to load — a moved file, a blocked network,
 * a retired Unsplash ID — this renders a warm material block with the caption
 * instead of a broken image or a white hole in the layout.
 *
 * Always used with `fill`, so the parent needs `position: relative` and a size.
 */
export function Media({
  src,
  alt,
  /** Shown inside the fallback block. Defaults to the alt text. */
  label,
  sizes = "100vw",
  priority = false,
  className = "",
  quality,
}: {
  src: string;
  alt: string;
  label?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  quality?: number;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="absolute inset-0 flex items-end bg-espresso"
        style={{
          backgroundImage:
            "linear-gradient(160deg, rgba(168,129,63,0.28) 0%, rgba(50,40,32,0) 55%), linear-gradient(0deg, rgba(30,25,23,0.6) 0%, rgba(30,25,23,0) 60%)",
        }}
      >
        <span className="p-5 text-eyebrow font-medium uppercase text-brass-lit">
          {label ?? alt}
        </span>
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      quality={quality}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
