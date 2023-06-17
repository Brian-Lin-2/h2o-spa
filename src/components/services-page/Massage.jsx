import Card from "./Card";

export default function Massage() {
  const massage = [
    {
      service: "Deep Tissue Massage",
      cost30: "50 (30 min)",
      cost60: "80 (60 min)",
      info: "Targeting deeper layer of muscle tissue. Slow and focused techniques are used to address specific areas of chronic muscle tensions or minor sports injuries which may lead to discomfort. It is designed to reduce tension, smooth sore muscles and induce deep relaxation.",
    },
    {
      service: "Swedish Massage",
      cost30: "45 (30 min)",
      cost60: "75 (60 min)",
      info: "A relaxation standard. This traditional European style body massage promotes relaxation, stimulates circulation and relieves tension.",
    },
    {
      service: "Aromatherapy Massage",
      cost30: "55 (30 min)",
      cost60: "85 (60 min)",
      info: "Through the inhalation and application of our pure essential oils, this relaxation massage is to balance and enliven the body. These special oil blends enhance the massage experience and invite health. An in-depth consultation with your therapist for aroma selection begins your scented journey.",
    },
    {
      service: "Hot Stone Massage",
      cost30: "60 (30 min)",
      cost60: "90 (60 min)",
      info: "This thermal stone massage was used for healing purposes in ancient times. Hot and cold stones are placed on the stress areas of the body releasing tension and toxins as you relax into a serenely altered state of mind. Combined with massage pressure points, herbs, and essential oils, hot stone is truly an unique experience.",
    },
    {
      service: "Reflexology",
      cost30: "50 (30 min)",
      cost60: "80 (60 min)",
      info: "Treat your feet and hands to the ancient art of relaxation. By manipulating pressure and energy points, your therapist can stimulate the entire body, improving energy flow and circulation while promoting relaxation.",
    },
  ];

  return (
    <div>
      <h3 className="my-2 border-b pb-2 mb-8 mx-16 text-2xl text-karla font-bold text-center">
        Massage
      </h3>
      <div className="grid gap-4">
        {massage.map((type) => {
          return (
            <Card
              key={crypto.randomUUID()}
              service={type.service}
              cost={type.cost30 + " / " + type.cost60}
              info={type.info}
            />
          );
        })}
      </div>
    </div>
  );
}
