import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const { getItemQuantity } = useCarritoContext(); 

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">DispenHogar</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li><NavLink className="nav-link" to="/">Inicio</NavLink></li>
            <li><NavLink className="nav-link" to="/productos">Productos</NavLink></li>
            <li><NavLink className="nav-link" to="/quienessomos">Quiénes Somos</NavLink></li>
            <li><NavLink className="nav-link" to="/contacto">Contacto</NavLink></li>
            <li>
              <NavLink className="nav-link carrito-link" to="/carrito">
                Carrito 🛒
                {getItemQuantity() > 0 && (
                  <span className="cart-count">{getItemQuantity()}</span>
                )}
              </NavLink>
            </li>
            <li><NavLink className="nav-link" to="/perfil">Perfil</NavLink></li>
          </ul>
          <button className="btn btn-secondary" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
          </button>
        </div>
      </div>
    </nav>
  );
}
