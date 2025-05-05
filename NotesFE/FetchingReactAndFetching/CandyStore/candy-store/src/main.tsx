// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/ProductList.tsx";
import CartList from './components/CartList.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Root component for context
    children: [
      {
        index: true, // Default route (Product List)
        element: <ProductList />, // ProductList will receive the context from Root
      },
      {
        path: "cart", // Cart route
        element: <CartList />, // CartList will also get context from Root
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
