import { useState } from "react";
import { PropTypes } from "prop-types";

export default function MenuItem({ item, setPage, setInitial }) {
  const [active, setActive] = useState(false);

  let menuBar = "invisible border-t-2";

  if (active) {
    menuBar = "border-t-2 lg:w-1/2 border-blue-3";
  }

  const handleClick = () => {
    setPage(item);
    setInitial("");
  };

  return (
    <a
      className="flex flex-col items-center cursor-pointer hover:text-blue-3"
      onClick={() => handleClick()}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      <p className="hover:cursor-pointer">{item}</p>
      <div className={menuBar}></div>
    </a>
  );
}

MenuItem.propTypes = {
  item: PropTypes.string,
  setPage: PropTypes.func.isRequired,
  setInitial: PropTypes.func,
};
