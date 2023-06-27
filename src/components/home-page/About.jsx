import { PropTypes } from "prop-types";

export default function About({ setPage }) {
  return (
    <div className="flex flex-col gap-6 items-center my-40 px-16 p-12 bg-about-mobile bg-cover md:bg-about-desktop md:bg-cover md:flex-row md:p-32">
      <img className="md:w-1/2" src="./images/hero-3.jpeg" />
      <div className="flex flex-col gap-4 text-center items-center md:items-start md:p-12 md:text-start">
        <h1 className="text-4xl font-karla font-bold md:text-7xl md:-tracking-wide">
          Who We Are
        </h1>
        <p className="font-verdana text-dark-gray md:mx-0 md:text-xl md:ml-2">
          Located at Rockville Centre, New York, our goal is to provide the
          highest quality of nail salon and spa services, offering environmental
          lifestyle products to each of our clients under the highest standards
          of business ethics.
        </p>
        <button
          className="font-karla font-bold border-2 border-black py-3 px-8 mt-2 md:text-xl md:ml-2 hover:bg-black hover:text-white"
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
