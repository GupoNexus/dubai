import { brandConfig } from "@/data/brandConfig";
import { Search, User, Heart, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, type ProductCategory } from "@/data/products";

const NAV_ITEMS: { label: string; to: string; categoria?: ProductCategory }[] = [
  { label: "Início", to: "/" },
  { label: "Cama", to: "/catalogo", categoria: "Cama" },
  { label: "Banho", to: "/catalogo", categoria: "Banho" },
  { label: "Mesa", to: "/catalogo", categoria: "Mesa" },
  { label: "Decoração", to: "/catalogo", categoria: "Decoração" },
  { label: "Aromas", to: "/catalogo", categoria: "Aromas" },
  { label: "Catálogo Completo", to: "/catalogo" },
  { label: "Nossas Lojas", to: "/links" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="w-full bg-white border-b border-border sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-4">
        COMPRE ONLINE | RETIRE NA LOJA | ENTREGA | ATENDIMENTO PELO WHATSAPP
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <Link to="/" className="flex-shrink-0">
          <img
            src="/brand/logo.jpg"
            alt={brandConfig.name}
            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex flex-1 max-w-xl mx-8 relative">
          <input
            type="text"
            placeholder="O que você está procurando?"
            className="w-full bg-secondary/50 border-none rounded-full py-2 px-6 pr-12 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-primary hover:bg-secondary/50 rounded-full transition-colors hidden sm:block">
            <User className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="p-2 text-primary hover:bg-secondary/50 rounded-full transition-colors hidden sm:block">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <Link
            to="/carrinho"
            className="p-2 text-primary hover:bg-secondary/50 rounded-full transition-colors relative"
          >
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {count}
            </span>
          </Link>
        </div>
      </div>

      {/* Categories Menu */}
      <nav className="hidden lg:block border-t border-border/50">
        <ul className="container mx-auto flex justify-center items-center gap-8 py-3 text-[11px] font-bold uppercase tracking-wider text-primary">
          {NAV_ITEMS.map((item) => {
            const categoryProducts = item.categoria
              ? PRODUCTS.filter((p) => p.category === item.categoria)
              : [];
            const featured = categoryProducts[0];

            return (
              <li key={item.label} className="relative group">
                <Link
                  to={item.to}
                  search={item.categoria ? { categoria: item.categoria } : undefined}
                  className="flex items-center gap-1 hover:text-primary/70 transition-colors border-b-2 border-transparent group-hover:border-primary/20 pb-1"
                >
                  {item.label}
                  {featured && <ChevronDown className="w-3 h-3 opacity-50" />}
                </Link>

                {featured && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl border border-border p-6 grid grid-cols-[minmax(180px,220px)_200px] gap-6 w-max max-w-[90vw]">
                      <div className="space-y-1">
                        <p className="text-[10px] text-muted-foreground normal-case tracking-normal font-semibold mb-2">
                          Subcategorias
                        </p>
                        {categoryProducts.map((product) => (
                          <Link
                            key={product.slug}
                            to="/catalogo"
                            search={{ categoria: item.categoria! }}
                            className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-secondary/40 transition-colors normal-case tracking-normal font-medium text-xs text-foreground"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-9 h-9 rounded-md object-cover shrink-0"
                            />
                            <span className="line-clamp-2">{product.name}</span>
                          </Link>
                        ))}
                      </div>

                      <Link
                        to="/catalogo"
                        search={{ categoria: item.categoria! }}
                        className="relative rounded-xl overflow-hidden group/img block h-full min-h-[180px]"
                      >
                        <img
                          src={featured.image}
                          alt={featured.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-1">
                            Destaque
                          </p>
                          <p className="text-sm font-bold leading-tight normal-case tracking-normal">
                            {item.label}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Search - Visible only on mobile */}
      <div className="lg:hidden px-4 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="O que você está procurando?"
            className="w-full bg-secondary/50 border-none rounded-full py-2 px-6 pr-12 text-sm"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-border/50 bg-white">
          <ul className="flex flex-col py-2 text-xs font-bold uppercase tracking-wider text-primary">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  search={item.categoria ? { categoria: item.categoria } : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-3 hover:bg-secondary/40 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
