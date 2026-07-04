import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import "./Carrito.css";

interface AddressData {
  direccion: string;
  ciudad: string;
  provincia: string;
  codigoPostal: string;
}

const ADDRESS_KEY = "dispenhogar_address";

export default function Carrito() {
  const {
    carrito,
    aumentarCantidad,
    disminuirCantidad,
    removeItem,
    emptyCart,
    getTotalPrice,
  } = useCarritoContext();

  const [direccion, setDireccion] = useState<AddressData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(ADDRESS_KEY);
    if (stored) {
      setDireccion(JSON.parse(stored));
    }
  }, []);

  const total = getTotalPrice();

  return (
    <div className="carrito-page">
      <h2>Mi Carrito 🛒</h2>
      {direccion ? (
        <div className="direccion-guardada">
          <strong>Dirección guardada:</strong>
          <p>{direccion.direccion}</p>
          <p>{direccion.ciudad} - {direccion.provincia}</p>
          <p>Código Postal: {direccion.codigoPostal}</p>
        </div>
      ) : (
        <div className="direccion-guardada">
          <p>No tienes una dirección guardada.</p>
          <Link to="/perfil">Guardar dirección</Link>
        </div>
      )}
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <div className="carrito-lista">
            {carrito.map((item) => (
              <div key={item.id} className="carrito-item">
                <img src={item.img} alt={item.nombre} />
                <div className="carrito-info">
                  <h3>{item.nombre}</h3>
                  <p>Precio: ${item.precio}</p>
                  <p>Cantidad: {item.cantidad}</p>
                  <div className="carrito-controles">
                    <button onClick={() => aumentarCantidad(item.id)}>+</button>
                    <button onClick={() => disminuirCantidad(item.id)}>-</button>
                    <button onClick={() => removeItem(item.id)}>❌ Eliminar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carrito-total">
            <h3>Total: ${total}</h3>
            <button className="vaciar-btn" onClick={emptyCart}>
              Vaciar Carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
}
