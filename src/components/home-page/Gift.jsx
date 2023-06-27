export default function Gift() {
  return (
    <div className="flex flex-col gap-4 mx-8 my-40 md:flex-row-reverse md:ml-32 md:my-56 md:gap-0 md:items-center">
      <img
        className="md:relative md:left-48 md:scale-150"
        src="./images/gift-test.jpeg"
        alt="gift-card"
      />
      <div className="text-center md:text-start ml-8 mr-4">
        <h1 className="mb-2 text-3xl font-karla font-bold md:text-8xl md:-tracking-wide">
          The Best Gift.
        </h1>
        <p className="mx-4 text-dark-gray md:text-xl">
          Delight your friends, family, or lover with an H2O Nail & Spa gift
          card! Gift cards can be purchased in person at our salon.
        </p>
      </div>
    </div>
  );
}
