import Link from "next/link";
import { ArrowUpRight, Award, Leaf, ShieldCheck, Users } from "lucide-react";
import LegalPage, { Block } from "../components/LegalPage";

export const metadata = {
  title: "Certifications & Standards | Kaneimpex",
  description:
    "The quality, safety and ethical standards Kaneimpex manufactures to — certified fabric sourcing, documented QC and responsible production.",
};

const standards = [
  {
    icon: ShieldCheck,
    title: "Quality Management",
    desc: "Production runs on a documented quality management system with recorded checkpoints at every stage, aligned with ISO 9001 principles.",
  },
  {
    icon: Leaf,
    title: "Certified Fabric Sourcing",
    desc: "We prioritise mills offering OEKO-TEX® Standard 100 certified fabrics, tested free from harmful substances and safe for skin contact.",
  },
  {
    icon: Users,
    title: "Ethical Production",
    desc: "Fair working conditions, no child labour and safe facilities — our production follows internationally recognised ethical manufacturing principles.",
  },
  {
    icon: Award,
    title: "Compliance on Request",
    desc: "Working on a tender or institutional contract? Tell us the standards your program requires and we'll confirm compliance and documentation up front.",
  },
];

export default function CertificationsPage() {
  return (
    <LegalPage title="Standards we manufacture to." eyebrow="Certifications">
      <Block heading="Why Standards Matter">
        <p>
          B2B buyers need more than good-looking samples — they need assurance
          that every repeat order arrives at the same standard, made safely and
          responsibly. That is what our documented processes and sourcing
          policies are built to deliver.
        </p>
      </Block>

      <div className="grid gap-4 sm:grid-cols-2">
        {standards.map((s) => (
          <div key={s.title} className="card-hover rounded-2xl border border-navy/10 bg-white p-6">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-navy/10 text-brand">
              <s.icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h2 className="mt-4 text-base font-bold text-navy-900">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.desc}</p>
          </div>
        ))}
      </div>

      <Block heading="Need Documentation?">
        <p>
          If your organisation requires specific certificates, test reports or
          compliance declarations as part of a purchase order or tender,
          contact us with the requirements and we will provide the relevant
          documentation with your quotation.
        </p>
      </Block>

      <div className="flex flex-wrap gap-3">
        <Link href="/contact" className="btn-primary">
          Ask About Compliance <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link href="/quality-control" className="btn-outline">
          Our Quality Process <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </LegalPage>
  );
}
