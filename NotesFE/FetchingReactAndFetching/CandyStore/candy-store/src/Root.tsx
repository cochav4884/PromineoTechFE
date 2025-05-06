import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { CartItem, Product } from "./types";
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

export default function Root() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <div className="container">
      <ul className="nav bg-light mb-3 border-bottom">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link">
            Cart {cartItems.length > 0 && (
              <span className="badge bg-primary">{cartItems.length}</span>
            )}
          </NavLink>
        </li>
      </ul>
      <Outlet context={{ cartItems, setCartItems, products, setProducts }} />
    </div>
  );
}