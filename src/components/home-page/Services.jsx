import Card from "./Card";
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
      service: "Spa Special",
      image: "bg-special bg-center",
    },
    {
      service: "Kid's Menu",
      image: "bg-kids bg-center",
      position: "lg:col-start-2",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20 mb-40 gap-8 font-karla text-center lg:gap-12 lg:my-40">
      <div className="lg:flex lg:justify-between lg:items-center lg:w-8/12">
        <h1 className="text-3xl font-bold lg:text-5xl">Services</h1>
        <button
          className="hidden border-2 border-black py-2 px-4 font-bold text-lg lg:block hover:bg-black hover:text-white"
          onClick={() => {
            setInitial("");
            setPage("Services");
          }}
        >
          See All Services
        </button>
      </div>
      <li className="grid gap-6 lg:grid-cols-3 lg:grid-rows-3 lg:w-8/12">
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
      </li>
      <button
        className="border-2 border-black py-2 px-6 font-bold hover:bg-black hover:text-white lg:hidden"
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
