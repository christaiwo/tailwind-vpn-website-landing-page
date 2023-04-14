/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'Rubik' : ["Rubik Storm", "cursive"],
        'Merriweather' : ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

