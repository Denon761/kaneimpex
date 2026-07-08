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
