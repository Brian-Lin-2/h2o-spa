import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import { PropTypes } from "prop-types";

export default function Heading({ setPage, isHome, setInitial }) {
  let style =
    "flex justify-between items-center p-6 bg-blue-2 lg:px-32 lg:pt-8";

  if (isHome) {
    style = "flex justify-between items-center p-6 lg:px-32 lg:pt-8";
  }

  return (
    <div className={style}>
      <img className="w-20" src="./images/logo.png" />
      <MenuMobile setPage={setPage} setInitial={setInitial} />

      <h1 className="hidden gap-6 font-karla font-bold items-center tracking-wide lg:flex">
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
