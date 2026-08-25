import { brandConfig } from "@/data/brandConfig";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    author: "Maria S.",
    content: "Produtos de ótima qualidade!",
  },
  {
    author: "João P.",
    content: "Loja espetacular.",
  },
  {
    author: "Ana L.",
    content: "Ambiente acolhedor, funcionários prestativos e atenciosos.",
  },
];

export function CustomerReviews() {
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {REVIEWS.map((review, i) => (
            <div key={i} className="p-8 border border-border rounded-3xl space-y-4 hover:shadow-xl transition-shadow bg-secondary/10">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-primary font-medium italic">"{review.content}"</p>
              <p className="text-sm font-bold uppercase tracking-widest text-primary/70">— {review.author}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-10 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg">
            Ver todas as avaliações
          </button>
        </div>
      </div>
    </section>
  );
}
