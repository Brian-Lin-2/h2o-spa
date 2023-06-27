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
        className="absolute -z-10 -top-4 w-full md:hidden"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./videos/hero-bg-mobile.mp4" type="video/mp4" />
      </video>

      <div>
        <Heading setPage={setPage} isHome={true} />
        <div className="flex mt-8 mb-96 md:flex-row md:m-0 md:gap-8 md:pt-12 md:pb-40 md:w-1/2 md:items-center">
          <div className="text-center mt-2 md:ml-48 md:text-start">
            <h1 className="text-5xl mx-12 font-bold mb-1 font-karla md:text-8xl md:-tracking-wide">
              Nails You Will Love!
            </h1>
            <p className="font-verdana text-sm text-dark-gray mx-16 md:mr-20 md:text-md">
              Providing nail and spa services with the upmost care and
              cleanliness.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
};
