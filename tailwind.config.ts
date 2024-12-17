import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add custom animations
      animation: {
        "slide-down": "slideDown 1s ease-in-out",
        "slide-up": "slideUp 1s ease-in-out",
        "clip-path-reveal-1": "clipPathReveal 3s ease-out forwards",
        line: "lineAnimation 3s ease infinite alternate",
        "gradient-border": "gradient-border 6s ease infinite", // Add gradient animation
        "slide-in-left": "slideInLeft 1s ease-out forwards",
        "slide-in-right": "slideInRight 1s ease-out forwards",
        "slide-in-bottom": "slideInBottom 1s ease-out forwards",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        clipPathReveal: {
          "0%, 25%": {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", // Hidden
          },
          "50%": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", // Fully visible
          },
        },
        lineAnimation: {
          "0%": { transform: "scaleX(0)", top: "calc(100% - 2px)" },
          "15%": { transform: "scaleX(0)", top: "calc(100% - 2px)" },
          "20%, 25%": { transform: "scaleX(1)", top: "calc(100% - 2px)" },
          "50%": { transform: "scaleX(1)", top: "0" },
          "70%": { transform: "scaleX(0.2)", top: "0" },
          "80%, 100%": { transform: "scaleX(0.2)", top: "0" },
        },
        "gradient-border": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      fontFamily: {
        noto: ['"Noto Sans"', "sans-serif"],
        porietOne: ["Poiret One", "sans-serif"],
        source: ['"Source Code Pro"', "serif"], // Source Code Pro font
      },
    },
  },
  plugins: [],
} satisfies Config;
