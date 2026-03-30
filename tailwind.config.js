/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* All tokens use CSS variable RGB triplets — opacity modifiers work correctly */
        background:  'rgb(var(--color-bg) / <alpha-value>)',
        card:        'rgb(var(--color-bg) / <alpha-value>)',
        textMain:    'rgb(var(--color-text-main) / <alpha-value>)',
        textMuted:   'rgb(var(--color-text-muted) / <alpha-value>)',
        accent:      'rgb(var(--color-accent) / <alpha-value>)',
        borderLight: 'rgb(var(--color-border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
