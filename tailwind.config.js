/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#f5f5f7',
      },
      keyframes: {
        modalIn: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(8px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        backdropIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'modal-in': 'modalIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'backdrop-in': 'backdropIn 0.2s ease both',
      },
    },
  },
  plugins: [],
};
