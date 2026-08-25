import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/utils";
import { SHIPPING_FEE, FREE_SHIPPING_FROM } from "@/lib/checkout";
import { brandConfig } from "@/data/brandConfig";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Finalizar Compra | Dubai Enxovais" },
      {
        name: "description",
        content:
          "Finalize seu pedido Dubai Enxovais e conclua a compra direto pelo WhatsApp com nossa equipe.",
      },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const shipping = subtotal >= FREE_SHIPPING_FROM || subtotal === 0 ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const [store, setStore] = useState(brandConfig.stores[0]);

  const orderLines = items
    .map((i) => `• ${i.quantity}x ${i.name} — ${formatCurrency(i.price * i.quantity)}`)
    .join("\n");
  const message =
    `Olá! Quero finalizar meu pedido na Dubai Enxovais:\n\n${orderLines}\n\n` +
    `Frete: ${shipping === 0 ? "Grátis" : formatCurrency(shipping)}\n` +
    `Total: ${formatCurrency(total)}`;
  const whatsappHref = `https://wa.me/${store?.whatsapp || ""}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-2xl">
        <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-8">Finalizar Compra</h1>

        {items.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <p className="text-muted-foreground">Seu carrinho está vazio.</p>
            <Link
              to="/"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Ver produtos
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-border/60 space-y-3">
              <h2 className="font-bold text-primary uppercase text-xs tracking-widest mb-2">
                Resumo do pedido
              </h2>
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.quantity}x {item.name}
                  </span>
                  <span className="font-semibold">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              ))}
              <div className="border-t border-border pt-3 flex justify-between text-sm">
                <span className="text-muted-foreground">Frete</span>
                <span className="font-semibold">
                  {shipping === 0 ? "Grátis" : formatCurrency(shipping)}
                </span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-bold text-primary">Total</span>
                <span className="font-bold text-primary text-lg">{formatCurrency(total)}</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border/60 space-y-4">
              <h2 className="font-bold text-primary uppercase text-xs tracking-widest">
                Escolha a loja para atendimento
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {brandConfig.stores.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => setStore(s)}
                    className={`text-left p-4 rounded-xl border transition-colors ${
                      store?.name === s.name
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    <p className="font-bold text-sm text-primary">Loja {s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.phone}</p>
                  </button>
                ))}
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => clearCart()}
                className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Concluir pelo WhatsApp
              </a>
              <p className="text-[10px] text-muted-foreground text-center">
                Você será direcionado ao WhatsApp da loja escolhida para confirmar pagamento e
                entrega.
              </p>
            </div>

            <Link
              to="/carrinho"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar ao carrinho
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
