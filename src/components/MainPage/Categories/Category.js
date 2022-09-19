export default function Category({ data, imgClass }) {
  return (
    <div className="category-wrapper">
      <div
        className={imgClass}
        style={{
          backgroundImage: `url(${data.img})`,
        }}
      ></div>
      <div className="category__info">
        <div className="category__info_descr">{data.descr}</div>
        <div className="category__info_title">{data.title}</div>
      </div>
    </div>
  )
}
