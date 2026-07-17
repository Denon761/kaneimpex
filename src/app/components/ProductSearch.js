"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { productCategories } from "../data/products";
import SmartImage from "./SmartImage";

// Flat index of everything searchable: categories + individual styles.
const SEARCH_INDEX = productCategories.flatMap((cat) => [
  {
    key: cat.slug,
    label: cat.name,
    sub: cat.products.length ? `${cat.products.length} designs` : "Made to order",
    href: `/products/${cat.slug}`,
    haystack: cat.name.toLowerCase(),
  },
  ...cat.products.map((p) => ({
    key: p.styleCode,
    label: p.name,
    sub: cat.name,
    href: `/products/${cat.slug}`,
    image: p.image,
    haystack: `${p.name} ${p.styleCode} ${cat.name}`.toLowerCase(),
  })),
]);

const MAX_RESULTS = 8;

export default function ProductSearch({ onNavigate, autoFocus = false, className = "" }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const boxRef = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const terms = q.split(/\s+/);
    return SEARCH_INDEX.filter((item) =>
      terms.every((t) => item.haystack.includes(t))
    ).slice(0, MAX_RESULTS);
  }, [query]);

  // Close the dropdown when clicking outside the component.
  useEffect(() => {
    const onClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setFocused(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const close = () => {
    setQuery("");
    setFocused(false);
    onNavigate?.();
  };

  const open = focused && query.trim().length > 0;

  return (
    <div ref={boxRef} className={`relative ${className}`}>
      <div className="flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3 py-1.5 transition focus-within:border-navy">
        <Search className="h-3.5 w-3.5 shrink-0 text-navy/40" />
        <input
          type="search"
          autoFocus={autoFocus}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={(e) => e.key === "Escape" && setFocused(false)}
          placeholder="Search products…"
          aria-label="Search products"
          className="w-full bg-transparent text-[13px] font-medium text-navy placeholder:text-navy/40 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="shrink-0 text-navy/40 hover:text-navy"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 pt-2">
          <div className="max-h-80 overflow-y-auto rounded-2xl border border-navy/10 bg-white p-2 shadow-xl">
            {results.length === 0 ? (
              <p className="px-3 py-2.5 text-sm text-navy/50">
                No products match &quot;{query.trim()}&quot;
              </p>
            ) : (
              results.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={close}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-navy-50"
                >
                  {item.image ? (
                    <SmartImage
                      src={item.image}
                      fallback="/banners/hero.svg"
                      alt=""
                      className="h-9 w-9 shrink-0 rounded-lg border border-navy/10 object-cover"
                    />
                  ) : (
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy/50">
                      <Search className="h-4 w-4" />
                    </span>
                  )}
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-navy">
                      {item.label}
                    </span>
                    <span className="block text-xs text-navy/50">{item.sub}</span>
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
