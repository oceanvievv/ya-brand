import { Link } from "react-router-dom";
import Logo from "assets/images/logo.png";
import * as Icons from "./Icons";
import "./css/navigation.scss";

export function Navigation({ cartCount }) {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <Link to="/">
          <img className="nav__logo" src={Logo} alt="Logo" />
        </Link>
        <Icons.SearchIcon></Icons.SearchIcon>
        <div className="nav__menu">
          <Icons.BurgerIcon></Icons.BurgerIcon>
          <Icons.ProfileIcon></Icons.ProfileIcon>
          <Icons.CartIcon cartCount={cartCount}></Icons.CartIcon>
        </div>
      </nav>
    </div>
  );
}
