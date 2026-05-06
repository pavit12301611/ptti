/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dark: '#0C0C0C',
        light: '#D7E2EA',
        neon: { cyan: '#00d4ff', purple: '#7b2ff7', green: '#00ff87', pink: '#ff006e', orange: '#ff6b35', yellow: '#ffbe0b' },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'floatDelayed 8s ease-in-out infinite',
        'gradient-x': 'gradientX 3s ease infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        floatDelayed: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-15px)' } },
        gradientX: { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        scan: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100%)' } },
      },
    },
  },
  plugins: [],
};