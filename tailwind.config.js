/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      smmd: '650px',
      md: '768px',
      mdlg: '769px',
      mdmdlg: '810px',
      lg: '1024px',
      xlg: '1200px',
      xl: '1440px',
      mxl: '1700px',
      xxl: '1920px',
      xxxl: '2500px',
    },

    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        Rubik: ['Rubik'],
        'Kanit-Regular': ['Kanitregular'],
        Kanitbold: ['Kanitbold'],
      },

      colors: {
        primary500: '#00386c',
        primary400: '#0063e5',
        primary300: '#037aeb',
        primary200: '#068dff',
        primary100: '#67bdff',
        secondary: '#02e7f5',
        accent: '#ffffff',
        neutral700: '#101116',
        neutral600: '#1a1d29',
        neutral500: '#30333e',
        neutral400: '#5f6169',
        neutral300: '#74757d',
        neutral200: '#c8c9cb',
        neutral100: '#f9f9f9',
        neutralMinus100: '#ffffff',
        link: '#67bdff',
        disabled: '#5f6169',
        background: '#1a1d29',
      },
    },
  },
  plugins: [],
};
