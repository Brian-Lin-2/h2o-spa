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
      service: "FUll Day Spa",
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

  return (
    <div>
      {spa.map((spa) => {
        return (
          <div className="mb-4" key={crypto.randomUUID()}>
            <h5>{spa.service + " " + spa.cost}</h5>
            <ol className="ml-2">
              {spa.desc.map((point) => {
                return <li key={crypto.randomUUID()}>{point}</li>;
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
}
