import Facial from "./Facial";
import KidMenu from "./KidMenu";
import Manicure from "./Manicure";
import Massage from "./Massage";
import Pedicure from "./Pedicure";
import Special from "./Special";
import Waxing from "./Waxing";
import NavbarItem from "./NavbarItem";
import { useState } from "react";
import { PropTypes } from "prop-types";

export default function Navbar({ initial }) {
  const [active, setActive] = useState(initial);
  const items = [
    "Manicure",
    "Pedicure",
    "Massage",
    "Facial",
    "Waxing",
    "Special",
    "Kids",
  ];

  return (
    <div className="">
      <div className="font-bold bg-header-mobile md:bg-header-desktop">
        <h1 className="text-6xl text-center font-karla py-16">Services</h1>

        <div className="grid gap-4 grid-cols-2 font-karla text-center pb-20 px-12 md:grid-cols-3 md:px-96 md:gap-6">
          {items.map((item) => {
            return (
              <NavbarItem
                key={crypto.randomUUID()}
                item={item}
                active={active}
                setActive={setActive}
              />
            );
          })}
        </div>
      </div>

      {active && (
        <div className="p-8 md:px-40">
          {active === "Manicure" && <Manicure />}
          {active === "Pedicure" && <Pedicure />}
          {active === "Massage" && <Massage />}
          {active === "Facial" && <Facial />}
          {active === "Waxing" && <Waxing />}
          {active === "Special" && <Special />}
          {active === "Kids" && <KidMenu />}
        </div>
      )}
    </div>
  );
}

Navbar.propTypes = {
  initial: PropTypes.string,
};
