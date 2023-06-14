import Heading from "../Heading";

export default function Header() {
  return (
    <>
      <Heading />
      <div className="flex flex-col-reverse bg-blue-1 p-6 pb-12 lg:flex-row lg:px-40 lg:py-32">
        <div className="border text-center mt-8">
          <h1 className="text-4xl font-bold mb-4 font-karla">
            Nails You Will Love!
          </h1>
          <p className="font-verdana">
            We provide nail and spa services with the upmost care and
            cleanliness.
          </p>
        </div>
        {/* Image later */}
        <div className="h-80 border"></div>
      </div>
    </>
  );
}
