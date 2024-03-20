/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          1: '#FF6100',
        },
        white: {
          0: '#FFFFFF',
        },
        black: {
          0: '#000000',
          1: '#231f20',
        },
      },
      fontSize: {
        pico: '0.5rem', // ~8px
        nano: '0.625rem', // ~10px
        tiny: '0.75rem', // ~12px
        xs: '0.875rem', // ~14px
        sm: '1rem', // ~16px
        md: '1.25rem', // ~20px
        lg: '1.75rem', // ~30px
        xl: '2.125rem', // ~35px
        xxl: '2.5rem', // ~40px
        '3xl': '3.5rem', // ~55px
        '4xl': '4rem',
        '5xl': '4.5rem',
      },
    },
  },
  plugins: [],
};
