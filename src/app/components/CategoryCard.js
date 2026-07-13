import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "./SmartImage";

// Product-category card in the same image-cover style as IndustryCard /
// ProductCard: photo fills the rounded card, content sits on a bottom
// gradient, whole card links to the category page.
export default function CategoryCard({ category }) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-white ring-1 ring-navy/10"
    >
      {/* Product shots are on white, so contain + margins keeps the full
          garment visible and the padding blends in seamlessly */}
      <SmartImage
        src={category.cover}
        alt={category.name}
        className="aspect-[3/4] w-full object-contain p-6 pb-14 transition duration-500 group-hover:scale-105"
      />

      {/* Bottom gradient so the overlaid text stays readable */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />

      {/* Design count badge */}
      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy backdrop-blur">
        {category.products.length} Designs
      </span>

      {/* Overlaid content */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{category.name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-white/65 line-clamp-2">
              {category.description}
            </p>
            <p className="mt-2.5 text-[10px] font-bold uppercase tracking-wider text-white/80">
              Browse Range
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
