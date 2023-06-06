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
    <div>
      <h2>Spa Special</h2>
      {spa.map((type) => {
        return (
          <div className="mb-4" key={crypto.randomUUID()}>
            <h5>{type.service + " " + type.cost}</h5>
            <ol className="ml-2">
              {type.desc.map((point) => {
                return <li key={crypto.randomUUID()}>{point}</li>;
              })}
            </ol>
          </div>
        );
      })}

      <h2 className="mt-4">Special Treatment</h2>
      {treatment.map((type) => {
        return (
          <div key={crypto.randomUUID()}>
            <h5>{type.service + " " + type.cost}</h5>
          </div>
        );
      })}
    </div>
  );
}
