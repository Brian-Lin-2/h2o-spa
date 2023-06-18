import { PropTypes } from "prop-types";

export default function Card({
  service,
  image,
  position,
  setPage,
  setInitial,
}) {
  let style = `p-4 pt-10 pr-52 text-start bg-cover bg-no-repeat rounded text-white lg:pt-20 lg:pb-6 lg:pl-6 lg:text-lg cursor-pointer hover:opacity-50 ${image} ${position}`;

  function handleClick() {
    setInitial(service);
    setPage("Services");
  }

  return (
    <div className={style} onClick={handleClick}>
      {service}
    </div>
  );
}

Card.propTypes = {
  service: PropTypes.string,
  image: PropTypes.string,
  position: PropTypes.string,
  setPage: PropTypes.func.isRequired,
  setInitial: PropTypes.func.isRequired,
};
