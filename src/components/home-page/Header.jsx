import Heading from "../Heading";

export default function Header() {
  return (
    <>
      <Heading />
      <div className="flex px-40 py-32 bg-blue-1">
        <div>
          <h1 className="">Nails You Will Love!</h1>
          <p>
            We provide nail and spa services with the upmost care and
            cleanliness.
          </p>
        </div>
        {/* Image later */}
        <div className="w-1/2 border"></div>
      </div>
    </>
  );
}
