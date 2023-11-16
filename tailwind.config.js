/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' if you prefer
  theme: {
    extend: {},
    colors: {
      'very-light-grey': 'hsl(0, 0%, 98%)',
      'dark-blue':'hsl(209, 23%, 22%)',
      'very-dark-blue':'hsl(207, 26%, 17%)',
      'very-dark-blue2':'(Light Mode Text): hsl(200, 15%, 8%)',
      'dark-grey':'hsl(0, 0%, 52%)',
      'white': 'white',
      'black': 'black'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
