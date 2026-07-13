// Central data source for all industry / category pages.
// Each industry powers a dynamic route at /industries/[slug]
// and lists its own set of product cards.

export const industries = [
  {
    slug: "sportswear",
    name: "Sportswear",
    icon: "Shirt",
    tagline: "Performance apparel engineered for every game",
    description:
      "Custom-manufactured sportswear built with moisture-wicking, breathable and durable fabrics. From team kits to gym wear, we deliver sublimated, tailored performance apparel for clubs, brands and academies worldwide.",
    highlights: [
      "Sublimation & cut-and-sew production",
      "Moisture-wicking performance fabrics",
      "Full team kit customization",
      "Low MOQs for brands & clubs",
    ],
    products: [
      { name: "Team Uniforms", desc: "Full custom kits with names, numbers and crests." },
      { name: "Soccer Uniforms", desc: "Lightweight sublimated jerseys and shorts." },
      { name: "Basketball Uniforms", desc: "Breathable reversible sets for the court." },
      { name: "Cricket Uniforms", desc: "Durable whites and coloured playing kits." },
      { name: "Rugby Uniforms", desc: "Reinforced-seam jerseys built to last." },
      { name: "Volleyball Uniforms", desc: "Flexible, sweat-wicking match apparel." },
      { name: "Tennis Apparel", desc: "Lightweight polos, tees and skirts." },
      { name: "Gym Wear", desc: "Compression and training performance wear." },
      { name: "Tracksuits", desc: "Custom branded warm-up and travel sets." },
      { name: "Sublimated Sportswear", desc: "Edge-to-edge all-over printed designs." },
    ],
  },
  {
    slug: "work-uniforms",
    name: "Work Uniforms",
    icon: "HardHat",
    tagline: "Rugged, safety-first workwear for demanding jobs",
    description:
      "Industrial-grade work uniforms designed for safety, durability and comfort on the job. Hi-vis, flame-resistant and heavy-duty options tailored to your industry and compliance requirements.",
    highlights: [
      "Hi-vis & reflective compliance options",
      "Flame-resistant & heavy-duty fabrics",
      "Custom logo embroidery & branding",
      "Bulk production for large workforces",
    ],
    products: [
      { name: "Industrial Uniforms", desc: "Heavy-duty sets for manufacturing floors." },
      { name: "Construction Uniforms", desc: "Rugged workwear for the job site." },
      { name: "Safety Wear", desc: "Compliant hi-vis and protective clothing." },
      { name: "Coveralls", desc: "Full-body protective coveralls." },
      { name: "Hi-Vis Clothing", desc: "Reflective jackets, vests and trousers." },
      { name: "Security Uniforms", desc: "Sharp, authoritative guard apparel." },
      { name: "Factory Uniforms", desc: "Durable everyday production-floor sets." },
      { name: "Warehouse Uniforms", desc: "Comfortable, hard-wearing logistics wear." },
    ],
  },
  {
    slug: "medical-uniforms",
    name: "Medical Uniforms",
    icon: "Stethoscope",
    tagline: "Clean, comfortable and professional healthcare wear",
    description:
      "Healthcare uniforms crafted from soft, breathable, easy-care fabrics. Antimicrobial-treated options, tailored fits and clinic branding for hospitals, clinics and care providers.",
    highlights: [
      "Antimicrobial fabric options",
      "Fluid-resistant surgical wear",
      "Soft, breathable easy-care materials",
      "Custom clinic & hospital branding",
    ],
    products: [
      { name: "Medical Scrubs", desc: "Comfortable multi-pocket scrub sets." },
      { name: "Lab Coats", desc: "Crisp professional coats in multiple lengths." },
      { name: "Nurse Uniforms", desc: "Durable, easy-care everyday nurse wear." },
      { name: "Doctor Coats", desc: "Tailored physician coats with branding." },
      { name: "Surgical Gowns", desc: "Fluid-resistant sterile theatre gowns." },
      { name: "Patient Gowns", desc: "Comfortable, dignified patient apparel." },
    ],
  },
  {
    slug: "hospitality-uniforms",
    name: "Hospitality Uniforms",
    icon: "ChefHat",
    tagline: "Elegant uniforms that define your guest experience",
    description:
      "Refined hospitality uniforms for hotels, restaurants and resorts. From chef whites to front-desk attire, we combine style, comfort and durability to elevate your brand’s first impression.",
    highlights: [
      "Stain-resistant kitchen fabrics",
      "Tailored fits for front-of-house",
      "Consistent brand colours & logos",
      "Full staff-wide outfitting programs",
    ],
    products: [
      { name: "Chef Uniforms", desc: "Breathable chef coats, pants and aprons." },
      { name: "Waiter Uniforms", desc: "Smart front-of-house service wear." },
      { name: "Hotel Staff Uniforms", desc: "Coordinated attire for every department." },
      { name: "Housekeeping Uniforms", desc: "Comfortable, practical daily wear." },
      { name: "Aprons", desc: "Custom bib, waist and bistro aprons." },
    ],
  },
  {
    slug: "corporate-uniforms",
    name: "Corporate Uniforms",
    icon: "Briefcase",
    tagline: "Sharp, professional attire that represents your brand",
    description:
      "Corporate uniforms and business attire that project professionalism. Tailored suits, branded shirts and polos designed to keep your team looking consistent and confident.",
    highlights: [
      "Made-to-measure tailoring available",
      "Embroidered & printed brand identity",
      "Wrinkle-resistant office fabrics",
      "Coordinated company-wide programs",
    ],
    products: [
      { name: "Office Uniforms", desc: "Coordinated everyday professional wear." },
      { name: "Corporate Shirts", desc: "Branded formal and casual shirts." },
      { name: "Corporate Polo Shirts", desc: "Smart-casual embroidered polos." },
      { name: "Blazers", desc: "Tailored blazers in your brand colours." },
      { name: "Reception Uniforms", desc: "Polished front-desk attire." },
    ],
  },
  {
    slug: "school-uniforms",
    name: "School Uniforms",
    icon: "GraduationCap",
    tagline: "Durable, comfortable uniforms students love to wear",
    description:
      "Complete school uniform programs built to withstand daily wear. Comfortable fabrics, colour-fast dyes and crest embroidery for schools, colleges and academies.",
    highlights: [
      "Colour-fast, hard-wearing fabrics",
      "School crest & badge embroidery",
      "Full size ranges for all ages",
      "Reliable annual re-order supply",
    ],
    products: [
      { name: "School Shirts", desc: "Easy-care shirts in full size ranges." },
      { name: "School Trousers", desc: "Durable, comfortable everyday trousers." },
      { name: "School Skirts", desc: "Pleated skirts in colour-fast fabrics." },
      { name: "School Blazers", desc: "Smart crested blazers for all ages." },
      { name: "School Sweaters", desc: "Warm knit sweaters and cardigans." },
      { name: "PE Uniforms", desc: "Active sports kits for physical education." },
    ],
  },
  {
    slug: "military-tactical",
    name: "Military & Tactical",
    icon: "Shield",
    tagline: "Field-ready tactical gear built for the mission",
    description:
      "Tactical and military-grade apparel engineered for durability and function. Camouflage patterns, reinforced construction and mission-ready features for defence and security forces.",
    highlights: [
      "Ripstop & reinforced construction",
      "Custom camouflage patterns",
      "Functional tactical pocketing",
      "Compliant, mission-ready builds",
    ],
    products: [
      { name: "Military Uniforms", desc: "Standard-issue field and dress uniforms." },
      { name: "Tactical Clothing", desc: "Reinforced multi-pocket tactical wear." },
      { name: "Combat Uniforms", desc: "Ripstop camouflage combat sets." },
      { name: "Police Uniforms", desc: "Authoritative, durable duty uniforms." },
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    icon: "ShoppingBag",
    tagline: "Finishing touches to complete every uniform",
    description:
      "A full range of custom accessories to complement any uniform program. Caps, bags, gloves and more — all customizable with your brand identity.",
    highlights: [
      "Fully customizable branding",
      "Matched to your uniform program",
      "Bulk supply & consistent stock",
      "Quality hardware & materials",
    ],
    products: [
      { name: "Sports Bags", desc: "Durable branded kit and travel bags." },
      { name: "Caps", desc: "Embroidered caps in custom colours." },
      { name: "Beanies", desc: "Warm knit branded beanies." },
      { name: "Gloves", desc: "Work, sport and tactical gloves." },
      { name: "Belts", desc: "Uniform and utility belts." },
      { name: "Neck Ties", desc: "Corporate and school ties." },
      { name: "Socks", desc: "Team and uniform socks." },
    ],
  },
];

export function getIndustry(slug) {
  return industries.find((i) => i.slug === slug);
}

export function getIndustrySlugs() {
  return industries.map((i) => i.slug);
}

// ── Image resolution ────────────────────────────────────────────────
// Every image can be a local path OR a remote CDN URL (https://…).
// Default photos come from the free Unsplash image CDN (by industry slug);
// replace them with your own product shots anytime — set `image` on a
// product or industry, or `banner` on an industry (see IMAGES.md).
// If any remote photo fails to load, SmartImage falls back to the SVG mockup.

const U = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=70`;

// ── Local product photos (public/products-img) ──────────────────────
// Real product shots served from /public. Filenames are listed explicitly
// (via small helpers) because casing/numbering is irregular and production
// servers are case-sensitive.
const R9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const imgs = (folder, prefix, nums = R9) =>
  nums.map((n) => `/products-img/${folder}/${prefix}-0${n}_s.jpg`);

const localPhotos = {
  "base-ball": imgs("base-ball", "Baseball-uni"),
  "basketball": imgs("basketball", "Basketball-Uni"),
  "cricket-wear": imgs("cricket-wear", "Cricket-uni"),
  "hockey-wear": imgs("hockey-wear", "Icehoackey-jersey"),
  "hoodies": [
    ...imgs("hoodies", "Hoodies", [1, 2, 3, 4]),
    "/products-img/hoodies/hoodies-05_s.jpg",
    ...imgs("hoodies", "Hoodies", [6, 7, 8, 9]),
  ],
  "polo-shirts": imgs("polo-shirts", "Polo-shirt"),
  "rugby": imgs("rugby", "Rugby-Uniform"),
  "soccer": [
    ...imgs("soccer", "Soccer-uni"),
    "/products-img/soccer/Soccer-uni-11_s.jpg",
  ],
  "sweat-shirts": imgs("sweat-shirts", "Sweat-shirt"),
  "t-shirts": imgs("t-shirts", "T-shirt"),
  "track-suit": imgs("track-suit", "Track-suits"),
  "trousers": imgs("trousers", "Trosers"),
  "usa-football": [
    ...imgs("usa-football", "Football-Uniform", [1, 2, 3, 4, 5]),
    "/products-img/usa-football/football-uniform-06_s.jpg",
    ...imgs("usa-football", "Football-Uniform", [7, 8, 9]),
  ],
  "varsity-jackets": imgs("varsity-jackets", "Varsity-jackets"),
  "volleyball": imgs("volleyball", "Volleyball-uniform"),
};

// Product name → local photo category. Products listed here always use
// their own real photos on the cards.
const productPhotoCategory = {
  "Team Uniforms": "usa-football",
  "Soccer Uniforms": "soccer",
  "Basketball Uniforms": "basketball",
  "Cricket Uniforms": "cricket-wear",
  "Rugby Uniforms": "rugby",
  "Volleyball Uniforms": "volleyball",
  "Tennis Apparel": "polo-shirts",
  "Gym Wear": "t-shirts",
  "Tracksuits": "track-suit",
  "Sublimated Sportswear": "hockey-wear",
  "Corporate Polo Shirts": "polo-shirts",
  "Corporate Shirts": "t-shirts",
  "School Trousers": "trousers",
  "School Sweaters": "sweat-shirts",
  "School Blazers": "varsity-jackets",
  "PE Uniforms": "t-shirts",
};

// Industry-level pools of local photos. The first photo becomes the
// industry card/hero image; unmapped products rotate through the pool.
const industryLocalPools = {
  "sportswear": [
    localPhotos["soccer"][0],
    localPhotos["basketball"][0],
    localPhotos["usa-football"][0],
    localPhotos["cricket-wear"][0],
    localPhotos["rugby"][0],
    localPhotos["volleyball"][0],
    localPhotos["track-suit"][0],
    localPhotos["hoodies"][0],
  ],
  "school-uniforms": [
    localPhotos["varsity-jackets"][0],
    localPhotos["sweat-shirts"][0],
    localPhotos["trousers"][0],
    localPhotos["polo-shirts"][0],
  ],
};

// Free stock photos per industry (used where we have no local shots yet).
// First photo is used for cards/heroes; product cards rotate for variety.
const industryPhotos = {
  "work-uniforms": ["1589939705384-5185137a7f0f", "1567954970774-58d6aa6c50dc"],
  "medical-uniforms": ["1621862912856-0909fb7f14b7", "1594824476967-48c8b964273f"],
  "hospitality-uniforms": ["1759521296013-559479e2a891", "1574966740637-12c84035a4f2"],
  "corporate-uniforms": ["1507679799987-c73779587ccf", "1515736076039-a3ca66043b27"],
  "military-tactical": ["1608396941316-ea89219bd56e", "1578241030078-01b38ededda4"],
  "accessories": ["1588850561407-ed78c282e89b", "1521369909029-2afed882baee"],
};

function photosFor(ind) {
  const local = industryLocalPools[ind.slug];
  if (local && local.length) return local;
  return (industryPhotos[ind.slug] || []).map(U);
}

// The built-in SVG mockup, always used as the safe fallback.
export function mockupFor(ind) {
  return `/mockups/${ind.slug}.svg`;
}

// Thumbnail used on industry cards.
export function industryImage(ind) {
  if (ind.image) return ind.image;
  const p = photosFor(ind);
  return p[0] || mockupFor(ind);
}

// Large visual used on the industry page hero.
export function industryBanner(ind) {
  return ind.banner || industryImage(ind);
}

// Image for a single product card. A product with its own local photo
// category always shows a real shot of that product type; otherwise it
// rotates through the industry photo pool.
export function productImage(product, ind, index = 0) {
  if (product.image) return product.image;
  const cat = productPhotoCategory[product.name];
  if (cat && localPhotos[cat]) return localPhotos[cat][0];
  const p = photosFor(ind);
  if (p.length) return p[index % p.length];
  return ind.image || mockupFor(ind);
}
