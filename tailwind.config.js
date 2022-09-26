const { primary } = require('laravel-mix/src/Mix')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './.vulmix/**/pages/*.{vue,html,js}',
    './.vulmix/**/components/*.{vue,html,js}',
    './pages/*.{vue,html,js}',
    './components/*.{vue,html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006CA8',
        secondary: '#FFCD42',
        paragraph: '#283847',
        gray: '#94A3B8',
      },
    },
  },
  plugins: [],
}
