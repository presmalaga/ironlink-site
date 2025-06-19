/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ironlink: {
          blue: "#1177D1",    // IronLink blue
          accent: "#06F3B8",  // Cyber green accent
          dark: "#071B2C",    // Dark navy background
          light: "#F6FAFF"    // Soft white
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
