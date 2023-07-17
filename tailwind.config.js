/** @type {import('tailwindcss').Config} */

function withOpacity(varName) {
  return ({ opacityValue }) => `rgba(var(${varName}), ${opacityValue ?? 1})`
}

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    fontFamily: {
      indie_flower: ['Indie Flower', 'cursive'],
      inter: ['Inter', 'sans-serif'],
      itim: ['Itim', 'cursive'],
      sigma_one: ['Sigma One', 'cursive'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        btn: {
          bg: withOpacity('--btn-color'),
          foreground: withOpacity('--btn-foreground'),
        },
        primary: {
          DEFAULT: withOpacity('--primary'),
          foreground: withOpacity('--primary-foreground'),
          dark: {
            DEFAULT: withOpacity('--primary-dark'),
            foreground: withOpacity('--primary-dark-foreground'),
          },
        },
        secondary: {
          DEFAULT: withOpacity('--secondary'),
          foreground: withOpacity('--secondary-foreground'),
        },
        tertiary: {
          DEFAULT: withOpacity('--tertiary'),
          foreground: withOpacity('--tertiary-foreground'),
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      // borderRadius: {
      //   lg: 'var(--radius)',
      //   md: 'calc(var(--radius) - 2px)',
      //   sm: 'calc(var(--radius) - 4px)',
      // },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'updown-threepoints': {
          '0%': { transform: 'translateY(var(--updown-threepoints-offset))' },
          '50%': {
            transform:
              'translateY(calc(-1 * var(--updown-threepoints-offset)))',
          },
          '100%': { transform: 'translateY(var(--updown-threepoints-offset))' },
        },
      },
      animation: {
        'updown-threepoints': 'updown-threepoints 1s infinite ease-in-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
