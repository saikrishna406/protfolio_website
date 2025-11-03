/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'slideUp': 'slideUp 1s cubic-bezier(0.75, 0, 0.25, 1) forwards',
        'fadeIn': 'fadeIn 1s ease forwards',
      },
      screens: {
        'lg': {'max': '1024px'},
        'md': {'max': '768px'},
      }
    },
  },
  plugins: [],
}