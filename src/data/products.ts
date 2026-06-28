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
    nombre: "Detergente Líquido Ala +Concentrado",
    marca: "ALA",
    precio: 1200,
    stock: 15,
    img: "DetergenteLiquido.png"
  },
  {
    id: 2,
    nombre: "Desinfectante Multiuso",
    marca: "EcoWash",
    precio: 1500,
    stock: 8,
    img: "DesinfectanteMultiuso.png"
  },
  {
    id: 3,
    nombre: "Escoba Suave",
    marca: "Prolim",
    precio: 900,
    stock: 12,
    img: "EscobaCerdaSuave.png"
  },
  {
    id: 4,
    nombre: "Guantes de Limpieza",
    marca: "CleanMax",
    precio: 500,
    stock: 20,
    img: "GuantesLimpieza.png"
  }
];
