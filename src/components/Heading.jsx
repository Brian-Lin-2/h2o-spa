import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import PropTypes from "prop-types";
import Motion from "../animations/Motion";

// Images.
import logo from "/src/assets/images/logo.png";

export default function Heading({ setPage, setInitial, isHome }) {
  let style = "";

  if (!isHome) {
    style = "bg-blue-1 md:bg-header-desktop";
  }

  return (
    <div className={style}>
      <Motion
        duration="0.75"
        className="flex justify-between items-center p-10 md:px-32 md:pt-8"
      >
        <img className="w-20" src={logo} />
        <MenuMobile setPage={setPage} setInitial={setInitial} />

        <h1 className="hidden gap-6 font-karla font-bold items-center tracking-wide md:flex">
          <MenuDesktop setPage={setPage} setInitial={setInitial} />
        </h1>
      </Motion>
    </div>
  );
}

Heading.propTypes = {
  setPage: PropTypes.func.isRequired,
  setInitial: PropTypes.func.isRequired,
  isHome: PropTypes.bool.isRequired,
};
