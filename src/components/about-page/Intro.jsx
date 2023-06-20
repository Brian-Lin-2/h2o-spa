export default function Intro() {
  return (
    <>
      <img className="relative bottom-80 -z-10" src="./images/about-bg.png" />
      {/* Hi, We're H2O. */}
      <div className="flex flex-col-reverse -mt-64 my-20 mx-16 items-start justify-center text-center lg:text-start lg:flex-row lg:justify-start lg:mx-32">
        <p className="text-dark-gray lg:w-2/3">
          Located at Rockville Centre, New York. Our goal is to provide the
          highest quality of Nail Salon and Spa services, offering environmental
          lifestyle products to each of our clients under the highest standards
          of business ethics. H2O Nail Spa is to create a unique nail spa in
          markets that will attract people who are looking to have an enjoyable
          spa experience. Begun as a dream of its dedicated owner, we nurtured
          this dream, shared it with others, and built a thriving center
          committed to the health and wellness of its clients.
          <br /> <br />
          We offer our guests numerous therapies, treatments, products and nail
          services that embody the healing traditions of many cultures. Our aim
          is to provide all guests with impeccable service through experiences
          that nurture the body, mind and spirit. H2O Nail Spa is committed to
          helping you capture the tranquility of serenity and is dedicated to
          the enhancement of your natural beauty.
        </p>
        <div className="border lg:w-1/3 ml-32 w-full h-64"></div>
      </div>
    </>
  );
}
