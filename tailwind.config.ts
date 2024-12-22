/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      colors: {
        'kakao-yellow': '#FEE500',
        'kakao-brown': '#3A1D1D',
      },
      fontFamily: {
        aptos: ['Aptos', 'sans-serif'],
      },
      brightness: {
        70: '0.70',
      },
    },
  },
  plugins: [],
};
