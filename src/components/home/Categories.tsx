import { Link } from "@tanstack/react-router";

const CATEGORIES = [
  { name: "Cama", text: "Conforto para noites inesquecíveis", image: "/categories/cat-cama.jpg", categoria: "Cama" },
  { name: "Banho", text: "Maciez e absorção para o seu ritual", image: "/products/toalhas-banho/01.jpg", categoria: "Banho" },
  { name: "Mesa", text: "Detalhes que recebem com elegância", image: "/products/mesa-posta/02.jpg", categoria: "Mesa" },
  { name: "Decoração", text: "Personalidade em cada ambiente", image: "/categories/cat-tapetes.jpg", categoria: "Decoração" },
  { name: "Aromas", text: "Fragrâncias que acolhem", image: "/categories/cat-aromatizantes.jpg", categoria: "Aromas" },
];

export function Categories() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12"><h2 className="text-2xl lg:text-3xl font-bold text-primary">Compre por categoria</h2><p className="text-sm text-muted-foreground mt-2">Encontre tudo para transformar cada ambiente da sua casa.</p></div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.name}
            to="/catalogo"
            search={cat.categoria ? { categoria: cat.categoria } : undefined}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer block"
          >
            <img
              src={cat.image}
              alt={`Categoria ${cat.name} - Dubai Enxovais`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end p-4">
              <div><h3 className="text-white font-bold text-lg">{cat.name}</h3><p className="text-white/80 text-[11px] mt-1 hidden sm:block">{cat.text}</p><span className="inline-block text-white text-[10px] font-bold uppercase tracking-widest mt-3 border-b border-white/70">Explorar</span></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
