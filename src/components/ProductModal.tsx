import React, { useState } from "react";
import { Product } from "../data/products";
import "./ProductModal.css";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, cantidad: number) => void;
  onBuyNow: () => void;
}

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
}: ProductModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [codigoPostal, setCodigoPostal] = useState("");
  const [costoEnvio, setCostoEnvio] = useState<number | null>(null);

  const images = product.images && product.images.length > 0 ? product.images : [product.img];

  const calcularEnvio = () => {
    if (!codigoPostal || codigoPostal.length < 4) {
      setCostoEnvio(null);
      return;
    }

    const sumDigits = codigoPostal
      .split("")
      .filter((char) => /\d/.test(char))
      .reduce((sum, char) => sum + Number(char), 0);

    const costo = 150 + sumDigits * 8;
    setCostoEnvio(costo);
  };

  const descripcion =
    product.descripcion ||
    `Producto de limpieza ${product.marca} ideal para uso diario y superficies delicadas. Perfecto para mantener tu hogar fresco, limpio y libre de gérmenes.`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          ×
        </button>
        <div className="product-modal-grid">
          <div className="product-modal-gallery">
            <img
              src={images[activeImageIndex]}
              alt={product.nombre}
              className="main-product-image"
            />
            <div className="product-thumbnails">
              {images.map((src, index) => (
                <button
                  key={index}
                  type="button"
                  className={`thumbnail-button ${index === activeImageIndex ? "active" : ""}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={src} alt={`${product.nombre} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-modal-details">
            <h2>{product.nombre}</h2>
            <p className="product-brand">Marca: {product.marca}</p>
            <p className="product-description">{descripcion}</p>
            <div className="product-row">
              <span className="product-price">${product.precio}</span>
              <span className="product-stock">Stock: {product.stock}</span>
            </div>

            <div className="shipping-block">
              <label htmlFor="postal-code">Código Postal</label>
              <input
                id="postal-code"
                type="text"
                value={codigoPostal}
                onChange={(e) => setCodigoPostal(e.target.value)}
                placeholder="Ej. 1000"
              />
              <button type="button" onClick={calcularEnvio}>
                Calcular Envío
              </button>
              {costoEnvio !== null && (
                <p className="shipping-result">Costo de envío: ${costoEnvio}</p>
              )}
            </div>

            <div className="product-actions">
              <button className="add-cart-button" type="button" onClick={() => onAddToCart(product, 1)}>
                Agregar al Carrito
              </button>
              <button className="buy-now-button" type="button" onClick={onBuyNow}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
