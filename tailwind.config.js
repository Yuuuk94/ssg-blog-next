/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue"],
      serif: ["Cambria"],
    },
    colors: {
      white: "#FFFFFF",
      bgGray: "#F0F0F3",
      gray: "AEAEC0",
      skyBlue: "#9ED4FC",
      pink: "#CF83F7",
    },
    extend: {
      boxShadow: {
        "custom-neo-t": "-10px -10px 30px 0 #FFFFFF",
        "custom-neo-b": "10px 10px 30px 0 #AEAEC0",
      },
    },
  },
  plugins: [],
};
