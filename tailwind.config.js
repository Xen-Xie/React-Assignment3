/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/theme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: "#1677BD",
        secondary: "#F8F8F8",
        tertiary: "#8F8F8F",
        default: "#232323",
        foreground : "#FFFFFF",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lexend: ['Lexend', 'serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

