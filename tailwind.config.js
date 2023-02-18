/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sofia-sans)', ...fontFamily.sans],
      },
      colors: {
        'good-bg': '#FFF7D3',
        'good-turquoise': {
          50: '#e7cfdd',
          500: '#00a8bd'
        },
        'good-orange': {
          50: '#efc7ae',
          500: '#ef5926'
        },
        'good-violet': {
          50: '#e8ccda',
          500: '#7f3ea6'
        },
        'good-yellow': {
          50: '#FFAD01',
          500: '#FFECB7'
        },
        'good-blue': {
          50: '#BCD3DB',
          500: '#B06512'
        },
        'good-green': {
          50: '#d0e3b5',
          500: '#920055'
        },
        'good-brown': {
          50: '#e8e1cf',
          500: '#683402'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
