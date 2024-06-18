import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#653780",
          200: "#371A48",
          300: "#4B1F65",
        },
        grey: {
          100: "#666666",
        },
        black: {
          100: "#333333",
        },
      },
      backgroundImage: {
        "eclipse-bg": "url('/svg/ellipse.svg')",
        "animated-shape": "url('/svg/animated-shape.svg')",
        review: 'url("/svg/review-bg.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
