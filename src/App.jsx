import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [page, setPage] = useState("Home");

  // For services.
  const [initial, setInitial] = useState("");

  return (
    <>
      <h1 className="text-center text-3xl tracking-widest bg-blue-3 py-8 text-white font-bold sticky top-0 w-full z-40">
        SALE: ALL GEL-X 15% OFF NOW UNTIL JULY 4th
      </h1>
      <div className="overflow-x-hidden">
        {page === "Home" && <Home setPage={setPage} setInitial={setInitial} />}
        {page === "About" && (
          <About setPage={setPage} setInitial={setInitial} />
        )}
        {page === "Services" && (
          <Services
            setPage={setPage}
            initial={initial}
            setInitial={setInitial}
          />
        )}
        {page === "Contact" && (
          <Contact setPage={setPage} setInitial={setInitial} />
        )}
      </div>
      <Analytics />
    </>
  );
}
