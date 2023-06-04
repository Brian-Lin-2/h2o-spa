export default function About() {
  return (
    <div className="flex p-32">
      {/* Image */}
      <div className="w-1/2 border"></div>
      <div className="border w-1/2  pl-8 py-32 flex flex-col justify-center items-start gap-4">
        <h1 className="text-4xl font-karla font-bold">Who We Are</h1>
        <p>
          Located at Rockville Centre, New York, our goal is to provide the
          highest quality of Nail Salon and Spa services, offering environmental
          lifestyle products to each of our clients under the highest standards
          of business ethics.
        </p>
        <button className="font-verdana border font-white bg-blue-400 p-2 rounded-md text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
}
