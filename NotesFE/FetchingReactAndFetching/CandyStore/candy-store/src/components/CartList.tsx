import { useEffect, useState } from "react";
import CartItemRow from "./CartItemRow";
import { useShopContext } from "../components/hooks/useShopContext"; // Ensure this file exists at the specified path
import { CartItem } from "../types";

export default function CartList() {
  const { cartItems, setCartItems, products } = useShopContext();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (cartItems.length > 0) return;
    const fetchCart = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3001/cart");
        if (!response.ok) throw new Error("Failed to fetch cart items");
        const data: CartItem[] = await response.json();
        setCartItems(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setErrorMessage(err.message);
        } else {
          setErrorMessage("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [cartItems, setCartItems]);

  return (
    <>
      <h2 className="display-5 mb-4">Cart</h2>
      {loading ? (
        <p className="text-body-tertiary">Loading...</p>
      ) : errorMessage ? (
        <p className="text-danger">{errorMessage}</p>
      ) : (
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
              cartItems.map((item: CartItem) => (
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
      )}
    </>
  );
}
