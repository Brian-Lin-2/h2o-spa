/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-2": "hsla(0, 0%, 100%, 80%)",
        "blue-2": "rgb(207, 227, 248)",
        "blue-3": "rgb(0, 128, 255)",
        "blackish-blue": "rgb(22, 41, 62)",
        "navy-blue": "rgb(24, 48, 74)",
        "dark-gray": "hsl(0, 0%, 55%)",
        "dark-gray-transparent": "hsla(0, 0%, 55%, 70%)",
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
        about: "url('./images/about-bg.png')",
        "header-bg": "linear-gradient(to right, ,rgb(207, 227, 248))"
      },
      width: {
        mobile: "375px",
      },
      spacing: {
        76: "19rem",
      },
    },
  },
  plugins: [],
};
