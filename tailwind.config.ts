import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1200px",
        lg: "900px",
        md: "768px",
        sm: "576px",
        xs: "375px",
      },
      fontSize: {
        maincard: [
          "3.75rem",
          {
            lineHeight: "60px",
            letterSpacing: "0px",
            fontWeight: "800",
          },
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        full: "rgba(0,0,0,.2) 0 0 10px",
        full_sm: "rgba(0,0,0,.7) 0 0 10px",
      },
    },
  },
  plugins: [],
};
export default config;
