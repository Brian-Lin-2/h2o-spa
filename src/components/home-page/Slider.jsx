import Heading from "../Heading";
import SliderButton from "./SliderButton";
import Motion from "../../animations/Motion";
import { useState } from "react";
import { PropTypes } from "prop-types";

export default function Slider({ setPage, setInitial }) {
  const pictures = [
    "bg-hero-mobile md:bg-hero-desktop",
    "bg-place",
    "bg-colors",
    "bg-lounge",
    "bg-nails",
  ];

  const [num, setNum] = useState(0);
  const [currentPic, setCurrentPic] = useState(pictures[num]);

  let bgPic = "bg-no-repeat bg-cover md:bg-center " + currentPic;
  let headerText =
    "flex flex-col mt-20 text-center -tracking-wide md:mt-0 md:ml-[15.5vw] md:text-start md:w-1/2 md:items-center lg:mt-[5vw]";

  // Text is invisible when it's not the first picture.
  if (currentPic !== pictures[0]) {
    headerText =
      "invisible flex flex-col mt-20 text-center -tracking-wide md:mt-0 md:ml-[15.5vw] md:text-start md:w-1/2 border-red-500 md:items-center lg:mt-[5vw]";
  }

  // setInterval(() => {
  //   setNum((num + 1) % (pictures.length - 1));
  //   setCurrentPic(pictures[num + 1]);
  // }, 3000);

  return (
    <>
      <div className={bgPic}>
        <Heading setPage={setPage} setInitial={setInitial} isHome={true} />
        <Motion duration="1.25" className={headerText}>
          <h1 className="text-[16vw] leading-none mx-[12vw] font-bold mb-1 font-karla md:ml-12 md:text-[6.5vw] md:leading-[5.5vw]">
            Nails You Will Love!
          </h1>
          <p className="font-verdana text-[4vw] text-dark-gray mx-[16vw] md:ml-16 md:mr-[16vw] md:text-[1.5vw] md:leading-[2vw]">
            Providing nail and spa services with the upmost care and
            cleanliness.
          </p>
        </Motion>

        <div className="flex gap-3 justify-center mt-[125vw] pb-8 md:mt-[15vw] md:pb-4">
          {pictures.map((picture) => {
            return (
              <SliderButton
                key={crypto.randomUUID()}
                picture={picture}
                currentPic={currentPic}
                setCurrentPic={setCurrentPic}
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
