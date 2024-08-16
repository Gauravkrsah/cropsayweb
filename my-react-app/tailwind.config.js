/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#F3EBEB',
        black: '#1D1717',
        main:'#014907'
      },
      fontFamily: {
        secondary:'"Playfair Display", serif;'
      }
    },
  },
  plugins: [],
}

