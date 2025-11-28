/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ngiri-midnight': '#191970',
        'ngiri-crimson': '#DC143C',
        'ngiri-yellow': '#FFFF00',
        'ngiri-dark': '#0A0A0A',
        'ngiri-silver': '#C0C0C0',
        'ngiri-lime': '#A4D65E',
        'ngiri-lime-dark': '#7AB32E',
        'ngiri-lime-light': '#C5E89D',
        'ngiri-black': '#1A1A1A',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(220, 20, 60, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(220, 20, 60, 1), 0 0 60px rgba(220, 20, 60, 0.5)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
