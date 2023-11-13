import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        80: '80px',
      },
      lineHeight: {
        90: '90px',
      },
      rotate: {
        180: '180deg',
      },
      padding: {
        5: '5px',
        10: '10px',
        20: '20px',
        40: '40px',
      },
      height: {
        6: '6px',
        30: '30px',
        40: '40px',
        50: '50px',
        60: '60px',
        70: '70px',
        80: '80px',
        200: '200px',
        350: '350px',
        470: '470px',
      },
      width: {
        15: '15px',
        30: '30px',
        sm: '428px',
        70: '70px',
        120: '120px',
        200: '200px',
        280: '280px',
        350: '350px',
      },
      borderRadius: {
        160: '160px',
      },
      colors: {
        'gray-300': '#B1B5C1',
        'gray-200': 'hsl(220,90%,98%)',
        dark: '#020005',
        'dark-700': '#131528',
        lightDark: '#131528',
        'blue-700': '#1E50FF',
        'green-700': '#56BD83',
      },
      backgroundColor: {
        'blue-700': '#1E50FF',
        'blue-900': '#05113B',
        'dark-700': '#07010e',
        'dark-800': '#020005',
        'dark-900': '#131528',
        'yellow-700': '#ffc935',
      },
      maxWidth: {
        container: '1120px',
        input: '428px',
      },
      margin: {
        3: '3rem',
        4: '4rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      outlineColor: {
        'blue-700': '#1E50FF',
      },
      transitionProperty: {
        rotate: 'rotate 0.5s linear',
        all: 'all 0.3s linear',
        inputTransition: 'all .2s ease-in-out',
      },
      boxShadow: {
        sm: '0 0 0 2px #1e50ff',
      },
    },
  },
  plugins: [],
};
export default config;
