import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Globe,
  Mail,
  Phone,
  Plus,
} from "lucide-react";
import { industries, industryImage, mockupFor } from "./data/industries";
import SmartImage from "./components/SmartImage";
import IndustryCard from "./components/IndustryCard";

const services = [
  "OEM Manufacturing",
  "ODM Manufacturing",
  "Private Label",
  "Custom Design",
  "Pattern Making",
  "Sample Development",
  "Sublimation Printing",
  "Screen Printing",
  "Embroidery",
  "Heat Transfer Printing",
  "Woven Labels",
  "Custom Packaging",
];

const fabrics = [
  "Polyester", "Cotton", "Cotton/Poly Blend", "Spandex", "Nylon",
  "Recycled Fabric", "Moisture Wicking Fabric", "Anti-Bacterial Fabric",
];

const served = [
  "Sports Brands", "Wholesalers", "Importers", "Distributors", "Retail Chains",
  "Schools & Universities", "Sports Clubs", "Government Departments", "NGOs", "Corporate Companies",
];

const processSteps = ["Design", "Manufacture", "Deliver"];

const totalProducts = industries.reduce((n, ind) => n + ind.products.length, 0);

const stats = [
  {
    value: `${industries.length}`,
    label: "Industries covered",
    desc: "From sportswear and medical to corporate, school and tactical uniforms.",
  },
  {
    value: `${Math.floor(totalProducts / 10) * 10}+`,
    label: "Product lines",
    desc: "Every single item fully customizable and available for bulk B2B orders.",
  },
  {
    value: `${services.length}+`,
    label: "Manufacturing services",
    desc: "OEM, ODM, private label, sublimation, embroidery and more under one roof.",
  },
  {
    value: "100%",
    label: "Custom made",
    desc: "Designed around your brand — fabrics, fits, colors, labels and packaging.",
  },
];

// Industries featured in the portrait image strip.
const stripSlugs = ["sportswear", "medical-uniforms", "hospitality-uniforms", "military-tactical"];

