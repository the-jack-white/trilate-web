import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        openmenu: "openmenu 1s ease-in",
        closemenu: "closemenu 1s ease-in",
      },
      keyframes: {
        openmenu: {
          // initial position
          "0%": { left: "-224px" },
          // final position
          "100%": { left: "0px" },
        },
        closemenu: {
          // initial position
          "0%": { left: "0px" },
          // final position
          "100%": { left: "-224px" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
