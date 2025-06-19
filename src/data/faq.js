export default {
  content: ["./src/**/*.{html,js,astro,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        ironlink: {
          navy: '#0B1C24',        // Deep background
          green: '#4FD69C',       // Highlight green (top banner)
          red: '#FF4C4C',         // CTA red (contact/get in touch)
          blue: '#007BFF',        // CTA secondary (book/free consult)
          gray: '#F0F0F0',        // Light text on dark backgrounds
          white: '#FFFFFF'        // Section breaks and base content
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};
