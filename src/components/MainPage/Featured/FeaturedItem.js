export default function FeaturedItem({ data }) {
  return (
    <div className="featured-item">
      <div
        className="featured-item__img"
        style={{
          backgroundImage: `url(${data.img})`,
        }}
      ></div>
      <div className="featured-item__info">
        <div className="featured-item__title">{data.title}</div>
        <div className="featured-item__descr">{data.descr}</div>
        <div className="featured-item__price">{"$" + data.price}</div>
      </div>
    </div>
  );
}
