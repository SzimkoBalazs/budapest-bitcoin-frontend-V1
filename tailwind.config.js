/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #755EF7 0%, #F65E7A 100%)",
      },
      colors: {
        "white-80": "rgba(255, 255, 255, 0.80)",
        "custom-border": "rgba(17, 17, 17, 0.6)",
        "custom-bg": "rgba(17, 17, 17, 0.4)",
        customGray: "#3F3F3F",
        "neutral-200": "#3d3d3d",
        "neutral-700": "#222222",
        "neutral-800": "#161616",
        "neutral-900": "#101010",
      },
      boxShadow: {
        custom: "0px 0px 20px 0px rgba(118, 94, 246, 0.40)",
        customActive: "0px 0px 16px 0px rgba(118, 94, 246, 0.50)",
        customButton: "0px 0px 20px 0px rgba(118, 94, 246, 0.40)",
      },
      backdropBlur: {
        "2px": "2px",
      },
      screens: {
        xs: "540px",
      },
    },
  },
  plugins: [],
};
