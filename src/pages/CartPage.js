import "../components/CartPage/css/cart-page.scss";
import Breadcrumps from "../components/base/Breadcrumbs/Breadcrumps";
import CartItem from "../components/CartPage/CartItem/CartItem";
import CartItemPhoto1 from "../assets/images/cart/cart_item_1.png";
import CartItemPhoto2 from "../assets/images/cart/cart_item_2.png";
import Subscribe from "../components/base/Subscribe/Subscribe";
import CartForm from "../components/CartPage/CartForm/CartForm";

const data = [
  {
    img: CartItemPhoto1,
    title: "MANGO PEOPLE T-SHIRT",
    price: 300,
    color: "Red",
    size: "XL",
    quantity: 2,
  },
  {
    img: CartItemPhoto2,
    title: "ROSE GOLD T-SHIRT",
    price: 1299.99,
    color: "Golden",
    size: "S",
    quantity: 1,
  },
];

export function CartPage() {
  return (
    <div className="page-wrapper">
      <Breadcrumps title={"SHOPPING CART"} />
      <div className="cart__content md:cart__content_md lg:cart__content_lg">
        <div className="cart__items-and-manage sm:cart__items-and-manage_sm lg:cart__items-and-manage_lg  ">
          <div className="cart__items sm:cart__items_sm">
            {data.map((item, i) => (
              <CartItem key={i} itemData={item} />
            ))}
          </div>
          <div className="cart__manage sm:cart__manage_sm">
            <button className="cart__manage-btn sm:cart__manage-btn_sm">
              Clear shopping cart
            </button>
            <button className="cart__manage-btn sm:cart__manage-btn_sm">
              Continue shopping
            </button>
          </div>
        </div>
        <CartForm />
      </div>
      <Subscribe />
    </div>
  );
}
