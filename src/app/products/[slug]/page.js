import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import {
  productCategories,
  getProductCategory,
  getProductCategorySlugs,
} from "../../data/products";
import SmartImage from "../../components/SmartImage";
import CategoryCard from "../../components/CategoryCard";

export function generateStaticParams() {
  return getProductCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cat = getProductCategory(slug);
  if (!cat) return {};
  return {
    title: `${cat.name} Manufacturer — Custom ${cat.name}`,
    description: cat.description,
  };
}

export default async function ProductCategoryPage({ params }) {
  const { slug } = await params;
  const category = getProductCategory(slug);
  if (!category) notFound();

  const others = productCategories
    .filter((c) => c.slug !== category.slug)
    .slice(0, 4);

  return (
    <>
      {/* HERO — dark rounded panel, same frame as the homepage */}
      <section className="container-wide pt-3 sm:pt-5">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 text-white">
          <SmartImage
            src={category.cover}
            fallback="/banners/hero.svg"
            alt={category.name}
            eager
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/40" />

          <div className="relative flex min-h-[460px] flex-col justify-between px-6 py-10 sm:px-10 lg:min-h-[520px] lg:px-14 lg:py-12">
            <div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60 transition hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> All Products
              </Link>

              <p className="eyebrow eyebrow-light mt-10">Product Category</p>
              <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                {category.name}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                {category.description}
              </p>
            </div>

            <div className="mt-14 flex flex-wrap items-end justify-between gap-x-10 gap-y-8">
              {/* Manufacturing highlights as markers */}
              <div className="grid max-w-xl gap-x-8 gap-y-3 sm:grid-cols-2">
                {category.features.map((f) => (
                  <span
                    key={f}
                    className="flex items-start gap-1.5 text-sm font-medium text-white/80"
                  >
                    <Plus className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" strokeWidth={2.5} />
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/request-a-quote?industry=${encodeURIComponent(category.name)}`}
                  className="btn-primary"
                >
                  Request a Quote <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="section">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
            <div>
              <p className="eyebrow">Available Designs</p>
              <h2 className="mt-4 max-w-2xl text-3xl leading-[1.15] sm:text-4xl">
                {category.name} Styles{" "}
                <span className="text-navy/35">
                  — reference any style code in your enquiry.
                </span>
              </h2>
            </div>
            <p className="dotted-rule pb-2 text-xs font-bold uppercase tracking-wider text-navy/60">
              {String(category.products.length).padStart(2, "0")} Designs
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.products.map((product) => (
              <Link
                key={product.styleCode}
                href={`/request-a-quote?product=${encodeURIComponent(product.name)}&industry=${encodeURIComponent(category.name)}`}
                className="group relative block overflow-hidden rounded-2xl bg-white ring-1 ring-navy/10"
              >
                <SmartImage
                  src={product.image}
                  alt={product.name}
                  className="aspect-[3/4] w-full object-contain p-6 pb-14 transition duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />

                {/* Style code badge */}
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] font-semibold tracking-wide text-navy backdrop-blur">
                  {product.styleCode}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-white/65 line-clamp-2">
                        {product.desc}
                      </p>
                      <p className="mt-2.5 text-[10px] font-bold uppercase tracking-wider text-white/80">
                        Request a Quote
                      </p>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 text-white transition group-hover:border-brand group-hover:bg-brand">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER CATEGORIES — dark band */}
      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
            <div>
              <p className="eyebrow eyebrow-light">Explore more</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Other <span className="text-brand">Categories</span>
              </h2>
            </div>
            <Link
              href="/products"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60 transition hover:text-white"
            >
              View All
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
