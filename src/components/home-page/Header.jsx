import Heading from "../Heading";
import Motion from "../../animations/Motion";
import { PropTypes } from "prop-types";

export default function Header({ setPage, setInitial }) {
  return (
    <>
      <div className="bg-lounge bg-no-repeat bg-cover pb-[125vw] md:pb-[15vw] md:bg-place md:bg-center">
        <Heading setPage={setPage} setInitial={setInitial} isHome={true} />
        <Motion
          duration="1.25"
          className="flex flex-col mt-20 text-center -tracking-wide md:mt-0 md:ml-[15.5vw] md:text-start md:w-1/2 border-red-500 md:items-center lg:mt-[5vw]"
        >
          <h1 className="invisible text-[16vw] leading-none mx-[12vw] font-bold mb-1 font-karla md:ml-12 md:text-[6.5vw] md:leading-[5.5vw]">
            Nails You Will Love!
          </h1>
          <p className="invisible font-verdana text-[4vw] text-dark-gray mx-[16vw] md:ml-16 md:mr-[16vw] md:text-[1.5vw] md:leading-[2vw]">
            Providing nail and spa services with the upmost care and
            cleanliness.
          </p>
        </Motion>
      </div>
    </>
  );
}

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
  setInitial: PropTypes.func.isRequired,
};
