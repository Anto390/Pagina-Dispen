import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useProducts } from "../context/ProductContext";
import { Product } from "../data/products";
import "./Perfil.css";

const defaultForm = {
  email: "",
  password: "",
  name: "",
};

export default function Perfil() {
  const { currentUser, isLoggedIn, login, register, logout, resetPassword, getUsers } = useAuth();
  const { products, updateProduct } = useProducts();
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberCredentials, setRememberCredentials] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotForm, setForgotForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [forgotMessage, setForgotMessage] = useState("");
  const [error, setError] = useState("");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editValues, setEditValues] = useState({
    precio: "",
    img: "",
  });
  const [selectedUserEmail, setSelectedUserEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminMessage, setAdminMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("rememberedCredentials");
    if (saved) {
      try {
        const credentials = JSON.parse(saved);
        setForm((prev) => ({
          ...prev,
          email: credentials.email || "",
          password: credentials.password || "",
        }));
        setRememberCredentials(true);
      } catch {
        localStorage.removeItem("rememberedCredentials");
      }
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, name } = form;
    if (!email || !password || (isRegisterMode && !name)) {
      setError("Completa todos los campos.");
      return;
    }

    const success = isRegisterMode ? register(email, password, name) : login(email, password);

    if (!success) {
      setError(isRegisterMode ? "El correo ya está registrado." : "Correo o contraseña inválidos.");
    } else {
      if (rememberCredentials) {
        localStorage.setItem(
          "rememberedCredentials",
          JSON.stringify({ email, password })
        );
      } else {
        localStorage.removeItem("rememberedCredentials");
      }
      setError("");
      setForgotMessage("");
      setShowForgotPassword(false);
      setForm(defaultForm);
    }
  };

  const handleForgotPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, confirmPassword } = forgotForm;
    if (!email || !password || !confirmPassword) {
      setForgotMessage("Completa todos los campos.");
      return;
    }
    if (password !== confirmPassword) {
      setForgotMessage("Las contraseñas no coinciden.");
      return;
    }

    const success = resetPassword(email, password);
    if (!success) {
      setForgotMessage("No se encontró un usuario con ese correo.");
      return;
    }

    setForgotMessage("Contraseña actualizada. Ahora puedes iniciar sesión con la nueva contraseña.");
    setForgotForm({ email: "", password: "", confirmPassword: "" });
    setShowForgotPassword(false);
  };

  const handleAdminPasswordUpdate = () => {
    if (!selectedUserEmail || !adminPassword) {
      setAdminMessage("Selecciona un usuario y escribe la nueva contraseña.");
      return;
    }

    const success = resetPassword(selectedUserEmail, adminPassword);
    if (!success) {
      setAdminMessage("No se pudo actualizar la contraseña.");
      return;
    }

    setAdminMessage("Contraseña actualizada para el usuario seleccionado.");
    setAdminPassword("");
  };

  const startEditProduct = (product: Product) => {
    setEditingProduct(product);
    setEditValues({ precio: String(product.precio), img: product.img });
  };

  const saveProduct = () => {
    if (!editingProduct) return;
    const updatedProduct: Product = {
      ...editingProduct,
      precio: Number(editValues.precio) || editingProduct.precio,
      img: editValues.img.trim() || editingProduct.img,
    };
    updateProduct(updatedProduct);
    setEditingProduct(null);
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setEditValues({ precio: "", img: "" });
  };

  return (
    <div className="perfil-page">
      {!isLoggedIn ? (
        <div className="auth-card">
          <h2>{isRegisterMode ? "Regístrate" : "Iniciar sesión"}</h2>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Correo electrónico
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="tu@email.com"
              />
            </label>
            {isRegisterMode && (
              <label>
                Nombre
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Tu nombre"
                />
              </label>
            )}
            <label className="password-field">
              Contraseña
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  placeholder="Contraseña segura"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </label>
            <label className="remember-field">
              <input
                type="checkbox"
                checked={rememberCredentials}
                onChange={(e) => setRememberCredentials(e.target.checked)}
              />
              Guardar correo y contraseña
            </label>
            {error && <div className="auth-error">{error}</div>}
            <button type="submit">{isRegisterMode ? "Crear cuenta" : "Ingresar"}</button>
          </form>
          <div className="auth-toggle">
            <button type="button" onClick={() => setIsRegisterMode(false)}>
              Ya tengo cuenta
            </button>
            <button type="button" onClick={() => setIsRegisterMode(true)}>
              Quiero registrarme
            </button>
          </div>
          {!isRegisterMode && (
            <div className="forgot-link">
              <button type="button" onClick={() => setShowForgotPassword((prev) => !prev)}>
                {showForgotPassword ? "Volver al inicio de sesión" : "¿Se me olvidó la contraseña?"}
              </button>
            </div>
          )}
          {showForgotPassword && (
            <div className="forgot-card">
              <h3>Recuperar contraseña</h3>
              <form className="auth-form" onSubmit={handleForgotPassword}>
                <label>
                  Correo registrado
                  <input
                    type="email"
                    value={forgotForm.email}
                    onChange={(e) => setForgotForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="tu@email.com"
                  />
                </label>
                <label>
                  Nueva contraseña
                  <input
                    type="password"
                    value={forgotForm.password}
                    onChange={(e) => setForgotForm((prev) => ({ ...prev, password: e.target.value }))}
                    placeholder="Nueva contraseña"
                  />
                </label>
                <label>
                  Confirmar contraseña
                  <input
                    type="password"
                    value={forgotForm.confirmPassword}
                    onChange={(e) => setForgotForm((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                    placeholder="Repite la contraseña"
                  />
                </label>
                {forgotMessage && <div className="auth-info">{forgotMessage}</div>}
                <button type="submit">Actualizar contraseña</button>
              </form>
            </div>
          )}
        </div>
      ) : (
        <div className="profile-card">
          <h2>Bienvenido, {currentUser?.name}</h2>
          <p>Correo: {currentUser?.email}</p>
          <p>Permiso: {currentUser?.isAdmin ? "Administrador" : "Usuario"}</p>
          <p>Miembro desde: {new Date(currentUser?.createdAt || "").toLocaleDateString()}</p>
          <button className="logout-button" type="button" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      )}

      {isLoggedIn && currentUser?.isAdmin && (
        <div className="admin-panel">
          <h2>Panel de administrador</h2>
          <p>Modifica los precios, imágenes y contraseñas de los usuarios desde aquí.</p>
          <div className="admin-card">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Imagen</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.nombre}</td>
                    <td>${product.precio}</td>
                    <td>{product.img}</td>
                    <td>
                      <div className="admin-actions">
                        <button type="button" onClick={() => startEditProduct(product)}>
                          Editar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {editingProduct && (
              <div className="auth-card">
                <h2>Editar: {editingProduct.nombre}</h2>
                <div className="auth-form">
                  <label>
                    Precio
                    <input
                      type="number"
                      value={editValues.precio}
                      onChange={(e) => setEditValues((prev) => ({ ...prev, precio: e.target.value }))}
                      placeholder="Precio"
                    />
                  </label>
                  <label>
                    URL de imagen
                    <input
                      type="text"
                      value={editValues.img}
                      onChange={(e) => setEditValues((prev) => ({ ...prev, img: e.target.value }))}
                      placeholder="Ruta o URL de la imagen"
                    />
                  </label>
                  <div className="admin-actions">
                    <button type="button" onClick={saveProduct}>
                      Guardar cambios
                    </button>
                    <button type="button" onClick={cancelEdit}>
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="admin-card admin-password-card">
              <h3>Cambiar contraseña de usuario</h3>
              <label>
                Usuario
                <select
                  value={selectedUserEmail}
                  onChange={(e) => setSelectedUserEmail(e.target.value)}
                >
                  <option value="">Selecciona un usuario</option>
                  {getUsers().map((user) => (
                    <option key={user.email} value={user.email}>
                      {user.email} {user.isAdmin ? "(Admin)" : ""}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Nueva contraseña
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Contraseña nueva"
                />
              </label>
              <button type="button" onClick={handleAdminPasswordUpdate}>
                Actualizar contraseña
              </button>
              {adminMessage && <div className="auth-info">{adminMessage}</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
