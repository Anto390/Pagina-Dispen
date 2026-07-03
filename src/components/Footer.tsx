import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/src/assets/DispenLogo.png" alt="DispenHogar" className="footer-logo" />
          <div>
            <h3>DispenHogar</h3>
            <p>Productos de limpieza y hogar con atención personalizada.</p>
          </div>
        </div>

        <div className="footer-sections">
          <div className="footer-section">
            <h4>Enlaces</h4>
            <nav>
              <a href="/">Inicio</a>
              <a href="/productos">Productos</a>
              <a href="/contacto">Contacto</a>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <p>info@dispenhogar.com</p>
            <p>+54 9 280 123 4567</p>
            <p>Av. Principal 123, Chubut</p>
          </div>
        </div>
      </div>

      <div className="footer-socials">
        <span>Síguenos en redes</span>
        <div className="footer-icons">
          <a href="https://www.instagram.com/dispen_hogar/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/LogoInstagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100066906597225" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/LogoFacebook.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://wa.me/5492804000000?text=Hola%20quiero%20más%20información" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/LogoWhatsapp.png" alt="WhatsApp" className="social-icon whatsapp-icon" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 DispenHogar - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
  