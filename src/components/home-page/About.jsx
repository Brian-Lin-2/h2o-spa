import { PropTypes } from "prop-types";

export default function About({ setPage }) {
  return (
    <div className="flex flex-col gap-6 items-center my-40 mx-8 lg:ml-80 lg:mr-16 lg:flex-row lg:gap-0 lg:mt-48 lg:mb-80">
      <img
        className="rounded-2xl lg:w-5/12 lg:block"
        src="./images/hero-3.jpeg"
      />
      <div className="flex flex-col gap-4 text-center items-center lg:items-start lg:bg-blue-2 lg:rounded-2xl lg:p-12 lg:w-5/12 lg:text-start lg:relative lg:-left-20 lg:-bottom-32">
        <h1 className="text-3xl font-karla font-bold lg:text-4xl">
          Who We Are
        </h1>
        <p className="font-verdana mx-4 text-dark-gray lg:mx-0">
          Located at Rockville Centre, New York, our goal is to provide the
          highest quality of nail salon and spa services, offering environmental
          lifestyle products to each of our clients under the highest standards
          of business ethics.
        </p>
        <button
          className="font-karla font-bold text-white bg-blue-3 py-3 px-6 mt-2 rounded-full hover:opacity-80"
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
