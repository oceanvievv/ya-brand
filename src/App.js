import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { CatalogPage } from "./pages/CatalogPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Navigation } from "./components/base/Navigation/Navigation";

import "./assets/fonts/Lato/Lato.scss";
import { useState } from "react";
import Footer from "./components/base/Footer/Footer";
import NotFoundPage from "./components/base/NotFoundPage/NotFoundPage";

function App() {
  const [cartCount, setCartCount] = useState(1);

  return (
    <>
      <Navigation cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
