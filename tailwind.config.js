/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        'sway': 'sway 2.5s ease-in-out infinite',
        'orbit': 'orbit linear infinite',
        'core-glow': 'core-glow 2.5s infinite alternate',
        'pulse-bg': 'pulse-bg 8s infinite ease-in-out',
        'typing-dot': 'bounce 1.2s infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.4s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        sway: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg)' },
        },
        'core-glow': {
          '0%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(139, 92, 246, 0.6), 0 0 50px rgba(59, 130, 246, 0.4)' },
        },
        'pulse-bg': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.01)' },
        },
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          'to': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.18)',
        'glass-dark': 'rgba(0, 0, 0, 0.1)',
        'glass-dark-border': 'rgba(255, 255, 255, 0.1)',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 30px rgba(139, 92, 246, 0.4)',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}