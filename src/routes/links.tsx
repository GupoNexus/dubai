import { brandConfig } from "@/data/brandConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Share2 as InstagramIcon, MapPin, Navigation } from "lucide-react";

export const Route = createFileRoute("/links")({
  component: LinksPage,
});

function LinksPage() {
  return (
    <div className="min-h-screen bg-secondary/20 font-sans flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center max-w-xl">
        <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl font-bold text-primary uppercase tracking-tighter italic">
                Fale com a Dubai Enxovais
            </h1>
            <p className="text-muted-foreground font-medium uppercase text-xs tracking-widest">
                Central de Atendimento e Redes Sociais
            </p>
        </div>

        <div className="w-full space-y-4">
            <a 
                href={`https://wa.me/${brandConfig.stores[0]?.whatsapp || ""}?text=Olá! Vim pelo site da Dubai Enxovais e gostaria de atendimento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-white p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl transition-all group"
            >
                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-primary">WhatsApp — Loja Taquara</h3>
                        <p className="text-xs text-muted-foreground">{brandConfig.stores[0]?.phone}</p>
                    </div>
                </div>
                <Navigation className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a 
                href={`https://wa.me/${brandConfig.stores[1]?.whatsapp || ""}?text=Olá! Vim pelo site da Dubai Enxovais e gostaria de atendimento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-white p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl transition-all group"
            >
                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-primary">WhatsApp — Loja Botafogo</h3>
                        <p className="text-xs text-muted-foreground">{brandConfig.stores[1]?.phone || "Atendimento Digital"}</p>
                    </div>
                </div>
                <Navigation className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a 
                href="#"
                className="flex items-center justify-between w-full bg-white p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl transition-all group"
            >
                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <InstagramIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-primary">Instagram</h3>
                        <p className="text-xs text-muted-foreground">@dubaienxovaisoficial</p>
                    </div>
                </div>
                <Navigation className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a 
                href={brandConfig.stores[0]?.mapsLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-white p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl transition-all group"
            >
                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-primary">Como chegar — Loja Taquara</h3>
                        <p className="text-xs text-muted-foreground">Ver no Google Maps</p>
                    </div>
                </div>
                <Navigation className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a 
                href={brandConfig.stores[1]?.mapsLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-white p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl transition-all group"
            >
                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-primary">Como chegar — Loja Botafogo</h3>
                        <p className="text-xs text-muted-foreground">Ver no Google Maps</p>
                    </div>
                </div>
                <Navigation className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
