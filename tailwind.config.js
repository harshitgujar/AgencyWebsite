/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'diamond': ['Diamond_Grotesk', 'sans-serif'],
        'yagiza': ['yagiza', 'sans-serif'],
        'bricolage': ['Bricolage_Grotesque', 'sans-serif'],
        'darker': ['Darker_Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
