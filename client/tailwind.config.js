/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      'display' : ['Poppins', 'sans-serif'],
      'Inter' : ['Inter','sans-serif']
    }
  },
  plugins: [],
}
