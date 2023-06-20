import Card from "./Card";

export default function Pedicure() {
  const foot = [
    { service: "Pedicure", cost: "27" },
    { service: "Foot Massage (10 minutes)", cost: "12" },
    { service: "Paraffin Wrap", cost: "10" },
    { service: "Callus", cost: "12" },
  ];

  const special = [
    {
      service: "H2O Pedicure",
      cost: "48",
      info: "Sea salt soak, moisture scrub, mud masque, massage lotion (10 minute massage).",
    },
    {
      service: "Green Tea Spa Pedicure",
      cost: "63",
      info: "Green tea is packed with health and beauty benefits which can be maximized when applied directly to the skin. This spa pedicure is designed to hydrate and detoxify your feet, purifying skin with botanical extracts to smooth and soften, and tea essences to help healing, rejuvenating and relaxing. (15 minute massage).",
    },
    {
      service: "Silky Milk Spa Pedicure",
      cost: "68",
      info: "Milk has extraordinary hydrating quality increasing your skin's ability to obtain moisture. Essetnail proteins and effective beta-hydroxy acids naturally hydrate and exfoliate your skin, leaving it smooth and silky soft. (20 minute massage).",
    },
    {
      service: "Pomegranate Spa Pedicure",
      cost: "75",
      info: "Pomegranate mud is most effective treatment for smoothing, stimulating, detoxifying and firming all skin types. Nourish your feet with pomegranate scrub, loaded with nutrietnr ich vitamins and anti-aging oxidants. (20 minute massage).",
    },
    {
      service: "Shea Butter Spa Pedicure",
      cost: "78",
      info: "Shea butter is one of nature's greatest moisturizers and has a vast number of proven healing properties. The Shea Butter Spa Pedicure system contains formula penetrating deep into the skin to promote healthy blood circulation. It nourishes the skin with Vitamin A, E, and F. Vitamin A and E helps mantain the skin and keep it clear and rejuvenate (25 minute massage).",
    },
    {
      service: "Peppermint Hot Stone Spa Pedicure",
      cost: "85",
      info: "A blend of aromatic peppermint crystal scrub sloughs away dead, dry skin. Hot stones are used to gently massage pressure points along the bottom of your legs and feet, helping to ease stress and tension while relaxing tired muscles (30 minute massage).",
    },
    {
      service: "24K Gold Spa Pedicure",
      cost: "88",
      info: "The ultimate luxurious treatment with pure 24K and colloidal gold to help soften and brighten the skin of the feet. The pure 24K gold spa pedicure will enhance elasticity, improve circulation, calming and detoxification, protects from environmental radicals, regulate skin discoloration and improve skin texture (30 minute massage).",
    },
  ];

  return (
    <div className="flex flex-col gap-20 mb-12 lg:gap-32">
      <div>
        <h2 className="my-2 border-b pb-2 mb-8 mx-4 text-2xl text-karla font-bold text-center">
          Foot Care
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {foot.map((type) => {
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

      <div>
        <h2 className="my-2 border-b pb-2 mb-8 mx-4 text-2xl text-karla font-bold text-center">
          Pedicure Special
        </h2>
        <p className="mb-4 text-xs text-dark-gray text-center mx-8">
          *Includes a hydrating paraffin wrap and callus wrap.
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
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
