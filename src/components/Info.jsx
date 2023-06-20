export default function Info() {
  return (
    <div className="flex flex-col items-center bg-blue-2 py-32 lg:gap-6">
      <div className="grid gap-20 lg:grid-cols-3 lg:grid-rows-1 lg:mx-60 lg:items-center lg:gap-0">
        <div className="flex flex-col items-center justify-center text-center mx-16 lg:mx-8">
          <img className="w-12" src="./images/location.svg" />
          <h3 className="font-karla text-xl font-bold">Location</h3>
          <p className="font-verdana text-sm text-dark-gray">
            302 Sunrise Highway Rockville Centre, NY 11570
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <img className="w-12" src="./images/clock.svg" />
          <h3 className="font-karla text-xl font-bold">Hours</h3>
          <p className="font-verdana text-sm text-dark-gray">
            Mon - Sat: 9:30am - 7:30pm
            <br />
            Sunday: 10:00am - 6:00pm
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <img className="w-12" src="./images/phone.jpeg" />
          <h3 className="font-karla text-xl font-bold">Contact</h3>
          <p className="font-verdana text-sm text-dark-gray">
            516-766-2576
            <br />
            h2ospallc@gmail.com
          </p>
        </div>
      </div>

      <button className="border-2 border-black font-bold p-2 text-center font-karla mt-16 lg:mt-8 hover:bg-black hover:text-white">
        Book An Appointment
      </button>
    </div>
  );
}
