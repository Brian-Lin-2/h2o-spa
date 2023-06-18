import Card from "./Card";

export default function Services() {
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
      <h1 className="text-3xl font-bold lg:text-4xl">Services</h1>
      <li className="grid gap-6 lg:grid-cols-3 lg:grid-rows-3">
        {services.map((service) => {
          return (
            <Card
              key={crypto.randomUUID()}
              service={service.service}
              image={service.image}
              position={service.position}
            />
          );
        })}
      </li>
      <button className="border py-3 px-6 bg-blue-3 text-white font-bold rounded-full lg:text-lg hover:opacity-80">
        See All Services
      </button>
    </div>
  );
}
