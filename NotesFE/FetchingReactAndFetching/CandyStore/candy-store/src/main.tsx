// src/main.tsx
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Root from "./Root";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import ProductDetails from "./components/ProductDetails";
import { Suspense } from "react";

// Loaders
const productListLoader = async () => {
  const res = await fetch("http://localhost:3001/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

// ✅ Updated cartLoader: Fetches both cart and product data
const cartLoader = async () => {
  const [cartRes, productRes] = await Promise.all([
    fetch("http://localhost:3001/cart"),
    fetch("http://localhost:3001/products"),
  ]);

  if (!cartRes.ok || !productRes.ok) {
    throw new Error("Failed to fetch cart or products");
  }

  const [cartItems, products] = await Promise.all([
    cartRes.json(),
    productRes.json(),
  ]);

  return { cartItems, products };
};

// Router configuration
const router = createBrowserRouter([  // No need for explicit type
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <ProductList />,
        loader: productListLoader,
      },
      {
        path: "cart",
        element: <CartList />,
        loader: cartLoader,
      },
      {
        path: "products/:productId",  // No leading slash here for nested routes
        element: <ProductDetails />
      }
    ],
  },
]);

// Render the app with Suspense for loading
createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<p>Loading...</p>}>
    <RouterProvider router={router} />
  </Suspense>
);
