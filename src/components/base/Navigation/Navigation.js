import { NavLink } from "react-router-dom"
import Logo from "assets/images/logo.png"
import * as Icons from "./js/Icons"
import "./css/navigation.scss"

export function Navigation() {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <NavLink to="/">
          <img className="nav__logo" src={Logo} alt="Logo" />
        </NavLink>
        <Icons.SearchIcon />
        <div className="nav__menu">
          <Icons.BurgerIcon />
          <NavLink to="/profile" className="hidden sm:nav__menu_not-mobile">
            <Icons.ProfileIcon />
          </NavLink>
          <NavLink
            to="/cart"
            className="relative hidden sm:nav__menu_not-mobile"
          >
            <Icons.CartIcon />
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
