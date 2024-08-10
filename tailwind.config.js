/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily:{
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

