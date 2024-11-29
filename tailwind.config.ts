import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";
//https://fluid.tw/#installation

const config: Config = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: "#6DA58D",
          DEFAULT: "#00432F",
          dark: "#003321",
        },
        secondary: {
          light: "#ffd7be",
          DEFAULT: "#ffb6c1",
          dark: "#ffc0cb",
        },
        gray: {
          DEFAULT: "#575757",
          light: "#afafaf",
          dark: "#454545",
        },
        normal: {
          DEFAULT: "#DFECE6",
        },
      },

      fontSize: {
        xs: "0.75rem",
        sm: ["0.9rem", { lineHeight: "1.25rem" }],
        base: "1rem",
        xl: "1.4rem",
        "2xl": "1.75rem",
        "3xl": "2.2rem",
        "4xl": "2.75rem",
        "5xl": "3.43rem",
        "6xl": "4.3rem",
      },
    },
  },
  plugins: [fluid],
};
export default config;
