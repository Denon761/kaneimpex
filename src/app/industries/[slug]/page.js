import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import {
  industries,
  getIndustry,
  getIndustrySlugs,
  industryBanner,
  mockupFor,
} from "../../data/industries";
import ProductCard from "../../components/ProductCard";
import IndustryCard from "../../components/IndustryCard";
import SmartImage from "../../components/SmartImage";

export function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return {
    title: `${ind.name} Manufacturer & Supplier`,
    description: ind.description,
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 4);

  return (
    <>
      {/* HERO — dark rounded panel, same frame as the homepage */}
      <section className="container-wide pt-3 sm:pt-5">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 text-white">
          <SmartImage
            src={industryBanner(industry)}
            fallback={mockupFor(industry)}
            alt={industry.name}
            eager
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/40" />

          <div className="relative flex min-h-[480px] flex-col justify-between px-6 py-10 sm:px-10 lg:min-h-[540px] lg:px-14 lg:py-12">
            <div>
              <Link
                href="/#industries"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60 transition hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> All Industries
              </Link>

              <p className="eyebrow eyebrow-light mt-10">
                {industry.tagline}
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                {industry.name}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                {industry.description}
              </p>
            </div>

            <div className="mt-14 flex flex-wrap items-end justify-between gap-x-10 gap-y-8">
              {/* Highlights as process markers */}
              <div className="grid max-w-xl gap-x-8 gap-y-3 sm:grid-cols-2">
                {industry.highlights.map((h) => (
                  <span
                    key={h}
                    className="flex items-start gap-1.5 text-sm font-medium text-white/80"
                  >
                    <Plus className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" strokeWidth={2.5} />
                    {h}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/request-a-quote?industry=${encodeURIComponent(industry.name)}`}
                  className="btn-primary"
                >
                  Request a Quote <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/products" className="btn-light">
                  All Products <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
            <div>
              <p className="eyebrow">Our Range</p>
              <h2 className="mt-4 max-w-2xl text-3xl leading-[1.15] sm:text-4xl">
                {industry.name} Products{" "}
                <span className="text-navy/35">— every item fully customizable.</span>
              </h2>
            </div>
            <p className="dotted-rule pb-2 text-xs font-bold uppercase tracking-wider text-navy/60">
              {String(industry.products.length).padStart(2, "0")} Products
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industry.products.map((product, i) => (
              <ProductCard
                key={product.name}
                product={product}
                industry={industry}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OTHER INDUSTRIES — dark band, same cards as the homepage */}
      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
            <div>
              <p className="eyebrow eyebrow-light">Explore more</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Other <span className="text-brand">Industries</span>
              </h2>
            </div>
            <Link
              href="/#industries"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60 transition hover:text-white"
            >
              View All
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((ind) => (
              <IndustryCard key={ind.slug} industry={ind} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
