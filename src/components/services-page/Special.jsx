import Card from "./Card";

export default function Special() {
  const spa = [
    {
      service: "Mini Day Spa",
      time: "(1 hour 30 minutes)",
      cost: "100",
      desc: ["Signature Facial", "1/2 Hour Body Massage"],
    },
    {
      service: "Spa Special",
      time: "2 hours",
      cost: "130",
      desc: [
        "Ultrasonic Facial",
        "Collagen Mask",
        "1/2 Hour Body Massage",
        "Aromatherapy Hand Treatment",
      ],
    },
    {
      service: "Full Day Spa",
      time: "3 hours 30 minutes",
      cost: "230",
      desc: [
        "Microdermabrasion Skin Peel Facial",
        "Collagen Eye Treatment",
        "1 Hour Full Body Massage",
        "Aromatherapy Hand Massage",
      ],
    },
  ];

  const treatment = [
    { service: "Ear Candle Therapy", cost: "40" },
    { service: "Eyelash Extension", cost: "45 / 120" },
    { service: "Eyelash Fill", cost: "60" },
    { service: "Eyebrow Tint", cost: "25" },
    { service: "Eyelash Tint", cost: "30" },
  ];

  return (
    <div className="flex flex-col gap-8 mb-12 lg:gap-32">
      <div>
        <h2 className="my-2 border-b pb-2 mb-8 mx-4 text-2xl text-karla font-bold text-center">
          Spa Special
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {spa.map((type) => {
            return (
              <Card
                key={crypto.randomUUID()}
                service={type.service}
                cost={type.cost}
                info={type.info}
                desc={type.desc}
              />
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="my-2 border-b pb-2 mb-8 mx-4 text-2xl text-karla font-bold text-center">
          Special Treatment
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {treatment.map((type) => {
            return (
              <Card
                key={crypto.randomUUID()}
                service={type.service}
                cost={type.cost}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
