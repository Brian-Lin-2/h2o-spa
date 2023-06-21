export default function InfoPopUp() {
  return (
    <div className="border fixed inset-0 bg-dark-gray-transparent">
      <div className="flex bg-white items-center my-32 mx-72 shadow-2xl">
        <img
          className="w-7/12"
          src="./images/person-calling.jpg"
          alt="girl-calling"
        ></img>
        <img
          className="w-8 relative bottom-40 left-76"
          src="./images/close-icon.svg"
        ></img>
        <div className="ml-2 mr-16">
          <h1 className="font-karla font-bold text-4xl mb-2">Call Today!</h1>
          <p className="font-verdana text-dark-gray">
            Please call us at 516-766-2576 to reserve an appointment!
          </p>
        </div>
      </div>
    </div>
  );
}
