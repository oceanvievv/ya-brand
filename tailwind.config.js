/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  colors: {
    black: "#222222",
  },
  theme: {
    extend: {
      screens: {
        xxsm: "320px",
        xsm: "475px",
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
            padding: "0",
            maxWidth: "1140px",
          },
          "@screen 2xl": {
            maxWidth: "1140px",
          },
        },
      });
    },
  ],
};
