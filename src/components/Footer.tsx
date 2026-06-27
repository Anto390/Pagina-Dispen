import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-custom">
      <p>© {new Date().getFullYear()} DispenHogar - Todos los derechos reservados</p>
      <div className="footer-links">
        <a href="/quienessomos">Quiénes Somos</a>
        <a href="/contacto">Contacto</a>
        <a href="/productos">Productos</a>
      </div>
    </footer>
  );
}
