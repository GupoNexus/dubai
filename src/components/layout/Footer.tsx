import { brandConfig } from "@/data/brandConfig";
import { Link } from "@tanstack/react-router";
import { MERCADO_PAGO_INTEGRATED } from "@/lib/checkout";
import {
  MessageCircle,
  MapPin,
  ChevronRight,
  CreditCard,
  ShieldCheck,
  LockKeyhole,
  BadgeCheck,
  Share2 as InstagramIcon,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const serviceButtons = [
    { label: "WhatsApp Taquara", href: `https://wa.me/${brandConfig.stores[0].whatsapp}`, icon: MessageCircle },
    { label: "WhatsApp Botafogo", href: `https://wa.me/${brandConfig.stores[1].whatsapp}`, icon: MessageCircle },
    { label: "@dubaienxovaisoficial", href: "https://www.instagram.com/dubaienxovaisoficial/", icon: InstagramIcon },
    { label: "Nossas Lojas", href: "/links", icon: Store },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <img
              src="/brand/logo.jpg"
              alt={brandConfig.name}
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
            <p className="text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
              Especializada em cama, mesa, banho, decoração e artigos para casa. Transformando seu
              ambiente com sofisticação, conforto e qualidade.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/dubaienxovaisoficial/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Dubai Enxovais"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Compre</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {["Cama", "Banho", "Mesa", "Decoração", "Aromas"].map((item) => <li key={item}><Link to="/catalogo" search={{ categoria: item }} className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />{item}</Link></li>)}
              <li><Link to="/catalogo" search={{ oferta: "1" }} className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />Ofertas</Link></li>
              <li><Link to="/guia" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />Guia Dubai</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Atendimento</h3>
            <div className="space-y-2">
              {serviceButtons.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex items-center gap-3 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-xs font-semibold text-white hover:bg-white hover:text-primary hover:-translate-y-0.5 transition-all">
                  <Icon className="w-4 h-4 shrink-0" /><span>{label}</span><ChevronRight className="w-3 h-3 ml-auto" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Ajuda</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {[{ label: "Entrega e retirada", hash: "entrega" }, { label: "Trocas e devoluções", hash: "trocas" }, { label: "Política de Privacidade", hash: "privacidade" }, { label: "Termos de Uso", hash: "termos" }].map((item) => <li key={item.hash}><a href={`/politicas#${item.hash}`} className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />{item.label}</a></li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-9 grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4"><CreditCard className="w-4 h-4 text-white" /><h3 className="text-xs font-bold uppercase tracking-widest text-white">Formas de pagamento</h3></div>
            {MERCADO_PAGO_INTEGRATED ? <div className="flex flex-wrap gap-2" aria-label="PIX e principais bandeiras de cartão">
              <span className="h-9 px-4 rounded-lg bg-white text-[#00a884] flex items-center font-black text-xs tracking-wider">◆ PIX</span>
              <span className="h-9 px-4 rounded-lg bg-white text-[#1434cb] flex items-center font-black italic text-sm">VISA</span>
              <span className="h-9 px-3 rounded-lg bg-white text-slate-800 flex items-center gap-1.5 font-bold text-[10px]"><span className="flex"><i className="w-5 h-5 rounded-full bg-[#eb001b] block" /><i className="w-5 h-5 rounded-full bg-[#f79e1b] block -ml-2.5 opacity-90" /></span><span className="text-slate-800">mastercard</span></span>
              <span className="h-9 px-4 rounded-lg bg-white text-[#00a4e4] flex items-center font-black text-xs">ELO</span>
              <span className="h-9 px-4 rounded-lg bg-[#006fcf] text-white flex items-center font-black text-[10px]">AMERICAN EXPRESS</span>
              <span className="h-9 px-4 rounded-lg bg-white text-[#b71c1c] flex items-center font-black italic text-xs">Hipercard</span>
            </div> : <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3"><p className="text-xs font-semibold text-white">Pagamento online em preparação</p><p className="text-[10px] text-white/60 mt-1">PIX e cartões serão exibidos após a conexão segura com o Mercado Pago.</p></div>}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4"><ShieldCheck className="w-4 h-4 text-white" /><h3 className="text-xs font-bold uppercase tracking-widest text-white">Compre com segurança</h3></div>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="relative overflow-hidden rounded-xl bg-white text-slate-800 border border-emerald-200 px-3 py-4 shadow-sm flex flex-col items-center text-center">
                <span className="absolute top-0 inset-x-0 h-1 bg-emerald-500" /><span className="w-11 h-11 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center mb-2"><LockKeyhole className="w-5 h-5 text-emerald-600" /></span><strong className="text-[10px] uppercase tracking-wider text-slate-800">Ambiente protegido</strong><small className="text-[9px] text-slate-500 mt-1">Navegação segura</small>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-white text-slate-800 border border-emerald-200 px-3 py-4 shadow-sm flex flex-col items-center text-center">
                <span className="absolute top-0 inset-x-0 h-1 bg-emerald-500" /><span className="w-11 h-11 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center mb-2"><ShieldCheck className="w-5 h-5 text-emerald-600" /></span><strong className="text-[10px] uppercase tracking-wider text-slate-800">Compra segura</strong><small className="text-[9px] text-slate-500 mt-1">Atendimento confiável</small>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-white text-slate-800 border border-emerald-200 px-3 py-4 shadow-sm flex flex-col items-center text-center">
                <span className="absolute top-0 inset-x-0 h-1 bg-emerald-500" /><span className="w-11 h-11 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center mb-2"><BadgeCheck className="w-5 h-5 text-emerald-600" /></span><strong className="text-[10px] uppercase tracking-wider text-slate-800">Dados protegidos</strong><small className="text-[9px] text-slate-500 mt-1">Privacidade respeitada</small>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground/50">
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
