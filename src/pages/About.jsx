import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function About() {
  return (
    <>
      <Heading />
      <div className="flex mx-32 my-20 items-center justify-center">
        <div className="w-1/2 flex flex-col justify-center items-start gap-4">
          <h1 className="text-3xl font-karla font-bold">Who We Are</h1>
          <p>
            Located at Rockville Centre, New York. Our goal is to provide the
            highest quality of Nail Salon and Spa services, offering
            environmental lifestyle products to each of our clients under the
            highest standards of business ethics. H2O Nail Spa is to create a
            unique nail spa in markets that will attract people who are looking
            to have an enjoyable spa experience. Begun as a dream of its
            dedicated owner, we nurtured this dream, shared it with others, and
            built a thriving center committed to the health and wellness of its
            clients.
            <br /> <br />
            We offer our guests numerous therapies, treatments, products and
            nail services that embody the healing traditions of many cultures.
            Our aim is to provide all guests with impeccable service through
            experiences that nurture the body, mind and spirit. H2O Nail Spa is
            committed to helping you capture the tranquility of serenity and is
            dedicated to the enhancement of your natural beauty.
          </p>
        </div>
        <img className="w-1/3 border ml-20" src="./images/place.jpeg"></img>
      </div>
      <div className="flex justify-center mx-32 border">
        <h3 className="font-karla text-3xl font-bold">Services</h3>
      </div>
      <Footer />
    </>
  );
}
