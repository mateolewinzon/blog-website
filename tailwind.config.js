/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textIndent: {
        "2": "0rem",
        "3": "1rem",
        "4": "2rem"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"), require('@tailwindcss/line-clamp')
  ],
};
