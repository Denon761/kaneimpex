"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { productCategories, totalProductCount } from "../data/products";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between lg:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo/logo.png"
            alt="Ken Impex"
            className="h-7 w-auto brightness-0 lg:h-8"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          <Link href="/" className="text-[13px] font-medium text-navy/70 hover:text-navy">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <Link
              href="/#products"
              className="relative flex items-start gap-1 text-[13px] font-medium text-navy/70 hover:text-navy"
            >
              Products
              <span className="rounded-full bg-brand px-1.5 py-px text-[9px] font-bold leading-tight text-white">
                {totalProductCount}
              </span>
              <ChevronDown className="mt-0.5 h-3.5 w-3.5" />
            </Link>
            {drop && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-navy/10 bg-white p-3 shadow-xl">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}`}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-navy/70 hover:bg-navy-50 hover:text-brand"
                    >
                      {cat.name}
                    </Link>
                  ))}
                  <Link
                    href="/#products"
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-brand hover:bg-navy-50"
                  >
                    All Products →
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/#services" className="text-[13px] font-medium text-navy/70 hover:text-navy">
            Services
          </Link>
          <Link href="/#about" className="text-[13px] font-medium text-navy/70 hover:text-navy">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA pill */}
          <Link
            href="/request-a-quote"
            className="flex items-center gap-1.5 rounded-full border border-navy/15 bg-white py-1 pl-3 pr-1 text-xs font-semibold text-navy transition hover:border-navy lg:gap-2 lg:py-1.5 lg:pl-4 lg:pr-1.5 lg:text-[13px]"
          >
            Request a Quote
            <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white lg:h-7 lg:w-7">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-navy/10 bg-white lg:hidden">
          <div className="container-wide flex flex-col gap-1 py-4">
            <Link href="/" onClick={() => setOpen(false)} className="py-2 font-semibold">
              Home
            </Link>
            <Link href="/#products" onClick={() => setOpen(false)} className="py-2 font-semibold">
              Products
            </Link>
            <p className="pt-2 text-xs font-bold uppercase tracking-wider text-navy/40">
              Categories
            </p>
            {productCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                onClick={() => setOpen(false)}
                className="py-1.5 pl-2 text-sm text-navy/80"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/request-a-quote"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              Request a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
