import { Suspense } from "react";
import { Clock, Globe, Shield, Sparkles, Mail, Phone } from "lucide-react";
import QuoteForm from "../components/QuoteForm";
import SmartImage from "../components/SmartImage";

export const metadata = {
  title: "Request a Quote",
  description:
    "Request a custom quote for uniforms, sportswear and apparel from Kaneimpex. Tell us your requirements and get a tailored B2B offer.",
};

const perks = [
  { icon: Clock, t: "Fast Response", d: "Reply within 1 business day." },
  { icon: Sparkles, t: "Free Samples", d: "Available on qualifying orders." },
  { icon: Shield, t: "No Obligation", d: "Get pricing with no commitment." },
  { icon: Globe, t: "Worldwide", d: "We ship and support globally." },
];

export default function RequestQuotePage() {
  return (
    <>
      {/* HERO — dark rounded panel, same frame as the rest of the site */}
      <section className="container-wide pt-3 sm:pt-5">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 text-white">
          <SmartImage
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1600&q=70"
            fallback="/banners/hero.svg"
            alt="Rolls of coloured fabric"
            eager
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-30 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/75 to-navy-900/45" />

          <div className="relative px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
            <p className="eyebrow eyebrow-light">Get started</p>
            <h1 className="mt-5 max-w-3xl text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              Request a Quote.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">
              Share your requirements — quantities, fabrics, branding — and our
              team will prepare a tailored quote for your custom uniform or
              sportswear program.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="section">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <Suspense fallback={<div className="h-96 rounded-2xl bg-navy-50" />}>
            <QuoteForm />
          </Suspense>

          <aside className="space-y-4">
            {/* Perks */}
            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <p className="eyebrow">Why Kaneimpex</p>
              <ul className="mt-5 space-y-5">
                {perks.map((p) => (
                  <li key={p.t} className="dotted-rule flex items-start gap-4 pb-5 last:bg-none last:pb-0">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-navy/10 text-brand">
                      <p.icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy">{p.t}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-navy/55">{p.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct contact card */}
            <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-6 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,68,46,0.2),transparent_55%)]" />
              <div className="relative">
                <p className="eyebrow eyebrow-light">Prefer to talk?</p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  Reach out directly and we&apos;ll take it from there.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  <a
                    href="mailto:info@kenimpex.co.uk"
                    className="flex items-center gap-2.5 text-white/80 transition hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-brand-light" />
                    info@kenimpex.co.uk
                  </a>
                  <a
                    href="tel:+447587579766"
                    className="flex items-center gap-2.5 text-white/80 transition hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-brand-light" />
                    (+44) 07587 579766
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
