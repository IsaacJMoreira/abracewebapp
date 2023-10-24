const { blackA } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        ...blackA,
        'C1': '#EAF4E3',
        'C2': '#F7EB7A',
        'C3': '#BED66C',
        'secondary': '#9EAD54',
        'primary': '#96D279'     
       }
    },
  },
  plugins: [],
}