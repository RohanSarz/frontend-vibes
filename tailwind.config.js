/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js, css}"],
  theme: {
    extend: {
      colors: {
        backG: "hsl(0, 0%, 100%)",
        lightGray: "hsl(212, 45%, 89%)",
        grayblue: "hsl(220, 15%, 55%)",
        darkBlue: "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        Outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
};
