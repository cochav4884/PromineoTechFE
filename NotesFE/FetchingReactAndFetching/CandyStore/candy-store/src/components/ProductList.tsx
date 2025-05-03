import { useEffect, useState } from "react";
import type { CartItem, Product } from "../types";
import "bootstrap/dist/css/bootstrap.min.css";

export interface ProductListProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function ProductList({ setCartItems, cartItems }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [addingProductId, setAddingProductId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3001/products");

        if (!response.ok) {
          setError("Oops! There was an error: " + response.statusText);
        } else {
          const data: Product[] = await response.json();
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
  }, [setProducts]);

  const addToCart = async (productId: number): Promise<void> => {
    const newCartItem: CartItem = {
      productId,
      amount: 1,
    };

    setAddingProductId(productId);
    try {
      const response = await fetch("http://localhost:3001/cart", {
        method: "POST",
        body: JSON.stringify(newCartItem),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const newlyCreatedItem: CartItem = await response.json();
      setCartItems([...cartItems, newlyCreatedItem]);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setAddingProductId(null);
    }
  };

  return (
    <>
      <h2 className="display-5 mb-4">Craving Something Sweet?</h2>
      <div className="d-flex flex-wrap gap-3">
        {isLoading && <p className="text-body-tertiary">Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        {products.map((product) => (
          <div key={product.id} className="card flex-grow-1">
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p className="card-text">{product.brand}</p>
              <button
                className="btn btn-success"
                disabled={addingProductId === product.id}
                onClick={() => addToCart(product.id)}
              >
                {addingProductId === product.id ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Adding...
                  </>
                ) : (
                  `$${product.price.toFixed(2)}`
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}