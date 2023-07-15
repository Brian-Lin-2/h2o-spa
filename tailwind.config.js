/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-2": "hsla(0, 0%, 100%, 80%)",
        "blue-1": "rgb(222, 234, 249)",
        "blue-2": "rgb(185, 217, 248)",
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
        manicure:
          "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/src/assets/images/services/manicure.jpeg')",
        pedicure:
          "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/src/assets/images/services/pedicure.jpg')",
        massage:
          "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/src/assets/images/services/massage.jpeg')",
        facial:
          "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/src/assets/images/services/facial.jpeg')",
        special:
          "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/src/assets/images/services/special.jpeg')",
        waxing:
          "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/src/assets/images/services/waxing.jpeg')",
        kids: "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/src/assets/images/services/kids.jpeg')",
        "header-desktop":
          "linear-gradient(to right, rgb(222, 234, 249), rgb(185, 217, 248))",
        "header-mobile":
          "linear-gradient(to bottom, rgb(222, 234, 249), rgb(185, 217, 248))",
        "about-desktop": "url('/src/assets/images/about-bg-desktop.png')",
        "about-mobile": "url('/src/assets/images/about-bg-mobile.png')",
        "header-bg": "linear-gradient(to right, ,rgb(207, 227, 248))",
        "hero-desktop": "url('/src/assets/gifs/hero-bg-desktop.gif')",
        "hero-mobile": "url('/src/assets/gifs/hero-bg-mobile.gif')",
        "place-desktop": "url('/src/assets/images/place.png')",
        "lounge-desktop": "url('/src/assets/images/lounge.png')",
        "colors-desktop": "url('/src/assets/images/colors.png')",
        nails: "url('/src/assets/images/nails.png')",
        "place-mobile": "url('/src/assets/images/place-mobile.jpg')",
        "lounge-mobile": "url('/src/assets/images/lounge-mobile.jpg')",
        "colors-mobile": "url('/src/assets/images/colors-mobile.jpg')",
      },
      width: {
        mobile: "375px",
      },
      spacing: {
        76: "19rem",
        92: "23rem",
      },
    },
  },
  plugins: [],
};
