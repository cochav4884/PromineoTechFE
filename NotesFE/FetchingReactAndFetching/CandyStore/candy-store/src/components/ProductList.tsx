import { useEffect, useState } from "react";
import type { CartItem, Product } from "../types";

type Props = {
  cartItems: CartItem[];
  setCartItems: (newValue: CartItem[]) => void;
  products: Product[];
  setProducts: (newValue: Product[]) => void;
};

export default function ProductList({
  setCartItems,
  cartItems,
  products,
  setProducts,
}: Props) {
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  // After the first render, we fetch the data and render again with the data
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3001/products");

        if (!response.ok) {
          setError("Oops! There was an error: " + response.statusText);
        } else {
          const data = await response.json();
          setProducts(data);
          setError(null);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError("Oops! There was an error: " + error.message);
        } else {
          setError("Oops! An unknown error occurred.");
        }
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, [setProducts]); // run once after the first render
  const addToCart = async (productId: number) => {
    const newCartItem = {
      productId: productId,
      amount: 1,
    };
    // make the change on the backend
    const response = await fetch("http://localhost:3001/cart", {
      method: "POST",
      body: JSON.stringify(newCartItem),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newlyCreatedItem = await response.json(); // this will have an id
    // make the change on the frontend
    setCartItems([...cartItems, newlyCreatedItem]);
  };
  return (
    <div className="d-flex flex-wrap gap-3">
      {isloading && <p className="text-body-tertiary">Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {products.map((product) => (
        <div key={product.id} className="card flex-grow-1">
          {" "}
          {/* Added key prop here */}
          <div className="card-body">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-text">{product.brand}</p>
            <button
              className="btn btn-success"
              onClick={() => addToCart(product.id)}
            >
              ${product.price.toFixed(2)}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
