import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#f8fafc",
          primary: "#0f172a",
          accent: "#2563eb",
          success: "#15803d",
          danger: "#b91c1c"
        }
      }
    },
  },
  plugins: [],
};

export default config;
