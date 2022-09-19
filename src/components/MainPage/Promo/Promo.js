import "./css/promo.scss"
import PromoImage from "assets/images/promo/promo_1.png"

export function Promo() {
  return (
    <div className="promo md:promo_md lg:promo_lg">
      <div className="promo-wrapper">
        <div
          className="promo__example sm:promo__example_sm"
          style={{
            backgroundImage: `url(${PromoImage})`,
          }}
        ></div>
        <div className="promo__brand sm:promo__brand_sm lg:promo__brand_lg">
          <div className="promo__logo">
            <div className="vert-line md:vert-line_md  lg:vert-line_lg"></div>
            <div className="name">
              <span className="brand-upper md:brand-upper_md lg:brand-upper_lg">
                The brand
              </span>
              <span className="brand-lower md:brand-lower_md lg:brand-lower_lg">
                Of luxurious{" "}
                <span className="brand-accent md:brand-lower_md lg:brand-lower_lg">
                  fashion
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
