import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Info from "../components/Info";
import { PropTypes } from "prop-types";

export default function Contact({ setPage, setInitial }) {
  return (
    <>
      <Heading setPage={setPage} setInitial={setInitial} isHome={false} />

      <div className="bg-header-mobile md:bg-header-desktop">
        <Info />
      </div>

      <Footer />
    </>
  );
}

Contact.propTypes = {
  setPage: PropTypes.func.isRequired,
  setInitial: PropTypes.func.isRequired,
};
