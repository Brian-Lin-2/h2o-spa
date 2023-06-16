export default function Footer() {
  return (
    <div className="bg-black text-white font-karla text-sm py-20 px-12 lg:px-32 lg:py-20">
      <h1 className="mb-12 text-3xl">H2O Nail & Spa</h1>
      <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:mr-96 lg:gap-2">
        <div className="flex gap-2 items-center">
          <img className="w-8" src="./images/location-white.jpeg" />
          <a>302 Sunrise Highway Rockville Centre, NY 11570</a>
        </div>
        <div className="flex gap-2 items-center">
          <img className="w-8" src="./images/location-white.jpeg" />
          <p>516-766-2576</p>
        </div>
        <div className="flex gap-1 items-center">
          <img className="w-10 -ml-1" src="./images/email-white.png" />
          <p>h2ospallc@gmail.com</p>
        </div>
        <div className="flex gap-3 ml-2 items-center">
          <img className="w-5" src="./images/icon-facebook.svg" />
          <a>Like Us On Facebook!</a>
        </div>
      </div>
    </div>
  );
}
