import Link from "next/link";
import { ArrowUpRight, Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Contact Us | Kaneimpex",
  description:
    "Get in touch with Kaneimpex — email, phone and quote requests for custom sportswear and uniform manufacturing, worldwide.",
};

const channels = [
  {
    icon: Mail,
    title: "Email",
    detail: "info@kenimpex.co.uk",
    sub: "Best for quotes, artwork files and order details.",
    href: "mailto:info@kenimpex.co.uk",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    detail: "(+44) 07587 579766",
    sub: "Talk directly with our sales team.",
    href: "tel:+447587579766",
  },
  {
    icon: Clock,
    title: "Response Time",
    detail: "Within 1 business day",
    sub: "Every enquiry gets a personal reply.",
  },
  {
    icon: Globe,
    title: "Coverage",
    detail: "Worldwide supply",
    sub: "We ship and support customers globally.",
  },
];

export default function ContactPage() {
  return (
    <LegalPage title="Let's talk about your order." eyebrow="Contact">
      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map((c) => {
          const inner = (
            <>
              <span className="grid h-11 w-11 place-items-center rounded-full border border-navy/10 text-brand">
                <c.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h2 className="mt-4 text-base font-bold text-navy-900">{c.title}</h2>
              <p className="mt-1 text-sm font-semibold text-brand">{c.detail}</p>
              <p className="mt-1 text-sm leading-relaxed text-navy/55">{c.sub}</p>
            </>
          );
          return c.href ? (
            <a
              key={c.title}
              href={c.href}
              className="card-hover block rounded-2xl border border-navy/10 bg-white p-6"
            >
              {inner}
            </a>
          ) : (
            <div key={c.title} className="rounded-2xl border border-navy/10 bg-white p-6">
              {inner}
            </div>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-8 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.3),transparent_55%)]" />
        <div className="relative flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow eyebrow-light">Ready for pricing?</p>
            <h2 className="mt-3 text-xl font-bold">
              The fastest way to a detailed offer is the quote form.
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/60">
              Tell us your product, quantity and customization needs and we&apos;ll
              come back with fabrics, pricing and timelines.
            </p>
          </div>
          <Link href="/request-a-quote" className="btn-primary">
            Request a Quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="flex items-start gap-3 text-sm text-navy/60">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
        <p>
          Global manufacturing &amp; supply — our team supports customers across
          the UK, Europe, North America, the Middle East and beyond.
        </p>
      </div>
    </LegalPage>
  );
}
