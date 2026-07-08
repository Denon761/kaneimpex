"use client";

import { useState, useEffect } from "react";

// Renders any image URL — local (/mockups/…) OR remote CDN (https://…).
// If the primary src fails to load (bad URL, hotlink block, offline CDN),
// it falls back to `fallback` so a card never shows a broken image.
export default function SmartImage({
  src,
  fallback,
  alt = "",
  className,
  eager = false,
  ...rest
}) {
  const [current, setCurrent] = useState(src || fallback);

  // Keep in sync if the src prop changes between renders.
  useEffect(() => {
    setCurrent(src || fallback);
  }, [src, fallback]);

  return (
    <img
      src={current}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      onError={() => {
        if (fallback && current !== fallback) setCurrent(fallback);
      }}
      className={className}
      {...rest}
    />
  );
}
