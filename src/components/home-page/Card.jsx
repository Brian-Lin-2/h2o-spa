import { PropTypes } from "prop-types";

export default function Card({
  service,
  image,
  position,
  setPage,
  setInitial,
}) {
  let style = `p-4 pt-[10.5vw] pr-[42.5vw] text-[4.25vw] text-start bg-cover bg-no-repeat text-white md:pt-16 md:pb-6 md:pl-6 md:pr-40 md:text-lg cursor-pointer hover:opacity-50 ${image} ${position}`;

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
