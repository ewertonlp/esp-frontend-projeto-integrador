/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        green500: "#22c55e",
        green600: "#16a34a",
        white: "#fff",
        cinzaDark: "#1e293b",
      }
    },
  },
  plugins: [],
};
