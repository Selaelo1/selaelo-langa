/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure all files that use Tailwind are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
