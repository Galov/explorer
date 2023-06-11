/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      fontFamily: {
        fordRegular: "Ford Regular",
        fordLight: "Ford Light",
        fordMedium: "Ford Medium",
      },
      colors: {
        fordBlue: "#102B4E",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
