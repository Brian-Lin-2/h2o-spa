import Header from "../components/home-page/Header";
import Info from "../components/home-page/Info";
import About from "../components/home-page/About";
import Services from "../components/home-page/Services";
import Gift from "../components/home-page/Gift";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Gift />
      <Info />
      <Footer />
    </>
  );
}
