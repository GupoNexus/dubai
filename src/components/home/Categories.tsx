import { Link } from "@tanstack/react-router";

const CATEGORIES = [
  { name: "Cama", image: "/categories/cat-cama.jpg", categoria: "Cama" },
  { name: "Tapetes", image: "/categories/cat-tapetes.jpg", categoria: "Decoração" },
  { name: "Mantas", image: "/categories/cat-mantas.jpg", categoria: "Cama" },
  { name: "Aromatizantes", image: "/categories/cat-aromatizantes.jpg", categoria: "Aromas" },
];

export function Categories() {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-primary">
        Encontre o que procura
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.name}
            to="/catalogo"
            search={cat.categoria ? { categoria: cat.categoria } : undefined}
            className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer block"
          >
            <img
              src={cat.image}
              alt={`Categoria ${cat.name} - Dubai Enxovais`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white font-bold text-lg">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
