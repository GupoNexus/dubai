export type ProductCategory = "Cama" | "Banho" | "Mesa" | "Decoração" | "Aromas";

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  oldPrice?: number;
  rating: number;
  /** Cover image (always images[0]) — kept for back-compat with cart/UI that expects a single image */
  image: string;
  /** Full gallery: cover + detail photos */
  images: string[];
};

function gallery(slug: string, count: number): string[] {
  return Array.from(
    { length: count },
    (_, i) => `/products/${slug}/${String(i + 1).padStart(2, "0")}.jpg`,
  );
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "kit-cama-medara",
    name: "Kit Cama Medara",
    category: "Cama",
    description: "Kit Cama Medara 300 fios - 100% algodão Egípcio",
    price: 459.9,
    oldPrice: 599.9,
    rating: 5,
    images: gallery("kit-cama-medara", 5),
    image: gallery("kit-cama-medara", 5)[0],
  },
  {
    id: 2,
    slug: "kit-cama-mary-roses",
    name: "Kit Cama Mary Roses",
    category: "Cama",
    description: "Kit Cama Satiné, 300 fios - algodão Egípcio",
    price: 479.9,
    oldPrice: 619.9,
    rating: 5,
    images: gallery("kit-cama-mary-roses", 2),
    image: gallery("kit-cama-mary-roses", 2)[0],
  },
  {
    id: 3,
    slug: "kit-cama-oslo",
    name: "Kit Cama Oslo",
    category: "Cama",
    description: "Kit Cama OSLO 200 fios - 100% Algodão",
    price: 329.9,
    oldPrice: 419.9,
    rating: 5,
    images: gallery("kit-cama-oslo", 2),
    image: gallery("kit-cama-oslo", 2)[0],
  },
  {
    id: 4,
    slug: "kit-cama-versalhes",
    name: "Kit Cama Versalhes",
    category: "Cama",
    description: "Kit Cama Versalhes - Até 35% off",
    price: 419.9,
    oldPrice: 649.9,
    rating: 5,
    images: gallery("kit-cama-versalhes", 4),
    image: gallery("kit-cama-versalhes", 4)[0],
  },
  {
    id: 5,
    slug: "kit-cama-satin-montrelle-tresor",
    name: "Kit Cama Satin Montrelle + Trésor",
    category: "Cama",
    description: "Kit Cama Satiné sofisticado, toque macio e caimento premium",
    price: 499.9,
    oldPrice: 649.9,
    rating: 5,
    images: gallery("kit-cama-satin-montrelle-tresor", 5),
    image: gallery("kit-cama-satin-montrelle-tresor", 5)[0],
  },
  {
    id: 6,
    slug: "kit-cama-brenna",
    name: "Kit Cama Brenna",
    category: "Cama",
    description: "Kit Cama Brenna 300 fios - 100% algodão Egípcio",
    price: 459.9,
    oldPrice: 599.9,
    rating: 5,
    images: gallery("kit-cama-brenna", 6),
    image: gallery("kit-cama-brenna", 6)[0],
  },
  {
    id: 7,
    slug: "percal-200-fios",
    name: "Percal 200 Fios",
    category: "Cama",
    description:
      "Exclusivo Dubai Enxovais — linha Percal 200 fios (lençol celástico, jogo 4 peças e fronhas avulsas). Disponível nos tamanhos solteiro, casal, Queen e King.",
    price: 349.9,
    oldPrice: 439.9,
    rating: 5,
    images: gallery("percal-200-fios", 4),
    image: gallery("percal-200-fios", 4)[0],
  },
  {
    id: 8,
    slug: "bordados",
    name: "Colchas e Lençóis Bordados",
    category: "Cama",
    description: "Colchas e lençóis 300 fios com bordados aplicados",
    price: 489.9,
    oldPrice: 629.9,
    rating: 5,
    images: gallery("bordados", 1),
    image: gallery("bordados", 1)[0],
  },
  {
    id: 9,
    slug: "travesseiros",
    name: "Travesseiros — Experiência Completa",
    category: "Cama",
    description:
      "Travesseiros com perfis macio, médio e firme. Linha para alinhamento corporal, linha protetiva e linha hotelaria.",
    price: 129.9,
    oldPrice: 169.9,
    rating: 5,
    images: gallery("travesseiros", 5),
    image: gallery("travesseiros", 5)[0],
  },
  {
    id: 10,
    slug: "toalhas-banho",
    name: "Toalhas de Banho Premium",
    category: "Banho",
    description: "Toalhas em alta qualidade, 100% algodão, alta absorção",
    price: 159.9,
    oldPrice: 199.9,
    rating: 5,
    images: gallery("toalhas-banho", 3),
    image: gallery("toalhas-banho", 3)[0],
  },
  {
    id: 11,
    slug: "mesa-posta",
    name: "Mesa Posta — Aparelhos e Louças",
    category: "Mesa",
    description:
      "Aparelhos, louças, sousplats e guardanapos para deixar sua mesa com toque de sofisticação",
    price: 349.9,
    oldPrice: 449.9,
    rating: 5,
    images: gallery("mesa-posta", 10),
    image: gallery("mesa-posta", 10)[0],
  },
  {
    id: 12,
    slug: "tapetes-cortinas",
    name: "Tapetes e Cortinas",
    category: "Decoração",
    description:
      "Tapetes para sala, quarto, cozinha, lavabo e banheiro. Cortinas para quarto e sala (janela e parede toda).",
    price: 599.9,
    oldPrice: 799.9,
    rating: 5,
    images: gallery("tapetes-cortinas", 7),
    image: gallery("tapetes-cortinas", 7)[0],
  },
  {
    id: 13,
    slug: "aromas",
    name: "Kit Aromas Dubai Enxovais",
    category: "Aromas",
    description: "O melhor em fragrância para sua casa",
    price: 179.9,
    oldPrice: 229.9,
    rating: 5,
    images: gallery("aromas", 2),
    image: gallery("aromas", 2)[0],
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Cama",
  "Banho",
  "Mesa",
  "Decoração",
  "Aromas",
];

export function getProductsByCategory(category?: ProductCategory | "Todos") {
  if (!category || category === "Todos") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}
