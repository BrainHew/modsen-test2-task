/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          100: '#FFFEF8',
          200: '#FFFFEB',
          300: '#f7f5f0',
          400: '#ab8673',
          500: '#d7b29f',
          600: '#12121c'
        },
      }
    },
  },
  plugins: [],
}
