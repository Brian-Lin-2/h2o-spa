import Heading from "../components/Heading";
import Navbar from "../components/services-page/Navbar";
import Footer from "../components/Footer";
import { PropTypes } from "prop-types";

export default function Services({ setPage, initial, setInitial }) {
  // Scrolls down when a specific service is clicked on Home page.
  if (initial !== "") {
    window.scrollTo(0, 200);
  } else {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Heading setPage={setPage} setInitial={setInitial} isHome={false} />
      <Navbar initial={initial} />
      <Footer />
    </div>
  );
}

Services.propTypes = {
  setPage: PropTypes.func.isRequired,
  initial: PropTypes.string,
  setInitial: PropTypes.func.isRequired,
};
