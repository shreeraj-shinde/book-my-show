/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: {
          50: "#EDF1FC",
          100: "#D5DEF8",
          200: "#A5B9F0",
          300: "#7593E8",
          400: "#456EE0",
          500: "#224FCB",
          600: "#1A3C9B",
          700: "#12296B",
          800: "#0A173B",
          900: "#02040A",
        },
        premier: {
          50: "#EDF4FD",
          100: "#D4E5FA",
          200: "#A1C6F5",
          300: "#6FA7EF",
          400: "#3C88E9",
          500: "#186BD6",
          600: "#1252A3",
          700: "#0D3871",
          800: "#2B3148",
          900: "#01060C",
        },
      },
    },
  },
  plugins: [],
};
