/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#454545",
      secondary: "#367d7f",
      black: "#202020",
      litegrey: "#757575",
      white: "#ffffff",
      red:"#ff0000", 
    },
    extend: {},
  },
 
  plugins: [require('tailwind-scrollbar-hide')],};