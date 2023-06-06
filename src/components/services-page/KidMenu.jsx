export default function KidMenu() {
  const kids = [
    { service: "Manicure", cost: "10" },
    { service: "French Manicure", cost: "15" },
    { service: "Pedicure", cost: "23" },
    { service: "French Pedicure", cost: "28" },
  ];

  const polish = [
    {
      service: "Change Polish",
      costHand: "8 (hands)",
      costFeet: "13 (feet)",
    },
    {
      service: "Change Polish-French",
      costHand: "13 (hands)",
      costFeet: "18 (feet)",
    },
  ];

  return (
    <div>
      <h2>
        Kids Menu <span>(up to age of 10)</span>
      </h2>
      {kids.map((type) => {
        return (
          <h5 key={crypto.randomUUID()}>{type.service + " " + type.cost}</h5>
        );
      })}
      {polish.map((type) => {
        return (
          <h5 key={crypto.randomUUID()}>
            {type.service + " " + type.costHand + " " + type.costFeet}
          </h5>
        );
      })}
    </div>
  );
}
