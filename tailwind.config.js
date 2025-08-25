/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'budgetzilla': {
          'blue': '#8bbce6',
          'light-blue': '#b8cfdf',
          'white': '#f3f3f2',
          'dark-blue': '#03133f',
          'grey': '#5f6a6d',
        }
      }
    },
  },
  plugins: [],
}