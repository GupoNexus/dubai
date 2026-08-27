import { useEffect, useState } from "react";
import { Star, Heart, ShoppingCart, Check } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { brandConfig } from "@/data/brandConfig";
import type { Product } from "@/data/products";
import { Link } from "@tanstack/react-router";

export function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("dubai-favorites") || "[]") as number[];
    setFavorite(ids.includes(product.id));
  }, [product.id]);
  const toggleFavorite = () => {
    const ids = JSON.parse(localStorage.getItem("dubai-favorites") || "[]") as number[];
    const next = ids.includes(product.id) ? ids.filter((id) => id !== product.id) : [...ids, product.id];
    localStorage.setItem("dubai-favorites", JSON.stringify(next));
    setFavorite(next.includes(product.id));
  };

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const whatsappHref = `https://wa.me/${brandConfig.stores[0]?.whatsapp || ""}?text=${encodeURIComponent(
    `Olá! Tenho interesse no produto "${product.name}" (${formatCurrency(product.price)}) que vi no site da Dubai Enxovais.`,
  )}`;

  return (
    <div className="group flex flex-col space-y-3">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/30">
        <Link to="/produto/$slug" params={{ slug: product.slug }} className="block w-full h-full"><img src={product.image} alt={product.name} loading="lazy" width="600" height="750" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></Link>

        <button
          onClick={toggleFavorite}
          aria-label={favorite ? "Remover dos favoritos" : "Favoritar"}
          className={`absolute top-3 right-3 p-2 bg-white/90 rounded-full transition-colors z-10 ${favorite ? "text-rose-600" : "text-primary"}`}
        >
          <Heart className={`w-5 h-5 ${favorite ? "fill-current" : ""}`} />
        </button>
        {product.oldPrice && (
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-[10px] font-bold rounded-full z-10">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </div>
        )}

      </div>

      <div className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60">
          {product.category}
        </span>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        <Link to="/produto/$slug" params={{ slug: product.slug }}><h3 className="font-bold text-primary leading-snug hover:underline">{product.name}</h3></Link>
        <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-primary">{formatCurrency(product.price)}</span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatCurrency(product.oldPrice)}
            </span>
          )}
        </div>
        <p className="text-[10px] text-muted-foreground font-medium">Consulte as condições de pagamento.</p>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2">
        <button
          onClick={handleAddToCart}
          className="bg-secondary text-primary py-2 px-4 rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-all uppercase tracking-wider flex items-center justify-center gap-2"
        >
          {added ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
          {added ? "Adicionado" : "Carrinho"}
        </button>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white min-h-9 py-2 px-2 sm:px-4 rounded-full text-[10px] sm:text-xs font-bold hover:bg-primary/90 transition-all uppercase tracking-wider text-center flex items-center justify-center leading-none"
        >
          Comprar
        </a>
      </div>
    </div>
  );
}
