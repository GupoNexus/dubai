import { brandConfig } from "@/data/brandConfig";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useCart } from "@/context/CartContext";

const NAV_ITEMS: { label: string; to: string; categoria?: string }[] = [
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
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                search={item.categoria ? { categoria: item.categoria } : undefined}
                className="hover:text-primary/70 transition-colors border-b-2 border-transparent hover:border-primary/20 pb-1"
              >
                {item.label}
              </Link>
            </li>
          ))}
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
