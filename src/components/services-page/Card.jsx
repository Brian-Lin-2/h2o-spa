import { PropTypes } from "prop-types";

export default function Card({ service, cost, info, desc }) {
  return (
    <div className="border-b mx-4 px-2 py-4 font-karla">
      <h5 className="mb-6 font-bold">{service}</h5>
      {info && <p className="text-dark-gray text-sm -mt-4 mb-4">{info}</p>}
      {desc && (
        <ol className="-mt-4 mb-4">
          {desc.map((bullet) => {
            return (
              <div
                key={crypto.randomUUID()}
                className="ml-2 text-sm text-dark-gray"
              >
                {bullet}
              </div>
            );
          })}
        </ol>
      )}
      <p className="text-end text-dark-gray font-bold">{cost}</p>
    </div>
  );
}

Card.propTypes = {
  service: PropTypes.string,
  cost: PropTypes.string,
  info: PropTypes.string,
  desc: PropTypes.array,
};
