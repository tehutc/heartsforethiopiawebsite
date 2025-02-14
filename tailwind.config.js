/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: 'rgb(252, 249, 246)',
          100: 'rgb(var(--color-beige))',
          200: 'rgb(237, 218, 191)',
          300: 'rgb(229, 206, 172)',
          400: 'rgb(213, 182, 134)',
          500: 'rgb(197, 158, 96)',
          600: 'rgb(181, 134, 58)',
          700: 'rgb(145, 107, 46)',
          800: 'rgb(108, 80, 35)',
          900: 'rgb(72, 54, 23)',
        },
        mauve: {
          50: 'rgb(247, 242, 242)',
          100: 'rgb(238, 229, 229)',
          200: 'rgb(214, 196, 196)',
          300: 'rgb(190, 163, 163)',
          400: 'rgb(166, 130, 130)',
          500: 'rgb(var(--color-mauve))',
          600: 'rgb(114, 79, 79)',
          700: 'rgb(89, 62, 62)',
          800: 'rgb(64, 44, 44)',
          900: 'rgb(39, 27, 27)',
        },
        wine: {
          DEFAULT: 'rgb(var(--color-wine))',
          light: 'rgb(161, 119, 119)', /* #a17777 */
        },
        sage: {
          DEFAULT: 'rgb(var(--color-sage))',
        },
        brown: {
          DEFAULT: 'rgb(var(--color-brown))',
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      aspectRatio: {
        'w-16': 16,
        'h-9': 9,
      },
    },
  },
  plugins: [],
};