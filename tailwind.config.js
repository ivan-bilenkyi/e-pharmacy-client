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
        grayAlpha: 'rgba(241, 241, 241, 0.50)',
        background: '#F7F8FA',
        white: '#FFFFFF',
        dark: '#1D1E21',
        borderNavLink: '#D9D9D9',
      },
      textColor: {
        'heading': '#1D1E21',
        'text': '#93939A',
        'subText': '#F1F1F1',
      },
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1440px',
      },
      borderRadius: {
        '60': '60px',
        '50': '50%',
        '27': '27px',
      },
      gap: {
        '14': '14px',
      },
      margin: {
        '24': '24px'
      },
      padding: {
        '8': '8px',
      },
      fontSize: {
        '74': '74px',
        '16': '16px',
      },
      lineHeight: {
        '100': '1',
        '125': '1.25',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
