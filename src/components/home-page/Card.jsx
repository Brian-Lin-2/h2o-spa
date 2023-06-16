// eslint-disable-next-line react/prop-types
export default function Card({ service, image, position }) {
  let style = `p-4 pt-10 pr-52 text-start bg-cover bg-no-repeat rounded text-white lg:pt-20 lg:pb-6 lg:pl-6 lg:text-lg ${image} ${position}`;

  return <div className={style}>{service}</div>;
}
