import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 0.4s ease-in-out',
      },
      keyframes: (theme) => ({
        fadeOut: {
          //@ts-ignore
          '0%': { opacity: theme('opacity.0') },
          //@ts-ignore
          '100%': { opacity: theme('opacity.100') },
        },
      }),
      backgroundImage: {
        'gradient-custom': 'linear-gradient(180deg, #1e1e1e, #121212)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      colors: {
        primary: '#121212',
        primarybg: '#1e1e1e',
        secondary: '#22c55e',
        purple: '#7828C8',
        graybackg: '#2a2a2a',
        gray: '#242424',
        grayLight: '#A1A0A0',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'dark', // default theme from the themes object
      defaultExtendTheme: 'dark', // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            foreground: '#1e1e1e',
            background: '#121212',
            primary: '#121212',
            secondary: '#22c55e',
            gray: '#242424',
            purple: '#7828C8',
            graybackg: '#2a2a2a',
          }, // light theme colors
        },
        dark: {
          layout: {
            radius: {
              small: '6px', // rounded-small
              medium: '10px', // rounded-medium
              large: '10px', // rounded-large
            },
            borderWidth: {
              small: '1px', // border-small
              medium: '1px', // border-medium
              large: '2px', // border-large
            },
          }, // dark theme layout tokens
          colors: {
            foreground: '#1e1e1e',
            background: '#121212',
            primary: '#121212',
            secondary: '#22c55e',
            gray: '#242424',
            purple: '#7828C8',
            graybackg: '#2a2a2a',
          }, // dark theme colors
        },
      },
    }),
  ],
}
export default config
