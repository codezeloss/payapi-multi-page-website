/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      "water-white": "#fbfcfe",
      "dark-pink": "#ba4270",
      "charm-pink": "#da6d97",
      "lightsj-blue": "#6c8294",
      "sj-blue": "#36536b",
      "mirage-blue": "#1b262f",
      bodybgcolor: "#edf3f8",
      "error-red": "#FF0000",
    },
    fontFamily: {
      "dm-serif": ["DM Serif Display", "sans-serif"],
      "public-sans": ["Public Sans", "sans-serif"],
    },
    screens: {
      "1bp": { max: "1074px" },
      "2bp": { max: "910px" },
      "3bp": { max: "700px" },
    },
    extend: {},
  },
  plugins: [],
};
