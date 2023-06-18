import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="w-mobile lg:w-full border">
      {page === "Home" && <Home setPage={setPage} />}
      {page === "About" && <About setPage={setPage} />}
      {page === "Services" && <Services setPage={setPage} />}
      {page === "Contact" && <Contact setPage={setPage} />}
    </div>
  );
}
