import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Intro from "../components/about-page/Intro";
import { PropTypes } from "prop-types";

export default function About({ setPage }) {
  return (
    <>
      <Heading setPage={setPage} />
      <Intro />
      <Footer />
    </>
  );
}

About.propTypes = {
  setPage: PropTypes.func.isRequired,
};
