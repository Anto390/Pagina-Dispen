import React from "react";
import { products, Product } from "../data/products";
import { BrowserRouter } from "react-router-dom";
import "./Productos.css";

export default function Productos() {
  return (
    <div className="container mt-4">
      <h2>🛍️ Nuestros Productos</h2>
      <div className="row">
        {products.map((prod: Product) => (
          <div className="col-md-4 mb-4" key={prod.id}>
            <div className="card h-100">
              <img src={prod.img} className="card-img-top" alt={prod.nombre} />
              <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">Marca: {prod.marca}</p>
                <p className="card-text">Precio: ${prod.precio}</p>
                <p className="card-text">Stock: {prod.stock}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
