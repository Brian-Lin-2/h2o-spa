import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Info from "../components/Info";
import { PropTypes } from "prop-types";

export default function Contact({ setPage }) {
  return (
    <>
      <Heading setPage={setPage} />
      <Info />
      <Footer />
    </>
  );
}

Contact.propTypes = {
  setPage: PropTypes.func.isRequired,
};
