/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-1": "rgb(177, 182, 186)",
        "blue-1": "rgb(240, 252, 254)",
        "blue-2": "rgb(220, 248, 254)",
        "blue-3": "rgb(84, 183, 234)",
        "blackish-blue": "rgb(22, 41, 62)",
        "navy-blue": "rgb(24, 48, 74)",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        verdana: ["verdana", "sans-serif"],
      },
      backgroundImage: {
        hero: "url(./images/hero-2.jpeg)",
        manicure: "url('./images/services/manicure.jpeg')",
        pedicure: "url('./images/services/pedicure.jpg')",
        massage: "url('./images/services/massage.jpeg')",
        facial: "url('./images/services/facial.jpeg')",
        special: "url('./images/services/special.jpeg')",
        waxing: "url('./images/services/waxing.jpeg')",
        kids: "url('./images/services/kids.jpeg')",
      },
      width: {
        mobile: "375px",
      },
    },
  },
  plugins: [],
};
