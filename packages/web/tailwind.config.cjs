/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        // Aliasing 'zinc' to 'slate' for a cooler, smoother gray scale
        zinc: require('tailwindcss/colors').slate,
        // Aliasing 'emerald' to 'violet' for a smooth, premium accent
        emerald: require('tailwindcss/colors').violet,
      },
      keyframes: {
        'text-gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      animation: {
        'text-gradient': 'text-gradient 3s linear infinite',
      },
    },
  },
  plugins: [],
}
