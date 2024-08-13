/** @type {import('tailwindcss').Config} */
// default theme
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: ['Open Sans', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: []
}
