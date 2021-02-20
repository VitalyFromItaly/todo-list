module.exports = {
  purge: ["./src/**/*.vue", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "light-mobile": "url('/img/bg-mobile-light.jpg')",
        "dark-mobile": "url('/img/bg-mobile-dark.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
