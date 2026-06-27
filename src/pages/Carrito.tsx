import React from "react";
import { useCarritoContext } from "../context/CartContext";
import { Product } from "../data/products";
import "./Carrito.css";

interface CarritoItem extends Product {
  quantity: number;
}

export default function Carrito() {
  const { carrito, removeItem, emptyCart, getTotalPrice } = useCarritoContext();

  if (carrito.length === 0) {
    return (
      <div className="carrito-container">
        <h1>🛒 Tu Carrito</h1>
        <p>El carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div className="carrito-container">
      <h1>🛒 Tu Carrito</h1>
      <div className="carrito-items">
        {carrito.map((item: CarritoItem) => (
          <div key={item.id} className="carrito-item">
            <img src={item.img} alt={item.nombre} />
            <div className="carrito-item-info">
              <h3>{item.nombre}</h3>
              <p>Marca: {item.marca}</p>
              <p>Precio: ${item.precio} x {item.quantity}</p>
            </div>
            <div className="carrito-actions">
              <button
                className="btn-remove"
                onClick={() => removeItem(item.id)}
              >
                ❌ Quitar
              </button>
            </div>
          </div>
        ))}
      </div>
      <h4>Total: ${getTotalPrice()}</h4>
      <div className="carrito-actions" style={{ marginTop: "1.5rem" }}>
        <button className="btn-checkout">✅ Finalizar Compra</button>
        <button className="btn-empty" onClick={emptyCart}>🧹 Vaciar Carrito</button>
      </div>
    </div>
  );
}
