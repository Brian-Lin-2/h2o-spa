import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("Home");

  // For services.
  const [initial, setInitial] = useState("");

  return (
    <div className="w-mobile lg:w-screen border">
      {page === "Home" && <Home setPage={setPage} setInitial={setInitial} />}
      {page === "About" && <About setPage={setPage} />}
      {page === "Services" && <Services setPage={setPage} initial={initial} />}
      {page === "Contact" && <Contact setPage={setPage} />}
    </div>
  );
}
