import { useOutletContext } from "react-router-dom";
import type { CartItem, Product } from "../../types";

interface ShopContext {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export function useShopContext() {
  return useOutletContext<ShopContext>();
}
