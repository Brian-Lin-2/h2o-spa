export default function Gift() {
  return (
    <div className="flex flex-col text-center gap-4 mx-8 my-40 lg:flex-row-reverse lg:mr-72 lg:mt-80 lg:mb-96 lg:gap-0 lg:items-center">
      <img
        className="border-2 border-black lg:border-none lg:rounded-2xl lg:w-5/12"
        src="./images/giftcard.jpg"
        alt="gift-card"
      />
      <div className="lg:relative lg:left-32 lg:-bottom-36 lg:w-5/12 lg:bg-blue-2 lg:rounded-2xl lg:px-12 lg:py-24 lg:text-start">
        <h1 className="mb-2 text-3xl font-karla font-bold lg:text-4xl">
          The Best Gift
        </h1>
        <p className="mx-4 text-dark-gray lg:m-0 lg:text-lg">
          Delight your friends, family, or lover with an H2O Nail & Spa gift
          card! Gift cards can be purchased in person at our salon.
        </p>
      </div>
    </div>
  );
}
