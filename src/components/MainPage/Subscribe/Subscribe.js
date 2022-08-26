import "./css/subscribe.scss";
import SubscribeBg from "assets/images/subscribe/subscribe_background.png";
import SubscribePfp from "assets/images/subscribe/subscribe_pfp.png";

export default function Subscribe() {
  return (
    <div className="subscribe">
      <div
        className="subscribe-bg"
        style={{
          backgroundImage: `url(${SubscribeBg})`,
        }}
      ></div>
      <div className="subscribe__quote-and-form-wrapper">
        <div className="subscribe__quote">
          <div
            className="subscribe__quote-pfp"
            style={{
              backgroundImage: `url(${SubscribePfp})`,
            }}
          ></div>
          <div className="subscribe__quote-text">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,{" "}
            <span className="subscribe__quote-text_italic">
              a pulvinar purus condimentum
            </span>
            “
          </div>
        </div>
        <form className="subscribe__form">
          <div className="subscribe__form-title">
            <span className="subscribe__form-title_main">SUBSCRIBE</span>
            <span className="subscribe__form-title_sub">
              FOR OUR NEWSLETTER AND PROMOTION
            </span>
          </div>
          <div className="subscribe__form-input">
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
  );
}
