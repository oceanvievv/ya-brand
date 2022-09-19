import "./css/footer.scss"
import * as FooterIcons from "./js/FooterIcons"

export default function Footer() {
  return (
    <div className="footer-wrapper md:footer-wrapper_md">
      <div className="footer md:footer_md lg:footer_lg xl:footer_xl">
        <div className="footer__socials">
          <a
            href="https://www.facebook.com/"
            rel="noopener"
            className="footer__socials-item"
          >
            <FooterIcons.Facebook />
          </a>
          <a
            href="https://www.instagram.com/"
            rel="noopener"
            className="footer__socials-item"
          >
            <FooterIcons.Instagram />
          </a>
          <a
            href="https://ru.pinterest.com/"
            rel="noopener"
            className="footer__socials-item"
          >
            <FooterIcons.Pinterest />
          </a>
          <a
            href="https://twitter.com/"
            rel="noopener"
            className="footer__socials-item"
          >
            <FooterIcons.Twitter />
          </a>
        </div>
        <div className="footer__copyright">
          &copy; 2022 Ya Brand All Rights Reserved
        </div>
      </div>
    </div>
  )
}
