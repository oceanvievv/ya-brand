import "./css/subscribe.scss"
import SubscribeBg from "assets/images/subscribe/subscribe_background.png"
import SubscribePfp from "assets/images/subscribe/subscribe_pfp.png"

export default function Subscribe() {
  return (
    <div
      className="subscribe md:subscribe_md lg:subscribe_lg"
      style={{
        background: `linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) ), url(${SubscribeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="subscribe__quote-and-form-wrapper lg:subscribe__quote-and-form-wrapper_lg">
        <div className="subscribe__quote">
          <div
            className="subscribe__quote-pfp"
            style={{
              backgroundImage: `url(${SubscribePfp})`,
            }}
          ></div>
          <div className="subscribe__quote-text md:subscribe__quote-text_md">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,{" "}
            <span className="subscribe__quote-text_italic">
              a pulvinar purus condimentum
            </span>
            “
          </div>
        </div>
        <form className="subscribe__form">
          <div className="subscribe__form-title">
            <span className="subscribe__form-title_main md:subscribe__form-title_main--md">
              SUBSCRIBE
            </span>
            <span className="subscribe__form-title_sub md:subscribe__form-title_sub--md">
              FOR OUR NEWSLETTER AND PROMOTION
            </span>
          </div>
          <div className="subscribe__form-input md:subscribe__form-input_md">
            <div className="subscribe__form-input-wrapper">
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <button
              type="button"
              onClick={() => console.log("SUPRIK?")}
              className="subscribe__form-input-btn"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
