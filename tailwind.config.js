/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
      colors: {
        "primary-navy": "#0A1628",
        "secondary-navy": "#1A2C4A",
        "accent-blue": "#2D7FF9",
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
        "surface-light": "#F8FAFC",
        "text-primary": "#0F172A",
        "text-secondary": "#475569",
        border: "#E2E8F0",
        background: "#FFFFFF",
        // shadcn compatibility tokens
        input: "#E2E8F0",
        ring: "#2D7FF9",
        foreground: "#0F172A",
        primary: {
          DEFAULT: "#2D7FF9",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F8FAFC",
          foreground: "#0F172A",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F8FAFC",
          foreground: "#475569",
        },
        accent: {
          DEFAULT: "#F0F6FF",
          foreground: "#2D7FF9",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#0F172A",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0F172A",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
