/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue", "Noto Sans KR"],
      serif: ["Times", "Noto Serif KR"],
    },
    colors: {
      white: "#FFFFFF",
      bgGray: "#F0F0F3",
      gray: "#a7a4a4",
      textMain: "#3d3d43",
      textSub: "#b4b4c2",
      skyBlue: "#9ED4FC",
      pink: "#CF83F7",
    },
    extend: {
      boxShadow: {
        "custom-neo-t": "-10px -10px 30px 0 #FFFFFF",
        "custom-neo-b": "10px 10px 30px 0 #AEAEC0",
        "neo-icon-t": "-10px -10px 30px 0 #FFFFFF",
        "neo-icon-b": "4px 4px 30px 0 #AEAEC0",
      },
      width: {
        "main-img": "32px",
        "icon-img": "40px",
      },
      minWidth: {
        "main-img": "28px",
        "icon-img": "40px",
      },
    },
  },
  plugins: [],
};
