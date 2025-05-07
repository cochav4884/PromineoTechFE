import { useLoaderData } from "react-router-dom";
import CartItemRow from "./CartItemRow";
import type { CartItem, Product } from "../types";

type LoaderData = {
  cartItems: CartItem[];
  products: Product[];
};

export default function CartList() {
  // Using optional chaining and fallback to empty array if cartItems is undefined
  const { cartItems, products } = useLoaderData() as LoaderData;

  // Ensure that cartItems is always an array (default to empty array if undefined)
  const safeCartItems = cartItems ?? [];

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
          {safeCartItems.length > 0 ? (
            safeCartItems.map((item) => (
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
