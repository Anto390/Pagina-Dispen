import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Páginas
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Perfil from "./pages/Perfil";
import Quienessomos from "./pages/Quienessomos";
import Contacto from "./pages/Contacto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/productos", element: <Productos /> },
      { path: "/carrito", element: <Carrito /> },
      { path: "/perfil", element: <Perfil /> },
      { path: "/quienessomos", element: <Quienessomos /> },
      { path: "/contacto", element: <Contacto /> },
    ],
  },
]);

export default router;
