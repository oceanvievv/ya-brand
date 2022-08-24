export default function AdvantageItem({ data }) {
  return (
    <div className="advantages-item">
      <div className="advantages-item__icon">{data.icon}</div>
      <div className="advantages-item__title">{data.title}</div>
      <div className="advantages-item__descr">{data.descr}</div>
    </div>
  );
}
