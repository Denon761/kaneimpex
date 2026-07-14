/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy blue — headings, hero and dark bands. Light steps are
        // the cool off-white page tints.
        navy: {
          DEFAULT: "#14294b",
          50: "#f5f7fa",
          100: "#eaeef5",
          200: "#d8e0ec",
          700: "#1c3a6b",
          800: "#16305a",
          900: "#0e2141",
        },
        // Royal blue accent — icons, links, CTAs and accent marks.
        brand: {
          DEFAULT: "#2563eb",
          light: "#6ea8ff",
          dark: "#1d4ed8",
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
