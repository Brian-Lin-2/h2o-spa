export default function Card({ service, cost, info }) {
  return (
    <div className="border-b mx-4 px-2 py-4 font-karla">
      <h5 className="mb-6 font-bold">{service}</h5>
      {info && <p>{info}</p>}
      <p className="text-end text-dark-gray font-bold">{cost}</p>
    </div>
  );
}
