import { createFileRoute } from "@tanstack/react-router";
import { HeroBanner } from "@/components/home/HeroBanner";
import { GoldRibbon } from "@/components/home/GoldRibbon";
import { Benefits } from "@/components/home/Benefits";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyDubai } from "@/components/home/WhyDubai";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { StoreLocations } from "@/components/home/StoreLocations";
import { Header } from "@/components/layout/Header";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Dubai Enxovais | Home",
    meta: [
      { name: "description", content: "A melhor loja de cama, mesa e banho do Rio de Janeiro. Confira nossas ofertas premium." },
      { property: "og:title", content: "Dubai Enxovais | Qualidade e Conforto" },
      { property: "og:description", content: "Encontre tudo para deixar sua casa mais elegante e confortável." },
    ]
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <GoldRibbon />
        <HeroBanner />
        <Benefits />
        <Categories />
        <FeaturedProducts />
        <WhyDubai />
        <CustomerReviews />
        <StoreLocations />
        <FloatingWhatsApp />
      </main>
      <Footer />
    </div>
  );
}
