import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { CarritoProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import { initializeSupabaseSession } from "./lib/supabase/middleware";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

initializeSupabaseSession();

root.render(
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
