import React from "react";
import { products, Product } from "../data/products";
import "./Productos.css";

export default function Productos() {
  return (
    <div className="productos-page">
      <h2>Catálogo de Productos 🛍️</h2>
      <div className="productos-grid">
        {products.map((p: Product) => (
          <div key={p.id} className="producto-card">
            <img src={p.img} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <p className="marca">Marca: {p.marca}</p>
            <p className="precio">${p.precio}</p>
            <p className="stock">Stock: {p.stock}</p>
            <button className="btn-comprar">Agregar al Carrito 🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
}
