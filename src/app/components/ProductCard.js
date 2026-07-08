import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SmartImage from "./SmartImage";
import { productImage, mockupFor } from "../data/industries";

// Product card with a Request-a-Quote button that carries the product
// and industry into the quote form via query params.
//
// Image resolution (see data/industries.js): product.image → industry.image
// → SVG mockup. Any of these can be a local path or a remote CDN URL, and a
// failed remote URL falls back to the mockup so the card never looks broken.
export default function ProductCard({ product, industry, index = 0 }) {
  const href = `/request-a-quote?product=${encodeURIComponent(
    product.name
  )}&industry=${encodeURIComponent(industry.name)}`;

  return (
    <div className="card-hover group flex flex-col overflow-hidden rounded-lg border border-navy/10 bg-white">
      {/* Visual */}
      <div className="relative h-44 overflow-hidden border-b border-navy/5 bg-navy-50">
        <SmartImage
          src={productImage(product, industry, index)}
          fallback={mockupFor(industry)}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-navy/40">
          {industry.name}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-navy">{product.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-navy/55">{product.desc}</p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center justify-between gap-2 border-t border-navy/10 pt-4 text-sm font-semibold text-navy transition group-hover:text-gold"
        >
          Request a Quote
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
