import PropTypes from "prop-types";

// Images.
import girlCalling from "/src/assets/images/person-calling.jpg";
import closeIcon from "/src/assets/images/close-icon.svg";

export default function InfoPopUp({ setClick }) {
  return (
    <div className="border fixed inset-0 bg-dark-gray-transparent">
      <div className="flex flex-col bg-white items-center my-48 mx-[22vw] md:flex-row md:my-32 md:mx-[20vw] shadow-2xl">
        <img className="md:w-7/12" src={girlCalling} alt="girl-calling"></img>

        <a onClick={() => setClick(false)}>
          <img
            className="w-[5vw] relative bottom-[40vw] left-[22vw] md:w-[3.25vw] md:bottom-[11vw] md:left-[21vw] hover:cursor-pointer"
            src={closeIcon}
          ></img>
        </a>

        <div className="mb-14 mt-4 mx-6 text-center md:text-start md:m-0 md:ml-2 md:mr-16">
          <h1 className="font-karla font-bold text-3xl leading-none mb-1 md:text-[2.5vw] md:leading-none md:mb-2">
            Call Today!
          </h1>
          <p className="font-verdana text-sm text-dark-gray md:text-[1.1vw] md:leading-[1.5vw] md:ml-1">
            Please call us at 516-766-2576 to reserve an appointment!
          </p>
        </div>
      </div>
    </div>
  );
}

InfoPopUp.propTypes = {
  setClick: PropTypes.func.isRequired,
};
