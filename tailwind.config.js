/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': "'Red Hat Display', sans-serif"
      },
      colors:{
        'mlp-dark-medium': '#28283D',
        'mlp-gray': '#87879D',
        'mlp-purple': '#855FB1',
        'mlp-purple-light': '#D9B8FF',
        'mlp-purple-btn': '#B18BDD',
        'mlp-green-light': '#4D96A9',
        'mlp-green-btn': '#71C0D4',
        'mlp-sky': '#8FE3F9',
        'mlp-white-medium': '#FAFAFA'
      }
    },
  },
  plugins: [],
}
