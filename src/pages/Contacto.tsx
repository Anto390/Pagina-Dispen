import React from "react";

export default function Contacto() {
  return (
    <div className="contacto">
      <h2>📞 Contacto</h2>
      <p>Podés comunicarte con nosotros a través de:</p>
      <ul>
        <li>Email: contacto@cleanco.com</li>
        <li>Teléfono: +54 9 280 123 4567</li>
        <li>Dirección: Av. Principal 123, Chubut</li>
      </ul>
      <form className="contacto-form">
        <label>
          Nombre:
          <input type="text" placeholder="Tu nombre" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Tu correo" />
        </label>
        <label>
          Mensaje:
          <textarea placeholder="Escribe tu mensaje aquí"></textarea>
        </label>
        <button type="submit">Enviar ✉️</button>
      </form>
    </div>
  );
}
