import Facial from "./Facial";
import KidMenu from "./KidMenu";
import Manicure from "./Manicure";
import Massage from "./Massage";
import Pedicure from "./Pedicure";
import Special from "./Special";
import Waxing from "./Waxing";
import { useState } from "react";
import { PropTypes } from "prop-types";

export default function Navbar({ initial }) {
  const [active, setActive] = useState(initial);

  return (
    <div className="">
      <div className="bg-blue-2 font-bold">
        <h1 className="text-6xl text-center font-karla py-16">Services</h1>

        <div className="grid gap-4 grid-cols-2 font-karla text-center pb-20 px-12 lg:grid-cols-3 lg:px-96 lg:gap-6">
          <a
            className="border border-black p-2 rounded-full cursor-pointer hover:text-white hover:bg-black"
            onClick={() => setActive("Manicure")}
          >
            Manicure
          </a>
          <a
            className="border border-black p-2 rounded-full cursor-pointer hover:text-white hover:bg-black"
            onClick={() => setActive("Pedicure")}
          >
            Pedicure
          </a>
          <a
            className="border border-black p-2 rounded-full cursor-pointer hover:text-white hover:bg-black"
            onClick={() => setActive("Massage")}
          >
            Massage
          </a>
          <a
            className="border border-black p-2 rounded-full cursor-pointer hover:text-white hover:bg-black"
            onClick={() => setActive("Facial")}
          >
            Facial
          </a>
          <a
            className="border border-black p-2 rounded-full cursor-pointer hover:text-white hover:bg-black"
            onClick={() => setActive("Waxing")}
          >
            Waxing
          </a>
          <a
            className="border border-black p-2 rounded-full cursor-pointer hover:text-white hover:bg-black"
            onClick={() => setActive("Spa Special")}
          >
            Spa Special
          </a>
          <a
            className="border border-black p-2 rounded-full cursor-pointer relative left-1/2 lg:col-start-2 lg:left-0 hover:text-white hover:bg-black"
            onClick={() => setActive("Kid's Menu")}
          >
            Kid's Menu
          </a>
        </div>
      </div>

      {active && (
        <div className="p-8 lg:px-40">
          {active === "Manicure" && <Manicure />}
          {active === "Pedicure" && <Pedicure />}
          {active === "Massage" && <Massage />}
          {active === "Facial" && <Facial />}
          {active === "Waxing" && <Waxing />}
          {active === "Spa Special" && <Special />}
          {active === "Kid's Menu" && <KidMenu />}
        </div>
      )}
    </div>
  );
}

Navbar.propTypes = {
  initial: PropTypes.string,
};
