export default function Gift() {
  return (
    <div className="flex flex-col gap-4 mx-8 my-40 lg:flex-row-reverse lg:ml-32 lg:my-56 lg:gap-0 lg:items-center">
      <img
        className="lg:relative lg:left-48 lg:scale-150"
        src="./images/gift-test.jpeg"
        alt="gift-card"
      />
      <div className="text-center lg:text-start ml-8 mr-4">
        <h1 className="mb-2 text-3xl font-karla font-bold lg:text-8xl lg:-tracking-wide">
          The Best Gift.
        </h1>
        <p className="mx-4 text-dark-gray lg:text-xl">
          Delight your friends, family, or lover with an H2O Nail & Spa gift
          card! Gift cards can be purchased in person at our salon.
        </p>
      </div>
    </div>
  );
}
