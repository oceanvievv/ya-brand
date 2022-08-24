import { NavLink } from "react-router-dom";
import Logo from "assets/images/logo.png";
import * as Icons from "./js/Icons";
import "./css/navigation.scss";

export function Navigation({ cartCount }) {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <NavLink to="/">
          <img className="nav__logo" src={Logo} alt="Logo" />
        </NavLink>
        <Icons.SearchIcon></Icons.SearchIcon>
        <div className="nav__menu">
          <Icons.BurgerIcon></Icons.BurgerIcon>
          <Icons.ProfileIcon></Icons.ProfileIcon>
          <Icons.CartIcon cartCount={cartCount} classes={"relative hidden sm:nav__menu_not-mobile"}></Icons.CartIcon>
        </div>
      </nav>
    </div>
  );
}
