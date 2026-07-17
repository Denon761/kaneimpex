import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import LegalPage, { Block } from "../components/LegalPage";

export const metadata = {
  title: "Quality Control | Kaneimpex",
  description:
    "How Kaneimpex controls quality — fabric inspection, in-line checks, final piece-by-piece inspection and pre-shipment review on every order.",
};

const checkpoints = [
  "Fabric weight, shade and defect inspection on arrival",
  "First-piece approval before each production run",
  "In-line stitching and measurement checks during assembly",
  "Print colour and placement verification against approved artwork",
  "Piece-by-piece final inspection of every garment",
  "Wash, stretch and print-durability spot tests",
  "Size-set audit across the full size range",
  "Packing list and labelling verification before dispatch",
];

export default function QualityControlPage() {
  return (
    <LegalPage title="Quality, checked at every stage." eyebrow="Quality Control">
      <Block heading="Our Approach">
        <p>
          Quality is not a final step at Kaneimpex — it is built into every
          stage of production. Each order passes through documented checkpoints
          from fabric arrival to final packing, so problems are caught where
          they start, not after the goods ship.
        </p>
        <p>
          Bulk production only begins after you approve a pre-production
          sample, and the bulk run is held to that approved standard for
          fabric, colour, construction and fit.
        </p>
      </Block>

      <div>
        <h2 className="dotted-rule pb-3 text-xl">Inspection Checkpoints</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {checkpoints.map((c) => (
            <li
              key={c}
              className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-white p-4 text-sm leading-relaxed text-navy/70"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              {c}
            </li>
          ))}
        </ul>
      </div>

      <Block heading="If Something Isn't Right">
        <p>
          Garments that fail inspection are pulled from the line, repaired or
          remade, and re-inspected before packing. If a quality issue ever
          reaches you, our returns policy covers manufacturing defects — see
          our <Link href="/returns" className="font-semibold text-brand hover:underline">Returns &amp; Refunds</Link> page
          for details.
        </p>
      </Block>

      <div className="flex flex-wrap gap-3">
        <Link href="/request-a-quote" className="btn-primary">
          Request a Quote <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link href="/factory" className="btn-outline">
          Tour Our Factory <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </LegalPage>
  );
}
