import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { CatalogPage } from "./pages/CatalogPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Navigation } from "./components/base/Navigation/Navigation";

import "./assets/fonts/Lato/Lato.scss";
import { useState } from "react";
import Footer from "./components/base/Footer/Footer";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
