import { useState } from "react";

/**
 * Image with a graceful failure state. Always fills its (positioned) parent.
 */
export function Media({
  src,
  alt,
  /** Shown inside the fallback block. Defaults to the alt text. */
  label,
  sizes = "100vw",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  label?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
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
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
