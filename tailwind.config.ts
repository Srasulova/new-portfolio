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
        "clip-path-reveal-1": "clipPathReveal 3s ease forwards",
        line: "lineAnimation 3s ease infinite alternate",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        clipPathReveal: {
          "0%, 25%": {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
          },
          "50%": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
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
      },
      fontFamily: {
        noto: ['"Noto Sans"', "sans-serif"],
        source: ['"Source Code Pro"', "serif"], // Source Code Pro font
      },
      colors: {
        darkOrange: "#300d03",
        lightOrange: "#a32805",
      },
    },
  },
  plugins: [],
} satisfies Config;
