import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-localcoin.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              The <span className="text-gold">WeChat for Local Economies</span>{" "}
              – Deploy at Your Event or City
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              A comprehensive "everything app" platform that unifies payments, messaging, and merchant discovery. 
              Deploy this ready-to-go Web3 ecosystem that breaks language barriers and creates seamless local commerce experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gold" size="lg" className="animate-glow">
                Request Demo
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Download Code
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src={heroImage}
                alt="LocalCoin Platform Visualization"
                className="w-full h-auto rounded-lg shadow-glow"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-success/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;