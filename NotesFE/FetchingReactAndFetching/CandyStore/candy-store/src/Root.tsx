import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { CartItem, Product } from "./types";

export default function Root() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Cart state
  const [products, setProducts] = useState<Product[]>([]);     // Products state

  return (
    <div className="container">
      <ul className="nav bg-light mb-3 border-bottom">
        <li className="nav-item">
          <Link to="/" className="nav-link">Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Cart</Link>
        </li>
      </ul>
      <Outlet context={{ cartItems, setCartItems, products, setProducts }} />
    </div>
  );
}
