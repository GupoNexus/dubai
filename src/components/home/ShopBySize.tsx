import { Link } from "@tanstack/react-router";
import { BedDouble } from "lucide-react";
import { PRODUCTS } from "@/data/products";

const ORDER = ["Solteiro", "Casal", "Queen", "King", "Super King"];

export function ShopBySize() {
  const sizes = ORDER.filter((size) => PRODUCTS.some((product) => product.sizes?.includes(size)));
  if (!sizes.length) return null;
  return (
    <section className="py-16 bg-secondary/25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10"><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/60 mb-2">Encontre o encaixe perfeito</p><h2 className="text-2xl lg:text-3xl font-bold text-primary">Compre por tamanho</h2></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {sizes.map((size) => <Link key={size} to="/catalogo" search={{ categoria: "Cama", tamanho: size }} className="group bg-white border border-border rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all"><BedDouble className="w-7 h-7 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" /><h3 className="font-bold text-primary uppercase tracking-wider">{size}</h3><span className="text-[10px] text-muted-foreground uppercase tracking-widest">Explorar</span></Link>)}
        </div>
      </div>
    </section>
  );
}
