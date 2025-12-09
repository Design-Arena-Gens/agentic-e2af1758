import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3c7bfa",
          muted: "#1a2236",
          accent: "#8aa8ff"
        }
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(60, 123, 250, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
