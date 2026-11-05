/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FAF9F6',
          secondary: '#F1EEE7',
          surface: '#FFFFFF',
          card: '#FFFFFF',
          muted: '#F6F4EF',
        },
        primary: {
          DEFAULT: '#25241F',
          light: '#3C3A33',
        },
        secondary: {
          DEFAULT: '#77736B',
          muted: '#969188',
        },
        accent: {
          DEFAULT: '#A58A61',
          hover: '#8E744E',
          light: '#DFD5C6',
          subtle: '#F4EFE6',
        },
        border: {
          DEFAULT: '#E9E4DB',
          light: '#F3EFE9',
          strong: '#D5CEC2',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(37, 36, 31, 0.03)',
        'elevated': '0 10px 30px -5px rgba(37, 36, 31, 0.06)',
        'float': '0 20px 40px -10px rgba(37, 36, 31, 0.1)',
        'modal': '0 25px 60px -15px rgba(37, 36, 31, 0.15)',
      }
    },
  },
  plugins: [],
}
