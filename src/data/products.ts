export type ProductCategory = "Cama" | "Banho" | "Mesa" | "Decoração" | "Aromas";

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: ProductCategory;
  /** Subgrupo dentro da categoria, derivado do nome/descrição real do produto (nunca inventado) */
  subcategory: string;
  /** Tamanhos disponíveis — só preenchido quando informado na descrição real do produto */
  sizes?: string[];
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

/** Same as gallery(), but lets you control which photo comes first (and the order of the rest). */
function galleryOrdered(slug: string, order: number[]): string[] {
  return order.map((n) => `/products/${slug}/${String(n).padStart(2, "0")}.jpg`);
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "kit-cama-medara",
    name: "Kit Cama Medara",
    category: "Cama",
    subcategory: "Jogos de Cama",
    description: "Kit Cama Medara 300 fios - 100% algodão Egípcio",
    price: 459.9,
    oldPrice: 599.9,
    rating: 5,
    images: galleryOrdered("kit-cama-medara", [3, 1, 2, 4, 5]),
    image: galleryOrdered("kit-cama-medara", [3, 1, 2, 4, 5])[0],
  },
  {
    id: 2,
    slug: "kit-cama-mary-roses",
    name: "Kit Cama Mary Roses",
    category: "Cama",
    subcategory: "Jogos de Cama",
    description: "Kit Cama Satiné, 300 fios - algodão Egípcio",
    price: 479.9,
    oldPrice: 619.9,
    rating: 5,
    images: galleryOrdered("kit-cama-mary-roses", [2, 1]),
    image: galleryOrdered("kit-cama-mary-roses", [2, 1])[0],
  },
  {
    id: 3,
    slug: "kit-cama-oslo",
    name: "Kit Cama Oslo",
    category: "Cama",
    subcategory: "Jogos de Cama",
    description: "Kit Cama OSLO 200 fios - 100% Algodão",
    price: 329.9,
    oldPrice: 419.9,
    rating: 5,
    images: galleryOrdered("kit-cama-oslo", [2, 1]),
    image: galleryOrdered("kit-cama-oslo", [2, 1])[0],
  },
  {
    id: 4,
    slug: "kit-cama-versalhes",
    name: "Kit Cama Versalhes",
    category: "Cama",
    subcategory: "Jogos de Cama",
    description: "Kit Cama Versalhes - Até 35% off",
    price: 419.9,
    oldPrice: 649.9,
    rating: 5,
    images: galleryOrdered("kit-cama-versalhes", [4, 1, 2, 3]),
    image: galleryOrdered("kit-cama-versalhes", [4, 1, 2, 3])[0],
  },
  {
    id: 5,
    slug: "kit-cama-satin-montrelle-tresor",
    name: "Kit Cama Satin Montrelle + Trésor",
    category: "Cama",
    subcategory: "Jogos de Cama",
    description: "Kit Cama Satiné sofisticado, toque macio e caimento premium",
    price: 499.9,
    oldPrice: 649.9,
    rating: 5,
    images: galleryOrdered("kit-cama-satin-montrelle-tresor", [4, 1, 2, 3, 5]),
    image: galleryOrdered("kit-cama-satin-montrelle-tresor", [4, 1, 2, 3, 5])[0],
  },
  {
    id: 6,
    slug: "kit-cama-brenna",
    name: "Kit Cama Brenna",
    category: "Cama",
    subcategory: "Jogos de Cama",
    description: "Kit Cama Brenna 300 fios - 100% algodão Egípcio",
    price: 459.9,
    oldPrice: 599.9,
    rating: 5,
    images: galleryOrdered("kit-cama-brenna", [3, 1, 2, 4, 5, 6]),
    image: galleryOrdered("kit-cama-brenna", [3, 1, 2, 4, 5, 6])[0],
  },
  {
    id: 7,
    slug: "percal-200-fios",
    name: "Percal 200 Fios",
    category: "Cama",
    subcategory: "Jogos de Cama",
    sizes: ["Solteiro", "Casal", "Queen", "King"],
    description:
      "Exclusivo Dubai Enxovais — linha Percal 200 fios (lençol celástico, jogo 4 peças e fronhas avulsas). Disponível nos tamanhos solteiro, casal, Queen e King.",
    price: 349.9,
    oldPrice: 439.9,
    rating: 5,
    images: galleryOrdered("percal-200-fios", [2, 1, 3, 4]),
    image: galleryOrdered("percal-200-fios", [2, 1, 3, 4])[0],
  },
  {
    id: 8,
    slug: "bordados",
    name: "Colchas e Lençóis Bordados",
    category: "Cama",
    subcategory: "Colchas e Lençóis",
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
    subcategory: "Travesseiros",
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
    subcategory: "Toalhas de Banho",
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
    subcategory: "Aparelhos e Louças",
    description:
      "Aparelhos, louças, sousplats e guardanapos para deixar sua mesa com toque de sofisticação",
    price: 349.9,
    oldPrice: 449.9,
    rating: 5,
    images: galleryOrdered("mesa-posta", [2, 1, 3, 4, 5, 6, 7, 8, 9, 10]),
    image: galleryOrdered("mesa-posta", [2, 1, 3, 4, 5, 6, 7, 8, 9, 10])[0],
  },
  {
    id: 12,
    slug: "tapetes-cortinas",
    name: "Tapetes e Cortinas",
    category: "Decoração",
    subcategory: "Tapetes e Cortinas",
    description:
      "Tapetes para sala, quarto, cozinha, lavabo e banheiro. Cortinas para quarto e sala (janela e parede toda).",
    price: 599.9,
    oldPrice: 799.9,
    rating: 5,
    images: galleryOrdered("tapetes-cortinas", [6, 1, 2, 3, 4, 5, 7]),
    image: galleryOrdered("tapetes-cortinas", [6, 1, 2, 3, 4, 5, 7])[0],
  },
  {
    id: 13,
    slug: "aromas",
    name: "Kit Aromas Dubai Enxovais",
    category: "Aromas",
    subcategory: "Difusores e Aromatizadores",
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

/** Um produto é "oferta" quando já tem preço promocional real cadastrado (oldPrice > price). Nada inventado. */
export function isOffer(product: Product) {
  return typeof product.oldPrice === "number" && product.oldPrice > product.price;
}

export const OFFER_PRODUCTS: Product[] = PRODUCTS.filter(isOffer);

/** Subcategorias reais existentes dentro de uma categoria, na ordem em que aparecem no catálogo. */
export function getSubcategories(category: ProductCategory): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const p of PRODUCTS) {
    if (p.category === category && !seen.has(p.subcategory)) {
      seen.add(p.subcategory);
      result.push(p.subcategory);
    }
  }
  return result;
}
