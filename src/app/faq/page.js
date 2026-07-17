import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "FAQ | Kaneimpex",
  description:
    "Answers to common questions about Kaneimpex — minimum order quantities, lead times, samples, customization, payment and worldwide shipping.",
};

const faqs = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "MOQs vary by product, but most team wear and uniform programs start from small club-sized runs. Tell us the product and quantity you have in mind and we'll confirm the MOQ in your quote.",
  },
  {
    q: "How long does production take?",
    a: "Sampling typically takes 7–10 days after artwork approval. Bulk production usually runs 2–4 weeks depending on order size and complexity, plus shipping time by air or sea.",
  },
  {
    q: "Can I get a sample before placing a bulk order?",
    a: "Yes. We produce a pre-production sample for your approval before any bulk run, and free samples are available on qualifying orders.",
  },
  {
    q: "Do you manufacture custom designs?",
    a: "Yes — that's our core business. Send us your tech pack or design files (OEM), or brief our design team and we'll develop the artwork and mockups for you (ODM). Unlimited colours are included with sublimation.",
  },
  {
    q: "Can you add our logo, names and numbers?",
    a: "Yes. Embroidery, sublimation, screen printing, heat transfer, tackle twill and chenille patches are all available. Team names, player names and numbering are included in the process for team kits.",
  },
  {
    q: "Do you offer private labelling?",
    a: "Yes. We supply custom woven neck labels, hang tags, size stickers and retail-ready packaging so garments arrive ready to sell under your own brand.",
  },
  {
    q: "Where do you ship?",
    a: "Worldwide. We ship by express courier, air freight or sea freight depending on your timeline and budget, with tracking and export documentation handled for you. See our Shipping Policy for details.",
  },
  {
    q: "What payment terms do you offer?",
    a: "Standard terms are a deposit to begin production with the balance due before dispatch. Exact terms are confirmed in your quotation and may vary for repeat and institutional customers.",
  },
  {
    q: "What if there's a problem with my order?",
    a: "Every garment passes final inspection before packing. If a manufacturing defect still reaches you, our Returns & Refunds policy covers repair, remake or refund of the affected pieces.",
  },
  {
    q: "How do I get a price?",
    a: "Use the Request a Quote form with your product, quantity and customization details, or email us directly. We reply within one business day with pricing and timelines.",
  },
];

export default function FaqPage() {
  return (
    <LegalPage title="Frequently asked questions." eyebrow="FAQ">
      <div className="space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-navy/10 bg-white px-6 py-4 open:pb-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-navy-900 [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronDown className="h-4 w-4 shrink-0 text-brand transition group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-navy/65">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <p className="text-sm text-navy/60">Still have a question?</p>
        <Link href="/contact" className="btn-primary">
          Contact Us <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </LegalPage>
  );
}
