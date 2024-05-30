import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    clipPath: {
      myPolygon:
        "polygon(70.71% 100%, 100% 70.71%, 100% 29.29%, 70.71% 0%, 29.29% 0%, 0% 29.29%, 0% 70.71%, 29.29% 100%)",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        ming: {
          "50": "#f1f7fa",
          "100": "#dcebf1",
          "200": "#bed8e3",
          "300": "#91bdcf",
          "400": "#5c98b4",
          "500": "#3e7793",
          "600": "#386582",
          "700": "#33556b",
          "800": "#30485a",
          "900": "#2c3e4d",
        },
        "paynes-gray": "#495867",
        glaucous: "#577399",
        "columbia-blue": "#bdd5ea",
        "ghost-white": "#f7f7ff",
        bittersweet: "#fe5f55",
        "dark-bittersweet": "#dc4921",
      },
    },
  },
  plugins: [require("tailwind-clip-path"), require("tailwind-scrollbar")],
};
export default config;
