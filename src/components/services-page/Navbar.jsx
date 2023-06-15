import Facial from "./Facial";
import KidMenu from "./KidMenu";
import Manicure from "./Manicure";
import Massage from "./Massage";
import Pedicure from "./Pedicure";
import Special from "./Special";
import Waxing from "./Waxing";

export default function Navbar() {
  return (
    <div className="mx-52 mt-16 mb-32 border">
      <h1 className="text-4xl text-center font-karla font-bold mb-12">
        Services
      </h1>

      <div className="flex">
        <div className="w-11/12 border"></div>

        <div className="flex flex-col gap-5 border font-karla text-lg">
          <a>Manicure</a>
          <a>Pedicure</a>
          <a>Massage</a>
          <a>Facial</a>
          <a>Waxing</a>
          <a>Spa Special</a>
          <a>Kid's Menu</a>
        </div>
      </div>
    </div>
  );
}
