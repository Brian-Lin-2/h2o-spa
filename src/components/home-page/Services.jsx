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
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20 gap-8 font-karla text-center">
      <h1 className="text-3xl font-bold">Services</h1>
      <li className="grid gap-6">
        {services.map((service) => {
          return (
            <Card
              key={crypto.randomUUID()}
              service={service.service}
              image={service.image}
            />
          );
        })}
      </li>
      <button className="border py-3 px-6 bg-blue-3 text-white font-bold rounded-full">
        See All Services
      </button>
    </div>
  );
}
