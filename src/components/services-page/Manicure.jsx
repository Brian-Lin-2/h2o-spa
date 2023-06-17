import Card from "./Card";

export default function Manicure() {
  const natural = [
    { service: "Manicure", cost: "15" },
    { service: "French Manicure", cost: "21" },
    { service: "Buffering Manicure", cost: "21" },
    { service: "Polish Change", cost: "10" },
  ];

  const artificial = [
    { service: "UV Gel New Set / Extensions", cost: "80" },
    { service: "UV Gel Permanent French New Set", cost: "95" },
    { service: "UV Gel Fill-In / French Fill-In", cost: "45 / 60" },
    { service: "Silk Wraps / Extensions", cost: "60 / 70" },
    { service: "Powder Fill-In", cost: "40" },
    { service: "Acrylic New Set / Fill-In", cost: "55 / 40" },
    { service: "Acrylic Pernament French New Set / Fill-In", cost: "70 / 40" },
    { service: "Take Off Artifical Nail", cost: "10" },
    { service: "Polish Change", cost: "10" },
    { service: "Color Gel on UV Gel Tip", cost: "Add 15" },
  ];

  const gel = [
    { service: "Color Gel", cost: "38" },
    { service: "Color Gel French", cost: "48" },
    { service: "Color Powder / French", cost: "45 / 55" },
  ];

  const special = [
    {
      service: "Citrus Spa Manicure",
      cost: "35",
      info: "Citrus essential oils, Vitamin E and anti-oxidants formulated to stimulate the senses as it smooths, refines, and conditions. With its zesty fragrance, citrus spa manicure will energize, refresh, and life spirits every time. (Invigorating citrus milk bath warm-oil relaxing, revitalizing citrus moisture scrub hand treatment. Relaxing hand and arm massage. Silky smooth hand lotion, hardener).",
    },
    {
      service: "Silky Milk Spa Manicure",
      cost: "40",
      info: "Silky milk has extraordinary hydrating qualities increasing your skin's ability to obtain moisture. It is chock full of Vitamin A, D & E to nourish your skin with anti-inflammatory benefits. The essential proteins and effective beta-hydroxy acids naturally hydrate and exfoliate your hand, leaving your skin smooth and silky soft.",
    },
    {
      service: "Aroma Hot Stone Spa Manicure",
      cost: "45",
      info: "Using aromatherapy oil and massaging with the stones strategically to relieve soreness and tensions. Experience the feeling of hot stones penetrating warmth and healing energy into sore, tired hands. Your hands totally deserve this.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 mt-12">
      <div>
        <h2 className="my-2 border text-lg text-karla font-bold text-center">
          Natural Nails
        </h2>
        <div className="grid gap-4">
          {natural.map((type) => {
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

      <div>
        <h2 className="my-2 border text-lg text-karla font-bold text-center">
          Artificial Nails
        </h2>
        <div className="grid gap-4">
          {artificial.map((type) => {
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

      <div>
        <h2 className="my-2 border text-lg text-karla font-bold text-center">
          Soak-Off Color Gel
        </h2>
        <div className="grid gap-4">
          {gel.map((type) => {
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

      <div>
        <h2 className="my-2 border text-lg text-karla font-bold text-center">
          Manicure Special
        </h2>
        <p className="mb-4 text-xs text-dark-gray text-center mx-8">
          *Includes a hydrating paraffin wrap (soothing and hydrating for
          arthritic hands.)
        </p>
        <div className="grid gap-4">
          {special.map((type) => {
            return (
              <Card
                key={crypto.randomUUID()}
                service={type.service}
                cost={type.cost}
                info={type.info}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
