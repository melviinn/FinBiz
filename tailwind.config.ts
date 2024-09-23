import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-haskoy)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        background: "#1D1C20",
        dark_background: "#0F0F0F",
        background_btn: "#1F1F1F",
        foreground: "#FFFFFF",
        light_green: "#91CB1D",
        btn_foreground: "#FBFBFB",
        muted: "#9B9CA1",
      },
    },
  },
  plugins: [flowbite.plugin],
};
export default config;
