import React, { useState } from "react";
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

const logoData = {
  heading: "Marcas que trabajamos",
  logos: [
    {
      id: "logo-1",
      description: "Saphitus",
      image: "https://via.placeholder.com/200x60?text=Saphitus",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Ayudin",
      image: "https://via.placeholder.com/200x60?text=Ayudin",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Cife",
      image: "https://via.placeholder.com/200x60?text=Cife",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Thames",
      image: "https://via.placeholder.com/200x60?text=Thames",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Ayudin Plus",
      image: "https://via.placeholder.com/200x60?text=Ayudin+Plus",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "EcoHogar",
      image: "https://via.placeholder.com/200x60?text=EcoHogar",
      className: "h-7 w-auto",
    },
  ],
};

export default function Home() {
  const { addToCart } = useCarritoContext();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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

  return (
    <div className="home-page">
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
