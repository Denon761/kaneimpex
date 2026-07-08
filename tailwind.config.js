/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#132f4c",
          50: "#f5f7fa",
          100: "#e6ebf1",
          200: "#cdd7e3",
          700: "#173a5e",
          800: "#0f2843",
          900: "#0b1f33",
        },
        // brand aliases navy so the whole UI reads as one navy system.
        brand: {
          DEFAULT: "#132f4c",
          light: "#8aa6c8",
          dark: "#0d2440",
        },
        // Muted classic gold, used sparingly for premium accents.
        gold: {
          DEFAULT: "#b78a4a",
          light: "#d0ad72",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
