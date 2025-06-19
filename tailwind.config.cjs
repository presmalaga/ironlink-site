module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b1f66',   // deep navy
        accent: '#00c2ff',    // cyan
        background: '#ffffff',
        muted: '#e5e7eb'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
};
