module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'light-mobile': "url('/img/bg-mobile-light.jpg')",
        'dark-mobile': "url('/img/bg-mobile-dark.jpg')",
        'light-desktop': "url('/img/bg-desktop-light.jpg')",
        'dark-desktop': "url('/img/bg-desktop-dark.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
