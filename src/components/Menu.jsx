import { MenuItem } from "./MenuItem";
import { PropTypes } from "prop-types";

export default function Menu({ setPage }) {
  const items = ["Home", "About", "Services", "Contact Us"];

  return (
    <>
      {items.map((item) => {
        return (
          <MenuItem key={crypto.randomUUID()} item={item} setPage={setPage} />
        );
      })}
    </>
  );
}

Menu.propTypes = {
  setPage: PropTypes.func.isRequired,
};
