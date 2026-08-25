import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ProductCard } from "@/components/catalog/ProductCard";
import { PRODUCTS, PRODUCT_CATEGORIES, type ProductCategory } from "@/data/products";

const searchSchema = z.object({
  categoria: z.string().optional(),
});

export const Route = createFileRoute("/catalogo")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Catálogo Completo | Dubai Enxovais" },
      {
        name: "description",
        content:
          "Confira todo o catálogo Dubai Enxovais: cama, banho, mesa, decoração e aromas com a qualidade e o preço que você já conhece.",
      },
      { property: "og:title", content: "Catálogo Completo | Dubai Enxovais" },
      {
        property: "og:description",
        content: "Todos os nossos produtos de cama, mesa, banho e decoração em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CatalogoPage,
});

const FILTERS: ("Todos" | ProductCategory)[] = ["Todos", ...PRODUCT_CATEGORIES];

function CatalogoPage() {
  const { categoria } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [active, setActive] = useState<"Todos" | ProductCategory>(
    (FILTERS.find((f) => f === categoria) as "Todos" | ProductCategory) || "Todos",
  );

  const filtered = active === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  const handleFilter = (cat: "Todos" | ProductCategory) => {
    setActive(cat);
    navigate({ search: cat === "Todos" ? {} : { categoria: cat } });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-3">Catálogo Completo</h1>
            <p className="text-sm text-muted-foreground">
              Cama, mesa, banho, decoração e aromas com a sofisticação Dubai Enxovais. Escolha uma
              categoria abaixo.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors border ${
                  active === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-primary border-border hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">
              Nenhum produto encontrado nessa categoria.
            </p>
          )}
        </div>
        <FloatingWhatsApp />
      </main>
      <Footer />
    </div>
  );
}
