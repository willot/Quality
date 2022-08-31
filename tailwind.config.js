/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'blue': {
        DEFAULT: '#1034a6'
      },
      'white': {
        DEFAULT: '#F4F4F5'
      },
      'pink': {
        DEFAULT: '#ffd1dc'
      },
      'red': {
        DEFAULT: '#e32636'
      },
      'green': {
        DEFAULT: '#84CC16'
      },
    },
    extend: {},
  },
  plugins: [],
}
