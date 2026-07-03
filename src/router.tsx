import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Páginas
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import TodosProductos from "./pages/TodosProductos";
import Carrito from "./pages/Carrito";
import Perfil from "./pages/Perfil";
import Direccion from "./pages/Direccion";
import Quienessomos from "./pages/Quienessomos";
import Contacto from "./pages/Contacto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/productos", element: <Productos /> },
      { path: "/productos/todos", element: <TodosProductos /> },
      { path: "/carrito", element: <Carrito /> },
      { path: "/perfil", element: <Perfil /> },
      { path: "/direccion", element: <Direccion /> },
      { path: "/quienesomos", element: <Quienessomos /> },
      { path: "/contacto", element: <Contacto /> },
    ],
  },
]);

export default router;
