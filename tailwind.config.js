/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'blue': {
        DEFAULT: '#0556d4',
        light:'#E8F2FC'
      },
      'white': {
        DEFAULT: '#F4F4F5',
        bg:'#F7F6F8',
      },
      'pink': {
        DEFAULT: '#fc55de'
      },
      'red': {
        DEFAULT: '#e32636'
      },
      'green': {
        DEFAULT: '#84CC16'
      },
      'black': {
        DEFAULT: '#000000'
      },
      'grey': {
        DEFAULT: '#333',
        light: '#DADADA'
      }
    },
    extend: {},
  },
  plugins: [],
}
