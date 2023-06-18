import Card from "./Card";

export default function Facial() {
  const facial = [
    {
      service: "Signature Facial (For Men & Women)",
      cost: "75",
      info: "This customized facial includes cleansing, natural exfoliation while aromatic steaming is used to ease extraction (blackheads & whiteheads and other impurities). A high frequency treatment to reduce pimples and blackheads. A smoothing antibacaterial is included followed with the application of a mask suited to your skin type. (60 min)",
    },
    {
      service: "Bio-Lifting Tightening Facial",
      cost: "145",
      info: "Our cosmetologist uses the bio-lift facial fitness system which utilizes micro-current technology to introduce a mild pulsating current into the skin and muscles. The results are firmer, more resilient muscles which enhance facial contours, dramatically improve skin tone and texture. A return to healthy and glowing look of youth. A facial mask, head, neck, and shoulder massage are included. (90 min)",
    },
    {
      service: "Acne Solution Treatment",
      cost: "100",
      info: "Developed specifically for deep-pore cleansing and illuminating the bacteria on the skin that causes acne. Our acne facial was developed as the perfect partner to follow our clear light acne treatment. (70 min)",
    },
    {
      service: "Microdermabrasion",
      cost: "135",
      info: "Discover the most effective treatment in eliminating noticeable imperfections and dull skin. Microdermabrasion gently blasts away spots and fine lines with exfoliating micro crystals. Even acne scars and areas of hyperpigmentation can be addressed with this treatment. With repeated sessions skin will look younger and have a remarkable improved texture and appearance. (90 min)",
    },
    {
      service: "Photo Rejuvenation Therapy (IPL)",
      cost: "135",
      info: "This brand new technology also known as facial rejuventation uses intense pulsed light (IPL) and is extremely effective in treating brown spots, sun spots, pigmented lesions, fine-line wrinkles and rosacea. By promoting cell growth and enhancing collagen production, it leaves behind cleaner, smoother, and younger skin. (90 min)",
    },
    {
      service: "Ultrasound Lifting Facial",
      cost: "90",
      info: "This treatment utilizes low-frequency sound waves in a four stage system to safely cleanse, peel, lift, and tone. These four steps help fight aging skin, reduce wrinkles, clear acne, manage rosacea, and control hyperpigmentation by enabling treatment products to more effectively penetrate the skin. Safe and effective for all skin types and tones. Experience a skin breakthrough. (70 min)",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <h2 className="my-2 border-b pb-2 mb-8 mx-4 text-2xl text-karla font-bold text-center">
        Facial
      </h2>
      <div className="grid gap-4 lg:grid-cols-2">
        {facial.map((type) => {
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
  );
}
