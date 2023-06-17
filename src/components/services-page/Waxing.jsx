import Card from "./Card";

export default function Waxing() {
  const waxing = [
    { service: "Eyebrow", cost: "12" },
    { service: "Lip", cost: "10" },
    { service: "Chin", cost: "13" },
    { service: "Cheek", cost: "20" },
    { service: "Under Arm", cost: "18" },
    { service: "Half Arm", cost: "30" },
    { service: "Full Arm", cost: "40" },
    { service: "Bikini", cost: "25" },
    { service: "Brazillian", cost: "60" },
    { service: "Half Leg", cost: "30" },
    { service: "Full Leg", cost: "50" },
    { service: "Back", cost: "40" },
    { service: "Chest", cost: "40" },
    { service: "Fingers/Toes", cost: "10" },
  ];

  return (
    <div>
      <h2 className="my-2 border-b pb-2 mb-8 mx-4 text-2xl text-karla font-bold text-center">
        Waxing
      </h2>

      <div className="grid gap-4 lg:grid-cols-2">
        {waxing.map((type) => {
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
  );
}
