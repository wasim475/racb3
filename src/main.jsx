import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Main.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvide from "./provide/AuthProvide.jsx";
import DataProvider from "./provide/DataProvider.jsx";
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvide>
        <DataProvider>
          <RouterProvider router={router} />
        </DataProvider>
      </AuthProvide>
      <ToastContainer position="top-right" autoClose={3000} />
    </HelmetProvider>
  </StrictMode>,
);
