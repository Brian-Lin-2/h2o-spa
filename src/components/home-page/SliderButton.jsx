import { PropTypes } from "prop-types";

export default function SliderButton({
  pictures,
  setCurrentPic,
  setNum,
  activeNum,
  num,
}) {
  let style =
    "w-5 h-5 border-2 border-black rounded-full cursor-pointer hover:bg-black";

  if (num === activeNum) {
    style += " bg-black";
  }

  return (
    <a
      className={style}
      onClick={() => {
        setCurrentPic(pictures[num]);
        setNum(num);
      }}
    ></a>
  );
}

SliderButton.propTypes = {
  pictures: PropTypes.array.isRequired,
  setCurrentPic: PropTypes.func.isRequired,
  setNum: PropTypes.func.isRequired,
  activeNum: PropTypes.num,
  num: PropTypes.num,
};
