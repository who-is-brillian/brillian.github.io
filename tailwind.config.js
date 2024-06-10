/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html", "script.js"],
  theme: {
    extend: {
      colors: {
        primary: "#34d399",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
