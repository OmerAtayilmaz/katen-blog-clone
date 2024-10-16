/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'btn-background':
          'linear-gradient(to top, #FFA387 0%, #FFA387 51%, #FE4F70 100%)',
        'btn-background-h':
          'linear-gradient(to top, #FE4F70 0%, #FFA387 51%, #FFA387 100%)',
        'linear-right':
          'linear-gradient(to right, #FE4F70 0%, #FFA387 51%, #FFA387 100%)',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        brand: {
          light: '#8F9BAD',
          DEFAULT: '#8F9BAD',
          primary: '#FE4F70',
          dark: '#203656',
        },
      },
    },
  },
  plugins: [],
}
