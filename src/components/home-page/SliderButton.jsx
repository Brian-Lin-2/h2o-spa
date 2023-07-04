import { PropTypes } from "prop-types";

export default function SliderButton({ picture, currentPic, setCurrentPic }) {
  let style =
    "w-5 h-5 border-2 border-black rounded-full cursor-pointer hover:bg-black";

  if (picture === currentPic) {
    style += " bg-black";
  }

  return (
    <a
      className={style}
      onClick={() => {
        setCurrentPic(picture);
      }}
    ></a>
  );
}

SliderButton.propTypes = {
  picture: PropTypes.string,
  currentPic: PropTypes.string,
  setCurrentPic: PropTypes.func.isRequired,
};
