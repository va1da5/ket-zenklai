/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: "300px",
      ...defaultTheme.screens,
    },
    extend: {},
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("daisyui")],
};
