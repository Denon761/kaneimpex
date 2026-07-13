import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "./SmartImage";
import { industryImage, mockupFor } from "../data/industries";

// Industry card in the same image-cover style as ProductCard: the photo
// fills the rounded card, content sits on a bottom gradient, and the whole
// card links to the industry page.
export default function IndustryCard({ industry }) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-navy-100"
    >
      <SmartImage
        src={industryImage(industry)}
        fallback={mockupFor(industry)}
        alt={industry.name}
        className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
      />

      {/* Bottom gradient so the overlaid text stays readable */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />

      {/* Product count badge */}
      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy backdrop-blur">
        {industry.products.length} Products
      </span>

      {/* Overlaid content */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-white/65 line-clamp-2">
              {industry.tagline}
            </p>
            <p className="mt-2.5 text-[10px] font-bold uppercase tracking-wider text-white/80">
              Explore Range
            </p>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 text-white transition group-hover:border-brand group-hover:bg-brand">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
