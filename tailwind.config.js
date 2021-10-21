module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('./assets/bg.jpg')",
      
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
