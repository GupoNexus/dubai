import { brandConfig } from "@/data/brandConfig";
import {
  MessageCircle,
  MapPin,
  Mail,
  ChevronRight,
  Share2 as InstagramIcon,
  Globe as FacebookIcon,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <img
              src="/brand/logo.jpg"
              alt={brandConfig.name}
              className="h-20 sm:h-24 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
              Especializada em cama, mesa, banho, decoração e artigos para casa. Transformando seu
              ambiente com sofisticação, conforto e qualidade.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Compre</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {[
                "Cama",
                "Banho",
                "Mesa",
                "Mesa Posta",
                "Decoração",
                "Cortinas",
                "Cozinha",
                "Ofertas",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Atendimento</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4" /> WhatsApp Taquara
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4" /> WhatsApp Botafogo
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon className="w-4 h-4" /> @dubaienxovaisoficial
              </li>
              <li className="flex items-center gap-3">
                <Store className="w-4 h-4" /> Nossas Lojas
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Ajuda</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {[
                "Entrega",
                "Retirada",
                "Trocas",
                "Devoluções",
                "Política de Privacidade",
                "Termos de Uso",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground/50">
          <p>
            © {currentYear} {brandConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <span>Desenvolvido com sofisticação</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Store({ className }: { className?: string }) {
  return <MapPin className={className} />;
}
