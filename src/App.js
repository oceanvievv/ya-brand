import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { CatalogPage } from "./pages/CatalogPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Navigation } from "./components/Navigation/Navigation";

import "./assets/fonts/Lato/Lato.scss";
// import { useState } from "react";

function App() {
  // const [cartCount, setCartCount] = useState(99);

  return (
    <>
      <Navigation cartCount={55} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      {/*<button*/}
      {/*  onClick={() => setCartCount(cartCount + 1)}*/}
      {/*  className="px-4 py-2 rounded bg-blue-400"*/}
      {/*>*/}
      {/*  Add*/}
      {/*</button>*/}
      {/*<button*/}
      {/*  onClick={() => setCartCount(cartCount - 1)}*/}
      {/*  className="px-4 py-2 rounded bg-red-400"*/}
      {/*>*/}
      {/*  Subtract*/}
      {/*</button>*/}
    </>
  );
}

export default App;
