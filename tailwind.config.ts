import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-title-light':
          'linear-gradient(to right, #8750F6 20%, #1B131B 100%)',
        'gradient-title-dark':
          'linear-gradient(to right, #8750F6 20%, #FFFDFD 100%)',
        'gradient-icon-light':
          'linear-gradient(135deg, #8750F6 20%, #1B131B 100%)',
        'gradient-icon-dark':
          'linear-gradient(135deg, #8750F6 20%, #FFFDFD 100%)',
      },
      textColor: {
        gradient: 'transparent',
      },
      colors: {
        primary: '#8750F6',
        secondary: '#6C48D6',
        secondaryBackground: '#2F185E',
        red: '#CD1414',
        green: '#1D9745',
        background: {
          light: '#ffffff',
          dark: '#0F0716',
        },
        text: {
          light: '#1B131B',
          dark: '#FFFDFD',
        },
        subtext: {
          light: '#938C94',
          dark: '#807882',
        },
        surface: {
          light: '#F6F3FC',
          dark: '#140B1C',
        },
        head: {
          light: '#8750F6',
          dark: '#2B1555',
        },
        border: {
          light: '#BBBBBB',
          dark: '#2A135C',
        },
      },
      fontFamily: {
        digisarvenaz: ['DigiSarvenaz', 'sans-serif'],
        pinar: ['Pinar', 'sans-serif'],
        pinarpn: ['Pinar-pn', 'sans-serif'],
      },
      screens: {
        xs: '410px',
      },
      fontSize: {
        '2xs': ['10px', '24px'],
        xs: ['12px', '26px'],
        sm: ['14px', '28px'],
        base: ['16px', '34px'],
        lg: ['18px', '38px'],
        xl: ['20px', '42px'],
        '2xl': ['24px', '46px'],
        '3xl': ['30px', '48px'],
        '4xl': ['36px', '50px'],
        '5xl': ['48px', '64px'],
        '6xl': ['60px', '74px'],
        '7xl': ['72px', '82px'],
        '8xl': ['96px', '94px'],
        '9xl': ['128px', '104px'],
      },
    },
    container: {
      padding: '2rem',
      center: true,
    },
  },
  plugins: [],
} satisfies Config;
