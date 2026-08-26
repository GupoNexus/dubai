import { useState, useCallback, useEffect } from "react";
import { Star, Heart, ShoppingCart, Check, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { brandConfig } from "@/data/brandConfig";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

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
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="flex h-full">
            {product.images.map((img, i) => (
              <div key={i} className="relative flex-[0_0_100%] min-w-0 h-full">
                <img
                  src={img}
                  alt={`${product.name}${product.images.length > 1 ? ` - foto ${i + 1}` : ""}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Favoritar"
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-primary hover:bg-white transition-colors z-10"
        >
          <Heart className="w-5 h-5" />
        </button>
        {product.oldPrice && (
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-[10px] font-bold rounded-full z-10">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </div>
        )}

        {product.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Foto anterior"
              className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Próxima foto"
              className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
            {product.images.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === selectedIndex ? "bg-white w-4" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {product.images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                i === selectedIndex ? "border-primary" : "border-transparent opacity-70"
              }`}
            >
              <img
                src={img}
                alt={`${product.name} detalhe ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <div className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60">
          {product.category}
        </span>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        <h3 className="font-bold text-primary leading-snug">{product.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-primary">{formatCurrency(product.price)}</span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatCurrency(product.oldPrice)}
            </span>
          )}
        </div>
        <p className="text-[10px] text-muted-foreground font-medium">
          Até 10x de {formatCurrency(product.price / 10)} sem juros
        </p>
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
          className="bg-primary text-white py-2 px-4 rounded-full text-xs font-bold hover:bg-primary/90 transition-all uppercase tracking-wider text-center"
        >
          Comprar
        </a>
      </div>
    </div>
  );
}
