import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ProductCard } from "@/components/catalog/ProductCard";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  getSubcategories,
  isOffer,
  type ProductCategory,
} from "@/data/products";

const searchSchema = z.object({
  categoria: z.string().optional(),
  subcategoria: z.string().optional(),
  oferta: z.string().optional(),
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
  const { categoria, subcategoria, oferta } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [active, setActive] = useState<"Todos" | ProductCategory>(
    (FILTERS.find((f) => f === categoria) as "Todos" | ProductCategory) || "Todos",
  );
  const [activeSub, setActiveSub] = useState<string | null>(subcategoria ?? null);
  const showOffers = oferta === "1";

  // Keep local state in sync if the category changes via an external link (mega menu, etc.)
  useEffect(() => {
    setActive((FILTERS.find((f) => f === categoria) as "Todos" | ProductCategory) || "Todos");
    setActiveSub(subcategoria ?? null);
  }, [categoria, subcategoria]);

  const subcategories = active !== "Todos" ? getSubcategories(active) : [];

  let filtered = active === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);
  if (activeSub) filtered = filtered.filter((p) => p.subcategory === activeSub);
  if (showOffers) filtered = filtered.filter(isOffer);

  const handleFilter = (cat: "Todos" | ProductCategory) => {
    setActive(cat);
    setActiveSub(null);
    navigate({ search: cat === "Todos" ? {} : { categoria: cat } });
  };

  const handleSubFilter = (sub: string | null) => {
    setActiveSub(sub);
    navigate({
      search: {
        ...(active !== "Todos" ? { categoria: active } : {}),
        ...(sub ? { subcategoria: sub } : {}),
      },
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-3">
              {showOffers ? "Ofertas Dubai Enxovais" : "Catálogo Completo"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {showOffers
                ? "Produtos com preço promocional, direto do nosso catálogo."
                : "Cama, mesa, banho, decoração e aromas com a sofisticação Dubai Enxovais. Escolha uma categoria abaixo."}
            </p>
          </div>

          {!showOffers && (
            <>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
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

              {subcategories.length > 1 && (
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                  <button
                    onClick={() => handleSubFilter(null)}
                    className={`px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-colors border ${
                      !activeSub
                        ? "bg-secondary text-primary border-primary/30"
                        : "bg-white text-muted-foreground border-border hover:border-primary/30"
                    }`}
                  >
                    Todas as subcategorias
                  </button>
                  {subcategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => handleSubFilter(sub)}
                      className={`px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-colors border ${
                        activeSub === sub
                          ? "bg-secondary text-primary border-primary/30"
                          : "bg-white text-muted-foreground border-border hover:border-primary/30"
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
              {subcategories.length <= 1 && <div className="mb-6" />}
            </>
          )}
          {showOffers && <div className="mb-10" />}

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
