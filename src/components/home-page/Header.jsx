import Heading from "../Heading";
import { PropTypes } from "prop-types";

export default function Header({ setPage }) {
  return (
    <>
      <video
        className="absolute -z-10 -top-8 hidden md:block"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./videos/hero-bg-desktop.mp4" type="video/mp4" />
      </video>
      <video
        className="max-h-screen absolute -z-10 -top-4 w-full bg-blue-1 md:hidden"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./videos/hero-bg-mobile.mp4" type="video/mp4" />
      </video>

      <div>
        <Heading setPage={setPage} isHome={true} />
        <div className="flex flex-col mt-8 mb-92 text-center -tracking-wide md:mt-0 md:ml-[15vw] md:text-start md:w-1/2 border-red-500 md:items-center lg:mt-[5vw]">
          <h1 className="text-6xl mx-[12vw] font-bold mb-1 font-karla md:ml-12 md:text-[6vw]">
            Nails You Will Love!
          </h1>
          <p className="font-verdana text-sm text-dark-gray mx-[16vw] md:ml-16 md:mr-[20vw] md:text-[1.3vw] md:leading-[2vw]">
            Providing nail and spa services with the upmost care and
            cleanliness.
          </p>
        </div>
      </div>
    </>
  );
}

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
};
