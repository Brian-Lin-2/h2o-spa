// eslint-disable-next-line react/prop-types
export default function Card({ service, image }) {
  let style =
    "border p-4 pt-10 pr-52 text-start bg-cover bg-no-repeat text-black " +
    image;
  return <div className={style}>{service}</div>;
}
