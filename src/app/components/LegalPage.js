// Presentational wrapper for legal/policy pages.
export default function LegalPage({ title, updated, children }) {
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="container-x py-14 lg:py-16">
          <h1 className="text-3xl font-black sm:text-4xl">{title}</h1>
          {updated && (
            <p className="mt-2 text-sm text-white/60">Last updated: {updated}</p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="prose-legal mx-auto max-w-3xl space-y-8">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export function Block({ heading, children }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-navy">{heading}</h2>
      <div className="mt-3 space-y-3 text-navy/70 leading-relaxed">{children}</div>
    </div>
  );
}
