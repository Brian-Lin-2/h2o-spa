import Motion from "../../animations/Motion";

// Images.
import handMobile from "/src/assets/images/hand-mobile.png";
import handDesktop from "/src/assets/images/hands-about.png";
import salon from "/src/assets/images/salon.png";

export default function Intro() {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="flex flex-col items-center pt-12 bg-header-mobile md:bg-header-desktop md:pt-24 md:flex-row">
        <img className="md:hidden" src={handMobile} alt="" />
        <img className="hidden w-5/12 md:block" src={handDesktop} alt="" />
        <Motion
          duration="1.5"
          className="text-5xl font-karla font-bold mt-20 pb-32 md:text-[5vw] md:ml-[13.5vw] md:-mt-20"
        >
          About Us
        </Motion>
      </div>

      <Motion
        duration="1.5"
        className="flex flex-col-reverse my-20 mx-16 items-center justify-center text-center md:text-start md:flex-row md:items-start md:justify-start md:mx-32"
      >
        <p className="text-dark-gray md:w-2/3 md:text-md">
          Located at Rockville Centre, New York, our goal is to provide the
          highest quality of Nail Salon and Spa services, offering environmental
          lifestyle products to each of our clients under the highest standards
          of business ethics. H2O Nail & Spa creates a unique nail spa in
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
          className="mb-8 w-5/6 md:w-5/12 md:mb-0 md:ml-20"
          src={salon}
          alt="H2O"
        />
      </Motion>
    </>
  );
}
