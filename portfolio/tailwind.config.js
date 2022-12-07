/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'greatSailor': ["GREAT-SAILOR", "cursive"]
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
      },
    },
  },
  variants: {
    extend: {},
    animation: ["motion-safe"]
  },
  plugins: [],
}
