/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        drylic: {
          ice:    '#DCEEFF',
          sky:    '#EAF4FF',
          frost:  '#F8FBFF',
          slate:  '#7D8A97',
          navy:   '#274C77',
          'navy-deep': '#1d3a5c',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 1s ease both',
        'fade-in':    'fadeIn 1.4s ease both',
        'float':      'float 7s ease-in-out infinite',
        'pulse-dot':  'pulseDot 2.5s ease infinite',
        'twinkle':    'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'scale(0.97)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%':     { opacity: '1',   transform: 'scale(1.3)' },
        },
        twinkle: {
          '0%,100%': { opacity: '0.35' },
          '50%':     { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}
