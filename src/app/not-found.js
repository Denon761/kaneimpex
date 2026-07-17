import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,116,212,0.35),transparent_55%)]" />
      <div className="container-wide relative flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="eyebrow eyebrow-light">Page Not Found</p>
        <h1 className="mt-6 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Browse our product catalog or request a quote instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/#products" className="btn-primary">
            View Products <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="/request-a-quote" className="btn-light">
            Request a Quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
