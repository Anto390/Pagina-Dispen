import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import { useCarritoContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/DispenLogo.png";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const { carrito } = useCarritoContext();
  const { currentUser, isLoggedIn, logout } = useAuth();
  const totalItems = carrito.reduce((acc: number, item) => acc + item.cantidad, 0);
  const [addressLabel, setAddressLabel] = useState<string | null>(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    const profileMenu = document.querySelector(".navbar-profile");
    if (profileMenu && !profileMenu.contains(event.target as Node)) {
      setProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    const loadAddress = () => {
      const stored = localStorage.getItem("dispenhogar_address");
      if (stored) {
        try {
          const obj = JSON.parse(stored);
          const label = obj.direccion || obj.ciudad || `${obj.ciudad || ""} ${obj.codigoPostal || ""}`.trim();
          setAddressLabel(label || null);
        } catch {
          setAddressLabel(null);
        }
      } else {
        setAddressLabel(null);
      }
    };

    loadAddress();

    const onStorage = (e: StorageEvent) => {
      if (e.key === "dispenhogar_address") loadAddress();
    };

    const onCustom = () => loadAddress();

    window.addEventListener("storage", onStorage);
    window.addEventListener("address-updated", onCustom as EventListener);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("address-updated", onCustom as EventListener);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo-group">
          <Link to="/">
            <img src={logo} alt="DispenHogar" className="navbar-logo" />
          </Link>
          <Link to="/direccion" className="logo-address-link">
            {addressLabel ? (addressLabel.length > 36 ? addressLabel.slice(0, 36) + "..." : addressLabel) : "Agregar dirección"}
          </Link>
        </div>

        <ul className="navbar-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li className="navbar-item">
            <span className="navbar-link">Productos</span>
            <ul className="submenu">
              <li>
                <Link to="/productos">Productos</Link>
              </li>
              <li>
                <Link to="/productos/todos">Todos los productos</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/quienesomos">Quiénes Somos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-actions">
        <div className="navbar-search">
          <Search className="text-white" />
          <input type="search" placeholder="Buscar" className="search-bar" />
        </div>

        <div className="navbar-profile">
          <button
            className="profile-button"
            type="button"
            onClick={() => setProfileMenuOpen((prev) => !prev)}
          >
            <User className="profile-icon" />
            <span>{currentUser ? currentUser.name : "Perfil"}</span>
          </button>
          <div className={`profile-menu ${profileMenuOpen ? "open" : ""}`}>
            {isLoggedIn ? (
              <>
                <Link to="/perfil">Ver perfil</Link>
                <Link to="/perfil">Compras anteriores</Link>
                <button type="button" onClick={logout}>Cerrar sesión</button>
              </>
            ) : (
              <>
                <Link to="/perfil">Iniciar sesión</Link>
                <Link to="/perfil">Registrarse</Link>
              </>
            )}
          </div>
        </div>

        <Link to="/carrito" className="cart-button carrito-link">
          <ShoppingCart className="inline mr-2 h-5 w-5" />
          <span className="cart-badge">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
