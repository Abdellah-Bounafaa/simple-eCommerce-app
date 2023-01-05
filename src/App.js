import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Card from "./components/Products/Card";
import Loading from "./fallback/Loading";
const NavbarApp = lazy(() => import("./components/Navbars/NavbarApp"));
const ProductDetails = lazy(() =>
  import("./components/Products/ProductDetails")
);
const Products = lazy(() => import("./components/Products/Products"));
function App() {
  return (
    <div className="App">
      {" "}
      <NavbarApp />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/:ID" element={<ProductDetails />} />
          <Route path="card" element={<Card />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
