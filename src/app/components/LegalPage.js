// Presentational wrapper for legal/policy pages, in the same studio UI
// as the rest of the site: dark rounded hero panel + dotted-rule blocks.
export default function LegalPage({ title, updated, eyebrow = "Legal", children }) {
  return (
    <>
      <section className="container-wide pt-3 sm:pt-5">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_55%)]" />
          <div className="relative px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
            <p className="eyebrow eyebrow-light">{eyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {updated && (
              <p className="mt-4 text-sm text-white/50">Last updated: {updated}</p>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="space-y-10">{children}</div>
        </div>
      </section>
    </>
  );
}

export function Block({ heading, children }) {
  return (
    <div>
      <h2 className="dotted-rule pb-3 text-xl">{heading}</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-navy/65">
        {children}
      </div>
    </div>
  );
}
