import "./css/promo.scss";
import PromoImage from "assets/images/promo/promo_1.png";

export function Promo() {
  console.log(PromoImage);

  return (
    <div className="promo-wrapper">
      <div
        className="promo__example"
        style={{
          backgroundImage: `url(${PromoImage})`,
        }}
      ></div>
      <div className="promo__brand">
        <div className="promo__logo">
          <div className="vert-line"></div>
          <div className="name">
            <span>The brand</span>
            <span>
              Of luxurious <span>fashion</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
