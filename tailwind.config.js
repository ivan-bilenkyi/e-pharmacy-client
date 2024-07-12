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
        bgModalBurger: 'rgba(29, 30, 33, 0.45)',
        darkAlpha10: 'rgba(29, 30, 33, 0.10)',
        darkAlpha: 'rgba(29, 30, 33, 0.40)',
        darAlpha60: 'rgba(29, 30, 33, 0.60)',
        greenAlphaLight: 'rgba(89, 177, 122, 0.08)',
        greenAlpha: 'rgba(89, 177, 122, 0.10)',
        greenAlpha50: 'rgba(89, 177, 122, 0.50)',
        greenAlpha60: 'rgba(89, 177, 122, 0.60)',
        grayAlpha: 'rgba(241, 241, 241, 0.50)',
        redAlpha: 'rgba(232, 80, 80, 0.10)',
        mediaBorder: 'rgba(247, 248, 250, 0.10)',
        background: '#F7F8FA',
        white: '#FFFFFF',
        dark: '#1D1E21',
        borderNavLink: '#D9D9D9',
        hoverButton: '#3F945F',
        lightGray: '#FDFDFD',
        lightGreen: '#E7F1ED'
      },
      textColor: {
        'heading': '#1D1E21',
        'text': '#93939A',
        'topText': '#6A6A6F',
        'subText': '#F1F1F1',
        'green': '#59B17A',
        'red': '#E85050',
        'gray': '#F7F8FA',
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
        '78': '78px',
        '40': '40px',
        '32': '32px',
        '20': '20px',
        '18': '18px',
        '14': '14px',
        '13': '13px',
      },
      fontSize: {
        '74': '74px',
        '54': '54px',
        '50': '50px',
        '40': '40px',
        '28': '28px',
        '24': '24px',
        '20': '20px',
        '16': '16px',
        '14': '14px',
        '12': '12px',
      },
      lineHeight: {
        '150': '1.5',
        '142': '1.42',
        '140': '1.4',
        '133': '1.33',
        '125': '1.25',
        '128': '1.28',
        '120': '1.20',
        '116': '1.16',
        '114': '1.14',
        '111': '1.1',
        '100': '1',
        '90': '0.90',
        '82': '0.82',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
