import "./App.css";
import Home from "./pages/Home";
import Items from "./components/Items";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./components/Product";
import CartContext from "./CartContext";
import Wishlist from "./pages/Wishlist";
import { useState } from "react";
import Confirmation from "./pages/Confirmation";

function App() {
  const [cartProduct, setCartProduct] = useState([]);
  const [favProduct, setfavProduct] = useState([]);

  const updateWishlist = (id, name) => {
    setfavProduct((prev) => {
      return [...prev, { id, name }];
    });
  };

  const updateCart = (id, name) => {
    setCartProduct((prev) => {
      return [...prev, { id, name }];
    });
  };

  return (
    <div className="App">
      <CartContext.Provider
        value={{ cartProduct, updateCart, favProduct, updateWishlist }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login/:id" element={<Login />} />
            <Route path="/signin/:id" element={<Register />} />
            <Route path="/details/:id" element={<Items />} />
            <Route path="/product/:id/:name" element={<Product />} />
            <Route path="/cart/:id/:name" element={<Cart />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/wishlist/:id/:name" element={<Wishlist />} />
            <Route path="/wishlist/:id" element={<Wishlist />} />
            <Route path="/confirm/:total/:items" element={<Confirmation />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
