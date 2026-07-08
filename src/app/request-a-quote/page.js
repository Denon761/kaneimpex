import { Suspense } from "react";
import { Clock, Globe, Shield, Sparkles } from "lucide-react";
import QuoteForm from "../components/QuoteForm";

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
      <section className="bg-navy-900 text-white">
        <div className="container-x py-16 text-center lg:py-20">
          <p className="eyebrow text-gold-light">Get Started</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Request a Quote</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Share your requirements and our team will prepare a tailored quote
            for your custom uniform or sportswear program.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <Suspense fallback={<div className="h-96 rounded-2xl bg-navy-50" />}>
            <QuoteForm />
          </Suspense>

          <aside className="space-y-4">
            {perks.map((p) => (
              <div
                key={p.t}
                className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold text-navy">{p.t}</p>
                  <p className="text-sm text-navy/60">{p.d}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
