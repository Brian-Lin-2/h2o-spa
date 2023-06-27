import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import { PropTypes } from "prop-types";

export default function Heading({ setPage, isHome, setInitial }) {
  let style =
    "flex justify-between items-center p-10 bg-blue-1 md:bg-header-desktop md:px-32 md:pt-8";

  if (isHome) {
    style = "flex justify-between items-center p-10 md:px-32 md:pt-8";
  }

  return (
    <div className={style}>
      <img className="w-20" src="./images/logo.png" />
      <MenuMobile setPage={setPage} setInitial={setInitial} />

      <h1 className="hidden gap-6 font-karla font-bold items-center tracking-wide md:flex">
        <MenuDesktop setPage={setPage} setInitial={setInitial} />
      </h1>
    </div>
  );
}

Heading.propTypes = {
  setPage: PropTypes.func.isRequired,
  isHome: PropTypes.bool,
  setInitial: PropTypes.func,
};
