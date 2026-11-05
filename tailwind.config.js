/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Crimson Text"', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: '#fdfbf7',
        ink: '#2d2a2e',
        sepia: {
          50: '#fdfbf6',
          100: '#f7f1e3',
          200: '#efe2c7',
          300: '#e5ceaa',
          800: '#5c4d3c',
          900: '#3e3226',
        },
      },
    },
  },
  plugins: [],
};
