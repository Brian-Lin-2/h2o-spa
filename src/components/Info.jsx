import InfoPopUp from "./InfoPopUp";
import { useState } from "react";

export default function Info() {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="pb-32 pt-16">
        <h1 className="text-center font-karla font-bold mb-16 text-4xl md:text-[4.25vw]">
          Contact Us
        </h1>
        <div className="flex flex-col items-center md:gap-6">
          <div className="grid gap-20 md:grid-cols-3 md:grid-rows-1 md:mx-[20vw] md:items-center md:gap-0">
            <div className="flex flex-col items-center justify-center text-center mx-16 md:mx-8">
              <img className="w-12" src="./images/location.svg" />
              <h3 className="font-karla text-xl md:text-[1.4vw] md:leading-tight font-bold">
                Location
              </h3>
              <p className="font-verdana text-sm md:text-[0.95vw] md:leading-snug text-dark-gray">
                302 Sunrise Highway Rockville Centre, NY 11570
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <img className="w-12" src="./images/clock.svg" />
              <h3 className="font-karla text-xl md:text-[1.4vw] md:leading-tight font-bold">
                Hours
              </h3>
              <p className="font-verdana text-sm md:text-[0.95vw] md:leading-snug text-dark-gray">
                Mon - Sat: 9:30am - 7:30pm
                <br />
                Sunday: 10:00am - 6:00pm
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <img className="w-12" src="./images/phone.png" />
              <h3 className="font-karla text-xl md:text-[1.4vw] md:leading-tight font-bold">
                Contact
              </h3>
              <p className="font-verdana text-sm md:text-[0.95vw] md:leading-snug text-dark-gray">
                516-766-2576
                <br />
                h2ospallc@gmail.com
              </p>
            </div>
          </div>

          <button
            className="border-2 border-black font-bold p-2 text-center font-karla mt-16 md:mt-[2.25vw] md:text-[1.25vw] hover:bg-black hover:text-white"
            onClick={() => setClick(true)}
          >
            Book An Appointment
          </button>
        </div>
      </div>
      {click && <InfoPopUp setClick={setClick} />}
    </>
  );
}
