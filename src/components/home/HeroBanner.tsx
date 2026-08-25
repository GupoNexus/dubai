import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const BANNERS = [
  {
    id: 5,
    title: "Seu quarto, seu refúgio.",
    subtitle: "Peças exclusivas para um ambiente de puro bem-estar.",
    cta: "VER COLEÇÃO",
    image: "/banners/banner-quarto.jpg",
  },
  {
    id: 1,
    title: "Seu quarto merece esse cuidado.",
    subtitle: "Conforto, sofisticação e detalhes que transformam.",
    cta: "COMPRAR AGORA",
    image: "/banners/banner-cama.jpg",
  },
  {
    id: 2,
    title: "Mesa posta com requinte.",
    subtitle: "Transforme cada refeição em um momento especial.",
    cta: "VER COLEÇÃO",
    image: "/banners/banner-mesa.jpg",
  },
  {
    id: 3,
    title: "Toques de suavidade.",
    subtitle: "A qualidade que sua pele e sua casa merecem.",
    cta: "CONHECER BANHO",
    image: "/banners/banner-banho.jpg",
  },
  {
    id: 4,
    title: "Conforto em cada detalhe.",
    subtitle: "Sinta a diferença de um enxoval premium.",
    cta: "VER PRODUTOS",
    image: "/banners/banner-conforto.jpg",
  },
  {
    id: 6,
    title: "Enxoval que traduz elegância.",
    subtitle: "Texturas e cores pensadas para valorizar sua casa.",
    cta: "COMPRAR AGORA",
    image: "/banners/banner-enxoval.jpg",
  },
];

export function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {BANNERS.map((banner) => (
            <div
              key={banner.id}
              className="relative flex-[0_0_100%] min-w-0 aspect-[16/9] lg:aspect-[1920/650] overflow-hidden"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-start px-8 lg:px-24">
                <div className="max-w-2xl space-y-4 text-white">
                  <h2 className="text-3xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                    {banner.title}
                  </h2>
                  <p className="text-lg lg:text-xl text-white/90 drop-shadow-md">{banner.subtitle}</p>
                  <button className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-xl">
                    {banner.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Banner anterior"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-black/30 sm:bg-white/20 text-white backdrop-blur-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-black/50 sm:hover:bg-white/40 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Próximo banner"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-black/30 sm:bg-white/20 text-white backdrop-blur-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-black/50 sm:hover:bg-white/40 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {BANNERS.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Ir para o banner ${index + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              index === selectedIndex ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
