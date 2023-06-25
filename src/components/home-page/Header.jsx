import Heading from "../Heading";
import { PropTypes } from "prop-types";

export default function Header({ setPage }) {
  return (
    <>
      <video
        className="absolute -z-10 -top-8 hidden lg:block"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./videos/hero-bg-desktop.mp4" type="video/mp4" />
      </video>
      <video
        className="absolute -z-10 -top-4 w-full lg:hidden"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./videos/hero-bg-mobile.mp4" type="video/mp4" />
      </video>

      <div>
        <Heading setPage={setPage} isHome={true} />
        <div className="flex mt-8 mb-96 lg:flex-row lg:m-0 lg:gap-8 lg:pt-12 lg:pb-40 lg:w-1/2 lg:items-center">
          <div className="text-center mt-2 lg:ml-48 lg:text-start">
            <h1 className="text-5xl mx-12 font-bold mb-1 font-karla lg:text-8xl lg:-tracking-wide">
              Nails You Will Love!
            </h1>
            <p className="font-verdana text-sm text-dark-gray mx-16 lg:mr-20 lg:text-lg">
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
