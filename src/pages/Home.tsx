import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import Carrusel from "../components/Carrusel";
import ProductModal from "../components/ProductModal";
import { Logos3 } from "../components/Logos3";
import { Product } from "../data/products";
import { useProducts } from "../context/ProductContext";
import "./Home.css";

import img1 from "../assets/imagen carrusel.png";
import img2 from "../assets/Imagen carusel 2.png";
import img3 from "../assets/Imagen carrusel 3.png";
import img4 from "../assets/Imagen carrusel 4.png";

const featuredIds = [1, 2, 3];

const createLogoImage = (label: string, bg: string, color: string) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60">
      <rect width="200" height="60" rx="14" fill="${bg}" />
      <circle cx="38" cy="30" r="16" fill="${color}" opacity="0.18" />
      <text x="72" y="36" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="${color}">
        ${label}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const logoData = {
  heading: "Marcas que trabajamos",
  logos: [
    {
      id: "logo-1",
      description: "Saphirus",
      image: createLogoImage("Saphirus", "#eff6ff", "#1d4ed8"),
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Ayudin",
      image: createLogoImage("Ayudin", "#fdf2f8", "#be185d"),
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Cife",
      image: createLogoImage("Cife", "#ecfeff", "#0f766e"),
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Thames",
      image: createLogoImage("Thames", "#f5f3ff", "#7c3aed"),
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Ayudin Plus",
      image: createLogoImage("Ayudin Plus", "#fff7ed", "#c2410c"),
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "EcoHogar",
      image: createLogoImage("EcoHogar", "#f0fdf4", "#15803d"),
      className: "h-7 w-auto",
    },
  ],
};

export default function Home() {
  const { addToCart } = useCarritoContext();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("dispenhogar-theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
    return "light";
  });

  const { products } = useProducts();

  const featuredProducts = featuredIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
  };

  const handleBuyNow = () => {
    if (!selectedProduct) return;
    addToCart(selectedProduct, 1);
    navigate("/carrito");
    closeProduct();
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("dispenhogar-theme", theme);
  }, [theme]);

  return (
    <div className={`home-page ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <div className="theme-toggle-wrapper">
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
        >
          {theme === "light" ? "🌙 Oscuro" : "☀️ Claro"}
        </button>
      </div>
      <Carrusel images={[img1, img2, img3, img4]} />

      <Logos3 {...logoData} />

      <h2>Productos Destacados 💖</h2>
      <div className="productos-grid">
        {featuredProducts.map((p) => (
          <div key={p.id} className="producto-card" onClick={() => openProduct(p)}>
            <img src={p.img} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <p>${p.precio}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(p, 1);
              }}
            >
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeProduct}
          onAddToCart={addToCart}
          onBuyNow={handleBuyNow}
        />
      )}
    </div>
  );
}
