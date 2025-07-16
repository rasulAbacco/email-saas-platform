/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './layout/**/*.{js,jsx}',
  ],
  darkMode: 'class', // Enables dark mode using class
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#06b6d4',
        darkBg: '#0f172a',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
