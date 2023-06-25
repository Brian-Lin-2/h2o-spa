import MenuItem from "./MenuItem";
import { useState } from "react";
import { PropTypes } from "prop-types";

export default function MenuMobile({ setPage, setInitial }) {
  const items = ["Home", "About", "Services", "Contact"];
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <a className="hover:cursor-pointer" onClick={() => setOpenMenu(true)}>
        <img className="w-10 lg:hidden" src="./images/hamburger-icon.png" />
      </a>

      {openMenu && (
        <div className="w-mobile top-0 right-0 bottom-0 left-0 fixed z-10 bg-black p-6">
          <div className="flex justify-between items-center m-4">
            <a className="hover:cursor-pointer">
              <img className="w-20" src="/images/logo-white.png" alt="H2O" />
            </a>

            <a
              className="hover:cursor-pointer"
              onClick={() => setOpenMenu(false)}
            >
              <img src="images/close-icon-white.svg" alt="" />
            </a>
          </div>

          <div className="w-5/12 flex flex-col items-start gap-6 mx-6 mt-40 text-2xl font-karla uppercase text-white">
            {items.map((item) => (
              <div key={crypto.randomUUID()} onClick={() => setOpenMenu(false)}>
                <MenuItem
                  item={item}
                  setPage={setPage}
                  setInitial={setInitial}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

MenuMobile.propTypes = {
  setPage: PropTypes.func.isRequired,
  setInitial: PropTypes.func,
};
