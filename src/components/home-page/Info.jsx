export default function Info() {
  return (
    <div className="flex flex-col items-center gap-6 border mt-40">
      <div className="grid grid-cols-3 grid-rows-1 mx-32 items-center border gap-36">
        <div className="flex flex-col items-center justify-center">
          <img />
          <h3 className="font-karla text-xl font-bold">Location</h3>
          <p className="font-verdana text-sm">Lorem ipsum dolor sit</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img />
          <h3 className="font-karla text-xl font-bold">Hours</h3>
          <p className="font-verdana text-sm">Lorem ipsum dolor sit</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img />
          <h3 className="font-karla text-xl font-bold">Contacts</h3>
          <p className="font-verdana text-sm">Lorem ipsum dolor sit</p>
        </div>
      </div>

      <button className="border-2 border-black text-center">
        Book An Appointment
      </button>
    </div>
  );
}
