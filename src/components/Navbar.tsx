import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productosOpen, setProductosOpen] = useState(false);

  const toggleProductos = () => {
    setProductosOpen(!productosOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <img src="src/assets/DispenLogo.png" alt="DispenHogar Logo" className="navbar-logo" />
        <span className="navbar-title">DispenHogar</span>
      </div>

      {/* Links principales */}
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>

        {/* Productos con hover y click */}
        <li 
          className={`navbar-item ${productosOpen ? "open" : ""}`}
          onMouseEnter={() => setProductosOpen(true)}
          onMouseLeave={() => setProductosOpen(false)}
          onClick={toggleProductos}
        >
          <span className="navbar-link">
            Productos {productosOpen ? "▲" : "▾"}
          </span>
          <ul className="submenu">
            <li><Link to="/productos/combos">Combos</Link></li>
            <li><Link to="/productos/todos">Todos los productos</Link></li>
          </ul>
        </li>

        <li><Link to="/quienesomos">Quiénes Somos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      {/* Acciones: buscador → perfil → carrito */}
      <div className="navbar-actions">
        {/* Buscador */}
        <div className="navbar-search">
          <input type="text" placeholder="Buscar..." />
          <button>🔍</button>
        </div>

        {/* Perfil */}
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

        {/* Carrito */}
        <div className="navbar-cart">
          <Link to="/carrito" className="cart-button">🛒</Link>
          <span className="cart-badge">0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
