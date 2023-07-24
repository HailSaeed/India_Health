/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["noor", "sans-serif"],
      },
      colors: {
        pumpa: "#8565ed",
        orange: "#f4be58",
        dark: "#494949",
        lightDark: "#f3f3f3",
        lightOrange: "#f7edcf",
        lightPumpa: "#dad2f3",
      },
    },
  },
  plugins: [],
};
