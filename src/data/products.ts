export interface Product {
  id: number;
  nombre: string;
  marca: string;
  precio: number;
  stock: number;
  img: string;
  descripcion?: string;
  images?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    nombre: "Detergente Líquido",
    marca: "EcoWash",
    precio: 1200,
    stock: 15,
    img: "/src/assets/DetergenteLiquido.png",
    descripcion: "Detergente líquido concentrado para limpieza profunda. Ideal para ropa, pisos y superficies diversas.",
    images: [
      "/src/assets/DetergenteLiquido.png",
      "/src/assets/DetergenteLiquido.png",
      "/src/assets/DetergenteLiquido.png",
    ],
  },
  {
    id: 2,
    nombre: "Desinfectante Multiuso",
    marca: "CleanMax",
    precio: 1500,
    stock: 10,
    img: "/src/assets/DesifectanteMultiuso.png",
    descripcion: "Desinfectante multiuso para cocinas, baños y áreas comunes. Elimina bacterias y malos olores.",
    images: [
      "/src/assets/DesifectanteMultiuso.png",
      "/src/assets/DesifectanteMultiuso.png",
    ],
  },
  {
    id: 3,
    nombre: "Escobillón Cerda Suave",
    marca: "Prolim",
    precio: 900,
    stock: 20,
    img: "/src/assets/EscobillonCerdaSuave.png",
    descripcion: "Escobillón con cerdas suaves y resistentes para limpieza diaria en pisos delicados.",
    images: [
      "/src/assets/EscobillonCerdaSuave.png",
      "/src/assets/EscobillonCerdaSuave.png",
    ],
  },
  { id: 4, nombre: "Guantes de Limpieza", marca: "SafeHands", precio: 500, stock: 30, img: "/src/assets/Guantes.png" },
  { id: 5, nombre: "Lavandina Concentrada", marca: "CloroPlus", precio: 800, stock: 25, img: "/src/assets/lavandina.png" },
  { id: 6, nombre: "Jabón en Barra", marca: "PureSoap", precio: 300, stock: 40, img: "/src/assets/jabon.png" },
  { id: 7, nombre: "Limpiavidrios", marca: "GlassPro", precio: 700, stock: 18, img: "/src/assets/limpiavidrios.png" },
  { id: 8, nombre: "Trapo de Piso", marca: "Prolim", precio: 400, stock: 50, img: "/src/assets/trapo.png" },
  { id: 9, nombre: "Esponja Multiuso", marca: "ScrubIt", precio: 250, stock: 60, img: "/src/assets/esponja.png" },
  { id: 10, nombre: "Cepillo de Baño", marca: "CleanMax", precio: 600, stock: 22, img: "/src/assets/cepillo.png" },
  { id: 11, nombre: "Paño Microfibra", marca: "EcoWash", precio: 350, stock: 45, img: "/src/assets/pano.png" },
  { id: 12, nombre: "Limpiador de Cocina", marca: "KitchenPro", precio: 950, stock: 12, img: "/src/assets/limpiadorcocina.png" },
  { id: 13, nombre: "Limpiador de Baño", marca: "BathroomCare", precio: 1100, stock: 14, img: "/src/assets/limpiadorbano.png" },
  { id: 14, nombre: "Ambientador Spray", marca: "FreshAir", precio: 800, stock: 25, img: "/src/assets/ambientador.png" },
  { id: 15, nombre: "Desodorante para Piso", marca: "FloorFresh", precio: 950, stock: 20, img: "/src/assets/desodorantepiso.png" },
  { id: 16, nombre: "Limpiador de Madera", marca: "WoodCare", precio: 1300, stock: 10, img: "/src/assets/madera.png" },
  { id: 17, nombre: "Limpiador de Acero", marca: "SteelShine", precio: 1400, stock: 8, img: "/src/assets/acero.png" },
  { id: 18, nombre: "Limpiador de Alfombras", marca: "CarpetCare", precio: 1600, stock: 12, img: "/src/assets/alfombra.png" },
  { id: 19, nombre: "Limpiador de Tapizados", marca: "UpholsteryPro", precio: 1500, stock: 9, img: "/src/assets/tapizado.png" },
  { id: 20, nombre: "Limpiador de Azulejos", marca: "TileCare", precio: 1200, stock: 11, img: "/src/assets/azulejo.png" },
  { id: 21, nombre: "Limpiador de Grifos", marca: "MetalCare", precio: 1000, stock: 15, img: "/src/assets/grifo.png" },
  { id: 22, nombre: "Limpiador de Vidrio", marca: "GlassPro", precio: 700, stock: 18, img: "/src/assets/vidrio.png" },
  { id: 23, nombre: "Limpiador de Plástico", marca: "PlasticCare", precio: 950, stock: 14, img: "/src/assets/plastico.png" },
  { id: 24, nombre: "Limpiador de Cuero", marca: "LeatherCare", precio: 1700, stock: 7, img: "/src/assets/cuero.png" },
  { id: 25, nombre: "Limpiador de Autos", marca: "CarWash", precio: 2000, stock: 6, img: "/src/assets/auto.png" },
  { id: 26, nombre: "Limpiador de Ventanas", marca: "WindowCare", precio: 800, stock: 20, img: "/src/assets/ventana.png" },
  { id: 27, nombre: "Limpiador de Espejos", marca: "MirrorCare", precio: 850, stock: 18, img: "/src/assets/espejo.png" },
  { id: 28, nombre: "Limpiador de Electrodomésticos", marca: "ApplianceCare", precio: 1900, stock: 5, img: "/src/assets/electrodomestico.png" },
  { id: 29, nombre: "Limpiador de Pisos", marca: "FloorCare", precio: 1200, stock: 22, img: "/src/assets/piso.png" },
  { id: 30, nombre: "Limpiador de Mármol", marca: "MarbleCare", precio: 2100, stock: 4, img: "/src/assets/marmol.png" },
  { id: 31, nombre: "Limpiador de Granito", marca: "GraniteCare", precio: 2200, stock: 3, img: "/src/assets/granito.png" },
  { id: 32, nombre: "Limpiador de Cerámica", marca: "CeramicCare", precio: 1300, stock: 12, img: "/src/assets/ceramica.png" },
  { id: 33, nombre: "Limpiador de Inoxidable", marca: "InoxCare", precio: 1400, stock: 9, img: "/src/assets/inox.png" },
  { id: 34, nombre: "Limpiador de Paredes", marca: "WallCare", precio: 1000, stock: 15, img: "/src/assets/pared.png" },
  { id: 35, nombre: "Limpiador de Techos", marca: "RoofCare", precio: 1600, stock: 8, img: "/src/assets/techo.png" },
  { id: 36, nombre: "Limpiador de Cortinas", marca: "CurtainCare", precio: 1200, stock: 10, img: "/src/assets/cortina.png" },
  { id: 37, nombre: "Limpiador de Persianas", marca: "BlindCare", precio: 1300, stock: 9, img: "/src/assets/persiana.png" },
  { id: 38, nombre: "Limpiador de Teclados", marca: "TechCare", precio: 900, stock: 20, img: "/src/assets/teclado.png" },
  { id: 39, nombre: "Limpiador de Pantallas", marca: "ScreenCare", precio: 950, stock: 18, img: "/src/assets/pantalla.png" },
  { id: 40, nombre: "Limpiador de Celulares", marca: "PhoneCare", precio: 1000, stock: 15, img: "/src/assets/celular.png" },
  { id: 41, nombre: "Limpiador de Computadoras", marca: "PCcare", precio: 2000, stock: 6, img: "/src/assets/computadora.png" },
  { id: 42, nombre: "Limpiador de Zapatos", marca: "ShoeCare", precio: 850, stock: 20, img: "/src/assets/zapato.png" },
  { id: 43, nombre: "Limpiador de Sombreros", marca: "HatCare", precio: 950, stock: 12, img: "/src/assets/sombrero.png" }, 

  ]