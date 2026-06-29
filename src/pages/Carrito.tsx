import React from "react";
import { useCarritoContext } from "../context/CartContext";
import "./Carrito.css";

export default function Carrito() {
  const {
    carrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    vaciarCarrito,
    getTotalPrice,
  } = useCarritoContext();

  const total = getTotalPrice();

  return (
    <div className="carrito-page">
      <h2>Mi Carrito 🛒</h2>

      {carrito.length === 0 ? (
        <div className="carrito-vacio">
          <p>El carrito está vacío.</p>
        </div>
      ) : (
        <>
          <div className="carrito-items">
            {carrito.map((item) => (
              <div key={item.id} className="carrito-item">
                <img src={item.img} alt={item.nombre} />
                <div className="item-info">
                  <h3>{item.nombre}</h3>
                  <p>Precio: ${item.precio}</p>
                  <p>Cantidad: {item.cantidad}</p>
                  <div className="item-actions">
                    <button onClick={() => disminuirCantidad(item.id)}>-</button>
                    <button onClick={() => aumentarCantidad(item.id)}>+</button>
                    <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carrito-resumen">
            <p>Total: ${total}</p>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
          </div>
        </>
      )}
    </div>
  );
}
