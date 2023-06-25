import { PropTypes } from "prop-types";

export default function About({ setPage }) {
  return (
    <div className="flex flex-col gap-6 items-center my-40 px-16 p-12 bg-about-mobile bg-cover lg:bg-about-desktop lg:bg-cover lg:flex-row lg:p-32">
      <img className="lg:w-1/2" src="./images/hero-3.jpeg" />
      <div className="flex flex-col gap-4 text-center items-center lg:items-start lg:p-12 lg:text-start">
        <h1 className="text-4xl font-karla font-bold lg:text-7xl lg:-tracking-wide">
          Who We Are
        </h1>
        <p className="font-verdana text-dark-gray lg:mx-0 lg:text-xl lg:ml-2">
          Located at Rockville Centre, New York, our goal is to provide the
          highest quality of nail salon and spa services, offering environmental
          lifestyle products to each of our clients under the highest standards
          of business ethics.
        </p>
        <button
          className="font-karla font-bold border-2 border-black py-3 px-8 mt-2 lg:text-xl lg:ml-2 hover:bg-black hover:text-white"
          onClick={() => setPage("About")}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

About.propTypes = {
  setPage: PropTypes.func.isRequired,
};
