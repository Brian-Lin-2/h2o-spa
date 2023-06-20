import Heading from "../Heading";
import { PropTypes } from "prop-types";

export default function Header({ setPage }) {
  return (
    <>
      <video className="absolute -z-10 -top-12" autoPlay loop muted playsInline>
        <source src="./videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div>
        <Heading setPage={setPage} isHome={true} />
        <div className="flex flex-col-revers p-6 pb-12 lg:flex-row lg:px-40 lg:gap-8 lg:pt-12 lg:pb-40 lg:items-center">
          <div className="text-center mt-4 lg:ml-20 lg:mr-32 lg:text-start">
            <h1 className="text-4xl font-bold mb-4 font-karla lg:text-6xl">
              Nails You Will Love!
            </h1>
            <p className="font-verdana text-dark-gray mx-2 lg:ml-0 lg:mr-20 lg:text-lg">
              Providing nail and spa services with the upmost care and
              cleanliness.
            </p>
          </div>
          <div className="h-80 lg:w-1/2"></div>
        </div>
      </div>
    </>
  );
}

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
};
