import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpen,
  Building2,
  ChevronRight,
  Factory,
  Globe,
  HelpCircle,
  Mail,
  Newspaper,
  PenTool,
  Phone,
  Settings,
  ShieldCheck,
  Trophy,
  Truck,
  Users,
} from "lucide-react";
import { productCategories } from "./data/products";
import SmartImage from "./components/SmartImage";

// ── Page data (mirrors the reference flyer layout) ──────────────────

const heroHighlights = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    sub: "International Standards",
  },
  {
    icon: PenTool,
    title: "Custom Designs",
    sub: "Bring Your Ideas to Life",
  },
  {
    icon: Globe,
    title: "Global Supply",
    sub: "Reliable Worldwide Delivery",
  },
  {
    icon: Users,
    title: "B2B Solutions",
    sub: "Built for Your Business",
  },
];

const resources = [
  { icon: Building2, label: "About Us", href: "/about" },
  { icon: Factory, label: "Factory", href: "/factory" },
  { icon: ShieldCheck, label: "Quality Control", href: "/quality-control" },
  { icon: Award, label: "Certifications", href: "/certifications" },
  { icon: HelpCircle, label: "FAQ", href: "/faq" },
  { icon: Newspaper, label: "Blog", href: "/blog" },
  { icon: BookOpen, label: "Catalog", href: "/#products" },
  { icon: Phone, label: "Contact Us", href: "/contact" },
  { icon: Mail, label: "Request a Quote", href: "/request-a-quote" },
];

const promises = [
  { icon: Trophy, title: "High Quality Products", sub: "Built to Perform" },
  { icon: Settings, title: "Custom Solutions", sub: "Designed for Your Brand" },
  { icon: Truck, title: "On-Time Delivery", sub: "Worldwide Shipping" },
  { icon: BadgeCheck, title: "Competitive Prices", sub: "Best Value for Your Business" },
];


export default function Home() {
  return (
    <>
      {/* HERO — full-width dark navy band with headline + product shots */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,116,212,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.18),transparent_45%)]" />

        <div className="container-wide relative grid items-center gap-x-10 gap-y-10 py-10 lg:grid-cols-[1.1fr_1fr] lg:py-12">
            {/* Headline */}
            <div>
              <p className="eyebrow eyebrow-light">
                Kaneimpex — Est. Manufacturer &amp; Exporter
              </p>
              <h1 className="mt-6 whitespace-nowrap text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                Sportswear &amp; Uniforms
              </h1>
              <p className="mt-4 text-base font-semibold uppercase tracking-[0.14em] text-white/80 sm:text-lg">
                B2B Manufacturer &amp; Supplier
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
                From sublimated team kits to medical scrubs, workwear and
                tactical gear — we design, manufacture and deliver premium
                custom apparel in bulk, with your branding on every stitch.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/request-a-quote" className="btn-primary">
                  Request a Quote <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/#products" className="btn-light">
                  View Products <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product banner — composed uniform shot over the navy band */}
            <Link href="/#products" className="group block">
              <SmartImage
                src="/banners/bannerimage.png"
                fallback="/banners/hero.svg"
                alt="Custom basketball, rugby, soccer and American football uniforms"
                eager
                className="mx-auto w-full max-w-xl object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] transition duration-500 group-hover:scale-[1.03] lg:ml-auto lg:mr-0"
              />
            </Link>
        </div>
      </section>

      {/* FEATURE BADGES — strip directly under the hero */}
      <section className="border-b border-navy/10">
        <div className="container-wide grid grid-cols-2 gap-x-6 gap-y-8 py-8 lg:grid-cols-4">
          {heroHighlights.map((h) => (
            <div key={h.title} className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-navy/15 bg-navy-50 text-navy">
                <h.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-navy">
                  {h.title}
                </p>
                <p className="mt-0.5 text-xs text-navy/55">{h.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID — catalog categories in the flyer card style */}
      <section id="products" className="bg-navy-50 py-12 sm:py-16">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4 pb-8">
            <div>
              <p className="eyebrow">Our Products</p>
              <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-navy sm:text-3xl">
                What We Manufacture
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-navy/55">
              Every product is made to order — your fabrics, colours, branding
              and packaging, produced in bulk for B2B supply.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => (
              <div
                key={cat.slug}
                className="card-hover flex flex-col rounded-2xl border border-navy/10 bg-white p-5"
              >
                {/* Card header */}
                <Link
                  href={`/products/${cat.slug}`}
                  className="catalog-head group justify-between"
                >
                  <h3 className="text-sm font-bold uppercase tracking-wide text-navy group-hover:text-brand">
                    {cat.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-navy-50 px-2.5 py-1 text-[10px] font-bold text-navy/60">
                    {cat.products.length} Styles
                  </span>
                </Link>

                {/* Bullets on the left, photo flush to the card's right edge */}
                <div className="mt-4 flex min-h-[260px] flex-1 items-center gap-3">
                  <ul className="flex-1 space-y-2">
                    {cat.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-1.5 text-[13px] font-medium leading-snug text-navy/70"
                      >
                        <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/products/${cat.slug}`}
                    className="group -mr-5 block w-48 shrink-0 self-stretch sm:w-56"
                  >
                    <SmartImage
                      src={cat.cover}
                      fallback="/banners/hero.svg"
                      alt={cat.name}
                      className="h-full w-full object-contain object-right transition duration-500 group-hover:scale-105"
                    />
                  </Link>
                </div>

                {/* Card footer actions */}
                <div className="mt-4 flex items-center gap-2 border-t border-navy/10 pt-4">
                  <Link
                    href={`/request-a-quote?product=${encodeURIComponent(cat.name)}`}
                    className="btn-primary flex-1 px-4 py-2.5 text-xs shadow-none"
                  >
                    Request a Quote <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="btn-outline px-4 py-2.5 text-xs"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}

            {/* CTA card completes the 4-column grid */}
            <Link
              href="/request-a-quote"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-navy-900 p-6 text-white"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,116,212,0.4),transparent_60%)]" />
              <div className="relative">
                <p className="eyebrow eyebrow-light">Custom Orders</p>
                <h3 className="mt-4 text-xl font-bold leading-snug">
                  Don&apos;t see what you need?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  We manufacture to your exact spec — send us your design,
                  fabric and quantity requirements for a tailored quote.
                </p>
              </div>
              <span className="relative mt-6 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
                Request a Quote
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition group-hover:border-brand group-hover:bg-brand">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* RESOURCES — quick icon links */}
      <section id="about" className="py-12 sm:py-16">
        <div className="container-wide">
          <p className="eyebrow mx-auto w-fit">Resources</p>
          <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5 lg:grid-cols-9">
            {resources.map((r) => (
              <Link
                key={r.label}
                href={r.href}
                className="group flex flex-col items-center gap-3 text-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-navy/15 bg-navy-50 text-navy transition group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <r.icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <span className="text-xs font-semibold text-navy/75 transition group-hover:text-navy">
                  {r.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE BAND — navy strip above the footer */}
      <section className="bg-navy-900 text-white">
        <div className="container-wide grid grid-cols-1 gap-x-6 gap-y-6 border-b border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <div key={p.title} className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-white">
                <p.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide">{p.title}</p>
                <p className="mt-0.5 text-xs text-white/55">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
