/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        card: "#FFFFFF",
        textMain: "#000000",
        textMuted: "#555555", 
        accent: "#0E7586",
        accent2: "#A3B18A",
        accent3: "#E9C46A",
        borderLight: "#E5E5E5",
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
