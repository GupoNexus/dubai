import { brandConfig } from "@/data/brandConfig";
import { ShieldCheck, MessageCircle, Store, Truck, MapPin, Sparkles } from "lucide-react";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "COMPRA SEGURA",
    description: "Compre com segurança",
  },
  {
    icon: MessageCircle,
    title: "WHATSAPP",
    description: "Atendimento personalizado",
  },
  {
    icon: Store,
    title: "RETIRE NA LOJA",
    description: "Compre online e retire",
  },
  {
    icon: Truck,
    title: "ENTREGA",
    description: "Receba em seu endereço",
  },
  {
    icon: MapPin,
    title: "LOJAS FÍSICAS",
    description: "Visite uma de nossas lojas",
  },
  {
    icon: Sparkles,
    title: "QUALIDADE PREMIUM",
    description: "Produtos selecionados com excelência",
  },
];

export function Benefits() {
  return (
    <section className="bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center text-center space-y-3 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <benefit.icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary">
                  {benefit.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
