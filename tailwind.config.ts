import { transform } from "next/dist/build/swc";
import { relative } from "path";
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      text: {
        "text-header": {
          "font-size": "3rem",
        },
      },
      animation: {
        "text-slide": "text-slide 10s cubic-bezier(0.75, 0, 0.25, 1) infinite",
      },
      keyframes: {
        "text-slide": {
          "0%, 20%": {
            transform: "translateY(0%)",
          },
          "20%, 40%": {
            transform: "translateY(-20%)",
          },
          "40%, 60%": {
            transform: "translateY(-40%)",
          },
          "60%, 80%": {
            transform: "translateY(-60%)",
          },
          "80%,100%": {
            transform: "translateY(-80%)",
          },
        },
        fadeInLeft: {
          "0%": { transform: "translateX(-20%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "100%" },
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
