// Generates public/Kaneimpex-Product-Catalog.pdf from the live product data.
// Run: node scripts/build-catalog.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import PDFDocument from "pdfkit";
import { productGroups } from "../src/app/data/products.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const OUT = path.join(PUBLIC, "Kaneimpex-Product-Catalog.pdf");

const NAVY = "#14294b";
const BRAND = "#2563eb";
const GREY = "#6b7280";
const PAGE_W = 595.28; // A4 pt
const PAGE_H = 841.89;
const MARGIN = 40;

const doc = new PDFDocument({ size: "A4", margin: MARGIN, autoFirstPage: false });
doc.pipe(fs.createWriteStream(OUT));

function resolveImg(p) {
  return path.join(PUBLIC, p);
}

// ---------- Cover page ----------
doc.addPage();
doc.rect(0, 0, PAGE_W, PAGE_H).fill(NAVY);
try {
  doc.image(resolveImg("logo/logo.png"), PAGE_W / 2 - 50, 140, { width: 100 });
} catch {}
doc
  .fillColor("#ffffff")
  .font("Helvetica-Bold")
  .fontSize(38)
  .text("Kaneimpex", MARGIN, 280, { width: PAGE_W - MARGIN * 2, align: "center" });
doc
  .font("Helvetica")
  .fontSize(16)
  .fillColor("#aebedb")
  .text("Product Catalog", MARGIN, 328, { width: PAGE_W - MARGIN * 2, align: "center" });
doc
  .fontSize(11)
  .fillColor("#7d8fb3")
  .text(
    "Custom Sportswear, Uniforms & Workwear — OEM · ODM · Private Label",
    MARGIN,
    360,
    { width: PAGE_W - MARGIN * 2, align: "center" }
  );

const today = new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" });
doc
  .fontSize(10)
  .fillColor("#5b6c8f")
  .text(today, MARGIN, PAGE_H - 120, { width: PAGE_W - MARGIN * 2, align: "center" });
doc
  .fontSize(10)
  .fillColor("#aebedb")
  .text("info@kenimpex.co.uk   ·   (+44) 07587 579766", MARGIN, PAGE_H - 100, {
    width: PAGE_W - MARGIN * 2,
    align: "center",
  });

// ---------- Table of contents ----------
doc.addPage();
doc.fillColor(NAVY).font("Helvetica-Bold").fontSize(22).text("Contents", MARGIN, MARGIN);
let tocY = MARGIN + 50;
doc.font("Helvetica").fontSize(11);
productGroups.forEach((g) => {
  doc.fillColor(BRAND).font("Helvetica-Bold").fontSize(12).text(g.name, MARGIN, tocY);
  tocY += 18;
  doc.fillColor(GREY).font("Helvetica").fontSize(10);
  const names = g.categories.map((c) => c.name).join("   ·   ");
  const h = doc.heightOfString(names, { width: PAGE_W - MARGIN * 2 });
  doc.text(names, MARGIN, tocY, { width: PAGE_W - MARGIN * 2 });
  tocY += h + 16;
});

// ---------- Category pages ----------
const CARD_PER_ROW = 2;
const CARD_GAP = 16;
const CARD_W = (PAGE_W - MARGIN * 2 - CARD_GAP) / CARD_PER_ROW;
const IMG_H = 130;
const ROW_GAP = 42;

// Extra feature photos shown at the top of a category page, above the description.
const HERO_IMAGES = {
  "hi-vis-wear": ["/mockups/hi-vis-jacket.jpg", "/mockups/hi-vis-jacket-1.jpg"],
};

let pageCounter = 2; // cover + TOC already emitted

function drawCategoryPage(cat, groupName) {
  doc.addPage();
  pageCounter += 1;
  const pageNum = pageCounter;

  // Header band
  doc.rect(0, 0, PAGE_W, 70).fill(NAVY);
  doc
    .fillColor("#8ea3cc")
    .font("Helvetica-Bold")
    .fontSize(9)
    .text(groupName.toUpperCase(), MARGIN, 18, { characterSpacing: 1 });
  doc.fillColor("#ffffff").font("Helvetica-Bold").fontSize(20).text(cat.name, MARGIN, 32);

  let y = 90;

  const hero = HERO_IMAGES[cat.slug];
  if (hero?.length) {
    const HERO_H = 90;
    const heroW = (PAGE_W - MARGIN * 2 - CARD_GAP * (hero.length - 1)) / hero.length;
    hero.forEach((img, i) => {
      const x = MARGIN + i * (heroW + CARD_GAP);
      doc.rect(x, y, heroW, HERO_H).fill("#f3f4f6");
      try {
        doc.image(resolveImg(img), x, y, {
          fit: [heroW, HERO_H],
          align: "center",
          valign: "center",
        });
      } catch {}
    });
    y += HERO_H + 14;
  }

  doc
    .fillColor("#374151")
    .font("Helvetica")
    .fontSize(9.5)
    .text(cat.description, MARGIN, y, { width: PAGE_W - MARGIN * 2, lineGap: 2 });
  y += doc.heightOfString(cat.description, { width: PAGE_W - MARGIN * 2, lineGap: 2 }) + 10;

  if (cat.features?.length) {
    const featLine = cat.features.join("   ·   ");
    doc.fillColor(BRAND).font("Helvetica-Bold").fontSize(8.5).text(featLine, MARGIN, y, {
      width: PAGE_W - MARGIN * 2,
    });
    y += doc.heightOfString(featLine, { width: PAGE_W - MARGIN * 2 }) + 14;
  }

  const products = cat.products.slice(0, 6);
  products.forEach((p, i) => {
    const col = i % CARD_PER_ROW;
    const row = Math.floor(i / CARD_PER_ROW);
    const x = MARGIN + col * (CARD_W + CARD_GAP);
    const cardY = y + row * (IMG_H + ROW_GAP);

    doc.rect(x, cardY, CARD_W, IMG_H).fill("#f3f4f6");
    try {
      doc.image(resolveImg(p.image), x, cardY, {
        fit: [CARD_W, IMG_H],
        align: "center",
        valign: "center",
      });
    } catch {}
    doc
      .fillColor(NAVY)
      .font("Helvetica-Bold")
      .fontSize(9.5)
      .text(p.styleCode, x, cardY + IMG_H + 8, { width: CARD_W });
    doc
      .fillColor(GREY)
      .font("Helvetica")
      .fontSize(8.5)
      .text(p.desc, x, cardY + IMG_H + 21, { width: CARD_W, lineGap: 1 });
  });

  // Footer (kept inside the margin box so pdfkit doesn't silently start a new page)
  const footerY = PAGE_H - MARGIN - 12;
  doc
    .fillColor("#9ca3af")
    .font("Helvetica")
    .fontSize(8)
    .text("Kaneimpex — info@kenimpex.co.uk — (+44) 07587 579766", MARGIN, footerY, {
      width: PAGE_W - MARGIN * 2 - 30,
      lineBreak: false,
    });
  doc.text(`${pageNum}`, PAGE_W - MARGIN - 20, footerY, {
    width: 20,
    align: "right",
    lineBreak: false,
  });
}

productGroups.forEach((group) => {
  group.categories.forEach((cat) => drawCategoryPage(cat, group.name));
});

doc.end();
doc.on("finish", () => console.log("Wrote", OUT));
