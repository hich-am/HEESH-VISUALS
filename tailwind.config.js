/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:          '#F5F5F0',
        surface:     '#EAEAEA',
        surfaceAlt:  '#E0E0E0',
        textMain:    '#0A0A0A',
        textMuted:   '#6B6B6B',
        textDim:     '#9CA3AF',
        borderLight: '#E5E5E5',
        borderMid:   '#D4D4D4',
        accent:      '#000000',
      },
      fontFamily: {
        sans:    ['"Space Grotesk"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 12vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(2rem, 5vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'grain': 'grain 8s steps(10) infinite',
        'line-grow': 'line-grow 1.5s ease-out forwards',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        'line-grow': {
          '0%': { scaleX: '0' },
          '100%': { scaleX: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' },
          '50%': { boxShadow: '0 0 25px rgba(0, 0, 0, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
