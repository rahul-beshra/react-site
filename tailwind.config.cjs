/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#f5f5ff',
          100: '#e5e7ff',
          300: '#a5b4fc',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca'
        }
      },
      boxShadow: {
        soft: '0 18px 55px rgba(15, 23, 42, 0.32)'
      }
    }
  },
  plugins: []
};
