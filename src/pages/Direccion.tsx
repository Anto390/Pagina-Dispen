import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import "./Direccion.css";

interface AddressData {
  direccion: string;
  ciudad: string;
  provincia: string;
  codigoPostal: string;
}

const STORAGE_KEY = "dispenhogar_address";

export default function Direccion() {
  const [address, setAddress] = useState<AddressData>({
    direccion: "",
    ciudad: "",
    provincia: "",
    codigoPostal: "",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setAddress(JSON.parse(stored));
      setSaved(true);
    }
  }, []);

  const handleChange = (field: keyof AddressData, value: string) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(address));
    setSaved(true);
    toast.success("Dirección guardada correctamente");
    // notify other components (navbar) that address changed
    try {
      window.dispatchEvent(new Event("address-updated"));
    } catch (e) {
      /* ignore */
    }
  };

  const handleClear = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAddress({ direccion: "", ciudad: "", provincia: "", codigoPostal: "" });
    setSaved(false);
    toast.error("Dirección eliminada");
    try {
      window.dispatchEvent(new Event("address-updated"));
    } catch (e) {
      /* ignore */
    }
  };

  return (
    <div className="container mt-4">
      <h2>📍 Mi Dirección</h2>
      <p>Guarda tu dirección para que al momento de comprar esté disponible automáticamente.</p>
      <div className="card" style={{ maxWidth: "600px", marginTop: "1rem" }}>
        <div className="card-body">
          <div style={{ display: "grid", gap: "1rem" }}>
            <label>
              Dirección completa
              <input
                className="address-input"
                type="text"
                value={address.direccion}
                onChange={(e) => handleChange("direccion", e.target.value)}
                placeholder="Ej. Calle Falsa 123"
                style={{ width: "100%", padding: "0.75rem", marginTop: "0.35rem" }}
              />
            </label>
            <label>
              Ciudad
              <input
                className="address-input"
                type="text"
                value={address.ciudad}
                onChange={(e) => handleChange("ciudad", e.target.value)}
                placeholder="Ej. Buenos Aires"
                style={{ width: "100%", padding: "0.75rem", marginTop: "0.35rem" }}
              />
            </label>
            <label>
              Provincia
              <input
                className="address-input"
                type="text"
                value={address.provincia}
                onChange={(e) => handleChange("provincia", e.target.value)}
                placeholder="Ej. Chubut"
                style={{ width: "100%", padding: "0.75rem", marginTop: "0.35rem" }}
              />
            </label>
            <label>
              Código Postal
              <input
                className="address-input"
                type="text"
                value={address.codigoPostal}
                onChange={(e) => handleChange("codigoPostal", e.target.value)}
                placeholder="Ej. 9200"
                style={{ width: "100%", padding: "0.75rem", marginTop: "0.35rem" }}
              />
            </label>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
            <button
              onClick={handleSave}
              style={{ padding: "0.85rem 1.25rem", background: "#0077b6", color: "white", border: "none", borderRadius: "0.85rem", cursor: "pointer" }}
            >
              Guardar Dirección
            </button>
            <button
              onClick={handleClear}
              style={{ padding: "0.85rem 1.25rem", background: "#dc3545", color: "white", border: "none", borderRadius: "0.85rem", cursor: "pointer" }}
            >
              Eliminar Dirección
            </button>
          </div>
          {saved && (
            <p style={{ marginTop: "1rem", fontWeight: 600 }}>
              Dirección guardada correctamente. Se usará en tus próximas compras.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
