import { brandConfig } from "@/data/brandConfig";
import { Star } from "lucide-react";

export function CustomerReviews() {
  const googleProfile = brandConfig.stores[0].mapsLink;
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary">O que dizem nossos clientes</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold text-primary">{brandConfig.reviews.rating.toFixed(1)}</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-muted-foreground font-medium">({brandConfig.reviews.count.toLocaleString()} avaliações no Google)</span>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-secondary/10 p-8 text-center"><p className="text-primary font-semibold text-lg">A experiência de mais de mil clientes está registrada no perfil público da Dubai Enxovais no Google.</p><p className="text-sm text-muted-foreground mt-2">Consulte as avaliações, fotos e comentários diretamente na fonte.</p></div>
        
        <div className="text-center mt-12">
          <a href={googleProfile} target="_blank" rel="noreferrer" className="inline-block bg-primary text-white px-10 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg">
            Ver todas as avaliações
          </a>
        </div>
      </div>
    </section>
  );
}
