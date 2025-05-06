// src/main.tsx
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";

// Loaders
const productLoader = async () => {
  const res = await fetch("http://localhost:3001/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

const cartLoader = async () => {
  const res = await fetch("http://localhost:3001/cart");
  if (!res.ok) throw new Error("Failed to fetch cart items");
  return res.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <ProductList />,
        loader: productLoader,
      },
      {
        path: "cart",
        element: <CartList />,
        loader: cartLoader,
      },
    ],
  },
]);

// Client-side rendering with React 18's createRoot
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Wrapping RouterProvider with Suspense for async loading */}
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
