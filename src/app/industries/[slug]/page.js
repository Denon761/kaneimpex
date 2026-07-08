import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { industries, getIndustry, getIndustrySlugs } from "../../data/industries";
import Icon from "../../components/Icon";
import ProductCard from "../../components/ProductCard";

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
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-x relative py-16 lg:py-24">
          <Link
            href="/#industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All Industries
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <span className="grid h-16 w-16 place-items-center rounded-md border border-white/15 bg-white/5">
                <Icon name={industry.icon} className="h-8 w-8 text-gold-light" strokeWidth={1.5} />
              </span>
              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
                {industry.name}
              </h1>
              <p className="mt-3 text-xl font-medium text-gold-light">
                {industry.tagline}
              </p>
              <p className="mt-5 max-w-xl leading-relaxed text-white/65">{industry.description}</p>
              <Link
                href={`/request-a-quote?industry=${encodeURIComponent(industry.name)}`}
                className="btn-light mt-8"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Banner mockup + highlights */}
            <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
              <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white p-6">
                <img
                  src={industry.banner || `/mockups/${industry.slug}.svg`}
                  alt={`${industry.name} mockup`}
                  className="max-h-52 w-full object-contain"
                />
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-gold-light">
                  Why choose us
                </h3>
                <ul className="mt-4 space-y-3">
                  {industry.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.75} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Our Range</p>
              <h2 className="mt-2 text-3xl font-black text-navy">
                {industry.name} Products
              </h2>
              <p className="mt-2 max-w-xl text-navy/60">
                Every product is fully customizable. Click{" "}
                <span className="font-semibold text-brand">Request a Quote</span>{" "}
                on any item to get started.
              </p>
            </div>
            <span className="rounded-md border border-navy/10 bg-navy-50 px-4 py-2 text-sm font-semibold text-navy/70">
              {industry.products.length} products
            </span>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industry.products.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                industry={industry}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OTHER INDUSTRIES */}
      <section className="section bg-navy-50">
        <div className="container-x">
          <h2 className="text-2xl font-black text-navy">Explore other industries</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="card-hover group overflow-hidden rounded-lg border border-navy/10 bg-white"
              >
                <div className="h-28 overflow-hidden border-b border-navy/5 bg-navy-50">
                  <img
                    src={`/mockups/${ind.slug}.svg`}
                    alt={`${ind.name} mockup`}
                    loading="lazy"
                    className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy group-hover:text-gold">{ind.name}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                    View
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
