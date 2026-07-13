// Sportswear product catalog — powers /products and /products/[slug].
// Every entry maps a folder of real product photos in /public/products-img/<slug>/
// to a browsable category with generated style codes (KI-<CODE>-NN) so each
// design can be referenced unambiguously in a quote request.

const CATALOG = [
  {
    slug: "soccer",
    name: "Soccer Uniforms",
    singular: "Soccer Uniform",
    code: "SOC",
    description:
      "Fully sublimated soccer kits for clubs, academies and leagues. Jerseys and shorts are printed edge-to-edge in unlimited colours, with names, numbers and sponsor branding included at no extra step.",
    features: [
      "Edge-to-edge sublimation printing",
      "140–160 GSM breathable interlock fabric",
      "Names, numbers & sponsor logos included",
      "Youth to 5XL size range",
    ],
    descs: [
      "Sublimated jersey and shorts set in your exact club colours.",
      "Lightweight interlock knit with mesh side panels for airflow.",
      "Complete team set with crests, numbering and sponsor prints.",
    ],
    files: [
      "Soccer-uni-01_s.jpg", "Soccer-uni-02_s.jpg", "Soccer-uni-03_s.jpg",
      "Soccer-uni-04_s.jpg", "Soccer-uni-05_s.jpg", "Soccer-uni-06_s.jpg",
      "Soccer-uni-07_s.jpg", "Soccer-uni-08_s.jpg", "Soccer-uni-09_s.jpg",
      "Soccer-uni-11_s.jpg",
    ],
  },
  {
    slug: "basketball",
    name: "Basketball Uniforms",
    singular: "Basketball Uniform",
    code: "BSK",
    description:
      "Breathable basketball jerseys and shorts built for the court. Choose classic cut-and-sew or full sublimation, with reversible options for training programs and school teams.",
    features: [
      "Reversible & single-face options",
      "Quick-dry micro-mesh fabrics",
      "Custom trims, piping & side inserts",
      "Full team numbering included",
    ],
    descs: [
      "Sleeveless jersey and long-cut shorts in quick-dry mesh.",
      "Reversible practice set — two colourways in one garment.",
      "Sublimated game set with custom trims and numbering.",
    ],
    files: [
      "Basketball-Uni-01_s.jpg", "Basketball-Uni-02_s.jpg", "Basketball-Uni-03_s.jpg",
      "Basketball-Uni-04_s.jpg", "Basketball-Uni-05_s.jpg", "Basketball-Uni-06_s.jpg",
      "Basketball-Uni-07_s.jpg", "Basketball-Uni-08_s.jpg", "Basketball-Uni-09_s.jpg",
    ],
  },
  {
    slug: "base-ball",
    name: "Baseball Uniforms",
    singular: "Baseball Uniform",
    code: "BSB",
    description:
      "Classic and modern baseball uniforms — full-button, two-button and pullover jerseys with matching pants. Built from durable double-knit fabrics that hold their colour season after season.",
    features: [
      "Full-button, two-button & pullover styles",
      "Durable double-knit polyester",
      "Sublimated or tackle-twill lettering",
      "Matching pants, caps & socks available",
    ],
    descs: [
      "Full-button jersey with tackle-twill team lettering.",
      "Sublimated pullover style with contrast raglan sleeves.",
      "Complete game set with matching pants and piping.",
    ],
    files: [
      "Baseball-uni-01_s.jpg", "Baseball-uni-02_s.jpg", "Baseball-uni-03_s.jpg",
      "Baseball-uni-04_s.jpg", "Baseball-uni-05_s.jpg", "Baseball-uni-06_s.jpg",
      "Baseball-uni-07_s.jpg", "Baseball-uni-08_s.jpg", "Baseball-uni-09_s.jpg",
    ],
  },
  {
    slug: "usa-football",
    name: "American Football Uniforms",
    singular: "Football Uniform",
    code: "AFB",
    description:
      "Game-day American football uniforms engineered to take contact. Reinforced stretch-fit jerseys and integrated pants, fully sublimated with your program's identity.",
    features: [
      "4-way stretch compression fit",
      "Reinforced stress-point stitching",
      "Full sublimation — no cracked prints",
      "Youth & adult cuts",
    ],
    descs: [
      "Stretch-fit game jersey built to withstand full contact.",
      "Sublimated jersey and pant set in your program colours.",
      "Reinforced practice set for daily drills and scrimmage.",
    ],
    files: [
      "Football-Uniform-01_s.jpg", "Football-Uniform-02_s.jpg", "Football-Uniform-03_s.jpg",
      "Football-Uniform-04_s.jpg", "Football-Uniform-05_s.jpg", "football-uniform-06_s.jpg",
      "Football-Uniform-07_s.jpg", "Football-Uniform-08_s.jpg", "Football-Uniform-09_s.jpg",
    ],
  },
  {
    slug: "cricket-wear",
    name: "Cricket Wear",
    singular: "Cricket Kit",
    code: "CRK",
    description:
      "Cricket whites and coloured kits for clubs and leagues. Moisture-wicking playing shirts, trousers and sweaters tailored for long days at the crease.",
    features: [
      "Classic whites & coloured T20 kits",
      "UV-resistant, moisture-wicking fabrics",
      "Club crests & sponsor printing",
      "Matching caps & training wear",
    ],
    descs: [
      "Coloured one-day kit with sublimated club branding.",
      "Classic playing whites in breathable pique fabric.",
      "Match and training set with embroidered crests.",
    ],
    files: [
      "Cricket-uni-01_s.jpg", "Cricket-uni-02_s.jpg", "Cricket-uni-03_s.jpg",
      "Cricket-uni-04_s.jpg", "Cricket-uni-05_s.jpg", "Cricket-uni-06_s.jpg",
      "Cricket-uni-07_s.jpg", "Cricket-uni-08_s.jpg", "Cricket-uni-09_s.jpg",
    ],
  },
  {
    slug: "rugby",
    name: "Rugby Uniforms",
    singular: "Rugby Uniform",
    code: "RGB",
    description:
      "Rugby jerseys and shorts built for the scrum — reinforced seams, heavyweight knit fabrics and a fit that stays put through eighty minutes of contact.",
    features: [
      "Reinforced twin-needle seams",
      "Heavyweight 250+ GSM knit",
      "Sublimated or cut-and-sew panels",
      "Pro-fit & classic-fit cuts",
    ],
    descs: [
      "Heavyweight match jersey with reinforced seam construction.",
      "Sublimated club set built for full-contact play.",
      "Classic hooped design in durable knit fabric.",
    ],
    files: [
      "Rugby-Uniform-01_s.jpg", "Rugby-Uniform-02_s.jpg", "Rugby-Uniform-03_s.jpg",
      "Rugby-Uniform-04_s.jpg", "Rugby-Uniform-05_s.jpg", "Rugby-Uniform-06_s.jpg",
      "Rugby-Uniform-07_s.jpg", "Rugby-Uniform-08_s.jpg", "Rugby-Uniform-09_s.jpg",
    ],
  },
  {
    slug: "volleyball",
    name: "Volleyball Uniforms",
    singular: "Volleyball Uniform",
    code: "VLB",
    description:
      "Flexible, sweat-wicking volleyball uniforms for indoor and beach programs. Four-way stretch fabrics move with every dig, set and spike.",
    features: [
      "4-way stretch performance knit",
      "Flat-lock chafe-free stitching",
      "Men's, women's & youth cuts",
      "Matching liberos & warm-ups",
    ],
    descs: [
      "Stretch-knit jersey and short set for indoor play.",
      "Sublimated match set with contrast libero option.",
      "Lightweight training set in quick-dry fabric.",
    ],
    files: [
      "Volleyball-uniform-01_s.jpg", "Volleyball-uniform-02_s.jpg", "Volleyball-uniform-03_s.jpg",
      "Volleyball-uniform-04_s.jpg", "Volleyball-uniform-05_s.jpg", "Volleyball-uniform-06_s.jpg",
      "Volleyball-uniform-07_s.jpg", "Volleyball-uniform-08_s.jpg", "Volleyball-uniform-09_s.jpg",
    ],
  },
  {
    slug: "hockey-wear",
    name: "Ice Hockey Jerseys",
    singular: "Hockey Jersey",
    code: "HKY",
    description:
      "Pro-weight ice hockey jerseys with the drape and durability the rink demands. Sublimated or twill-crested, with matching socks and practice sets available.",
    features: [
      "Pro-weight air-knit fabric",
      "Sublimated or stitched twill crests",
      "Reinforced elbow & shoulder zones",
      "Matching game socks available",
    ],
    descs: [
      "Air-knit game jersey with stitched twill crest.",
      "Fully sublimated design — colours that never peel.",
      "Practice jersey built for daily ice time.",
    ],
    files: [
      "Icehoackey-jersey-01_s.jpg", "Icehoackey-jersey-02_s.jpg", "Icehoackey-jersey-03_s.jpg",
      "Icehoackey-jersey-04_s.jpg", "Icehoackey-jersey-05_s.jpg", "Icehoackey-jersey-06_s.jpg",
      "Icehoackey-jersey-07_s.jpg", "Icehoackey-jersey-08_s.jpg", "Icehoackey-jersey-09_s.jpg",
    ],
  },
  {
    slug: "track-suit",
    name: "Tracksuits",
    singular: "Tracksuit",
    code: "TRK",
    description:
      "Custom branded tracksuits for warm-ups, travel and sideline wear. Jackets and joggers in matched fabrics, finished with embroidery or sublimated panels.",
    features: [
      "Poly-knit, micro & fleece fabrics",
      "Embroidered or sublimated branding",
      "Zip, half-zip & pullover jackets",
      "Tapered & classic jogger fits",
    ],
    descs: [
      "Full-zip jacket and tapered jogger in matched knit.",
      "Sublimated panel design with embroidered crest.",
      "Warm-up set built for travel and sideline comfort.",
    ],
    files: [
      "Track-suits-01_s.jpg", "Track-suits-02_s.jpg", "Track-suits-03_s.jpg",
      "Track-suits-04_s.jpg", "Track-suits-05_s.jpg", "Track-suits-06_s.jpg",
      "Track-suits-07_s.jpg", "Track-suits-08_s.jpg", "Track-suits-09_s.jpg",
    ],
  },
  {
    slug: "hoodies",
    name: "Hoodies",
    singular: "Hoodie",
    code: "HDY",
    description:
      "Heavyweight fleece hoodies for teams, brands and merch lines. Pullover and zip styles with print, embroidery or applique branding — cut and sewn to your spec.",
    features: [
      "280–400 GSM brushed fleece",
      "Pullover & full-zip styles",
      "Print, embroidery & applique",
      "Custom labels & packaging for brands",
    ],
    descs: [
      "Heavyweight pullover hoodie in brushed fleece.",
      "Full-zip style with custom embroidery placements.",
      "Relaxed-fit design ready for private labelling.",
    ],
    files: [
      "Hoodies-01_s.jpg", "Hoodies-02_s.jpg", "Hoodies-03_s.jpg",
      "Hoodies-04_s.jpg", "hoodies-05_s.jpg", "Hoodies-06_s.jpg",
      "Hoodies-07_s.jpg", "Hoodies-08_s.jpg", "Hoodies-09_s.jpg",
    ],
  },
  {
    slug: "sweat-shirts",
    name: "Sweatshirts",
    singular: "Sweatshirt",
    code: "SWS",
    description:
      "Crewneck sweatshirts in soft loop-back and brushed fleece. A clean canvas for team branding, corporate merch and retail private-label programs.",
    features: [
      "Loop-back & brushed fleece options",
      "Ribbed collar, cuffs & hem",
      "Screen print & embroidery ready",
      "Full private-label service",
    ],
    descs: [
      "Classic crewneck in soft brushed fleece.",
      "Loop-back sweatshirt with ribbed trims.",
      "Retail-weight blank ready for your branding.",
    ],
    files: [
      "Sweat-shirt-01_s.jpg", "Sweat-shirt-02_s.jpg", "Sweat-shirt-03_s.jpg",
      "Sweat-shirt-04_s.jpg", "Sweat-shirt-05_s.jpg", "Sweat-shirt-06_s.jpg",
      "Sweat-shirt-07_s.jpg", "Sweat-shirt-08_s.jpg", "Sweat-shirt-09_s.jpg",
    ],
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    singular: "T-Shirt",
    code: "TSH",
    description:
      "Custom t-shirts from lightweight performance tees to heavyweight streetwear blanks. Cotton, poly and blends — cut, sewn and finished to your specification.",
    features: [
      "Cotton, polyester & blend fabrics",
      "150–240 GSM weight range",
      "Sublimation, screen print & embroidery",
      "Custom neck labels & fits",
    ],
    descs: [
      "Performance tee in moisture-wicking polyester.",
      "Heavyweight cotton tee with a structured drape.",
      "Custom-cut blank ready for print or embroidery.",
    ],
    files: [
      "T-shirt-01_s.jpg", "T-shirt-02_s.jpg", "T-shirt-03_s.jpg",
      "T-shirt-04_s.jpg", "T-shirt-05_s.jpg", "T-shirt-06_s.jpg",
      "T-shirt-07_s.jpg", "T-shirt-08_s.jpg", "T-shirt-09_s.jpg",
    ],
  },
  {
    slug: "polo-shirts",
    name: "Polo Shirts",
    singular: "Polo Shirt",
    code: "PLO",
    description:
      "Smart pique and performance polos for teams, staff and events. Knitted collars, custom plackets and embroidered branding for a sharp, uniform look.",
    features: [
      "Pique & performance knit fabrics",
      "Knitted or self-fabric collars",
      "Contrast tipping & plackets",
      "Chest & sleeve embroidery",
    ],
    descs: [
      "Classic pique polo with knitted collar and cuffs.",
      "Performance polo in quick-dry knit fabric.",
      "Contrast-trim design with embroidered branding.",
    ],
    files: [
      "Polo-shirt-01_s.jpg", "Polo-shirt-02_s.jpg", "Polo-shirt-03_s.jpg",
      "Polo-shirt-04_s.jpg", "Polo-shirt-05_s.jpg", "Polo-shirt-06_s.jpg",
      "Polo-shirt-07_s.jpg", "Polo-shirt-08_s.jpg", "Polo-shirt-09_s.jpg",
    ],
  },
  {
    slug: "varsity-jackets",
    name: "Varsity Jackets",
    singular: "Varsity Jacket",
    code: "VRS",
    description:
      "Classic varsity jackets in wool-blend bodies with contrast sleeves. Chenille patches, embroidery and custom linings for schools, teams and fashion labels.",
    features: [
      "Wool-blend body, PU or leather sleeves",
      "Chenille patches & embroidery",
      "Custom quilted linings",
      "Snap-front classic styling",
    ],
    descs: [
      "Wool-blend body with contrast faux-leather sleeves.",
      "Custom chenille lettering and patch placements.",
      "Classic snap-front cut with quilted lining.",
    ],
    files: [
      "Varsity-jackets-01_s.jpg", "Varsity-jackets-02_s.jpg", "Varsity-jackets-03_s.jpg",
      "Varsity-jackets-04_s.jpg", "Varsity-jackets-05_s.jpg", "Varsity-jackets-06_s.jpg",
      "Varsity-jackets-07_s.jpg", "Varsity-jackets-08_s.jpg", "Varsity-jackets-09_s.jpg",
    ],
  },
  {
    slug: "trousers",
    name: "Trousers",
    singular: "Trousers",
    code: "TRS",
    description:
      "Training and leisure trousers cut for movement — joggers, track pants and warm-up bottoms in knits and wovens, finished with your branding.",
    features: [
      "Knit & woven fabric options",
      "Tapered, straight & relaxed fits",
      "Zip pockets & ankle zips available",
      "Drawcord & elastic waistbands",
    ],
    descs: [
      "Tapered jogger with zip pockets and cuffed ankles.",
      "Straight-cut track pant in durable poly knit.",
      "Warm-up bottom with ankle zips for quick changes.",
    ],
    files: [
      "Trosers-01_s.jpg", "Trosers-02_s.jpg", "Trosers-03_s.jpg",
      "Trosers-04_s.jpg", "Trosers-05_s.jpg", "Trosers-06_s.jpg",
      "Trosers-07_s.jpg", "Trosers-08_s.jpg", "Trosers-09_s.jpg",
    ],
  },
];

// ── Public API ──────────────────────────────────────────────────────

const pad = (n) => String(n).padStart(2, "0");

export const productCategories = CATALOG.map((cat) => ({
  slug: cat.slug,
  name: cat.name,
  description: cat.description,
  features: cat.features,
  cover: `/products-img/${cat.slug}/${cat.files[0]}`,
  products: cat.files.map((file, i) => ({
    styleCode: `KI-${cat.code}-${pad(i + 1)}`,
    name: `${cat.singular} KI-${cat.code}-${pad(i + 1)}`,
    desc: cat.descs[i % cat.descs.length],
    image: `/products-img/${cat.slug}/${file}`,
  })),
}));

export function getProductCategory(slug) {
  return productCategories.find((c) => c.slug === slug);
}

export function getProductCategorySlugs() {
  return productCategories.map((c) => c.slug);
}

export const totalProductCount = productCategories.reduce(
  (sum, c) => sum + c.products.length,
  0
);
