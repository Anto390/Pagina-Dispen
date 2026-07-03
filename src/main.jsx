import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { CarritoProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import "./styles.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <CarritoProvider>
        <AuthProvider>
          <ProductProvider>
            <RouterProvider router={router} />
          </ProductProvider>
        </AuthProvider>
      </CarritoProvider>
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento root en el DOM.");
}
