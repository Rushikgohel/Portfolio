/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          light: "#c770f0",
          DEFAULT: "#be50f4",
          dark: "#a24dd3",
        }
      }
    },
  },
  plugins: [],
}
