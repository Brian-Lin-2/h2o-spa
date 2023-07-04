import Slider from "../components/home-page/Slider";
import Info from "../components/Info";
import About from "../components/home-page/About";
import Services from "../components/home-page/Services";
import Gift from "../components/home-page/Gift";
import Footer from "../components/Footer";
import { PropTypes } from "prop-types";

export default function Home({ setPage, setInitial }) {
  window.scrollTo(0, 0);

  return (
    <>
      <Slider setPage={setPage} setInitial={setInitial} />
      <Services setPage={setPage} setInitial={setInitial} />
      <About setPage={setPage} />
      <Gift />
      <Info setPage={setPage} />
      <Footer />
    </>
  );
}

Home.propTypes = {
  setPage: PropTypes.func.isRequired,
  setInitial: PropTypes.func.isRequired,
};
