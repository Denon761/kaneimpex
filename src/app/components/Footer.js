import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Asterisk, ArrowUpRight, ArrowUp } from "lucide-react";
import { productCategories } from "../data/products";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      {/* CTA row */}
      <div className="container-wide flex flex-wrap items-end justify-between gap-x-16 gap-y-8 py-14 lg:py-16">
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
            <span className="h-1.5 w-1.5 bg-brand" />
            Have a project in mind?
          </p>
          <h2 className="mt-4 max-w-xl text-3xl leading-[1.1] text-white sm:text-4xl">
            Let&apos;s kit out your team{" "}
            <span className="text-white/40">from first sample to final delivery.</span>
          </h2>
        </div>
        <Link
          href="/request-a-quote"
          className="flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-navy transition hover:bg-white/90"
        >
          Request a Quote
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </Link>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide grid gap-x-10 gap-y-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Asterisk className="h-7 w-7 text-brand" strokeWidth={2.5} />
              <span className="text-lg font-semibold tracking-tight text-white">
                Kaneimpex<sup className="text-[9px] font-bold text-white/50">®</sup>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              B2B manufacturer &amp; supplier of custom sportswear and uniforms.
              Premium quality, custom designs and reliable worldwide delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["OEM", "ODM", "Private Label"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-1.5 w-1.5 bg-brand" />
              Products
            </p>
            <ul className="space-y-2.5 text-sm">
              {productCategories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="group inline-flex items-center gap-1.5 text-white/50 transition hover:text-white"
                  >
                    {cat.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-1.5 font-semibold text-brand-light transition hover:text-white"
                >
                  All Products <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-1.5 w-1.5 bg-brand" />
              Company
            </p>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-white/50 transition hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-white/50 transition hover:text-white">Services</Link></li>
              <li><Link href="/factory" className="text-white/50 transition hover:text-white">Factory</Link></li>
              <li><Link href="/quality-control" className="text-white/50 transition hover:text-white">Quality Control</Link></li>
              <li><Link href="/certifications" className="text-white/50 transition hover:text-white">Certifications</Link></li>
              <li><Link href="/faq" className="text-white/50 transition hover:text-white">FAQ</Link></li>
              <li><Link href="/blog" className="text-white/50 transition hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="text-white/50 transition hover:text-white">Contact Us</Link></li>
              <li><Link href="/request-a-quote" className="text-white/50 transition hover:text-white">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-1.5 w-1.5 bg-brand" />
              Get in Touch
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:info@kenimpex.co.uk"
                  className="flex items-start gap-3 text-white/50 transition hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  info@kenimpex.co.uk
                </a>
              </li>
              <li>
                <a
                  href="tel:+447587579766"
                  className="flex items-start gap-3 text-white/50 transition hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  (+44) 07587 579766
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                Reliable worldwide delivery
              </li>
              <li className="flex items-start gap-3 text-white/50">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                Global manufacturing &amp; supply
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Oversized studio-style wordmark — SVG so it always stretches the full footer width */}
      <div className="container-wide select-none pt-6" aria-hidden="true">
        <svg viewBox="0 0 1200 150" className="w-full">
          <text
            x="600"
            y="128"
            textAnchor="middle"
            textLength="1200"
            lengthAdjust="spacingAndGlyphs"
            fontSize="160"
            className="fill-white/[0.06] font-sans font-semibold tracking-tight"
          >
            KANEIMPEX
          </text>
        </svg>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Kaneimpex. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/shipping" className="transition hover:text-white">Shipping Policy</Link>
            <Link href="/returns" className="transition hover:text-white">Returns &amp; Refunds</Link>
            <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms &amp; Conditions</Link>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 font-semibold text-white/60 transition hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
