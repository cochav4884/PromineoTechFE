import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types";

export default function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<null | Product>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `http://localhost:3001/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Flavor:</strong> {product.flavor}
          </p>
          <p>
            <strong>Weight:</strong> {product.weight}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Quantity in Stock:</strong> {product.quantityInStock}
          </p>
          <p>
            <strong>Expiration Date:</strong> {product.expirationDate}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <p>
        <strong>Product ID:</strong> {productId}
      </p>
    </div>
  );
}
