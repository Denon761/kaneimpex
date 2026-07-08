# Adding real images

The site ships with on-brand **SVG mockups** as placeholders so every page looks
complete. Replacing them with real photos requires **no code changes** — just set
an image URL in the data (or drop a file in `public/`).

Every image can be a **local path** (`/products/x.jpg`) **or a remote CDN URL**
(`https://res.cloudinary.com/…`). Both work identically — the site uses plain
`<img>`, so any CDN works with zero configuration, and the CDN handles its own
optimization/resizing.

## The image cascade (set once, apply everywhere)

Image resolution lives in `src/app/data/industries.js`:

```
product.image  →  industry.image  →  /mockups/<slug>.svg  (built-in fallback)
```

So setting **one** `image` on an industry fills its card, its hero, and all of its
product cards at once. Any failed remote URL automatically falls back to the SVG
mockup, so a broken CDN link never shows a broken image.

Industry slugs: `sportswear`, `work-uniforms`, `medical-uniforms`,
`hospitality-uniforms`, `corporate-uniforms`, `school-uniforms`,
`military-tactical`, `accessories`.

## 1. One image for a whole industry (card + hero + all products)

In `src/app/data/industries.js`, add an `image` field to the industry:

```js
{
  slug: "sportswear",
  name: "Sportswear",
  image: "https://res.cloudinary.com/you/image/upload/v1/sportswear.jpg",
  …
}
```

## 2. A specific product photo

Add an `image` field to any product (overrides the industry image for that card):

```js
{ name: "Team Uniforms", desc: "…", image: "https://cdn.example.com/team-kit.jpg" },
```

Local alternative: put the file at `public/products/team-kit.jpg` and use
`image: "/products/team-kit.jpg"`.

## 3. A dedicated industry hero banner (optional)

`banner` overrides only the industry-page hero visual (falls back to `image`,
then the mockup):

```js
{ slug: "sportswear", name: "Sportswear", banner: "https://cdn.example.com/sportswear-hero.jpg", … }
```

## 4. The homepage hero banner

Swap the composed SVG at `public/banners/hero.svg`, or change the `src` in
`src/app/page.js` to a CDN URL. A wide (~4:3) image works best.

## Recommended CDNs

Any of these work with zero config here:
- **Cloudinary** — generous free tier, on-the-fly resizing/format via URL params.
- **imgix** / **Bunny.net** — URL-based transformations.
- **AWS S3 + CloudFront**, **Vercel Blob**, or any static host.

Tip: request an already-sized image from the CDN (e.g. Cloudinary
`w_800,f_auto,q_auto`) so pages stay fast.

## Optional: Next.js image optimization

The site uses plain `<img>` (best for arbitrary CDNs). If you later want Next's
built-in optimizer (automatic WebP/AVIF, responsive sizes), swap `SmartImage` for
`next/image`. `next.config.mjs` already allows any https host via
`images.remotePatterns` — tighten `hostname: "**"` to your specific CDN in
production.

## Notes
- Images render with `object-contain`, so any aspect ratio is safe.
- For photos, ~1200px wide is a good source size.
