"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { industries } from "../data/industries";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-navy text-lg font-black text-white">
            K
          </span>
          <span className="text-xl font-black tracking-tight text-navy">
            KANE<span className="text-gold">IMPEX</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-sm font-semibold text-navy/80 hover:text-gold">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-navy/80 hover:text-gold">
              Industries <ChevronDown className="h-4 w-4" />
            </button>
            {drop && (
              <div className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-1 rounded-lg border border-navy/10 bg-white p-3 shadow-xl">
                  {industries.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      className="rounded-md px-3 py-2 text-sm font-medium text-navy/80 hover:bg-navy-50 hover:text-gold"
                    >
                      {ind.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/#services" className="text-sm font-semibold text-navy/80 hover:text-gold">
            Services
          </Link>
          <Link href="/#about" className="text-sm font-semibold text-navy/80 hover:text-gold">
            About
          </Link>
          <Link href="/request-a-quote" className="btn-primary">
            Request a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-navy/10 bg-white lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            <Link href="/" onClick={() => setOpen(false)} className="py-2 font-semibold">
              Home
            </Link>
            <p className="pt-2 text-xs font-bold uppercase tracking-wider text-navy/40">
              Industries
            </p>
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                onClick={() => setOpen(false)}
                className="py-1.5 pl-2 text-sm text-navy/80"
              >
                {ind.name}
              </Link>
            ))}
            <Link
              href="/request-a-quote"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
