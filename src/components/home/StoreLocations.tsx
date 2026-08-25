import { brandConfig } from "@/data/brandConfig";
import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";

export function StoreLocations() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-16 text-primary uppercase tracking-tighter">
          Visite uma de nossas lojas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {brandConfig.stores.map((store) => (
            <div key={store.name} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-border flex flex-col group">
              <div className="p-8 space-y-6 flex-1">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary uppercase tracking-tight">
                    Dubai Enxovais — {store.name}
                  </h3>
                  {store.name === "Botafogo" && (
                      <p className="text-xs font-bold text-primary/60 uppercase tracking-widest">Botafogo Praia Shopping</p>
                  )}
                </div>
                
                <div className="space-y-4 text-sm font-medium text-muted-foreground">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <p>{store.address}</p>
                  </div>
                  {store.phone && (
                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <p>{store.phone}</p>
                    </div>
                  )}
                  <div className="flex gap-3">
                    <MessageCircle className="w-5 h-5 text-primary shrink-0" />
                    <p>WhatsApp: {store.phone || store.whatsapp}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6">
                  <a 
                    href={store.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-secondary text-primary py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
                  >
                    <Navigation className="w-4 h-4" /> Como chegar
                  </a>
                  <a 
                    href={`https://wa.me/${store.whatsapp}?text=Olá! Vim pelo site da Dubai Enxovais e gostaria de atendimento.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" /> Comprar pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-3xl p-8 shadow-inner border border-border min-h-[400px] flex items-center justify-center">
             <div className="text-center space-y-4">
                 <MapPin className="w-12 h-12 text-primary mx-auto opacity-20" />
                 <h3 className="text-xl font-bold text-primary/40 uppercase tracking-widest">Encontre a Dubai mais próxima</h3>
                 <p className="text-muted-foreground text-sm">Integração com Google Maps em breve</p>
             </div>
        </div>
      </div>
    </section>
  );
}
