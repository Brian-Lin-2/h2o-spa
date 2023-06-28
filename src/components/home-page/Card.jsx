import { PropTypes } from "prop-types";

export default function Card({
  service,
  image,
  position,
  setPage,
  setInitial,
}) {
  let style = `p-4 pt-[10.5vw] pr-[42.5vw] text-[4.25vw] text-start bg-cover bg-no-repeat text-white cursor-pointer md:pt-[4.5vw] md:pb-6 md:pl-6 md:pr-[10vw] md:text-sm lg:text-lg hover:opacity-50 ${image} ${position}`;

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
