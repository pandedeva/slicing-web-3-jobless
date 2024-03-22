/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#001AFF",
      },
      backgroundImage: {
        bgImg: "url('/img/bg.png')",
      },
    },
  },
  plugins: [],
};
