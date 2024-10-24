/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tomorrow:'"Tomorrow", sans-serif',
        barlow:'"Barlow", sans-serif'
      },
      colors: {
        primary:"#f8ef00",
        secondary:"#00f0ff",
        warning:"#ff003c",
        black:"#000000",
        white:"#fafafa",
        gray:"#bbbbb",
      }
    },
  },
  plugins: [],
}

