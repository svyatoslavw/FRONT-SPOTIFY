import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 0.4s ease-in-out',
      },

      // that is actual animation
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
      colors: {
        primary: '#121212',
        secondary: '#22c55e',
        gray: '#615F5C',
        grayLight: '#A1A0A0',
        orange: '#ff6f00',
        orangeDark: '#BD9A5C',
        orangeLight: '#DEBD79',
        skin: '#D7CFA8',
      },
    },
  },
  plugins: [],
}
export default config
