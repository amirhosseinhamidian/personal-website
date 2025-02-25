import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-title-light": "linear-gradient(to right, #1B131B, #8750F6)", 
        "gradient-title-dark": "linear-gradient(to right, #FFFDFD, #8750F6)", 
      },
      textColor: {
        gradient: "transparent", 
      },
     colors:{
      primary: '#8750F6',
      secondary: '#6C48D6',
      background: {
        light: '#ffffff', 
        dark: '#0F0716'
      },
      text: {
        light: '#FFFDFD',
        dark: '#1B131B'
      },
      subtext : {
        light: '#938C94',
        dark: '#807882'
      },
      surface: {
        light: '#F6F3FC',
        dark: '#140B1C'
      },
      head: {
        light: '#8750F6',
        dark: '#2B1555'
      }
     },
     fontFamily: {
      digisarvenaz: ["DigiSarvenaz", "sans-serif"],
      pinar: ["Pinar", "sans-serif"],
    },
    screens: {
      xs: '410px',
    },
    fontSize: {
      '2xs': ['10px', '20px'],
      xs: ['12px', '22px'],
      sm: ['14px', '26px'],
      base: ['16px', '30px'],
      lg: ['18px', '34px'],
      xl: ['20px', '38px'],
      '2xl': ['24px', '42px'],
      '3xl': ['30px', '50px'],
      '4xl': ['36px', '60px'],
      '5xl': ['48px', '72px'],
      '6xl': ['60px', '84px'],
      '7xl': ['72px', '86px'],
      '8xl': ['96px', '96px'],
      '9xl': ['128px', '128px'],
    },
  },
  container: {
    padding: '2rem',
    center: true,
  },
  },
  plugins: [],
} satisfies Config;
