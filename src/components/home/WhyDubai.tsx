import { brandConfig } from "@/data/brandConfig";
import { CheckCircle } from "lucide-react";

const HIGHLIGHTS = [
  {
    title: "QUALIDADE",
    text: "Produtos selecionados para sua casa.",
  },
  {
    title: "ATENDIMENTO",
    text: "Uma equipe preparada para ajudar você.",
  },
  {
    title: "EXPERIÊNCIA",
    text: "Uma loja pensada para você encontrar tudo em um só lugar.",
  },
  {
    title: "CONFIANÇA",
    text: "Milhares de clientes já escolheram a Dubai Enxovais.",
  },
];

export function WhyDubai() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 italic">
          "Mais do que enxovais. Uma experiência."
        </h2>
        <p className="text-lg text-muted-foreground mb-16 font-medium">
          Na Dubai Enxovais, você encontra produtos selecionados para transformar sua casa com conforto, qualidade e sofisticação.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="space-y-4">
              <div className="flex justify-center">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
