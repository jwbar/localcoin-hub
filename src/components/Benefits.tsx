import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
    {
      title: "Quick Deployment",
      description: "Deploy a complete Web3 payment ecosystem in days, not months. Perfect for festivals, events, and municipal implementations.",
      stat: "48h",
      statLabel: "Setup Time"
    },
    {
      title: "Proven ROI",
      description: "Reduce transaction costs by up to 80% while increasing local economic activity and tourism engagement through seamless crypto payments.",
      stat: "80%",
      statLabel: "Cost Reduction"
    },
    {
      title: "White-Label Ready",
      description: "Fully customizable platform that can be branded for your city, event, or organization. Complete source code included.",
      stat: "100%",
      statLabel: "Customizable"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Cities & Events Choose LocalCoin
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join forward-thinking municipalities, festival organizers, and investors who are 
            already implementing LocalCoin to revolutionize their local economies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-gradient-card border border-border hover:shadow-soft transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {benefit.stat}
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                {benefit.statLabel}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-12 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Deploy LocalCoin?
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get started with our enterprise-ready platform. Complete source code, 
            deployment guides, and ongoing support included for qualified partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              Contact Sales
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;