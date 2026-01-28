
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // all your React components
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['main', 'sans-serif'],
        arabic: ['Playpen Sans Arabic', 'Zain', 'main', 'sans-serif'],
      },
    },
  },
  plugins: []
};
