import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        footify: {
          black:     "#08080f",
          navy:      "#0d0d1a",
          lavender:  "#c8c8e8",
          pink:      "#e91e8c",
          "pink-hot":"#ff2d9b",
          yellow:    "#f5e642",
          white:     "#ffffff",
          gray:      "#a0a0b0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
