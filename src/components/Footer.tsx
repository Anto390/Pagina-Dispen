import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>DispenHogar 🏠</h3>
        <p>Tu aliado en limpieza y hogar</p>

        {/* Redes sociales */}
        <div className="footer-socials">
          <a href="https://www.instagram.com/dispen_hogar/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/LogoInstagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100066906597225" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/LogoFacebook.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://wa.me/5492804000000?text=Hola%20quiero%20más%20información" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/LogoWhatsapp.png" alt="WhatsApp" className="social-icon" />
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
  