/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ink black — headings, hero and dark bands. Light steps are the
        // warm off-white page tints.
        navy: {
          DEFAULT: "#141416",
          50: "#f7f6f3",
          100: "#efeeea",
          200: "#e2e0d9",
          700: "#2c2c30",
          800: "#1c1c1f",
          900: "#111113",
        },
        // Signal red — icons, links, CTAs and accent marks.
        brand: {
          DEFAULT: "#e8442e",
          light: "#ff7a5f",
          dark: "#c5321f",
        },
      },
      fontFamily: {
        sans: ["var(--font-urbanist)", "system-ui", "sans-serif"],
        heading: ["var(--font-urbanist)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [],
};
