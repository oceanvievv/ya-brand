import "./css/cart-form.scss"
import CartTotal from "../CartTotal/CartTotal"

export default function CartForm() {
  return (
    <form
      autoComplete="off"
      className="cart__form sm:cart__form_sm lg:cart__form_lg"
    >
      <div className="cart__form-user-input sm:cart-form__user-input_sm lg:cart-form__user-input_lg">
        <div className="cart__form-title"> SHIPPING ADDRESS</div>
        <div className="cart__form-inputs-and-total sm:cart__form-inputs-and-total_sm lg:cart__form-inputs-and-total_lg">
          <div className="cart__form-inputs">
            <input
              className="cart__form-input"
              type="text"
              placeholder="City"
              autoComplete="new-password"
            />
            <input
              className="cart__form-input"
              type="text"
              placeholder="State"
              autoComplete="new-password"
            />
            <input
              className="cart__form-input"
              type="text"
              placeholder="Postcode / Zip"
              autoComplete="new-password"
            />
            <button type="button" className="cart__form-promo-code-btn">
              Get promo-code
            </button>
          </div>
          <CartTotal />
        </div>
      </div>
    </form>
  )
}
