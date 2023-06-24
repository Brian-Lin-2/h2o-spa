export default function Intro() {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="flex flex-col bg-blue-2 items-center pt-12 lg:pt-24 lg:flex-row">
        <img className="lg:hidden" src="./images/about-bg-mobile.png" alt="" />
        <img
          className="hidden w-5/12 lg:block"
          src="./images/hands-about.png"
          alt=""
        />
        <h1 className="text-5xl font-karla font-bold mt-12 pb-20 lg:text-7xl lg:ml-48 lg:-mt-20">
          About Us
        </h1>
      </div>

      <div className="flex flex-col-reverse my-12 mx-16 items-start justify-center text-center lg:text-start lg:flex-row lg:justify-start lg:mx-32 lg:my-16">
        <p className="text-dark-gray lg:w-2/3 lg:text-lg">
          Located at Rockville Centre, New York, our goal is to provide the
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
        <img
          className="w-5/12 mt-2 ml-20"
          src="./images/salon.jpeg"
          alt="H2O"
        />
      </div>
    </>
  );
}
