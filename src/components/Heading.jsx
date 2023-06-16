export default function Heading() {
  return (
    <div className="flex justify-between items-center p-6 bg-blue-1 lg:px-32 lg:pt-8">
      <img className="w-20" src="./images/logo.png" />
      <img className="w-10 lg:hidden" src="./images/hamburger-icon.png" />
      <h1 className="hidden gap-6 font-karla font-bold items-center tracking-wide lg:flex">
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Contact Us</a>
      </h1>
    </div>
  );
}
