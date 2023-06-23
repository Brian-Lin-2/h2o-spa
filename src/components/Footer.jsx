export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-12 bg-black text-white-2 font-karla text-sm py-20 px-12 lg:justify-between lg:px-32 lg:py-28 lg:flex-row">
      <img className="w-20" src="./images/logo-white.png" alt="" />
      <div className="grid gap-10 text-xs mt-6 lg:text-sm lg:grid-cols-2 lg:grid-rows-2 lg:gap-2 lg:-mr-20 lg:mt-8">
        <div className="flex flex-col text-center mx-16 gap-2 items-center lg:mx-0 lg:flex-row">
          <img className="w-8" src="./images/location-white.jpeg" />
          <a
            className="hover:text-white"
            href="https://goo.gl/maps/xyuT4D5nPamzXv8E6"
          >
            302 Sunrise Highway Rockville Centre, NY 11570
          </a>
        </div>
        <div className="flex flex-col text-center gap-2 items-center lg:ml-6 lg:flex-row">
          <img className="mx-1 w-6" src="./images/phone-white.png" />
          <p>516-766-2576</p>
        </div>
        <div className="flex flex-col text-center gap-1 items-center lg:flex-row">
          <img className="w-10" src="./images/email-white.png" />
          <p>h2ospallc@gmail.com</p>
        </div>
        <div className="flex flex-col text-center gap-3 items-center lg:ml-8 lg:flex-row">
          <img className="w-5" src="./images/icon-facebook.svg" />
          <a
            className="hover:text-white"
            href="https://www.facebook.com/h2onail/"
          >
            Like Us On Facebook!
          </a>
        </div>
      </div>
    </div>
  );
}
