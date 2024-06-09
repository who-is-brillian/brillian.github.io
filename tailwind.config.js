/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#34d399",
      },
      backgroundImage: {
        bgimg: "url('img/Element/bg-black.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
