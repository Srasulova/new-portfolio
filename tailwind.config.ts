import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add custom animation
      animation: {
        "slide-down": "slideDown 1s ease-in-out",
        slideIn: "slideIn 2s ease-in forwards",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          }, // Slide in from left
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          }, // To original position
        },
      },
      // Add custom fonts
      fontFamily: {
        mali: ['"Mali"', "sans-serif"], // Mali font
        source: ['"Source Code Pro"', "monospace"], // Source Code Pro font
      },
    },
  },
  plugins: [],
} satisfies Config;
