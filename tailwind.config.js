/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-1": "hsl(0, 0%, 98%)",
        "semi-white": "hsla(0, 0%, 100%, 90%)",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      backgroundImage: {
        hero: "url(./images/hero-2.jpeg)",
      },
    },
  },
  plugins: [],
};
