import React from "react";
import "./Quienessomos.css";

export default function Quienesomos() {
  return (
    <div className="quienesomos-page">
      <section className="quienesomos-hero">
        <div className="hero-copy">
          <span>🌟 Nuestra Historia</span>
          <h1>Somos DispenHogar</h1>
          <p>
            Desde el primer día nos propusimos acercar soluciones de limpieza y
            cuidado del hogar con calidad, confianza y atención personalizada.
          </p>
        </div>
      </section>

      <section className="quienesomos-content">
        <div className="info-card">
          <h2>Misión</h2>
          <p>
            Brindar productos de limpieza eficientes, seguros y accesibles, que
            ayuden a mantener hogares y espacios de trabajo más sanos y
            confortables.
          </p>
        </div>

        <div className="info-card">
          <h2>Visión</h2>
          <p>
            Ser la referencia local en artículos para el hogar, apoyando a cada
            cliente con propuestas prácticas, sostenibles y de gran valor.
          </p>
        </div>

        <div className="info-card">
          <h2>Valores</h2>
          <ul>
            <li>Responsabilidad</li>
            <li>Calidad</li>
            <li>Transparencia</li>
            <li>Respeto al medio ambiente</li>
            <li>Atención personalizada</li>
          </ul>
        </div>
      </section>

      <section className="quienesomos-team">
        <div className="team-copy">
          <h2>Un equipo cercano y comprometido</h2>
          <p>
            Nuestro equipo está formado por personas apasionadas que conocen las
            necesidades reales del hogar. Juntos trabajamos para ofrecerte
            productos confiables y un servicio atento en cada compra.
          </p>
        </div>

        <div className="team-highlights">
          <div className="highlight-card">
            <h3>Atención local</h3>
            <p>
              Respondemos rápido y acompañamos tu compra con soluciones a medida.
            </p>
          </div>
          <div className="highlight-card">
            <h3>Productos seleccionados</h3>
            <p>
              Solo ofrecemos marcas y artículos que probamos para garantizar
              buen rendimiento.
            </p>
          </div>
          <div className="highlight-card">
            <h3>Compromiso verde</h3>
            <p>
              Buscamos opciones amigables con el ambiente sin sacrificar
              efectividad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
