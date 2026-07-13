import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { productCategories, totalProductCount } from "../data/products";
import SmartImage from "../components/SmartImage";
import CategoryCard from "../components/CategoryCard";

export const metadata = {
  title: "Product Catalog — Custom Sportswear Manufacturing",
  description:
    "Browse our full sportswear manufacturing range: soccer, basketball, baseball, rugby and cricket uniforms, hoodies, tracksuits, polos and more. Every design is fully customizable — request a quote on any style.",
};

export default function ProductsPage() {
  return (
    <>
      {/* HERO — dark rounded panel, same frame as the homepage */}
      <section className="container-wide pt-3 sm:pt-5">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 text-white">
          <SmartImage
            src="/products-img/soccer/Soccer-uni-01_s.jpg"
            fallback="/banners/hero.svg"
            alt="Custom sportswear catalog"
            eager
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/40" />

          <div className="relative flex min-h-[440px] flex-col justify-between px-6 py-10 sm:px-10 lg:min-h-[500px] lg:px-14 lg:py-12">
            <div>
              <p className="eyebrow eyebrow-light">Product Catalog</p>
              <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                Our Sportswear Range.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                {totalProductCount} manufactured designs across{" "}
                {productCategories.length} categories — every one produced
                in-house and fully customizable in fabric, colour, fit and
                branding.
              </p>
            </div>

            <div className="mt-14 flex flex-wrap items-end justify-between gap-x-10 gap-y-8">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {[
                  `${totalProductCount} Designs`,
                  `${productCategories.length} Categories`,
                  "100% Customizable",
                ].map((m) => (
                  <span
                    key={m}
                    className="flex items-center gap-1.5 text-sm font-medium text-white/80"
                  >
                    <Plus className="h-4 w-4 text-brand-light" strokeWidth={2.5} />
                    {m}
                  </span>
                ))}
              </div>
              <Link href="/request-a-quote" className="btn-primary">
                Request a Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="section">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
            <div>
              <p className="eyebrow">Categories</p>
              <h2 className="mt-4 max-w-2xl text-3xl leading-[1.15] sm:text-4xl">
                Browse by Category{" "}
                <span className="text-navy/35">
                  — request a quote on any style.
                </span>
              </h2>
            </div>
            <p className="dotted-rule pb-2 text-xs font-bold uppercase tracking-wider text-navy/60">
              {String(productCategories.length).padStart(2, "0")} Categories
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark rounded card */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-14 text-white sm:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,68,46,0.18),transparent_55%)]" />
            <div className="relative flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
              <div className="max-w-xl">
                <p className="eyebrow eyebrow-light">Custom manufacturing</p>
                <h2 className="mt-4 text-3xl leading-[1.15] sm:text-4xl">
                  Don&apos;t see exactly{" "}
                  <span className="text-white/50">what you need?</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/55">
                  Every design here is a starting point — we manufacture to
                  your spec. Send us your requirements and we&apos;ll build it.
                </p>
              </div>
              <Link href="/request-a-quote" className="btn-primary">
                Request a Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
