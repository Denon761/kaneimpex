import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LegalPage, { Block } from "../components/LegalPage";

export const metadata = {
  title: "Factory | Kaneimpex",
  description:
    "Inside the Kaneimpex production facility — fabric sourcing, cutting, stitching, printing, embroidery and packing under one roof.",
};

const steps = [
  {
    n: "01",
    title: "Fabric Sourcing & Inspection",
    desc: "Fabrics are sourced from vetted mills and inspected for weight, shade and defects before a single panel is cut.",
  },
  {
    n: "02",
    title: "Pattern Making & Cutting",
    desc: "Digital patterns are graded across the full size range, then cut with precision to keep sizing consistent across the order.",
  },
  {
    n: "03",
    title: "Printing & Embroidery",
    desc: "In-house sublimation, screen printing and embroidery units apply your branding before assembly, so prints sit exactly where they should.",
  },
  {
    n: "04",
    title: "Stitching & Assembly",
    desc: "Dedicated stitching lines assemble each garment with the seam construction the product demands — flat-lock for sportswear, twin-needle for rugby, bartacks for workwear.",
  },
  {
    n: "05",
    title: "Quality Control",
    desc: "In-line checks during production plus a final piece-by-piece inspection covering measurements, stitching, print quality and packing accuracy.",
  },
  {
    n: "06",
    title: "Packing & Dispatch",
    desc: "Garments are pressed, folded, polybagged and cartoned to your packing list, then dispatched with tracked worldwide shipping.",
  },
];

export default function FactoryPage() {
  return (
    <LegalPage title="Inside our factory." eyebrow="Production">
      <Block heading="One Roof, Full Control">
        <p>
          Kaneimpex runs the full production chain in-house — from fabric
          inspection to final packing. Keeping every stage under one roof means
          shorter lead times, tighter quality control and a single team
          accountable for your order from start to finish.
        </p>
        <p>
          Our lines handle knits and wovens, sublimated and cut-and-sew
          construction, and order volumes from small club runs to large
          institutional programs.
        </p>
      </Block>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-navy/10 bg-white p-6">
            <p className="text-2xl font-bold text-brand">{s.n}</p>
            <h2 className="mt-3 text-base font-bold text-navy-900">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/quality-control" className="btn-primary">
          See Our Quality Process <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link href="/request-a-quote" className="btn-outline">
          Request a Quote <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </LegalPage>
  );
}
