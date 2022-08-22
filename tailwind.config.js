/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xxsm: "320px",
        xsm: "475px",
      },
      colors: {
        ["deep-black"]: "#222222",
        black: "#222222",
        losos: "#F16D7F",
        pink: "#F26376",
        red: "#FF6A6A",
        ["gray"]: "#9F9F9F",
        ["pale-gray"]: "#F8F8F8",
        ["light-gray"]: "#F1E4E6",
        ["dark-gray"]: "#5D5D5D",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".nav-container": {
          marginLeft: "auto",
          marginRight: "auto",
          "@screen xxsm": {
            padding: "0 16px",
          },
          "@screen xsm": {
            padding: "0 32px",
          },
          "@screen sm": {
            padding: "0 32px",
          },
          "@screen md": {
            padding: "0 32px",
          },
          "@screen lg": {
            padding: "0 32px",
          },
          "@screen xl": {
            padding: "0 32px",
            maxWidth: "1440px",
          },
        },
      });
    },
  ],
};
