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
  const [errorMessage, setErrorMessage] = useState(" ");
  // After the first render, we fetch the data and render again with the data
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3001/cart");
        if (!response.ok) {
          setErrorMessage(response.statusText);
        } else {
          const data = await response.json();
          setCartItems(data);
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
    fetchProducts();
  }, [setCartItems]); // run once after the first render
  return (
    <>
      {loading ? (
        <p className="text-body-tertiary">Loading...</p>
      ) : errorMessage.trim() ? (
        <p className="text-danger">{errorMessage}</p>
      ) : (
        <table className="table table-striped">
          <tbody>
            {cartItems.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                products={products}
              ></CartItemRow>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
