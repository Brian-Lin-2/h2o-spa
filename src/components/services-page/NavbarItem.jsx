import { PropTypes } from "prop-types";

export default function NavbarItem({ item, setActive }) {
  let style =
    "border border-black p-2 rounded-full cursor-pointer hover:text-white hover:bg-black";

  if (item === "Kid") {
    style += " col-start-2";
  }

  return (
    <h3 className={style} onClick={() => setActive(item)}>
      {item}
    </h3>
  );
}

NavbarItem.propTypes = {
  item: PropTypes.string,
  setActive: PropTypes.func.isRequired,
};
