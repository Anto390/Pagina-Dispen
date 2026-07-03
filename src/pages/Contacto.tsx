import React, { useState } from "react";
import "./Contacto.css";

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="contacto">
      <h2>📞 Contacto</h2>
      <p>Escribinos y te respondemos a la brevedad. También podés usar los datos de contacto directo.</p>

      <div className="contacto-grid">
        <div className="contacto-info">
          <h3>Contacto directo</h3>
          <ul>
            <li>
              <span>Email:</span> contacto@cleanco.com
            </li>
            <li>
              <span>Teléfono:</span> +54 9 280 123 4567
            </li>
            <li>
              <span>Dirección:</span> Av. Principal 123, Chubut
            </li>
          </ul>
        </div>

        <form className="contacto-form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              type="text"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              placeholder="Tu correo"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </label>

          <label>
            Mensaje
            <textarea
              placeholder="Escribe tu mensaje aquí"
              value={formData.mensaje}
              onChange={(e) => handleChange("mensaje", e.target.value)}
              required
            />
          </label>

          <button type="submit">Enviar mensaje</button>

          {submitted && (
            <div className="contacto-success">
              ¡Gracias! Tu mensaje fue enviado correctamente.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
