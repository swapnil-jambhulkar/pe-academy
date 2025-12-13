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
        primary: {
          DEFAULT: "#000000",
          dark: "#0a0a0a",
          light: "#1a1a1a",
          navy: "#001F3F",
        },
        accent: {
          gold: "#B8860B",
          "gold-light": "#DAA520",
          "gold-dark": "#8B6914",
        },
        neutral: {
          DEFAULT: "#000000",
          light: "#333333",
          lighter: "#666666",
          white: "#FFFFFF",
        },
        background: {
          DEFAULT: "#FFFFFF",
          light: "#F5F5F5",
          dark: "#000000",
          gray: "#1a1a1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        heading: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      backgroundImage: {
        "gradient-black": "linear-gradient(to bottom, #000000, #1a1a1a)",
        "gradient-white": "linear-gradient(to bottom, #FFFFFF, #F5F5F5)",
        "gradient-dark": "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

