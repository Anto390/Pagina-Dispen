import React, { createContext, useContext, useState } from "react";
import { Product } from "../data/products";

export interface CarritoItem extends Product {
  quantity: number;
}

interface CarritoContextType {
  carrito: CarritoItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeItem: (id: number) => void;
  emptyCart: () => void;
  getTotalPrice: () => number;
  getItemQuantity: () => number;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export const CarritoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);

  // Agregar producto
  const addToCart = (product: Product, quantity: number) => {
    setCarrito(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  // Quitar producto
  const removeItem = (id: number) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  // Vaciar carrito
  const emptyCart = () => {
    setCarrito([]);
  };

  // Total precio
  const getTotalPrice = () => {
    return carrito.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  // total productos
  const getItemQuantity = () => {
    return carrito.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, addToCart, removeItem, emptyCart, getTotalPrice, getItemQuantity }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarritoContext = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarritoContext debe usarse dentro de CarritoProvider");
  }
  return context;
};
