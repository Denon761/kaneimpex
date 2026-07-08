# Adding real images

The site ships with on-brand **SVG mockups** as placeholders so every page looks
complete. Replacing them with real photos requires **no code changes** — just add
files or set a path in the data.

## Where images live

```
public/
  mockups/<industry-slug>.svg   ← per-industry product mockup (jersey, scrub, blazer…)
  banners/hero.svg              ← homepage hero banner
```

Industry slugs: `sportswear`, `work-uniforms`, `medical-uniforms`,
`hospitality-uniforms`, `corporate-uniforms`, `school-uniforms`,
`military-tactical`, `accessories`.

## 1. Replace a whole industry's mockup

Drop a file at `public/mockups/<slug>.svg` (or `.png`/`.jpg` — then update the
extension where referenced). Every product card in that industry, plus the
industry hero and thumbnails, will use it automatically.

## 2. Give a single product its own photo

In `src/app/data/industries.js`, add an `image` field to any product:

```js
{ name: "Team Uniforms", desc: "…", image: "/products/team-uniforms.jpg" },
```

Put the file at `public/products/team-uniforms.jpg`. If the path is missing or
mistyped, the card automatically falls back to the industry mockup (never broken).

## 3. Replace the homepage hero banner

Swap `public/banners/hero.svg` with your own image (keep the filename, or update
the `src` in `src/app/page.js`). A wide 4:3-ish image works best.

## 4. Per-industry hero banner (optional)

Add a `banner` field to an industry in the data to override its hero visual:

```js
{ slug: "sportswear", name: "Sportswear", banner: "/banners/sportswear.jpg", … }
```

## Notes
- Images use plain `<img>` with `object-contain`, so any aspect ratio is safe.
- For best quality on photos, export at ~1200px wide.
