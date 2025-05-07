import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import type { Product, CartItem } from "../types";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductList() {
  const initialProducts = useLoaderData() as Product[];
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);  // New state for cart items
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addingProductId, setAddingProductId] = useState<number | null>(null);
  const [error, setError] = useState<null | string>(null);

  const refreshProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/products");
      if (!response.ok) throw new Error("Failed to refresh products");
      const data = await response.json();
      setProducts(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Add product to cart and update the frontend immediately (optimistic update)
  const addToCart = async (productId: number) => {
    setIsAddingToCart(true);
    setAddingProductId(productId);
    setError(null);

    // Optimistic UI: Update the cart state immediately
    const newCartItem = { id: Date.now(), productId, amount: 1 }; // Create a new cart item with a temporary ID
    setCartItems(prevCartItems => [...prevCartItems, newCartItem]);

    try {
      // Add the product to the cart on the backend
      const response = await fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, amount: 1 }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      // Optionally, refresh cart data from backend
      const updatedCart = await fetch("http://localhost:3001/cart");
      const cartItems = await updatedCart.json();
      setCartItems(cartItems); // Update cart items after fetching the latest data from backend

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }

      // Rollback the optimistic UI change if error occurs
      setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== newCartItem.id));
    } finally {
      setIsAddingToCart(false);
      setAddingProductId(null);
    }
  };

  return (
    <>
      <h2 className="display-5 mb-4">Craving Something Sweet?</h2>

      <button
        className="btn btn-outline-primary mb-3"
        onClick={refreshProducts}
        disabled={isLoading}
      >
        {isLoading ? "Refreshing..." : "Refresh Products"}
      </button>

      {error && <p className="text-danger">{error}</p>}

      <div className="d-flex flex-wrap gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="card flex-grow-1"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p className="card-text">{product.brand}</p>
              <button
                className="btn btn-success"
                disabled={addingProductId === Number(product.id) && isAddingToCart}
                onClick={() => addToCart(Number(product.id))}
              >
                {addingProductId === Number(product.id) && isAddingToCart
                  ? "Adding..."
                  : `$${product.price.toFixed(2)}`}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        {/* Debugging: Display the current cart items */}
        <h4>Current Cart:</h4>
        <pre>{JSON.stringify(cartItems, null, 2)}</pre>
      </div>
    </>
  );
}
