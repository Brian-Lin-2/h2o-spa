export default function Header() {
  return (
    <div className="flex justify-between items-center p-6">
      <img className="w-20" src="./images/logo.png" />
      <h1 className="flex gap-6 font-karla font-bold items-center tracking-wide">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Services</h3>
        <h3>Spa Special</h3>
        <h3>Contact</h3>
      </h1>
    </div>
  );
}
