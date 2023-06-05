import Heading from "../Heading";

export default function Header() {
  return (
    <>
      <Heading />
      <div className="flex px-40 py-32 bg-blue-50">
        <h1 className="text-6xl border-2 border-black font-karla font-bold w-1/2 m-20 p-5">
          Welcome To H2O!
        </h1>
        {/* Image later */}
        <div className="w-1/2 border"></div>
      </div>
    </>
  );
}
