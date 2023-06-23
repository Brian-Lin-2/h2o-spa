import { useState } from "react";
import { PropTypes } from "prop-types";

export default function MenuItem({ item, setPage }) {
  const [active, setActive] = useState(false);

  let menuBar = "lg:invisible lg:border-t-2 lg:w-1/3 lg:mt-1";

  if (active) {
    menuBar = "lg:border-t-2 lg:w-1/3 lg:mt-1";
  }

  return (
    <a
      className="cursor-pointer hover:text-blue-3"
      onClick={() => setPage("Contact")}
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
};
