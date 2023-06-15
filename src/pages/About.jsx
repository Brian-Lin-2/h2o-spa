import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Card from "../components/about-page/Card";
import Intro from "../components/about-page/Intro";

export default function About() {
  const services = [
    {
      icon: "temp",
      header: "Manicure",
      text: "Let us pamper your hands with a caring touch. We cares, massage, moisturize and perfect your hands and nails to soften your skin and beauty your appearance. In addition, we paint your nails in any color; from deep, sexy reds to innocent, flowery pinks to exciting and electric blues and purples. Our goal is to help you show off your hands with pride.",
    },
    {
      icon: "temp",
      header: "Pedicure",
      text: "Having a pedicure is beneficial for your health, soothes aches, exfoliates dead cells, and revitalizes feet. Just sit back in zero-gravity recliner, the chair cradles to release spinal pressure and stress.",
    },
    {
      icon: "temp",
      header: "Waxing",
      text: "Achieve long-lasting, nick-free hair removal with our waxing services. For maximum comfort, we follow our gentle, heat-controller hair removal method with a smoothing moisturizer.",
    },
    {
      icon: "temp",
      header: "Foot Reflexology",
      text: "An ancient technique that treats stress-related conditions by stimulating each organs, body part and gland through the corresponding points in oneâ€™s feet. Reflexology is the application of specific pressures to reflex points in the feet. It is complementary therapy that works on the feet or hands enabling the body to heal itself. Following illness, stress, injury or disease, it is in a state of â€œimbalanceâ€, an vital energy pathways are blocked, preventing the body from functioning effectively. Reflexology can be used to restore and maintain the bodyâ€™s natural equilibrium and encourage healing.",
    },
  ];

  return (
    <>
      <Heading />
      <Intro />
      <div className="flex flex-col my-32 items-center">
        <h3 className="font-karla text-3xl font-bold my-8">Services</h3>
        <div className="grid grid-cols-2 grid-rows-2 justify-center border gap-32">
          {services.map((service) => {
            return (
              <Card
                key={crypto.randomUUID()}
                icon={service.icon}
                header={service.header}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
