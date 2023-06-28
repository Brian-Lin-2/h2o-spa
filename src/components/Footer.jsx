// Images
import logo from "/src/assets/images/logo-white.png";
import location from "/src/assets/images/location-white.jpeg";
import phone from "/src/assets/images/phone-white.png";
import email from "/src/assets/images/email-white.png";
import facebook from "/src/assets/images/icon-facebook.svg";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-12 bg-black text-white-2 font-karla text-sm py-20 px-12 md:justify-between md:px-32 md:py-28 md:flex-row">
      <img className="w-20" src={logo} alt="" />
      <div className="grid gap-10 text-xs mt-6 md:text-sm md:grid-cols-2 md:grid-rows-2 md:gap-2 md:-mr-20 md:mt-8">
        <div className="flex flex-col text-center mx-16 gap-2 items-center md:text-start md:mx-0 md:flex-row">
          <img className="w-8" src={location} />
          <a
            className="hover:text-white"
            href="https://goo.gl/maps/xyuT4D5nPamzXv8E6"
            target="_blank"
            rel="noreferrer noopener"
          >
            302 Sunrise Highway Rockville Centre, NY 11570
          </a>
        </div>
        <div className="flex flex-col text-center gap-2 items-center md:ml-6 md:flex-row">
          <img className="mx-1 w-6" src={phone} />
          <p>516-766-2576</p>
        </div>
        <div className="flex flex-col text-center gap-1 items-center md:flex-row">
          <img className="w-10" src={email} />
          <p>h2ospallc@gmail.com</p>
        </div>
        <div className="flex flex-col text-center gap-3 items-center md:ml-8 md:flex-row">
          <img className="w-5" src={facebook} />
          <a
            className="hover:text-white"
            href="https://www.facebook.com/h2onail/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Like Us On Facebook!
          </a>
        </div>
      </div>
    </div>
  );
}
