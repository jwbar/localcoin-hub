import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CryptoAdvantages from "@/components/CryptoAdvantages";
import Benefits from "@/components/Benefits";
import UseCases from "@/components/UseCases";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <CryptoAdvantages />
      <UseCases />
      <ContactForm />
    </div>
  );
};

export default Index;
