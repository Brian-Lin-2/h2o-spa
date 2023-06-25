import MenuItem from "./MenuItem";
import { PropTypes } from "prop-types";

export default function MenuDesktop({ setPage, setInitial }) {
  const items = ["Home", "About", "Services", "Contact"];

  return (
    <>
      {items.map((item) => {
        return (
          <MenuItem
            key={crypto.randomUUID()}
            item={item}
            setPage={setPage}
            setInitial={setInitial}
          />
        );
      })}
    </>
  );
}

MenuDesktop.propTypes = {
  setPage: PropTypes.func.isRequired,
  setInitial: PropTypes.func,
};
