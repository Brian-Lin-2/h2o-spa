import Card from "./Card";
import Motion from "../../animations/Motion";
import { PropTypes } from "prop-types";

export default function Services({ setPage, setInitial }) {
  const services = [
    {
      service: "Manicure",
      image: "bg-manicure bg-center",
    },
    {
      service: "Pedicure",
      image: "bg-pedicure bg-center",
    },
    {
      service: "Massage",
      image: "bg-massage bg-center",
    },
    {
      service: "Facial",
      image: "bg-facial",
    },
    {
      service: "Waxing",
      image: "bg-waxing bg-center",
    },
    {
      service: "Special",
      image: "bg-special bg-center",
    },
    {
      service: "Kids",
      image: "bg-kids bg-center",
      position: "md:col-start-2",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20 mb-40 gap-8 font-karla text-center md:gap-10 md:my-28">
      <Motion
        duration="1"
        className="md:flex md:justify-between md:items-center md:w-8/12"
      >
        <h1 className="text-[8vw] font-bold md:text-[3.25vw]">Services</h1>
        <button
          className="hidden border-2 border-black py-2 px-4 font-bold text-[1.1vw] md:block hover:bg-black hover:text-white"
          onClick={() => {
            setInitial("");
            setPage("Services");
          }}
        >
          See All Services
        </button>
      </Motion>
      <Motion
        duration="1.75"
        className="grid gap-6 md:grid-cols-3 md:grid-rows-3 md:w-8/12"
      >
        {services.map((service) => {
          return (
            <Card
              key={crypto.randomUUID()}
              service={service.service}
              image={service.image}
              position={service.position}
              setPage={setPage}
              setInitial={setInitial}
            />
          );
        })}
      </Motion>
      <button
        className="border-2 border-black py-2 px-6 font-bold text-[4.25vw] hover:bg-black hover:text-white md:hidden"
        onClick={() => {
          setInitial("");
          setPage("Services");
        }}
      >
        See All Services
      </button>
    </div>
  );
}

Services.propTypes = {
  setPage: PropTypes.func.isRequired,
  setInitial: PropTypes.func.isRequired,
};
