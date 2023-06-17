import Facial from "./Facial";
import KidMenu from "./KidMenu";
import Manicure from "./Manicure";
import Massage from "./Massage";
import Pedicure from "./Pedicure";
import Special from "./Special";
import Waxing from "./Waxing";

export default function Navbar() {
  return (
    <div className=" mt-16 mb-32 mx-12 lg:mx-32">
      <h1 className="text-4xl text-center font-karla font-bold mb-12">
        Services
      </h1>

      <div className="flex flex-col-reverse">
        <div className="">
          <Manicure />
        </div>

        <div className="flex flex-col border font-karla text-center text-lg">
          <a className="border p-2">Manicure</a>
          <a className="border p-2">Pedicure</a>
          <a className="border p-2">Massage</a>
          <a className="border p-2">Facial</a>
          <a className="border p-2">Waxing</a>
          <a className="border p-2">Spa Special</a>
          <a className="border p-2">Kid's Menu</a>
        </div>
      </div>
    </div>
  );
}
