import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LegalPage, { Block } from "../components/LegalPage";

export const metadata = {
  title: "About Us | Kaneimpex",
  description:
    "Kaneimpex is a B2B manufacturer and exporter of custom sportswear and uniforms, supplying teams, brands and institutions worldwide.",
};

const stats = [
  { value: "100+", label: "Product Styles" },
  { value: "8", label: "Product Categories" },
  { value: "OEM / ODM", label: "Manufacturing Models" },
  { value: "Worldwide", label: "Shipping & Support" },
];

export default function AboutPage() {
  return (
    <LegalPage title="About Kaneimpex." eyebrow="Company">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-navy/10 bg-white p-6 text-center">
            <p className="text-2xl font-bold text-navy-900">{s.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-navy/50">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <Block heading="Who We Are">
        <p>
          Kaneimpex is a business-to-business manufacturer and exporter of
          custom sportswear and uniforms. We work with sports clubs, schools,
          hospitals, hotels, corporate teams and apparel brands to design,
          produce and deliver garments built to their exact specification.
        </p>
        <p>
          From fully sublimated team kits to medical scrubs, chef coats,
          workwear and tactical apparel, every order is cut, sewn and finished
          in-house — with your branding on every stitch.
        </p>
      </Block>

      <Block heading="What We Do">
        <p>
          We operate as both an OEM and ODM partner. Bring us your finished
          designs and tech packs and we will manufacture them to spec, or share
          an idea and our design team will develop artwork, sampling and
          production for you from scratch.
        </p>
        <p>
          Our catalog spans sportswear, work uniforms, medical uniforms,
          hospitality wear, corporate apparel, school uniforms, military &amp;
          tactical clothing and accessories — all available with full
          customization and private labelling.
        </p>
      </Block>

      <Block heading="How We Work">
        <p>
          Every project follows the same straightforward process: you share
          your requirements, we confirm fabrics, pricing and timelines, produce
          a sample for approval, then move to bulk production with quality
          checks at every stage before dispatch.
        </p>
        <p>
          We keep communication direct — one point of contact from first
          enquiry to final delivery, with photo updates from the production
          floor on request.
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
