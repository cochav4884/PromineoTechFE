import { useEffect } from "react";
import { CartItem, Product } from "../types";
import CartItemRow from "./CartItemRow";

type Props = {
    cartItems: CartItem[]
    setCartItems: (newValue: CartItem[]) => void
    products: Product[]
};

export default function CartList({ cartItems, setCartItems, products }: Props) {
  // After the first render, we fetch the data and render again with the data
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/cart");
      const data = await response.json();
      setCartItems(data);
    };
    fetchProducts();
  }, [setCartItems]); // run once after the first render
  return (
    <table className="table table-striped">
      <tbody>
        {cartItems.map((item) => (
            <CartItemRow 
            key={item.id} 
            item={item} 
            products={products}
            >

            </CartItemRow>
        ))}
      </tbody>
    </table>
  );
}
