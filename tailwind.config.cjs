/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        'brand-orange': '#ff7a18',
        'brand-red': '#e63946',
        'brand-brown-dark': '#2b1b12',
        'brand-bg-light': '#f8fafc',
        'popular-badge': '#ff6b35',
        'hero-text': '#fff8f0',
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45))',
        'menu-bg': 'linear-gradient(180deg,#ffffff,#fffaf7)',
        'about-bg': 'linear-gradient(180deg,#ffffff,#fffefc)',
        'icon-gradient': 'linear-gradient(135deg,#ff7a18,#e63946)'
      },
      boxShadow: {
        'soft-xl': '0 20px 40px rgba(2,6,23,0.12)',
        'pop': '0 8px 30px rgba(0,0,0,0.15)'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-shadow-lg': {
          'text-shadow': '0 8px 30px rgba(0,0,0,0.5)'
        },
        '.text-shadow-md': {
          'text-shadow': '0 4px 14px rgba(0,0,0,0.35)'
        }
      })
    })
  ],
}
