import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";

const BANNERS = [
  { id: 0, title: "Seu lar merece mais conforto.", subtitle: "Enxovais selecionados para transformar sua casa em um espaço ainda mais sofisticado e aconchegante.", cta: "COMPRAR AGORA", image: "/banners/banner-quarto.jpg", search: {} },
  { id: 1, title: "Seu quarto merece esse cuidado.", subtitle: "Conforto, sofisticação e detalhes que transformam.", cta: "EXPLORAR CAMA", image: "/banners/banner-cama.jpg", search: { categoria: "Cama" } },
  { id: 2, title: "Mesa posta com requinte.", subtitle: "Transforme cada refeição em um momento especial.", cta: "VER COLEÇÃO", image: "/banners/banner-mesa.jpg", search: { categoria: "Mesa" } },
  { id: 3, title: "Toques de suavidade.", subtitle: "A qualidade que sua pele e sua casa merecem.", cta: "CONHECER BANHO", image: "/banners/banner-banho.jpg", search: { categoria: "Banho" } },
  { id: 4, title: "Conforto em cada detalhe.", subtitle: "Sinta a diferença de um enxoval selecionado.", cta: "VER PRODUTOS", image: "/banners/banner-conforto.jpg", search: {} },
  { id: 5, title: "Enxoval que traduz elegância.", subtitle: "Texturas e cores pensadas para valorizar sua casa.", cta: "COMPRAR AGORA", image: "/banners/banner-enxoval.jpg", search: { categoria: "Cama" } },
];

export function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  useEffect(() => { if (!emblaApi) return; const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap()); onSelect(); emblaApi.on("select", onSelect); emblaApi.on("reInit", onSelect); return () => { emblaApi.off("select", onSelect); emblaApi.off("reInit", onSelect); }; }, [emblaApi]);

  return <section className="relative w-full group" aria-label="Destaques Dubai Enxovais"><div className="overflow-hidden" ref={emblaRef}><div className="flex">{BANNERS.map((banner, index) => <article key={banner.id} className="relative flex-[0_0_100%] min-w-0 min-h-[470px] lg:min-h-[650px] overflow-hidden"><img src={banner.image} alt={banner.title} loading={index === 0 ? "eager" : "lazy"} className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent flex items-center"><div className="container mx-auto px-6 lg:px-12"><div className="max-w-xl text-white"><p className="text-[11px] font-bold uppercase tracking-[0.35em] text-white/75 mb-4">Dubai Enxovais</p><h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">{banner.title}</h1><p className="text-base lg:text-xl text-white/90 mt-5 leading-relaxed">{banner.subtitle}</p><Link to="/catalogo" search={banner.search} className="inline-flex mt-8 bg-primary text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest">{banner.cta}</Link></div></div></div></article>)}</div></div><button type="button" onClick={scrollPrev} aria-label="Banner anterior" className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-black/30 text-white backdrop-blur-sm sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"><ChevronLeft className="w-6 h-6" /></button><button type="button" onClick={scrollNext} aria-label="Próximo banner" className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-black/30 text-white backdrop-blur-sm sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"><ChevronRight className="w-6 h-6" /></button><div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">{BANNERS.map((banner, index) => <button key={banner.id} type="button" onClick={() => scrollTo(index)} aria-label={`Ir para o banner ${index + 1}`} className={`h-2 rounded-full transition-all ${index === selectedIndex ? "w-6 bg-white" : "w-2 bg-white/55"}`} />)}</div></section>;
}
