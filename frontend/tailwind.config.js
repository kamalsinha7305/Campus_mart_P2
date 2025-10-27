/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'roboto':["Roboto"],
      'robotoflex':["Roboto Flex"] ,
      },
      listStyleType: {
        alpha: 'lower-alpha',
      },
    },
  },
  plugins: [
    ({ addUtilities }) =>
      addUtilities({
        ".no-scrollbar": {
          /* Firefox */
          "scrollbar-width": "none",
          /* IE/Edge Legacy */
          "-ms-overflow-style": "none",
          /* WebKit */
          "&::-webkit-scrollbar": { display: "none" },
        },
      }),
  ],
}

