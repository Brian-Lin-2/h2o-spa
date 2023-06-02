export default function Header() {
  return (
    <div className="bg-blue-50 px-32">
      <div className="flex justify-between items-center px-6 pt-6">
        <img className="w-20" src="./images/logo.png" />
        <h1 className="flex gap-6 font-karla font-bold items-center tracking-wide">
          <a>Home</a>
          <a>About</a>
          <a>Services</a>
          <a>Spa Special</a>
          <a>Contact</a>
        </h1>
      </div>
      <div className="flex px-6 py-32">
        <h1 className="text-6xl border-2 border-black font-karla font-bold w-1/2 m-20 p-5">
          Welcome To H2O!
        </h1>
        {/* Image later */}
        <div className="w-1/2 border"></div>
      </div>
    </div>
  );
}
