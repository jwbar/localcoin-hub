import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-full"></div>
            <span className="text-xl font-bitter font-bold text-foreground">LocalCoin</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#contact" className="inline-block">
              <Button variant="default" className="font-open-sans">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;