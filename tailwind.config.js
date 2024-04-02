/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./pages/**/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006CA8",
        secondary: "#FFCD42",
        paragraph: "#283847",
        gray: "#94A3B8",
      },
    },
  },
  plugins: [],
};
