import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CryptoAdvantages from "@/components/CryptoAdvantages";
import Benefits from "@/components/Benefits";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <CryptoAdvantages />
      <Benefits />
    </div>
  );
};

export default Index;
