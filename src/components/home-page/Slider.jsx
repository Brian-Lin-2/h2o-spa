import Heading from "../Heading";
import SliderButton from "./SliderButton";
import Motion from "../../animations/Motion";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

export default function Slider({ setPage, setInitial }) {
  const pictures = [
    "bg-hero-mobile md:bg-hero-desktop",
    "bg-place-mobile md:bg-place-desktop",
    "bg-colors-mobile md:bg-colors-desktop",
    "bg-lounge-mobile md:bg-lounge-desktop",
    "bg-nails",
    "bg-nails-1 bg-center",
    "bg-nails-2 bg-center",
  ];

  const [currentPic, setCurrentPic] = useState(0);

  let bgPic = "bg-no-repeat bg-cover md:bg-center " + pictures[currentPic];
  let headerText =
    "flex flex-col mt-8 text-center -tracking-wide md:mt-0 md:ml-[15.5vw] md:text-start md:w-1/2 md:items-center lg:mt-[5vw]";

  // Text is invisible when it's not the first picture.
  if (pictures[currentPic] !== pictures[0]) {
    headerText =
      "invisible flex flex-col mt-8 text-center -tracking-wide md:mt-0 md:ml-[15.5vw] md:text-start md:w-1/2 border-red-500 md:items-center lg:mt-[5vw]";
  }

  // Changes the slider image.
  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentPic(currentPic === pictures.length - 1 ? 0 : currentPic + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentPic]);

  return (
    <>
      <div className={bgPic}>
        <Heading setPage={setPage} setInitial={setInitial} isHome={true} />
        <Motion duration="1.25" className={headerText}>
          <h1 className="text-[14vw] leading-[12.5vw] mx-[12vw] font-bold mb-1 font-karla md:ml-12 md:text-[6.5vw] md:leading-[5.5vw]">
            Nails You Will Love!
          </h1>
          <p className="font-verdana text-[4vw] mx-[14vw] text-dark-gray md:ml-16 md:mr-[18vw] md:text-[1.5vw] md:leading-[2vw]">
            Providing nail and spa services with the upmost care and
            cleanliness.
          </p>
        </Motion>

        <div className="flex gap-3 justify-center mt-[60vw] pb-8 md:mt-[15vw] md:pb-4">
          {pictures.map((picture, index) => {
            return (
              <SliderButton
                key={crypto.randomUUID()}
                pictures={pictures}
                picture={picture}
                currentPic={currentPic}
                setCurrentPic={setCurrentPic}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

Slider.propTypes = {
  setPage: PropTypes.func.isRequired,
  setInitial: PropTypes.func.isRequired,
};
