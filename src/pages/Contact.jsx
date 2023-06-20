import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Info from "../components/Info";
import { PropTypes } from "prop-types";

export default function Contact({ setPage }) {
  return (
    <>
      <Heading setPage={setPage} />
      <div className="text-center font-karla font-bold bg-blue-2 text-4xl pt-20 -mb-16">
        Contact Us
      </div>
      <Info />
      <Footer />
    </>
  );
}

Contact.propTypes = {
  setPage: PropTypes.func.isRequired,
};
