import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";
import ProductModal from "../components/ProductModal";
import { Product } from "../data/products";
import "./TodosProductos.css";

export default function TodosProductos() {
  const { addToCart } = useCarritoContext();
  const { products } = useProducts();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openProduct = (producto: Product) => {
    setSelectedProduct(producto);
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
    <div className="todos-page">
      <h2>🧼 Catálogo Completo de Productos</h2>
      <div className="productos-grid">
        {products.map((p: Product) => (
          <div key={p.id} className="producto-card" onClick={() => openProduct(p)}>
            <img src={p.img} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <p className="marca">Marca: {p.marca}</p>
            <p className="precio">${p.precio}</p>
            <p className="stock">Stock: {p.stock}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(p, 1);
              }}
            >
              Agregar al Carrito 🛒
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
