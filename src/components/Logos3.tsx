import React from "react";
import "./Logos3.css";

interface LogoItem {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading: string;
  logos: LogoItem[];
}

export function Logos3({ heading, logos }: Logos3Props) {
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className="logos3">
      <div className="logos3-heading">
        <h2>{heading}</h2>
      </div>
      <div className="logos3-slider">
        <div className="logos3-track">
          {repeatedLogos.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="logos3-card">
              <img src={logo.image} alt={logo.description} className={logo.className} />
              <span>{logo.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
