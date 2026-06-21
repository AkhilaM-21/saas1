/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Newsreader"', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#D69A16', // Refined Gold
          hover: '#B9811E',   // Hover Gold
          50: '#FDF7EB',
          100: '#F9EAD0',
        },
        accent: {
          DEFAULT: '#F4B942',
        },
        navy: {
          DEFAULT: '#081221', // Deep Dark Navy
          light: '#111E30',   // Slightly lighter
        },
        border: {
          DEFAULT: '#E7EAF1',
        },
        brandblue: {
          DEFAULT: '#1E3A82',
        },
        light: {
          DEFAULT: '#F8FAFC',
        },
        textMain: {
          DEFAULT: '#111827',
        },
        textSecondary: {
          DEFAULT: '#64748B',
        }
      },
    },
  },
  plugins: [],
}
