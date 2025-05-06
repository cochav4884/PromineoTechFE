// src/components/CartList.tsx
import { useLoaderData } from "react-router-dom";
import { useShopContext } from "../components/hooks/useShopContext";
import CartItemRow from "./CartItemRow";
import type { CartItem } from "../types";

export default function CartList() {
  const fetchedCartItems = useLoaderData() as CartItem[];
  const { cartItems, setCartItems, products } = useShopContext();

  if (cartItems.length === 0 && fetchedCartItems.length > 0) {
    setCartItems(fetchedCartItems);
  }

  return (
    <>
      <h2 className="display-5 mb-4">Cart</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <CartItemRow key={item.id} item={item} products={products} />
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
                Your cart is empty
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}