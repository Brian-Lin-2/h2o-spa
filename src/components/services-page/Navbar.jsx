import Facial from "./Facial";
import KidMenu from "./KidMenu";
import Manicure from "./Manicure";
import Massage from "./Massage";
import Pedicure from "./Pedicure";
import Special from "./Special";
import Waxing from "./Waxing";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  return (
    <div className=" mt-16 mb-32 mx-12 lg:mx-32">
      <h1 className="text-4xl text-center font-karla font-bold mb-12">
        Services
      </h1>

      <div className="flex flex-col-reverse">
        <div className="">
          {active === "manicure" && <Manicure />}
          {active === "pedicure" && <Pedicure />}
          {active === "massage" && <Massage />}
          {active === "facial" && <Facial />}
          {active === "waxing" && <Waxing />}
          {active === "special" && <Special />}
          {active === "kids" && <KidMenu />}
        </div>

        <div className="grid gap-4 grid-cols-2 font-karla text-center mb-20 lg:grid-cols-3 lg:mx-48 lg:gap-6">
          <a
            className="border border-black font-bold p-2 rounded-full cursor-pointer hover:text-white hover:bg-black"
            onClick={() => setActive("manicure")}
          >
            Manicure
          </a>
          <a
            className="border border-black font-bold p-2 rounded-full cursor-pointer hover:text-white hover:bg-black"
            onClick={() => setActive("pedicure")}
          >
            Pedicure
          </a>
          <a
            className="border border-black font-bold p-2 rounded-full cursor-pointer hover:text-white hover:bg-black"
            onClick={() => setActive("massage")}
          >
            Massage
          </a>
          <a
            className="border border-black font-bold p-2 rounded-full cursor-pointer hover:text-white hover:bg-black"
            onClick={() => setActive("facial")}
          >
            Facial
          </a>
          <a
            className="border border-black font-bold p-2 rounded-full cursor-pointer hover:text-white hover:bg-black"
            onClick={() => setActive("waxing")}
          >
            Waxing
          </a>
          <a
            className="border border-black font-bold p-2 rounded-full cursor-pointer hover:text-white hover:bg-black"
            onClick={() => setActive("special")}
          >
            Spa Special
          </a>
          <a
            className="border border-black font-bold p-2 rounded-full cursor-pointer relative left-1/2 lg:col-start-2 lg:left-0 hover:text-white hover:bg-black"
            onClick={() => setActive("kids")}
          >
            Kid's Menu
          </a>
        </div>
      </div>
    </div>
  );
}
