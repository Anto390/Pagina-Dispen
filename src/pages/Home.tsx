import React from "react";
import "./Home.css";

const cleaningProducts = [
  {
    id: 1,
    name: "Detergente Líquido",
    price: 5,
    description: "Ideal para vajilla y superficies, elimina grasa fácilmente."
  },
  {
    id: 2,
    name: "Desinfectante Multiuso",
    price: 7,
    description: "Elimina el 99.9% de bacterias, perfecto para baños y cocinas."
  },
  {
    id: 3,
    name: "Escoba Suave",
    price: 10,
    description: "Escoba resistente para interiores, con cerdas suaves."
  },
  {
    id: 4,
    name: "Guantes de Limpieza",
    price: 3,
    description: "Protección para tus manos, cómodos y duraderos."
  }
];

export default function Home() {
  return (
    <div className="home">
      <h2>Productos Destacados 🧼</h2>
      <div className="productos">
        {cleaningProducts.map((p) => (
          <div key={p.id} className="producto-card">
            <img
              src={`https://via.placeholder.com/250?text=${p.name}`}
              alt={p.name}
            />
            <h3>{p.name}</h3>
            <p className="price">${p.price}</p>
            <p>{p.description}</p>
            <button className="btn-comprar">Agregar al Carrito 🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
}
