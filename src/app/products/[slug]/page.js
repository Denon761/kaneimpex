import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  ClipboardList,
  Package,
  Palette,
  Truck,
} from "lucide-react";
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
    title: `${cat.name} Manufacturer | Custom ${cat.name}`,
    description: cat.description,
  };
}

// Ordering steps shown on every product page.
const orderSteps = [
  {
    icon: ClipboardList,
    title: "Share Your Requirements",
    desc: "Style codes, quantities, sizes, fabrics and branding.",
  },
  {
    icon: Palette,
    title: "Design & Sampling",
    desc: "We prepare artwork and a pre-production sample for approval.",
  },
  {
    icon: Package,
    title: "Bulk Production",
    desc: "Full production run with in-line quality control.",
  },
  {
    icon: Truck,
    title: "Worldwide Delivery",
    desc: "Packed to your spec and shipped to your door.",
  },
];

export default async function ProductCategoryPage({ params }) {
  const { slug } = await params;
  const category = getProductCategory(slug);
  if (!category) notFound();

  const others = productCategories
    .filter((c) => c.slug !== category.slug)
    .slice(0, 4);

  const quoteHref = `/request-a-quote?industry=${encodeURIComponent(category.name)}`;

  return (
    <>
      {/* OVERVIEW — full-width navy band: info left, product photo right */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,116,212,0.35),transparent_55%)]" />

        <div className="container-wide relative grid items-center gap-x-14 gap-y-10 py-10 lg:grid-cols-[1.15fr_1fr] lg:py-14">
          <div>
            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white/50">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/#products" className="transition hover:text-white">
                Products
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/80">{category.name}</span>
            </nav>

            <h1 className="mt-6 text-3xl font-bold uppercase leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              {category.name}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65">
              {category.description}
            </p>

            {/* Feature checklist */}
            <ul className="mt-7 grid max-w-xl gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {category.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm font-medium text-white/85"
                >
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Quick facts */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                category.products.length
                  ? `${category.products.length} Ready Designs`
                  : "Made to Order",
                "100% Customizable",
                "Bulk B2B Orders",
              ].map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-white/20 px-3.5 py-1.5 text-[11px] font-semibold text-white/75"
                >
                  {m}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={quoteHref} className="btn-primary">
                Request a Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/#products" className="btn-light">
                All Products <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Cover photo on a white card */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-navy-900/50">
            <SmartImage
              src={category.cover}
              fallback="/banners/hero.svg"
              alt={category.name}
              eager
              className="aspect-[4/4.5] w-full object-contain p-6"
            />
          </div>
        </div>
      </section>

      {/* STYLES GRID */}
      <section className="bg-navy-50 py-12 sm:py-16">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4 pb-8">
            <div>
              <p className="eyebrow">Available Designs</p>
              <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-navy sm:text-3xl">
                {category.name} Styles
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-navy/55">
              Every design below is a starting point. Reference its style code
              in your enquiry and we&apos;ll adapt colours, fabrics and branding
              to your brand.
            </p>
          </div>

          {category.products.length === 0 && (
            <div className="rounded-2xl border border-navy/10 bg-white p-8 text-center">
              <h3 className="text-lg font-bold text-navy">
                Style gallery coming soon
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-navy/55">
                Every {category.name.toLowerCase()} order is made to your
                specification. Send us your requirements and we&apos;ll share
                designs, fabrics and samples tailored to your brand.
              </p>
              <Link href={quoteHref} className="btn-primary mt-6">
                Request a Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.products.map((product) => (
              <div
                key={product.styleCode}
                className="card-hover group flex flex-col rounded-3xl border border-navy/10 bg-white p-4"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-navy-900/85 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-white backdrop-blur">
                    {product.styleCode}
                  </span>
                  <SmartImage
                    src={product.image}
                    fallback="/banners/hero.svg"
                    alt={product.name}
                    className="aspect-[3/4] w-full object-contain p-3 transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-3 flex flex-1 flex-col border-t border-navy/10 pt-3">
                  <h3 className="text-sm font-extrabold text-navy-900">{product.name}</h3>
                  <p className="mt-1 flex-1 text-xs leading-relaxed text-navy/55 line-clamp-2">
                    {product.desc}
                  </p>
                  <Link
                    href={`/request-a-quote?product=${encodeURIComponent(product.name)}&industry=${encodeURIComponent(category.name)}`}
                    className="btn-primary mt-3 w-full px-4 py-2.5 text-xs shadow-none"
                  >
                    Request a Quote <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW ORDERING WORKS */}
      <section className="py-12 sm:py-16">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4 pb-8">
            <div>
              <p className="eyebrow">Simple Process</p>
              <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-navy sm:text-3xl">
                How Ordering Works
              </h2>
            </div>
            <span className="flex items-center gap-2 text-sm font-semibold text-navy/60">
              <BadgeCheck className="h-4 w-4 text-brand" />
              No obligation, quotes are free
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {orderSteps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-navy/10 bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-navy-50 text-navy">
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-3xl font-bold text-navy/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-navy">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-navy/55">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER CATEGORIES — dark band */}
      <section className="bg-navy-900 py-14 text-white sm:py-16">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
            <div>
              <p className="eyebrow eyebrow-light">Explore more</p>
              <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                Other <span className="text-brand">Categories</span>
              </h2>
            </div>
            <Link
              href="/#products"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60 transition hover:text-white"
            >
              View All
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
