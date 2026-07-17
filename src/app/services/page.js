import Link from "next/link";
import {
  ArrowUpRight,
  Palette,
  Printer,
  Ruler,
  Scissors,
  Tag,
  Truck,
} from "lucide-react";
import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Services | Kaneimpex",
  description:
    "OEM & ODM manufacturing, custom design, sublimation printing, embroidery, private labelling and worldwide delivery from Kaneimpex.",
};

const services = [
  {
    icon: Scissors,
    title: "OEM Manufacturing",
    desc: "Send us your tech packs and finished designs and we manufacture to your exact specification — fabrics, trims, stitching and sizing all matched to your standard.",
  },
  {
    icon: Palette,
    title: "Custom Design (ODM)",
    desc: "No tech pack? Our design team develops artwork, colourways and mockups from your brief, then turns approved designs into production-ready patterns.",
  },
  {
    icon: Printer,
    title: "Sublimation & Printing",
    desc: "Edge-to-edge sublimation, screen printing and heat transfers in unlimited colours. Names, numbers and sponsor logos included in the process.",
  },
  {
    icon: Ruler,
    title: "Embroidery & Applique",
    desc: "Flat and 3D embroidery, chenille patches and tackle-twill lettering for crests, logos and varsity styling that lasts as long as the garment.",
  },
  {
    icon: Tag,
    title: "Private Labelling",
    desc: "Custom woven neck labels, hang tags, size stickers and retail-ready polybag packaging so garments arrive ready to sell under your brand.",
  },
  {
    icon: Truck,
    title: "Sampling & Delivery",
    desc: "Pre-production samples for approval before bulk runs, then tracked worldwide shipping by air or sea with all export documentation handled.",
  },
];

export default function ServicesPage() {
  return (
    <LegalPage title="What we do for your brand." eyebrow="Services">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="card-hover rounded-2xl border border-navy/10 bg-white p-6"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-navy/10 text-brand">
              <s.icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h2 className="mt-4 text-base font-bold text-navy-900">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/request-a-quote" className="btn-primary">
          Start Your Project <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link href="/#products" className="btn-outline">
          Browse Products <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </LegalPage>
  );
}
