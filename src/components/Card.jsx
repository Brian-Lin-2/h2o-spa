export default function Card({ icon, header, text }) {
  return (
    <div>
      <i>{icon}</i>
      <h5>{header}</h5>
      <p>{text}</p>
    </div>
  );
}
