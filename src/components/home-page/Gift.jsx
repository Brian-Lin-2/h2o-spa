import Motion from "../../animations/Motion";

// Images
import giftCard from "/src/assets/images/giftcard.png";

export default function Gift() {
  return (
    <div className="flex flex-col gap-4 mx-8 my-60 md:flex-row-reverse md:mx-8 md:my-56 md:gap-0 md:items-center lg:ml-32">
      <img
        className="md:relative md:-ml-48 md:left-48 md:scale-75 lg:scale-150 lg:ml-0"
        src={giftCard}
        alt="gift-card"
      />
      <Motion
        duration="1.5"
        className="text-center md:text-start lg:mr-[1.25vw] lg:ml-[2.25vw]"
      >
        <h1 className="mb-2 text-3xl font-karla font-bold md:text-[6.75vw] md:leading-none md:-tracking-wide">
          The Best Gift.
        </h1>
        <p className="mx-[1.25vw] text-dark-gray md:text-[1.4vw] md:leading-tight">
          Delight your friends, family, or lover with an H2O Nail & Spa gift
          card! Gift cards can be purchased in person at our salon.
        </p>
      </Motion>
    </div>
  );
}
