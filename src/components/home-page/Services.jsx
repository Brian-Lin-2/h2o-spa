import Card from "./Card";

export default function Services() {
  const services = [
    {
      service: "Manicure",
      image: "",
    },
    {
      service: "Pedicure",
      image: "",
    },
    {
      service: "Massage",
      image: "",
    },
    {
      service: "Facial",
      image: "",
    },
    {
      service: "Waxing",
      image: "",
    },
    {
      service: "Spa Special",
      image: "",
    },
    {
      service: "Kid's Menu",
      image: "",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20 gap-8 font-karla text-center">
      <h1 className="text-3xl font-bold">Services</h1>
      <li className="grid gap-3">
        <Card />
      </li>
      <button className="border py-3 px-6 bg-blue-3 text-white font-bold rounded-full">
        See All Services
      </button>
    </div>
  );
}
