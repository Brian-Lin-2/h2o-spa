import Header from "../components/home-page/Header";
import Info from "../components/home-page/Info";
import About from "../components/home-page/About";
import Services from "../components/home-page/Services";
import Gift from "../components/home-page/Gift";
import Footer from "../components/Footer";
import { PropTypes } from "prop-types";

export default function Home({ setPage }) {
  return (
    <>
      <Header setPage={setPage} />
      <Services />
      <About />
      <Gift />
      <Info />
      <Footer />
    </>
  );
}

Home.propTypes = {
  setPage: PropTypes.func.isRequired,
};
