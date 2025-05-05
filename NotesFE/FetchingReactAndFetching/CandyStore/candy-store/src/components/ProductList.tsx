import { useEffect, useState } from "react";
import type { Product } from "../types";
import "bootstrap/dist/css/bootstrap.min.css";
import { useShopContext } from "../components/hooks/useShopContext";

export default function ProductList() {
  const { cartItems, setCartItems, products, setProducts } = useShopContext();
  const [isLoading, setIsLoading] = useState(false);
  const [addingProductId, setAddingProductId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (products.length > 0) return; // don't re-fetch
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3001/products");
        if (!response.ok) throw new Error("Failed to load products.");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [products, setProducts]);

  const addToCart = async (productId: number) => {
    const existing = cartItems.find(i => i.productId === productId);
    setAddingProductId(productId);
    try {
      if (existing) {
        const updated = { ...existing, amount: existing.amount + 1 };
        const res = await fetch(`http://localhost:3001/cart/${existing.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: updated.amount }),
        });
        const updatedItem = await res.json();
        setCartItems(cartItems.map(i => i.id === updatedItem.id ? updatedItem : i));
      } else {
        const res = await fetch("http://localhost:3001/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId, amount: 1 }),
        });
        const newItem = await res.json();
        setCartItems([...cartItems, newItem]);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
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
        {products.map((product: Product) => (
          <div key={product.id} className="card flex-grow-1">
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p className="card-text">{product.brand}</p>
              <button
          className="btn btn-success"
          disabled={addingProductId === Number(product.id)}
          onClick={() => addToCart(Number(product.id))}
              >
          {addingProductId === Number(product.id)
            ? <>Adding...</>
            : `$${product.price.toFixed(2)}`}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
