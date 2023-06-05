/* eslint-disable react/prop-types */
export default function Card({ icon, header }) {
  return (
    <div className="flex flex-col items-center">
      <i>{icon}</i>
      <h5>{header}</h5>
    </div>
  );
}
