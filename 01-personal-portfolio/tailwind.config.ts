import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '920px',
      },
    },
    extend: {
      screens: {
        xs: '480px',
        '2xl': '1400px',
      },
      colors: {
        dark: 'hsl(var(--dark))',
        light: 'hsl(var(--light))',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xs: 'calc(var(--radius) - 6px)',
      },
      fontSize: {
        /** 18px size / 150% height / normal */
        'normal-18': ['1.125rem', { lineHeight: '150%', fontWeight: '400' }],

        /** 22px size / 136.364%% height / normal */
        'normal-22': ['1.375rem', { lineHeight: '136.364%', fontWeight: '400' }],

        /** 26px size / 153.846% height / bold */
        'bold-26': ['1.625rem', { lineHeight: '153.846%', fontWeight: '700' }],

        /** 32px size / 125% height / bold */
        'bold-32': ['2rem', { lineHeight: '125%', fontWeight: '700' }],

        /** 44px size / 136.364% height / bold */
        'bold-44': ['2.75rem', { lineHeight: '136.364%', fontWeight: '700' }],
      },
      spacing: {
        'header-height': 'var(--header-height)',
      },
      boxShadow: {
        card: 'var(--card-shadow)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
export default config
