/** @type {import('tailwindcss').Config} */


module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': {
            'max': '767px'
        }
    },
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {},
  plugins: [],

}