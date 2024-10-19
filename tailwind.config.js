/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zendots: ['"Zen Dots"', "cursive"], // Nombre personalizado
      },
    },
  },
  plugins: [],
};
