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
          300: '#D3B48C',
        },
      }
    },
  },
  plugins: [],
}
