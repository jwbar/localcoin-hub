import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-localcoin.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bitter font-bold text-primary-foreground mb-6 animate-fade-in">
              <span className="text-gold">SaaS Platform</span> for Local Events & Communities
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed font-open-sans">
              Deploy our whitelabel "everything app" at your festival, campus, or community event. 
              Features AI-driven merchant discovery, multilingual communication, and seamless crypto payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact">
                <Button variant="gold" size="lg" className="animate-glow font-open-sans">
                  Request Demo
                </Button>
              </a>
              <a href="#use-cases">
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-open-sans">
                  See Use Cases
                </Button>
              </a>
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