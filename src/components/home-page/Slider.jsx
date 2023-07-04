import Heading from "../Heading";
import Motion from "../../animations/Motion";
import { useState } from "react";
import { PropTypes } from "prop-types";

export default function Slider({ setPage, setInitial }) {
  const pictures = [
    "bg-mobile-desktop md:bg-hero-desktop",
    "bg-place",
    "bg-colors",
    "bg-lounge",
    "bg-nails",
  ];

  const [currentPic, setCurrentPic] = useState(pictures[0]);

  let headerText =
    "flex flex-col mt-20 text-center -tracking-wide md:mt-0 md:ml-[15.5vw] md:text-start md:w-1/2 border-red-500 md:items-center lg:mt-[5vw]";

  // Text is invisible when it's not the first picture.
  if (currentPic !== pictures[0]) {
    headerText =
      "invisible flex flex-col mt-20 text-center -tracking-wide md:mt-0 md:ml-[15.5vw] md:text-start md:w-1/2 border-red-500 md:items-center lg:mt-[5vw]";
  }

  return (
    <>
      <div className="bg-lounge bg-no-repeat bg-cover pb-[125vw] md:pb-[15vw] md:bg-hero-desktop md:bg-center">
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
      </div>
    </>
  );
}

Slider.propTypes = {
  setPage: PropTypes.func.isRequired,
  setInitial: PropTypes.func.isRequired,
};
