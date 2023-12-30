/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryFirstColor: "#40E0D0",
      primarySecondColor: "#FF6B6B",
      primaryThreeColor: "#708090",
    },
  },
  plugins: [require("daisyui")],
};
