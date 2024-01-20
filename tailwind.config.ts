import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        imgAnimation: "imgAnimation 5s ease-in-out infinite",
        imgBounce: "imgBounce 3s ease-in-out infinite",
        "spin-slow": "spin 5s linear infinite",
      },
      keyframes: {
        imgAnimation: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        imgBounce: {
          "0%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "100%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
        },
      },
      colors: {
        background: {
          DEFAULT: "hsla(var(--background))",
          foreground: "hsla(var(--foreground))",
        },
        primary: {
          DEFAULT: "hsla(var(--primary))",
          foreground: "hsla(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsla(var(--secondary))",
          foreground: "hsla(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: "hsla(var(--success))",
          hover: "hsla(var(--success-hover))",
        },
        warning: {
          DEFAULT: "hsla(var(--warning))",
          hover: "hsla(var(--warning-hover))",
        },
        destructive: {
          DEFAULT: "hsla(var(--destructive))",
          hover: "hsla(var(--destructive-hover))",
        },
        teal: {
          DEFAULT: "hsla(var(--teal))",
          hover: "hsla(var(--teal-hover))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
