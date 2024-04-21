/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        main: "#fafafa",
        squeeze: "#deeaf3",
        accent: "#57646b",
      },
      gray: {
        main: "#6e7b86",
        secondary: "#8a9da9",
        accent: "#8493a5",
      },
      blue: {
        main: "#1c2e44",
        secondary: "#040d18",
        accent: "#44525e",
      },
      yellow:{
        main:"#D9A653",
        secondary: "#E9D1A9",
        accent: '#A5926E'
      },
      red:{
        main: "#E68072",
        secondary: "#AC7F7D",
        accent:"#D0A4A4"
      },
      purple: {
        main: "#5c5c68",
      },
    },
  },
  plugins: [],
};
