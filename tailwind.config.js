/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cm-green": "#DAF0CD",
        "cm-green-dark": "#BFE5A8",
        "cm-yellow": "#FCE8BB",
        "cm-yellow-dark": "#FADA91"
      }
    },
  },
  plugins: [],
}

