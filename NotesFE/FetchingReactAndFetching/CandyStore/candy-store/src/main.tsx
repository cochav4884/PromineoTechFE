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
    element: <Root />,
    children: [
      // ProductList should be shown at the root path
      {
        index: true,  // Using `index: true` for the default route
        element: (
          <ProductList 
            cartItems={[]} 
            setCartItems={() => {}} 
            products={[]} 
            setProducts={() => {}} 
          />
        ),
      },
      // CartList should be shown at the /cart path
      {
        path: "cart",  // Match /cart for the cart route
        element: (
          <CartList 
            cartItems={[]} 
            setCartItems={() => {}} 
            products={[]} 
          />
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
