/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'bold': '600',
      },
      colors: {
        green: '#59B17A',
        greenAlpha: 'rgba(89, 177, 122, 0.10)',
        background: '#F7F8FA',
        white: '#FFFFFF',
        dark: '#1D1E21',
        border: '#D9D9D9',
      },
      textColor: {
        'heading': '#1D1E21',
        'text': '#93939A',
      },
      borderRadius: {
        '60': '60px',
        '50': '50%',
        '27': '27px',
      },
      padding: {
        '8': '8px',
        '9': '9px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
