// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  prtsesets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}