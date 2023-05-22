/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'BlackLato': 'BlackLato',
        'Oswald':'Oswald-bold',
      },
      colors: {
        'blue-1':'#414f6b',
        'black-1':'#4d4d4d',
        'blue-2':'#37435b',
        'blue-3':'#63769d',
        'grey-1':'#6b7b97',
        'grey-2':'#a0a7b4',
        'grey-3':'#afb3bd',
        'grey-4':'#b0b4be',
      },
      
    },
  },
  plugins: [
    // require('flowbite/plugin')
]
}

