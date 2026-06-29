import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext"; // ✅ ahora apunta a CartContext.tsx

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { carrito } = useCarritoContext();

  // ✅ Tipamos el acumulador
  const totalItems = carrito.reduce((acc: number, item) => acc + item.cantidad, 0);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/src/assets/DispenLogo.png"
          alt="DispenHogar Logo"
          className="navbar-logo"
        />
        <span className="navbar-title">DispenHogar</span>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li className="navbar-item">
          <span className="navbar-link">Productos ▾</span>
          <ul className="submenu">
            <li><Link to="/productos/combos">Combos</Link></li>
            <li><Link to="/productos/todos">Todos los productos</Link></li>
          </ul>
        </li>
        <li><Link to="/quienesomos">Quiénes Somos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      <div className="navbar-actions">
        <div className="navbar-search">
          <input type="text" placeholder="Buscar..." />
          <button>🔍</button>
        </div>

        <div className="navbar-profile">
          <span
            className="profile-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            👤
          </span>
          {menuOpen && (
            <div className="profile-menu">
              <Link to="/login">Acceder</Link>
              <Link to="/perfil">Mi Perfil</Link>
              <Link to="/logout">Cerrar Sesión</Link>
            </div>
          )}
        </div>

        <div className="navbar-cart">
          <Link to="/carrito" className="cart-button">🛒</Link>
          <span className="cart-badge">{totalItems}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
