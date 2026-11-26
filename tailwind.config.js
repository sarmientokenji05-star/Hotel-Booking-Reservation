/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10263A',     // main dark blue, text and primary buttons
        harbor: '#1F5662',  // teal, hover and accents
        foam: '#EAF2F1',    // light tint, table headers and hover
        brass: '#B8872B',   // focus ring and highlights
        paper: '#F8FAFA',   // page background
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
