import Heading from "../components/Heading";
import Navbar from "../components/services-page/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { PropTypes } from "prop-types";

export default function Services({ setPage, initial }) {
  return (
    <div>
      <Heading setPage={setPage} />
      <Navbar initial={initial} />
      <Footer />
    </div>
  );
}

Services.propTypes = {
  setPage: PropTypes.func.isRequired,
  initial: PropTypes.string,
};
