import Card from "./Card";

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
    <div className="flex flex-col gap-8">
      <h2 className="mt-2 border-b pb-2 mb-8 mx-4 text-2xl text-karla font-bold text-center">
        Kids Menu
      </h2>
      <p className="mb-4 text-xs text-dark-gray text-center mx-8">
        (up to the age of 10)
      </p>

      <div className="grid gap-4 lg:grid-cols-2">
        {kids.map((type) => {
          return (
            <Card
              key={crypto.randomUUID()}
              service={type.service}
              cost={type.cost}
            />
          );
        })}

        {polish.map((type) => {
          return (
            <Card
              key={crypto.randomUUID()}
              service={type.service}
              cost={type.costHand + " / " + type.costFeet}
            />
          );
        })}
      </div>
    </div>
  );
}
