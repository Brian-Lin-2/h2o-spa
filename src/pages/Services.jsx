import Heading from "../components/Heading";
import Navbar from "../components/services-page/Navbar";
import Footer from "../components/Footer";
import { PropTypes } from "prop-types";
import { useEffect } from "react";

export default function Services({ setPage, initial }) {
  // Helps scroll the page down when a specific service is clicked on Home page.
  if (initial !== "") {
    useEffect(() => {
      window.scrollTo(0, 200);
    }, []);
  } else {
    window.scrollTo(0, 0);
  }

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
  setInitial: PropTypes.func.isRequired,
  clicked: PropTypes.boolean,
};
