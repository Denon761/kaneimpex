import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  PenTool,
  Globe,
  Users,
  CheckCircle2,
  Factory,
  Layers,
  Truck,
  BadgeCheck,
  Ruler,
} from "lucide-react";
import { industries, industryImage, mockupFor } from "./data/industries";
import SmartImage from "./components/SmartImage";

const features = [
  { icon: ShieldCheck, title: "Premium Quality", desc: "International standards" },
  { icon: PenTool, title: "Custom Designs", desc: "Bring your ideas to life" },
  { icon: Globe, title: "Global Supply", desc: "Reliable worldwide delivery" },
  { icon: Users, title: "B2B Solutions", desc: "Built for your business" },
];

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
  "Recycled Fabric", "Moisture Wicking", "Anti-Bacterial", "Ripstop", "Fleece",
];

const served = [
  "Sports Brands", "Wholesalers", "Importers", "Distributors", "Retail Chains",
  "Schools & Universities", "Sports Clubs", "Government Departments", "NGOs", "Corporate Companies",
];

const whyUs = [
  { icon: BadgeCheck, title: "High Quality Products", desc: "Built to perform" },
  { icon: PenTool, title: "Custom Solutions", desc: "Designed for your brand" },
  { icon: Truck, title: "On-Time Delivery", desc: "Worldwide shipping" },
  { icon: Ruler, title: "Competitive Prices", desc: "Best value for business" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-x relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <span className="eyebrow text-gold-light">
              B2B Manufacturer &amp; Supplier
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Sportswear &amp;{" "}
              <span className="text-gold-light">Uniforms</span>
              <br />
              built for your brand
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              Kaneimpex manufactures premium custom uniforms and sportswear for
              every industry — from healthcare and hospitality to sports,
              corporate and tactical. One partner, endless possibilities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/request-a-quote" className="btn-light">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#industries"
                className="btn-outline border-white/25 text-white hover:border-white hover:bg-white hover:text-navy"
              >
                Explore Industries
              </Link>
            </div>
          </div>

          {/* Banner image */}
          <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <SmartImage
              src="https://images.unsplash.com/photo-1560796952-f1c9b838544c?auto=format&fit=crop&w=1200&q=70"
              fallback="/banners/hero.svg"
              alt="Garment stitching and uniform manufacturing"
              eager
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-white/10">
          <div className="container-x grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
            {[
              { n: "8+", l: "Industry Verticals" },
              { n: "100%", l: "Custom Manufacturing" },
              { n: "50+", l: "Countries Served" },
              { n: "24/7", l: "B2B Support" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-3xl font-black text-white">{s.n}</p>
                <p className="mt-1 text-sm text-white/55">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* feature strip */}
        <div className="relative border-t border-white/10">
          <div className="container-x grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-gold-light">
                  <f.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{f.title}</p>
                  <p className="text-xs text-white/55">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What We Manufacture</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">
              Uniforms &amp; Apparel for Every Industry
            </h2>
            <p className="mt-4 text-navy/60">
              Explore our specialized product ranges. Every item is fully
              customizable and available for bulk B2B ordering.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="card-hover group overflow-hidden rounded-lg border border-navy/10 bg-white"
              >
                <div className="h-36 overflow-hidden border-b border-navy/5 bg-navy-50">
                  <SmartImage
                    src={industryImage(ind)}
                    fallback={mockupFor(ind)}
                    alt={ind.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-navy group-hover:text-gold">
                    {ind.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-navy/55">
                    {ind.tagline}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                    View products
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section bg-navy-50">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Manufacturing Services</p>
            <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">
              A full-service production partner
            </h2>
            <p className="mt-4 text-navy/60">
              From concept and pattern-making to printing, embroidery and custom
              packaging — we handle the entire manufacturing journey under one
              roof so your brand ships on time, every time.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {services.map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-navy/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Factory, t: "In-House Production", d: "Full control over quality and lead times." },
              { icon: Layers, t: "Premium Fabrics", d: "Performance and compliance-grade materials." },
              { icon: PenTool, t: "Custom Branding", d: "Embroidery, sublimation and printing." },
              { icon: Truck, t: "Global Logistics", d: "Reliable worldwide bulk shipping." },
            ].map((c) => (
              <div key={c.t} className="rounded-lg border border-navy/10 bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-md border border-navy/10 bg-navy-50 text-navy">
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-bold text-navy">{c.t}</h3>
                <p className="mt-1 text-sm text-navy/55">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FABRICS + SERVED */}
      <section id="about" className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Fabrics We Work With</p>
            <h2 className="mt-3 text-2xl font-black text-navy sm:text-3xl">
              The right material for every product
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {fabrics.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-navy/15 bg-navy-50 px-4 py-2 text-sm font-medium text-navy/80"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Industries We Serve</p>
            <h2 className="mt-3 text-2xl font-black text-navy sm:text-3xl">
              Trusted by businesses worldwide
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {served.map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-navy/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US STRIP */}
      <section className="border-y border-navy/10 bg-navy-50 py-12">
        <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w) => (
            <div key={w.title} className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-md border border-navy/10 bg-white text-navy">
                <w.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-bold text-navy">{w.title}</p>
                <p className="text-sm text-navy/55">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-xl bg-navy-900 px-8 py-16 text-center text-white sm:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_60%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-black sm:text-4xl">
                Ready to build your custom uniform program?
              </h2>
              <p className="mt-4 text-white/65">
                Tell us what you need and our team will get back to you with a
                tailored quote and samples.
              </p>
              <Link href="/request-a-quote" className="btn-light mt-8">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
