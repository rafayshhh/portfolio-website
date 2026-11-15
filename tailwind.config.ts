import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#08080a",
        foreground: "#f4f4f5",
        card: {
          DEFAULT: "#101015",
          hover: "#17171e",
          border: "#1f1f28",
        },
        crimson: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
        },
        brand: {
          red: "#ef4444",
          "red-glow": "rgba(239, 68, 68, 0.25)",
          dark: "#09090c",
          darker: "#050507",
          border: "#202028",
          "border-hover": "#383846",
          muted: "#8b8b9e",
        },
      },
      boxShadow: {
        "glow-red": "0 0 25px -5px rgba(239, 68, 68, 0.35)",
        "glow-red-lg": "0 0 50px -10px rgba(239, 68, 68, 0.4)",
        "glow-sm": "0 0 15px -3px rgba(239, 68, 68, 0.25)",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 4s ease-in-out infinite alternate",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(30px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