export default function Home() {
  const stripIndustries = stripSlugs
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* HERO — dark rounded panel over the page background */}
      <section className="container-wide pt-3 sm:pt-5">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 text-white">
          {/* Background image */}
          <SmartImage
            src="https://images.unsplash.com/photo-1560796952-f1c9b838544c?auto=format&fit=crop&w=1800&q=70"
            fallback="/banners/hero.svg"
            alt="Garment stitching and uniform manufacturing"
            eager
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-50 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-navy-900/30" />

          <div className="relative flex min-h-[560px] flex-col justify-between px-6 py-10 sm:px-10 lg:min-h-[640px] lg:px-14 lg:py-12">
            <div>
              <p className="eyebrow eyebrow-light">
                B2B Sportswear &amp; Uniform Manufacturer
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                Custom Sportswear &amp; Uniforms, Made for Growing Brands.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                From sublimated team kits to medical scrubs and workwear — we
                design, manufacture and deliver premium custom apparel in bulk,
                with your branding on every stitch.
              </p>
            </div>

            <div className="mt-16 flex flex-wrap items-end justify-between gap-x-10 gap-y-8">
              {/* Process markers */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {processSteps.map((step) => (
                  <span
                    key={step}
                    className="flex items-center gap-1.5 text-sm font-medium text-white/80"
                  >
                    <Plus className="h-4 w-4 text-brand-light" strokeWidth={2.5} />
                    {step}
                  </span>
                ))}
              </div>

              {/* Right block: supporting copy + CTAs */}
              <div className="max-w-sm">
                <p className="text-base font-medium leading-snug text-white/90 sm:text-lg">
                  Team Kits, Scrubs, Workwear, Corporate, School &amp; Tactical
                  Uniforms
                  <span className="text-white/60"> — for teams, brands and organizations worldwide</span>
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/request-a-quote" className="btn-primary">
                    Request a Quote <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link href="/products" className="btn-light">
                    View Products <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED-BY MARQUEE */}
      <section className="mt-5 border-y border-navy/10">
        <div className="container-wide flex items-center gap-6 py-5">
          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <Asterisk className="h-6 w-6 text-navy" strokeWidth={1.5} />
            <p className="max-w-[200px] text-[11px] font-bold uppercase leading-tight tracking-wider text-navy">
              We supply brands &amp; organizations worldwide
            </p>
          </div>
          <div className="relative flex-1 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />
            <div className="flex w-max animate-marquee">
              {[...served, ...served].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="mx-6 flex items-center gap-4 whitespace-nowrap text-sm font-bold uppercase tracking-wider text-navy/35"
                >
                  {name}
                  <Asterisk className="h-4 w-4 text-brand/50" strokeWidth={2} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE — big statement */}
      <section id="about" className="section">
        <div className="container-wide">
          <p className="eyebrow">Who we are</p>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
            <h2 className="max-w-3xl text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
              We are a B2B manufacturer of custom sportswear &amp; uniforms{" "}
              <span className="text-navy/35">
                — from team kits and medical scrubs to corporate, school and
                tactical apparel.
              </span>
            </h2>
            <Link
              href="/request-a-quote"
              className="dotted-rule group flex items-center gap-2 pb-2 text-xs font-bold uppercase tracking-wider text-navy hover:text-brand"
            >
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              About Kaneimpex
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-navy/55 sm:text-base">
            We design, produce and deliver garments end-to-end — performance
            fabrics, sublimation printing, embroidery, OEM / ODM and private
            label production — with reliable bulk delivery for teams, brands,
            schools and organizations worldwide.
          </p>

          {/* Portrait image strip */}
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stripIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-navy-100"
              >
                <SmartImage
                  src={industryImage(ind)}
                  fallback={mockupFor(ind)}
                  alt={ind.name}
                  className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-navy backdrop-blur">
                  {ind.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-wide">
          <p className="eyebrow">By the numbers</p>
          <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="dotted-rule pb-4 text-5xl font-semibold tracking-tight text-navy lg:text-6xl">
                  {s.value}
                </p>
                <p className="mt-4 text-sm font-bold text-navy">{s.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-navy/55">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES — dark section */}
      <section id="industries" className="bg-navy-900 py-16 text-white sm:py-20 lg:py-24">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
            <div>
              <p className="eyebrow eyebrow-light">Industries</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]">
                What We <span className="text-brand">Manufacture</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/55">
              We craft high-quality custom uniforms and apparel for every
              industry — fully customizable and built for bulk B2B ordering.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <IndustryCard key={ind.slug} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES + FABRICS */}
      <section id="services" className="section">
        <div className="container-wide grid gap-x-16 gap-y-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Manufacturing Services</h2>
            <div className="mt-8 grid gap-x-10 sm:grid-cols-2">
              {services.map((s, i) => (
                <div
                  key={s}
                  className="dotted-rule flex items-baseline gap-4 py-3.5"
                >
                  <span className="text-[11px] font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-navy">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Materials</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Fabrics We Work With</h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {fabrics.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-navy/15 px-4 py-2 text-xs font-semibold text-navy/75"
                >
                  {f}
                </span>
              ))}
              <span className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white">
                &amp; More
              </span>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl bg-navy-100">
              <SmartImage
                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=70"
                fallback="/banners/hero.svg"
                alt="Rolls of coloured fabric"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — dark statement panel with photo backdrop */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 text-white">
            <SmartImage
              src="https://images.unsplash.com/photo-1591534577302-1696205bb2c4?auto=format&fit=crop&w=1600&q=70"
              fallback="/banners/hero.svg"
              alt="Embroidery and garment production machinery"
              className="absolute inset-0 h-full w-full scale-105 object-cover opacity-30 blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,68,46,0.2),transparent_55%)]" />

            <div className="relative px-6 py-16 text-center sm:px-12 lg:py-24">
              <p className="eyebrow eyebrow-light mx-auto w-fit">Get started</p>
              <h2 className="mx-auto mt-6 max-w-3xl text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
                Ready to build your{" "}
                <span className="text-brand">custom uniform</span> program?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                Tell us what you need — quantities, fabrics, branding — and our
                team will get back to you with a tailored quote and samples.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link href="/request-a-quote" className="btn-primary">
                  Request a Quote <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/products" className="btn-light">
                  Browse Catalog <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Direct contact row */}
              <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-white/10 pt-8 text-sm">
                <a
                  href="mailto:info@kenimpex.co.uk"
                  className="flex items-center gap-2.5 text-white/70 transition hover:text-white"
                >
                  <Mail className="h-4 w-4 text-brand-light" />
                  info@kenimpex.co.uk
                </a>
                <a
                  href="tel:+447587579766"
                  className="flex items-center gap-2.5 text-white/70 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-brand-light" />
                  (+44) 07587 579766
                </a>
                <span className="flex items-center gap-2.5 text-white/70">
                  <Globe className="h-4 w-4 text-brand-light" />
                  Worldwide delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
