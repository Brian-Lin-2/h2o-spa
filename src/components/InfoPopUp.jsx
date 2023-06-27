import PropTypes from "prop-types";

export default function InfoPopUp({ setClick }) {
  return (
    <div className="border fixed inset-0 bg-dark-gray-transparent">
      <div className="flex flex-col bg-white items-center my-36 mx-28 md:flex-row md:my-32 md:mx-72 shadow-2xl">
        <img
          className="md:w-7/12"
          src="./images/person-calling.jpg"
          alt="girl-calling"
        ></img>

        <a onClick={() => setClick(false)}>
          <img
            className="w-6 relative bottom-52 left-28 md:w-12 md:bottom-40 md:left-76 hover:cursor-pointer"
            src="./images/close-icon.svg"
          ></img>
        </a>

        <div className="mb-14 mt-4 mx-6 text-center md:text-start md:m-0 md:ml-2 md:mr-16">
          <h1 className="font-karla font-bold text-3xl mb-1 md:text-4xl md:mb-2">
            Call Today!
          </h1>
          <p className="font-verdana text-sm text-dark-gray md:text-base">
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
