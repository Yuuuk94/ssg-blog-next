/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica Neue'],
      'serif': ['Cambria'],
    },
    colors: {
      'regal-blue': '#243c5a',
      'bg' : '#EAEAEA',
    },
    extend: {},
  },
  plugins: [],
}
