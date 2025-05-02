import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import AppointmentPage from "./AppointmentPage";
import HomePage from "./HomePage";
import "bootstrap/dist/css/bootstrap.min.css"

const router = createBrowserRouter([
  {
    path: "/",
   
    element: <Layout></Layout>,
    
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/appointment/new",
        element: <AppointmentPage></AppointmentPage>
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
