import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Blog & Guides | Kaneimpex",
  description:
    "Buying guides and manufacturing insights from Kaneimpex — sublimation vs screen printing, choosing uniform fabrics, and ordering team kits in bulk.",
};

const posts = [
  {
    tag: "Buying Guide",
    title: "Sublimation vs Screen Printing: Which Is Right for Your Kit?",
    excerpt:
      "The two most common decoration methods explained — and how to pick the right one for your team wear or merch line.",
    body: [
      "Sublimation dyes the design directly into polyester fabric, so colours cover the entire garment edge-to-edge and never crack, peel or fade. It's the best choice for team kits with complex designs, gradients, sponsor logos and numbering, because every element is printed in one pass at no extra cost per colour.",
      "Screen printing lays ink on top of the fabric and works on cotton as well as polyester. It excels at bold, simple logos in a few solid colours — think merch tees and hoodies — and delivers a classic, slightly raised finish that many streetwear brands prefer.",
      "The short version: choose sublimation for performance sportswear and multi-colour designs on polyester; choose screen printing for cotton-rich casual wear with simple branding. Unsure? Send us your artwork and we'll recommend the right method with your quote.",
    ],
  },
  {
    tag: "Fabric Guide",
    title: "How to Choose the Right Fabric for Your Uniform Program",
    excerpt:
      "GSM, poly-cotton blends, wicking knits — what the jargon means and what actually matters for each uniform type.",
    body: [
      "Fabric weight is measured in GSM (grams per square metre). Lightweight 140–160 GSM knits suit soccer and training wear where airflow matters; 250+ GSM heavyweight knits give rugby shirts and hoodies their durability and structure.",
      "Fibre content drives behaviour. Polyester wicks sweat, holds sublimated colour and survives industrial laundering — ideal for sportswear and medical uniforms. Cotton feels softer and breathes naturally, which is why it dominates casual wear and chef coats. Poly-cotton blends split the difference for corporate shirts and workwear.",
      "Finally, match the finish to the job: antimicrobial treatments for scrubs, stain resistance for hospitality, hi-vis certified fluorescents for site crews, and ripstop weaves for tactical and workwear. Every Kaneimpex quote specifies the exact fabric, weight and finish so you know what you're getting before production starts.",
    ],
  },
  {
    tag: "Ordering Tips",
    title: "Ordering Team Kits in Bulk: A Step-by-Step Checklist",
    excerpt:
      "From collecting sizes to approving samples — how to run a smooth bulk order and avoid the common pitfalls.",
    body: [
      "Start with sizes, not designs. Collect every player's size before you finalise quantities, and order one or two spares per size group — late joiners are guaranteed. A clear size list up front prevents the most common cause of reorders.",
      "Approve a pre-production sample before the bulk run. Check the fit, fabric feel, colour accuracy and logo placement on a real garment, not just a mockup. Bulk production should only start once the sample is signed off.",
      "Plan your timeline backwards from the day you need the kit in hand: shipping time, plus 2–4 weeks production, plus sampling and artwork approval. Starting 8–10 weeks ahead of the season keeps everything comfortable — and gives room for a second sample if you want changes.",
    ],
  },
];

export default function BlogPage() {
  return (
    <LegalPage title="Guides & insights." eyebrow="Blog">
      <div className="space-y-4">
        {posts.map((post) => (
          <details
            key={post.title}
            className="group rounded-2xl border border-navy/10 bg-white p-6"
          >
            <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="inline-block rounded-full bg-navy-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                {post.tag}
              </span>
              <span className="mt-3 flex items-start justify-between gap-4">
                <span className="text-lg font-bold leading-snug text-navy-900">
                  {post.title}
                </span>
                <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-brand transition group-open:rotate-180" />
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-navy/55">
                {post.excerpt}
              </span>
            </summary>
            <div className="mt-4 space-y-3 border-t border-navy/10 pt-4 text-sm leading-relaxed text-navy/65">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </details>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <p className="text-sm text-navy/60">
          Have a topic you&apos;d like us to cover?
        </p>
        <Link href="/contact" className="btn-outline">
          Suggest a Topic <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </LegalPage>
  );
}
