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
  // After the first render, we fetch the data and render again with the data
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:3001/cart");
      const data = await response.json();
      setCartItems(data);
      setLoading(false);
    };
    fetchProducts();
  }, [setCartItems]); // run once after the first render
  return (
    <>
      {loading ? (
        <p className="text-body-tertiary">Loading...</p>
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
