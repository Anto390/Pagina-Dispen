import React, { useState, useEffect } from "react";
import hero from "../assets/hero.png";
import "./Carrusel.css";

interface CarruselProps {
  images: string[];
}

export default function Carrusel({ images }: CarruselProps) {
  const [current, setCurrent] = useState(0);
  const [imageSources, setImageSources] = useState<string[]>(images);

  useEffect(() => {
    setImageSources(images);
    setCurrent(0);
  }, [images]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % imageSources.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + imageSources.length) % imageSources.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    if (target.dataset.fallbackApplied === "true") {
      return;
    }
    target.dataset.fallbackApplied = "true";
    target.src = hero;
  };

  // ✅ Avance automático cada 5 segundos
  useEffect(() => {
    if (!imageSources.length) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [imageSources.length]);

  return (
    <div className="carrusel">
      <div className="carrusel-slide">
        <img
          src={imageSources[current] || hero}
          alt={`Slide ${current}`}
          onError={handleImageError}
        />
      </div>

      {/* Flecha izquierda */}
      <button className="carrusel-btn left" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
          <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>

      {/* Flecha derecha */}
      <button className="carrusel-btn right" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
          <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
        </svg>
      </button>

      {/* Indicadores */}
      <div className="carrusel-indicators">
        {imageSources.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
