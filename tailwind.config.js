/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'baloo2-medium': ['Baloo2-Medium'],
        'baloo2-bold': ['Baloo2-Bold'],
        baloo2: ['Baloo2-Regular'],
        'baloo2-semibold': ['Baloo2-SemiBold'],
        poppins: ['Poppins-Regular'],
        'poppins-bold': ['Poppins-Bold'],
        'poppins-extrabold': ['Poppins-ExtraBold'],
        'poppins-semibold': ['Poppins-Semibold'],
        'poppins-thin': ['Poppins-Thin'],
        sigmar: ['Sigmar-Regular'],
      },
    },
  },
  plugins: [],
}
