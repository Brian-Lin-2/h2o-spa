import { PropTypes } from "prop-types";

export default function NavbarItem({ item, active, setActive }) {
  let style =
    "border border-black p-2 rounded-full cursor-pointer hover:text-white hover:bg-black";

  if (item === "Kid") {
    style += " col-start-2";
  }

  console.log(item);
  console.log(active);
  if (item === active) {
    style += " bg-black text-white";
  }

  return (
    <h3 className={style} onClick={() => setActive(item)}>
      {item}
    </h3>
  );
}

NavbarItem.propTypes = {
  item: PropTypes.string,
  active: PropTypes.string,
  setActive: PropTypes.func.isRequired,
};
