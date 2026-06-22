/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:   '#FAFAF8',
        ink:     '#111110',
        orange:  '#F05A22',
        'orange-light': '#FF7A45',
        ash:     '#E8E6E1',
        muted:   '#7A7870',
        dark:    '#0F0F0E',
        'dark-card': '#1A1A18',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem',  { lineHeight: '1.05' }],
        '8xl': ['5.5rem',  { lineHeight: '1.02' }],
        '9xl': ['6.5rem',  { lineHeight: '1.00' }],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight:   '-0.02em',
      },
    },
  },
  plugins: [],
}
