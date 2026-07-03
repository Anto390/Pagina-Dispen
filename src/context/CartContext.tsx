import React, { createContext, useContext, useState } from "react";
import { toast } from "sonner";
import { Product } from "../data/products";

// ✅ Cada ítem del carrito hereda de Product y agrega cantidad
export interface CarritoItem extends Product {
  cantidad: number;
}

// ✅ Definimos el tipo del contexto
interface CarritoContextType {
  carrito: CarritoItem[];
  addToCart: (product: Product, cantidad: number) => void;
  removeItem: (id: number) => void;
  emptyCart: () => void;
  getTotalPrice: () => number;
  getItemQuantity: () => number;
  aumentarCantidad: (id: number) => void;
  disminuirCantidad: (id: number) => void;
}

// ✅ Creamos el contexto
const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

// ✅ Provider
export const CarritoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);

  // Agregar producto con cantidad
  const addToCart = (product: Product, cantidad: number) => {
    setCarrito(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        toast.success(`${product.nombre} agregado al carrito`, {
          duration: 2500,
        });
        return prev.map(item =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }
      toast.success(`${product.nombre} agregado al carrito`, {
        duration: 2500,
      });
      return [...prev, { ...product, cantidad }];
    });
  };

  // Quitar producto por id
  const removeItem = (id: number) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  // Vaciar carrito
  const emptyCart = () => {
    setCarrito([]);
  };

  // Calcular precio total
  const getTotalPrice = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  // Calcular cantidad total de productos
  const getItemQuantity = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  // Aumentar cantidad de un producto
  const aumentarCantidad = (id: number) => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  // Disminuir cantidad de un producto
  const disminuirCantidad = (id: number) => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        addToCart,
        removeItem,
        emptyCart,
        getTotalPrice,
        getItemQuantity,
        aumentarCantidad,
        disminuirCantidad,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

// ✅ Hook para usar el contexto
export const useCarritoContext = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarritoContext debe usarse dentro de CarritoProvider");
  }
  return context;
};
