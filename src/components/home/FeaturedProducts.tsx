import { Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/catalog/ProductCard";
import { PRODUCTS } from "@/data/products";

const FEATURED_SLUGS = ["kit-cama-medara", "percal-200-fios", "toalhas-banho", "tapetes-cortinas"];

export function FeaturedProducts() {
  const featured = FEATURED_SLUGS.map((slug) => PRODUCTS.find((p) => p.slug === slug)).filter(
    (p): p is (typeof PRODUCTS)[number] => Boolean(p),
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-primary">
          Destaques Dubai
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/catalogo"
            className="bg-primary text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Ver catálogo completo
          </Link>
        </div>
      </div>
    </section>
  );
}
