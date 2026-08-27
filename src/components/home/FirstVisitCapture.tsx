import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { brandConfig } from "@/data/brandConfig";

export function FirstVisitCapture() {
  const [open, setOpen] = useState(false);
  const [consent, setConsent] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("dubai-first-visit-seen")) return;
    const timer = window.setTimeout(() => setOpen(true), 9000);
    return () => window.clearTimeout(timer);
  }, []);
  const close = () => { localStorage.setItem("dubai-first-visit-seen", "1"); setOpen(false); };
  if (!open) return null;
  const href = `https://wa.me/${brandConfig.stores[0].whatsapp}?text=${encodeURIComponent("Olá! É minha primeira compra na Dubai Enxovais e quero receber atendimento e novidades pelo WhatsApp.")}`;
  return <div className="fixed inset-0 z-[80] bg-black/35 flex items-end sm:items-center justify-center p-3" role="dialog" aria-modal="true" aria-label="Primeira visita"><div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl"><button onClick={close} aria-label="Fechar" className="absolute right-4 top-4 p-2 text-muted-foreground"><X className="w-5 h-5" /></button><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">Bem-vindo à Dubai</p><h2 className="text-2xl font-bold text-primary mt-2">É sua primeira vez por aqui?</h2><p className="text-sm text-muted-foreground mt-3">Fale com nossa equipe para receber atendimento personalizado e conhecer as condições vigentes para sua primeira compra.</p><label className="flex items-start gap-3 mt-5 text-xs text-muted-foreground"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-0.5" />Concordo em iniciar o atendimento e receber comunicações da Dubai Enxovais pelo WhatsApp.</label><a href={consent ? href : undefined} target="_blank" rel="noreferrer" aria-disabled={!consent} onClick={() => consent && close()} className={`mt-5 flex items-center justify-center gap-2 w-full rounded-full py-3 text-xs font-bold uppercase tracking-wider ${consent ? "bg-primary text-white" : "bg-muted text-muted-foreground pointer-events-none"}`}><MessageCircle className="w-4 h-4" />Quero atendimento</a></div></div>;
}
