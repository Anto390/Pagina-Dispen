import React, { createContext, useContext, useEffect, useState } from "react";
import { Product, products as rawProducts } from "../data/products";

interface EditableProduct extends Product {
  img: string;
  images?: string[];
}

interface ProductContextType {
  products: EditableProduct[];
  updateProduct: (updated: EditableProduct) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const PRODUCTS_KEY = "dispenhogar_products";

const getStoredProducts = (): EditableProduct[] => {
  const stored = localStorage.getItem(PRODUCTS_KEY);
  if (!stored) return rawProducts;
  try {
    return JSON.parse(stored) as EditableProduct[];
  } catch {
    return rawProducts;
  }
};

const saveStoredProducts = (products: EditableProduct[]) => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<EditableProduct[]>(() => getStoredProducts());

  const updateProduct = (updated: EditableProduct) => {
    setProducts((prev) => {
      const next = prev.map((product) =>
        product.id === updated.id ? { ...product, ...updated } : product
      );
      saveStoredProducts(next);
      return next;
    });
  };

  return (
    <ProductContext.Provider value={{ products, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts debe usarse dentro de ProductProvider");
  }
  return context;
};
