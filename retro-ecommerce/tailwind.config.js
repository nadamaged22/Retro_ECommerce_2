module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        retroBg: '#F5F0E8',
        retroTan: '#E8DFC8',
        burntOrange: '#C8501A',
        rustRed: '#B94A2C',
        mustard: '#D4A017',
        gold: '#C89B2A',
        deepDark: '#1A1208',
        espresso: '#2C1810'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        monoAccent: ['"Space Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
