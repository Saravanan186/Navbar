import { Container } from "postcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#f97316"
      },
      fontFamaly: {
        sans : ["Roboto","sans-serif"]
      },
      Container:{
        center :true,
        padding: "16px",
      },
    },
  },
  plugins: [],
}