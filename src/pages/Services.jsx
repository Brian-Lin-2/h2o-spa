import Heading from "../components/Heading";
import Navbar from "../components/services-page/Navbar";
import Footer from "../components/Footer";
import { PropTypes } from "prop-types";

export default function Services({ setPage }) {
  return (
    <div>
      <Heading setPage={setPage} />
      <Navbar />
      <Footer />
    </div>
  );
}

Services.propTypes = {
  setPage: PropTypes.func.isRequired,
};
