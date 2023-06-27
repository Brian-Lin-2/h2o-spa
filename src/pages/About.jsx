import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Intro from "../components/about-page/Intro";
import { PropTypes } from "prop-types";

export default function About({ setPage, setInitial }) {
  return (
    <>
      <Heading setPage={setPage} setInitial={setInitial} isHome={false} />
      <Intro />
      <Footer />
    </>
  );
}

About.propTypes = {
  setPage: PropTypes.func.isRequired,
  setInitial: PropTypes.func.isRequired,
};
