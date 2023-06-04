import Header from "../components/Header";
import Info from "../components/home-page/Info";
import About from "../components/home-page/About";
import Services from "../components/home-page/Services";
import Gift from "../components/home-page/Gift";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-white-1">
      <Header />
      <Info />
      <About />
      <Services />
      <Gift />
      <Footer />
    </div>
  );
}
