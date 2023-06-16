import Heading from "../Heading";

export default function Header() {
  return (
    <>
      <Heading />
      <div className="flex flex-col-reverse bg-blue-1 p-6 pb-12 lg:flex-row lg:px-40 lg:gap-8 lg:pt-12 lg:pb-32 lg:items-center">
        <div className="text-center mt-8 lg:mx-20 lg:text-start">
          <h1 className="text-4xl font-bold mb-4 font-karla lg:text-6xl">
            Nails You Will Love!
          </h1>
          <p className="font-verdana text-dark-gray mx-2 lg:ml-0 lg:mr-20 lg:text-lg">
            Providing nail and spa services with the upmost care and
            cleanliness.
          </p>
        </div>
        {/* Image later */}
        <div className="h-80 border lg:w-1/2"></div>
      </div>
    </>
  );
}
