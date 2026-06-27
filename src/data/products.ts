export interface Product {
  id: number;
  nombre: string;
  marca: string;
  precio: number;
  stock: number;
  img: string;
}

export const products: Product[] = [
  {
    id: 1,
    nombre: "Detergente Líquido",
    marca: "CleanCo",
    precio: 1200,
    stock: 10,
    img: "https://via.placeholder.com/250?text=Detergente"
  },
  {
    id: 2,
    nombre: "Desinfectante Multiuso",
    marca: "EcoWash",
    precio: 1500,
    stock: 8,
    img: "https://via.placeholder.com/250?text=Desinfectante"
  },
  {
    id: 3,
    nombre: "Escoba Suave",
    marca: "Prolim",
    precio: 900,
    stock: 12,
    img: "https://via.placeholder.com/250?text=Escoba"
  },
  {
    id: 4,
    nombre: "Guantes de Limpieza",
    marca: "CleanMax",
    precio: 500,
    stock: 20,
    img: "https://via.placeholder.com/250?text=Guantes"
  }
];
