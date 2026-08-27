import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const ARTICLES = [
  { slug: "queen-ou-king", title: "Queen ou King: qual escolher?", text: "Entenda as medidas e descubra qual tamanho combina com seu quarto." },
  { slug: "quantidade-de-fios", title: "O que significa a quantidade de fios?", text: "Um guia simples sobre toque, conforto e construção dos tecidos." },
  { slug: "como-escolher-toalhas", title: "Como escolher toalhas de banho", text: "Absorção, gramatura e maciez para fazer uma escolha melhor." },
];

export function DubaiGuide() {
  return <section className="py-16 bg-white"><div className="container mx-auto px-4"><div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"><div><p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/60">Conteúdo para sua casa</p><h2 className="text-2xl lg:text-3xl font-bold text-primary mt-2">Guia Dubai</h2></div><Link to="/guia" className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">Ver todos <ArrowRight className="w-4 h-4" /></Link></div><div className="grid md:grid-cols-3 gap-5">{ARTICLES.map((article, index) => <Link key={article.slug} to="/guia/$slug" params={{ slug: article.slug }} className="group rounded-2xl border border-border p-6 hover:shadow-lg transition-all"><span className="text-4xl font-bold text-primary/10">0{index + 1}</span><h3 className="font-bold text-primary text-lg mt-4">{article.title}</h3><p className="text-sm text-muted-foreground mt-2 leading-relaxed">{article.text}</p><span className="inline-flex items-center gap-2 mt-5 text-[11px] font-bold uppercase tracking-wider text-primary">Ler guia <ArrowRight className="w-3 h-3" /></span></Link>)}</div></div></section>;
}
