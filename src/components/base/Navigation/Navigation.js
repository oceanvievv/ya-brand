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
          <NavLink to="/register" className="hidden sm:nav__menu_not-mobile">
            <Icons.ProfileIcon></Icons.ProfileIcon>
          </NavLink>
          <NavLink to="/cart" className="relative hidden sm:nav__menu_not-mobile">
            <Icons.CartIcon cartCount={cartCount}></Icons.CartIcon>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
