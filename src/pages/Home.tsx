import React from "react";
import Carrusel from "../components/Carrusel";
import "./Home.css";

import img1 from "../assets/imagen carrusel.png";
import img2 from "../assets/Imagen carusel 2.png";
import img3 from "../assets/Imagen carrusel 3.png";
import img4 from "../assets/Imagen carrusel 4.png";

import det1 from "../assets/DetergenteLiquido.png";
import des1 from "../assets/DesifectanteMultiuso.png";
import esc1 from "../assets/EscobillonCerdaSuave.png";

const destacados = [
  { id: 1, nombre: "Detergente Líquido Ala + Concentrado", precio: 1200, img: det1 },
  { id: 2, nombre: "Desinfectante Multiuso", precio: 1500, img: des1 },
  { id: 3, nombre: "Escoba Suave", precio: 900, img: esc1 },
];

export default function Home() {
  return (
    <div className="home-page">
      {/* ✅ Carrusel con imágenes importadas */}
      <Carrusel images={[img1, img2, img3, img4]} />

      {/* ✅ Productos destacados */}
      <h2>Productos Destacados 💖</h2>
      <div className="productos-grid">
        {destacados.map((p) => (
          <div key={p.id} className="producto-card">
            <img src={p.img} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <p>${p.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
