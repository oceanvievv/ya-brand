import "../components/CartPage/css/cart-page.scss"
import Breadcrumps from "../components/base/Breadcrumbs/Breadcrumps"
import CartItem from "../components/CartPage/CartItem/CartItem"
import Subscribe from "../components/base/Subscribe/Subscribe"
import CartForm from "../components/CartPage/CartForm/CartForm"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../redux/cartSlice"

export function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const itemsTotalCount = useSelector((state) => state.cart.itemsTotalCount)
  const dispatch = useDispatch()

  return (
    <div className="page-wrapper">
      <Breadcrumps title={"SHOPPING CART"} />
      <div className="cart__content md:cart__content_md lg:cart__content_lg">
        <div className="cart__items-and-manage sm:cart__items-and-manage_sm lg:cart__items-and-manage_lg  ">
          {itemsTotalCount > 0 && (
            <div className="cart__items sm:cart__items_sm">
              {cartItems.map((item, i) => (
                <CartItem key={i} itemData={item} />
              ))}
            </div>
          )}
          <div className="cart__manage sm:cart__manage_sm">
            {itemsTotalCount > 0 && (
              <button
                className="cart__manage-btn sm:cart__manage-btn_sm"
                type="button"
                onClick={() => dispatch(clearCart())}
              >
                Clear shopping cart
              </button>
            )}
            <button className="cart__manage-btn sm:cart__manage-btn_sm">
              Continue shopping
            </button>
          </div>
        </div>
        <CartForm />
      </div>
      <Subscribe />
    </div>
  )
}
