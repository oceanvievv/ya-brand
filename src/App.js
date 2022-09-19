import { Navigate, Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { CatalogPage } from "./pages/CatalogPage"
import { ProductPage } from "./pages/ProductPage"
import { CartPage } from "./pages/CartPage"
import { ProfilePage } from "./pages/ProfilePage"
import { Navigation } from "./components/base/Navigation/Navigation"
import "./assets/fonts/Lato/Lato.scss"
import Footer from "./components/base/Footer/Footer"
import NotFoundPage from "./components/base/NotFoundPage/NotFoundPage"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
