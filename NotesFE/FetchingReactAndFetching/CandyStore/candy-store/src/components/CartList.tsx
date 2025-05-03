import { useEffect, useState } from "react";
import { CartItem, Product } from "../types";
import CartItemRow from "./CartItemRow";

type Props = {
  cartItems: CartItem[];
  setCartItems: (newValue: CartItem[]) => void;
  products: Product[];
};

export default function CartList({ cartItems, setCartItems, products }: Props) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch cart items from the server when this component mounts
  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3001/cart");
        if (!response.ok) {
          setErrorMessage("Failed to fetch cart items");
        } else {
          const data: CartItem[] = await response.json();
          setCartItems(data);  // Set fetched cart items to state
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("An unknown error occurred.");
        }
      }
      setLoading(false);
    };
    fetchCart();
  }, [setCartItems]); // Fetch cart when component mounts or cartItems change

  return (
    <>
      <h2 className="display-5 mb-4">Cart</h2>
      {loading ? (
        <p className="text-body-tertiary">Loading...</p>
      ) : errorMessage.trim() ? (
        <p className="text-danger">{errorMessage}</p>
      ) : (
        <table className="table table-striped">
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItemRow key={item.id} item={item} products={products} />
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center">
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
