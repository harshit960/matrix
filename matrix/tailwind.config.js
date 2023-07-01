/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'monaco': ['"monaco"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
}