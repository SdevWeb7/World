/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs': '550px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'nunito': 'Nunito',
        'nunitoItalic': 'NunitoItalic',
      },
      colors: {
        'custom1': 'hsl(209, 23%, 22%)',
        'custom2': 'hsl(207, 26%, 17%)',
        'custom3': 'hsl(200, 15%, 8%)',
        'custom4': 'hsl(0, 0%, 52%)',
        'custom5': 'hsl(0, 0%, 98%)',
        'custom6': '#FAFAFA'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}

