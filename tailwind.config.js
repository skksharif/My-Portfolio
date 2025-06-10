/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comfortaa': ['Comfortaa', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'nunito': ['Nunito', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'share-tech': ['Share Tech', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 1.5s ease infinite',
        'sway': 'sway 3s ease-in-out infinite',
        'orbit': 'orbit linear infinite',
        'core-glow': 'core-glow 3s infinite alternate',
        'pulse-bg': 'pulse-bg 10s infinite ease-in-out',
        'typing-dot': 'bounce 1.2s infinite',
      },
      keyframes: {
        sway: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(2deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg)' },
        },
        'core-glow': {
          '0%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.5)' },
        },
        'pulse-bg': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.18)',
      },
    },
  },
  plugins: [],
}