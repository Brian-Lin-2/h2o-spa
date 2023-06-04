export default function Heading() {
  return (
    <div className="flex justify-between items-center px-6 pt-6">
      <img className="w-20" src="./images/logo.png" />
      <h1 className="flex gap-6 font-karla font-bold items-center tracking-wide">
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Spa Special</a>
        <a>Contact Us</a>
      </h1>
    </div>
  );
}
