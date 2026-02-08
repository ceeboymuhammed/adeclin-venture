import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef7f1",
          100: "#d8eee0",
          200: "#b0dcc2",
          300: "#7ec39d",
          400: "#4aa974",
          500: "#1f8a55", // primary
          600: "#167044",
          700: "#115a37",
          800: "#0f4a2f",
          900: "#0c3c26",
        },
        gold: {
          500: "#caa24a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
