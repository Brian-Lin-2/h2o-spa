export default function InfoPopUp() {
  return (
    <div className="border fixed inset-0 bg-dark-gray-transparent">
      <div className="flex flex-col bg-white items-center my-40 mx-28 lg:flex-row lg:my-32 lg:mx-72 shadow-2xl">
        <img
          className="lg:w-7/12"
          src="./images/person-calling.jpg"
          alt="girl-calling"
        ></img>
        <img
          className="w-6 relative bottom-52 left-28 lg:w-8 lg:bottom-40 lg:left-76"
          src="./images/close-icon.svg"
        ></img>
        <div className="mb-14 mt-4 mx-6 text-center lg:text-start lg:m-0 lg:ml-2 lg:mr-16">
          <h1 className="font-karla font-bold text-3xl mb-1 lg:text-4xl lg:mb-2">
            Call Today!
          </h1>
          <p className="font-verdana text-sm text-dark-gray lg:text-base">
            Please call us at 516-766-2576 to reserve an appointment!
          </p>
        </div>
      </div>
    </div>
  );
}
