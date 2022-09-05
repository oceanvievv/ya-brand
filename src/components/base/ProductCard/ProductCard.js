import { CartIcon } from "../Navigation/js/Icons";
import "./css/product-card.scss";
import { formatCurrency } from "../../../utils/formatCurrency.js";

export default function ProductCard({ data }) {
  return (
    <div className="featured-item">
      <div className="featured-item__img">
        <img src={data.image} alt={data.title} />
        <div className="featured-item__img_hovered">
          <button
            className="featured-item__to-cart-btn"
            onClick={() => {
              console.log("Added to cart");
            }}
          >
            <CartIcon
              cartCount={0}
              width={26}
              height={23}
              classes="inline-block align-middle mr-[10px]"
            />
            <span className="font-[Lato-400] text-[14px]">Add to cart</span>
          </button>
        </div>
      </div>
      <div className="featured-item__info">
        <div className="featured-item__title">{data.title}</div>
        <div className="featured-item__descr">{data.description}</div>
        <div className="featured-item__price">{formatCurrency(data.price)}</div>
      </div>
    </div>
  );
}
