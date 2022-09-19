import "./css/cart-total.scss"

export default function CartTotal() {
  return (
    <div className="cart__total sm:cart__total_sm lg:cart-total:lg">
      <div className="cart__summary">
        <div className="cart__summary-sub">
          <span className="cart__summary-sub-title">DELIVERY</span>
          <span className="cart__summary-sub-value">$900</span>
        </div>
        <div className="cart__summary-main">
          <span className="cart__summary-main-title">TOTAL</span>
          <span className="cart__summary-main-value">$900</span>
        </div>
      </div>
      <hr className="cart__total-hr" />
      <button className="cart__total-checkout-btn">PROCEED TO CHECKOUT</button>
    </div>
  )
}
