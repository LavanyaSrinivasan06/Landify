module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true, 
  theme: {
    extend: {
      colors: {
        'custom-blue': '#dbecf4',
        'custom-violet':"#7c3cec",
        'custom-green': "#1DB5BE",
      },
      
      
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
