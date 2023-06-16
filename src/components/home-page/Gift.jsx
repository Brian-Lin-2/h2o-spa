export default function Gift() {
  return (
    <div className="flex flex-col text-center gap-4 mx-8 my-40">
      <img
        className="border-2 border-black rounded"
        src="./images/giftcard.jpg"
        alt="gift-card"
      />
      <h1 className="text-3xl font-karla font-bold">The Best Gift</h1>
      <p className="mx-4 text-dark-gray">
        Delight your friends, family, or lover with an H2O Nail & Spa gift card!
        Gift cards can be purchased in person at our salon.
      </p>
    </div>
  );
}
