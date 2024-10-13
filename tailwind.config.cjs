/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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