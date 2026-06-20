import type { Config } from "tailwindcss";

/* ============================================================
   CONSTRUCTION PROFESSIONAL LIABILITY — "Swiss Precision" palette
   Warm ivory #faf8f5 · deep charcoal #1c1c1e · rich copper #b87333
   Token NAMES match component architecture; VALUES remapped:
   clay = copper · sage = warm gray-brown · gold = warm gold
   espresso = charcoal · cream = warm ivory
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf8f5",
        sand: "#f0ede8",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#b87333",
          dark: "#9a5d26",
          light: "#d4956a",
          50: "#fdf5ee",
          100: "#f9e8d4",
          200: "#f2ceaa",
          300: "#e8ad76",
          400: "#d4956a",
          500: "#b87333",
          600: "#9a5d26",
          700: "#7a481c",
          800: "#5c3415",
          900: "#3e240e",
        },
        sage: {
          DEFAULT: "#8a7060",
          dark: "#6b5545",
          light: "#b09a88",
          50: "#f5f0ec",
          100: "#e8ddd5",
          200: "#d0bcae",
          300: "#b09a88",
          400: "#9a8272",
          500: "#8a7060",
          600: "#6b5545",
          700: "#503e30",
        },
        gold: {
          DEFAULT: "#d4a24a",
          dark: "#b88328",
          light: "#e8c07a",
          50: "#fdf8ee",
          100: "#f9edcc",
          200: "#f2d898",
          300: "#e8c07a",
          400: "#d4a24a",
          500: "#b88328",
          600: "#96671a",
        },
        espresso: "#1c1c1e",
        cocoa: "#4a4441",
        mocha: "#6b6561",
        adobe: "#e8e3dc",
        adobeDark: "#d8cfc4",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "0.25rem",
        arch2: "0.25rem",
        "4xl": "0.25rem",
        "5xl": "0.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #faf8f5 0%, #f0ede8 40%, #f5f0ea 70%, #faf8f5 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(184,115,51,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(184,115,51,0.05) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #b87333 0%, #d4956a 100%)",
        "sage-gradient": "linear-gradient(135deg, #8a7060 0%, #b09a88 100%)",
        "gold-gradient": "linear-gradient(135deg, #d4a24a 0%, #e8c07a 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(184,115,51,0.18), 0 4px 12px -6px rgba(28,28,30,0.06)",
        "warm-lg": "0 30px 70px -20px rgba(184,115,51,0.22), 0 10px 30px -10px rgba(28,28,30,0.08)",
        card: "0 1px 4px -1px rgba(28,28,30,0.06), 0 1px 2px -1px rgba(28,28,30,0.04)",
        "card-hover": "0 8px 24px -6px rgba(184,115,51,0.18), 0 4px 12px -4px rgba(28,28,30,0.08)",
        arch: "inset 0 -4px 20px -6px rgba(184,115,51,0.08)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
