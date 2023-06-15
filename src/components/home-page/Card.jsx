// eslint-disable-next-line react/prop-types
export default function Card({ service, image }) {
  let style =
    "p-4 pt-10 pr-52 text-start bg-cover bg-no-repeat rounded text-white " +
    image;
  return <div className={style}>{service}</div>;
}
