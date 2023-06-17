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
          <Pedicure />
        </div>

        <div className="grid gap-4 grid-cols-2 font-karla text-center lg:grid-cols-3 lg:mx-48 lg:gap-6">
          <a className="border border-black font-bold p-2 rounded-full">
            Manicure
          </a>
          <a className="border border-black font-bold p-2 rounded-full">
            Pedicure
          </a>
          <a className="border border-black font-bold p-2 rounded-full">
            Massage
          </a>
          <a className="border border-black font-bold p-2 rounded-full">
            Facial
          </a>
          <a className="border border-black font-bold p-2 rounded-full">
            Waxing
          </a>
          <a className="border border-black font-bold p-2 rounded-full">
            Spa Special
          </a>
          <a className="border border-black font-bold p-2 rounded-full relative left-1/2 lg:col-start-2 lg:left-0">
            Kid's Menu
          </a>
        </div>
      </div>
    </div>
  );
}
