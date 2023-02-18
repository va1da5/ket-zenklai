/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
