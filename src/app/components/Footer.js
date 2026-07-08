import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { industries } from "../data/industries";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-gold text-lg font-black text-white">
              K
            </span>
            <span className="text-xl font-black tracking-tight text-white">
              KANE<span className="text-gold-light">IMPEX</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            B2B manufacturer &amp; supplier of custom sportswear and uniforms.
            Premium quality, custom designs and reliable worldwide delivery.
          </p>
        </div>

        {/* Industries */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Industries
          </h4>
          <ul className="space-y-2 text-sm">
            {industries.slice(0, 6).map((ind) => (
              <li key={ind.slug}>
                <Link href={`/industries/${ind.slug}`} className="hover:text-gold-light">
                  {ind.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/request-a-quote" className="hover:text-gold-light">Request a Quote</Link></li>
            <li><Link href="/shipping" className="hover:text-gold-light">Shipping Policy</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-gold-light">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gold-light">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
              <span>sales@kaneimpex.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
              <span>+1 (000) 000-0000</span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
              <span>Reliable worldwide delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
              <span>Global manufacturing &amp; supply</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Kaneimpex. All rights reserved.</p>
          <p>Custom Uniform &amp; Sportswear Manufacturing</p>
        </div>
      </div>
    </footer>
  );
}
