import { PropTypes } from "prop-types";

export default function SliderButton({
  pictures,
  picture,
  currentPic,
  setCurrentPic,
  index,
}) {
  let style =
    "w-5 h-5 border-2 border-black rounded-full cursor-pointer hover:bg-black";

  if (picture === pictures[currentPic]) {
    style += " bg-black";
  }

  return (
    <a
      className={style}
      onClick={() => {
        setCurrentPic(index);
      }}
    ></a>
  );
}

SliderButton.propTypes = {
  pictures: PropTypes.array,
  picture: PropTypes.string,
  currentPic: PropTypes.num,
  setCurrentPic: PropTypes.func.isRequired,
  index: PropTypes.num,
};
