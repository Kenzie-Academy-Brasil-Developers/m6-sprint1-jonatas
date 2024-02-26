import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          400: "#1AB4F0"
        },
        gray:{
          400: "#E6E6E6"
        },
        white:{
          400: "#FFFFFF"
        },
        black:{
          400: "#000000"
        },
      }
    },
  },
  plugins: [],
};
export default config;
