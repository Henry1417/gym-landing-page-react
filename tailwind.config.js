/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FF6B35',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
};