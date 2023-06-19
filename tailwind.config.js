/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-1": "rgb(240, 252, 254)",
        "blue-2": "rgb(220, 248, 254)",
        "blue-3": "rgb(84, 183, 234)",
        "blackish-blue": "rgb(22, 41, 62)",
        "navy-blue": "rgb(24, 48, 74)",
        "dark-gray": "hsl(0, 0%, 55%)",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        verdana: ["verdana", "sans-serif"],
      },
      backgroundImage: {
        hero: "url(./images/hero.png)",
        manicure:
          "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('./images/services/manicure.jpeg')",
        pedicure:
          "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('./images/services/pedicure.jpg')",
        massage:
          "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('./images/services/massage.jpeg')",
        facial:
          "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('./images/services/facial.jpeg')",
        special:
          "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('./images/services/special.jpeg')",
        waxing:
          "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('./images/services/waxing.jpeg')",
        kids: "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('./images/services/kids.jpeg')",
        "hero-video": "url(./videos/hero-bg.mp4)",
      },
      width: {
        mobile: "375px",
      },
    },
  },
  plugins: [],
};
