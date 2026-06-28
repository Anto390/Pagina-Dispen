import React, { useEffect, useState } from "react";
import { products, Product } from "../data/products";
import "./Home.css";

export default function Home() {
  const [visited, setVisited] = useState<Product[]>([]);


  useEffect(() => {
    const visitedData = localStorage.getItem("visitedProducts");
    if (visitedData) {
      setVisited(JSON.parse(visitedData));
    }
  }, []);


  const destacados = products.slice(0, 3);


  const promociones = products.filter((p) => p.precio < 1000);

  return (
    <div className="home-page">
      <h2>Productos Destacados 🧼</h2>
      <div className="productos-grid">
        {destacados.map((p) => (
          <div key={p.id} className="producto-card">
            <img src={p.img} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <p className="precio">${p.precio}</p>
          </div>
        ))}
      </div>

      <h2>Últimos Productos Visitados 👀</h2>
      <div className="productos-grid">
        {visited.length > 0 ? (
          visited.map((p) => (
            <div key={p.id} className="producto-card">
              <img src={p.img} alt={p.nombre} />
              <h3>{p.nombre}</h3>
              <p className="precio">${p.precio}</p>
            </div>
          ))
        ) : (
          <p>No has visitado productos aún.</p>
        )}
      </div>

      <h2>Promociones 🎉</h2>
      <div className="productos-grid">
        {promociones.map((p) => (
          <div key={p.id} className="producto-card promo">
            <img src={p.img} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <p className="precio">${p.precio}</p>
            <span className="promo-badge">Oferta</span>
          </div>
        ))}
      </div>
    </div>
  );
}
