import React from "react";

export default function Perfil() {
  return (
    <div className="container mt-4">
      <h2>👤 Mi Perfil</h2>
      <div className="card" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h5 className="card-title">Antonella</h5>
          <p className="card-text">Correo: antonella@example.com</p>
          <p className="card-text">Historial de compras: 5 pedidos</p>
          <p className="card-text">Miembro desde: Junio 2026</p>
        </div>
      </div>
    </div>
  );
}
